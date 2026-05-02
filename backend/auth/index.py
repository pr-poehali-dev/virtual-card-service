import json
import os
import hashlib
import secrets
import re
from datetime import datetime, timedelta
import psycopg2

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json'
}

def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    h = hashlib.sha256((salt + password).encode()).hexdigest()
    return f"{salt}${h}"

def verify_password(password: str, password_hash: str) -> bool:
    try:
        salt, h = password_hash.split('$')
        return hashlib.sha256((salt + password).encode()).hexdigest() == h
    except Exception:
        return False

def make_response(status: int, body: dict) -> dict:
    return {
        'statusCode': status,
        'headers': CORS_HEADERS,
        'isBase64Encoded': False,
        'body': json.dumps(body)
    }

def handler(event: dict, context) -> dict:
    '''Авторизация: регистрация, вход, проверка сессии'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'isBase64Encoded': False, 'body': ''}

    dsn = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(dsn)
    conn.autocommit = True
    cur = conn.cursor()

    try:
        params = event.get('queryStringParameters') or {}
        action = params.get('action', '')

        if method == 'GET' and action == 'me':
            headers = event.get('headers') or {}
            token = headers.get('X-Auth-Token') or headers.get('x-auth-token', '')
            if not token:
                return make_response(401, {'error': 'No token'})
            cur.execute(
                "SELECT u.id, u.email, u.telegram_username FROM sessions s "
                "JOIN users u ON u.id = s.user_id "
                f"WHERE s.token = '{token}' AND s.expires_at > NOW() LIMIT 1"
            )
            row = cur.fetchone()
            if not row:
                return make_response(401, {'error': 'Invalid session'})
            return make_response(200, {'user': {'id': row[0], 'email': row[1], 'telegram_username': row[2]}})

        if method == 'POST':
            body = json.loads(event.get('body') or '{}')

            if action == 'register':
                email = (body.get('email') or '').strip().lower()
                password = body.get('password') or ''
                password_confirm = body.get('password_confirm') or ''
                telegram = (body.get('telegram_username') or '').strip().lstrip('@')

                if not re.match(r'^[^@\s]+@[^@\s]+\.[^@\s]+$', email):
                    return make_response(400, {'error': 'Некорректный email'})
                if len(password) < 6:
                    return make_response(400, {'error': 'Пароль должен быть не короче 6 символов'})
                if password != password_confirm:
                    return make_response(400, {'error': 'Пароли не совпадают'})
                if not re.match(r'^[a-zA-Z0-9_]{3,32}$', telegram):
                    return make_response(400, {'error': 'Telegram юзернейм: 3-32 символа, латиница/цифры/_'})

                email_esc = email.replace("'", "''")
                cur.execute(f"SELECT id FROM users WHERE email = '{email_esc}' LIMIT 1")
                if cur.fetchone():
                    return make_response(409, {'error': 'Email уже зарегистрирован'})

                pw_hash = hash_password(password)
                pw_esc = pw_hash.replace("'", "''")
                tg_esc = telegram.replace("'", "''")
                cur.execute(
                    f"INSERT INTO users (email, password_hash, telegram_username) "
                    f"VALUES ('{email_esc}', '{pw_esc}', '{tg_esc}') RETURNING id"
                )
                user_id = cur.fetchone()[0]

                token = secrets.token_urlsafe(32)
                expires_at = (datetime.utcnow() + timedelta(days=30)).strftime('%Y-%m-%d %H:%M:%S')
                cur.execute(
                    f"INSERT INTO sessions (user_id, token, expires_at) "
                    f"VALUES ({user_id}, '{token}', '{expires_at}')"
                )

                return make_response(200, {
                    'token': token,
                    'user': {'id': user_id, 'email': email, 'telegram_username': telegram}
                })

            if action == 'login':
                email = (body.get('email') or '').strip().lower()
                password = body.get('password') or ''
                if not email or not password:
                    return make_response(400, {'error': 'Email и пароль обязательны'})

                email_esc = email.replace("'", "''")
                cur.execute(f"SELECT id, password_hash, telegram_username FROM users WHERE email = '{email_esc}' LIMIT 1")
                row = cur.fetchone()
                if not row or not verify_password(password, row[1]):
                    return make_response(401, {'error': 'Неверный email или пароль'})

                user_id, _, telegram = row
                token = secrets.token_urlsafe(32)
                expires_at = (datetime.utcnow() + timedelta(days=30)).strftime('%Y-%m-%d %H:%M:%S')
                cur.execute(
                    f"INSERT INTO sessions (user_id, token, expires_at) "
                    f"VALUES ({user_id}, '{token}', '{expires_at}')"
                )

                return make_response(200, {
                    'token': token,
                    'user': {'id': user_id, 'email': email, 'telegram_username': telegram}
                })

        return make_response(400, {'error': 'Unknown action'})

    finally:
        cur.close()
        conn.close()
