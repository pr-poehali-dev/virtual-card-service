import { useState } from "react";
import Icon from "@/components/ui/icon";
import func2url from "../../backend/func2url.json";

type Mode = "login" | "register";

interface AuthModalProps {
  open: boolean;
  initialMode?: Mode;
  onClose: () => void;
  onSuccess: (user: { id: number; email: string; telegram_username: string }, token: string) => void;
}

const AuthModal = ({ open, initialMode = "login", onClose, onSuccess }: AuthModalProps) => {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [telegram, setTelegram] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const reset = () => {
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setTelegram("");
    setError("");
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const url = `${func2url.auth}?action=${mode}`;
      const body =
        mode === "register"
          ? { email, password, password_confirm: passwordConfirm, telegram_username: telegram }
          : { email, password };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Ошибка");
        return;
      }
      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("auth_user", JSON.stringify(data.user));
      onSuccess(data.user, data.token);
      reset();
    } catch {
      setError("Сервер недоступен. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="card-glass rounded-3xl p-8 max-w-md w-full relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-black text-foreground mb-1">
            {mode === "login" ? "С возвращением" : "Создать аккаунт"}
          </h3>
          <p className="text-muted-foreground text-sm">
            {mode === "login"
              ? "Войдите, чтобы управлять картами"
              : "Регистрация занимает меньше минуты"}
          </p>
        </div>

        <div className="flex gap-1 mb-6 bg-secondary/50 p-1 rounded-xl">
          <button
            onClick={() => switchMode("login")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === "login"
                ? "bg-emerald-500 text-black"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Вход
          </button>
          <button
            onClick={() => switchMode("register")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === "register"
                ? "bg-emerald-500 text-black"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Регистрация
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block uppercase tracking-wider">
              Пароль
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Минимум 6 символов"
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          {mode === "register" && (
            <>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block uppercase tracking-wider">
                  Повторите пароль
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="Повторите пароль"
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block uppercase tracking-wider">
                  Telegram юзернейм
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
                  <input
                    type="text"
                    required
                    pattern="[a-zA-Z0-9_]{3,32}"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value.replace(/^@/, ""))}
                    placeholder="username"
                    className="w-full bg-secondary border border-border rounded-xl pl-9 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
                <p className="text-muted-foreground text-xs mt-1.5">
                  Для связи и оперативной поддержки
                </p>
              </div>
            </>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
              <Icon name="AlertCircle" size={16} />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl transition-all neon-glow flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Icon name="Loader2" size={18} className="animate-spin" />
                Подождите...
              </>
            ) : mode === "login" ? (
              "Войти"
            ) : (
              "Создать аккаунт"
            )}
          </button>
        </form>

        <p className="text-muted-foreground text-xs text-center mt-6">
          {mode === "login" ? (
            <>
              Нет аккаунта?{" "}
              <button onClick={() => switchMode("register")} className="text-emerald-400 hover:underline font-medium">
                Зарегистрироваться
              </button>
            </>
          ) : (
            <>
              Уже есть аккаунт?{" "}
              <button onClick={() => switchMode("login")} className="text-emerald-400 hover:underline font-medium">
                Войти
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
