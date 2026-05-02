import { useState } from "react";
import Icon from "@/components/ui/icon";

const Landing = ({ onAuth }: { onAuth: (mode: "login" | "register") => void }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Это легально?", a: "Да, виртуальные карты — полностью легальный финансовый инструмент. Сервис работает в соответствии с законодательством и выдаёт карты через лицензированных партнёров." },
    { q: "Какие страны поддерживаются?", a: "Карты работают в 150+ странах мира. Особенно актуально для пользователей из СНГ, которые хотят оплачивать зарубежные сервисы без ограничений." },
    { q: "Какие способы пополнения?", a: "Криптовалюта (USDT, BTC, ETH), банковские переводы, карты. Минимальное пополнение — $10." },
    { q: "Сколько карт можно выпустить?", a: "До 10 карт на одном аккаунте. При необходимости большего количества свяжитесь с поддержкой." },
    { q: "Как быстро выпускается карта?", a: "Карта выпускается за 1–3 минуты после подтверждения. Реквизиты доступны сразу в личном кабинете." },
  ];

  const services = [
    { name: "ChatGPT", emoji: "🤖", color: "from-green-500/20 to-emerald-500/20" },
    { name: "Netflix", emoji: "🎬", color: "from-red-500/20 to-rose-500/20" },
    { name: "Spotify", emoji: "🎵", color: "from-green-600/20 to-lime-500/20" },
    { name: "Steam", emoji: "🎮", color: "from-blue-500/20 to-indigo-500/20" },
    { name: "Google Ads", emoji: "📊", color: "from-yellow-500/20 to-orange-500/20" },
    { name: "Facebook Ads", emoji: "📱", color: "from-blue-600/20 to-blue-400/20" },
    { name: "Adobe", emoji: "🎨", color: "from-red-600/20 to-pink-500/20" },
    { name: "Amazon", emoji: "📦", color: "from-orange-500/20 to-amber-500/20" },
  ];

  return (
    <div className="min-h-screen bg-background font-['Golos_Text']">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="gradient-text font-bold text-2xl tracking-tight">NexCard</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Преимущества</a>
            <a href="#how" className="hover:text-foreground transition-colors">Как работает</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => onAuth("login")} className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
              Войти
            </button>
            <button
              onClick={() => onAuth("register")}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm px-5 py-2.5 rounded-xl transition-all neon-glow"
            >
              Начать
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-4 hero-glow dot-grid overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Мгновенный выпуск карт
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-foreground">
                Оплачивай любые<br />
                <span className="gradient-text">зарубежные сервисы</span><br />
                без ограничений
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Виртуальные Visa и Mastercard карты за 2 минуты.<br />
                ChatGPT, Netflix, Steam — любые платежи без блокировок.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onAuth("register")}
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-lg px-8 py-4 rounded-2xl transition-all neon-glow flex items-center gap-2 justify-center"
                >
                  <Icon name="CreditCard" size={20} />
                  Получить карту
                </button>
                <button className="border border-border hover:border-emerald-500/40 text-foreground font-medium text-lg px-8 py-4 rounded-2xl transition-all flex items-center gap-2 justify-center">
                  <Icon name="Play" size={18} />
                  Как это работает
                </button>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-emerald-400" />
                  Без комиссии за открытие
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-emerald-400" />
                  3D Secure
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-emerald-400" />
                  150+ стран
                </div>
              </div>
            </div>

            {/* Hero Cards Visual */}
            <div className="relative flex justify-center items-center animate-float">
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-4 -right-4 w-72 h-44 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-800 opacity-60 rotate-6 shadow-2xl" />
                <div className="absolute -top-2 -right-2 w-72 h-44 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 opacity-80 rotate-3 shadow-2xl" />
                <div className="relative z-10 w-72 h-44 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 p-5 shadow-2xl neon-glow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-emerald-200/60 text-xs uppercase tracking-wider">Баланс</div>
                      <div className="text-white text-2xl font-bold mt-1">$247.50</div>
                    </div>
                    <span className="text-white/80 italic font-black text-xl">VISA</span>
                  </div>
                  <div className="mt-4">
                    <div className="text-white/60 text-xs font-mono tracking-widest">4532 •••• •••• 7741</div>
                  </div>
                  <div className="flex justify-between items-end mt-3">
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider">Держатель</div>
                      <div className="text-white text-sm font-semibold">ALEX IVANOV</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/40 text-xs uppercase tracking-wider">До</div>
                      <div className="text-white text-sm font-semibold">08/28</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                  {["🤖", "🎬", "🎵", "🎮"].map((emoji, i) => (
                    <div key={i} className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center text-lg shadow-lg">
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-20">
            {[
              { value: "50 000+", label: "Активных карт" },
              { value: "99.2%", label: "Успешных платежей" },
              { value: "2 мин", label: "Время выпуска" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black gradient-text">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">Преимущества</div>
            <h2 className="text-4xl font-black text-foreground">Почему выбирают CardFlow</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Zap", title: "Мгновенный выпуск", desc: "Карта готова за 1–3 минуты. Реквизиты сразу в личном кабинете.", color: "text-yellow-400" },
              { icon: "Globe", title: "Глобальные платежи", desc: "Оплачивайте любые зарубежные сервисы без ограничений и блокировок.", color: "text-blue-400" },
              { icon: "TrendingUp", title: "99.2% успех", desc: "Высокий процент прохождения платежей благодаря надёжной инфраструктуре.", color: "text-emerald-400" },
              { icon: "Shield", title: "3D Secure", desc: "Полная защита транзакций. Двухфакторная авторизация платежей.", color: "text-purple-400" },
            ].map((f) => (
              <div key={f.title} className="card-glass rounded-2xl p-6 hover:border-emerald-500/20 transition-all group">
                <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 ${f.color} group-hover:scale-110 transition-transform`}>
                  <Icon name={f.icon} size={22} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">Как это работает</div>
            <h2 className="text-4xl font-black text-foreground">Четыре простых шага</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0" />
            {[
              { step: "01", icon: "UserPlus", title: "Регистрация", desc: "Создайте аккаунт за 1 минуту. Только email и пароль." },
              { step: "02", icon: "Wallet", title: "Пополнение", desc: "Пополните баланс криптой, картой или переводом." },
              { step: "03", icon: "CreditCard", title: "Выпуск карты", desc: "Выберите тип карты и выпустите за 2 минуты." },
              { step: "04", icon: "CheckCircle", title: "Оплата", desc: "Используйте реквизиты для оплаты любого сервиса." },
            ].map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 neon-glow">
                  <Icon name={s.icon} size={24} className="text-emerald-400" />
                </div>
                <div className="text-emerald-400/50 text-xs font-mono mb-2">{s.step}</div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">Где можно платить</div>
            <h2 className="text-4xl font-black text-foreground">Тысячи сервисов по всему миру</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s.name} className={`card-glass rounded-2xl p-5 flex items-center gap-3 hover:scale-105 transition-all cursor-default bg-gradient-to-br ${s.color}`}>
                <span className="text-2xl">{s.emoji}</span>
                <span className="font-semibold text-foreground">{s.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-muted-foreground">
            И тысячи других сервисов, принимающих Visa и Mastercard
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">Тарифы</div>
            <h2 className="text-4xl font-black text-foreground">Прозрачные условия</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Старт",
                price: "$0",
                period: "регистрация",
                features: ["До 3 карт", "Выпуск карты $1", "Пополнение 3%", "Email поддержка"],
                cta: "Начать бесплатно",
                highlight: false,
              },
              {
                name: "Про",
                price: "$9",
                period: "в месяц",
                features: ["До 10 карт", "Выпуск карты $0.5", "Пополнение 1.5%", "Приоритетная поддержка", "API доступ"],
                cta: "Выбрать Про",
                highlight: true,
              },
              {
                name: "Бизнес",
                price: "$29",
                period: "в месяц",
                features: ["Безлимит карт", "Выпуск карты $0", "Пополнение 1%", "Персональный менеджер", "API + Webhook"],
                cta: "Связаться",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-emerald-500/10 border-2 border-emerald-500/40 neon-glow relative"
                    : "card-glass"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                    Популярный
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-muted-foreground font-medium mb-2">{plan.name}</div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-black text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground mb-1">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-emerald-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onAuth("register")}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.highlight
                      ? "bg-emerald-500 hover:bg-emerald-400 text-black"
                      : "border border-border hover:border-emerald-500/40 text-foreground"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">Отзывы</div>
            <h2 className="text-4xl font-black text-foreground">Что говорят пользователи</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Александр К.", role: "Маркетолог", text: "Наконец-то могу нормально пополнять рекламные кабинеты в Facebook и Google. Карта прошла с первого раза, без проблем.", stars: 5 },
              { name: "Мария Т.", role: "Фрилансер", text: "Оплачиваю ChatGPT Plus уже 4 месяца. Никаких проблем. Карта выпустилась за 2 минуты, как и обещали.", stars: 5 },
              { name: "Дмитрий Р.", role: "Арбитражник", text: "Использую для фармин аккаунтов. Создал 8 карт — все работают стабильно. Процент одобрения отличный.", stars: 5 },
              { name: "Анна В.", role: "Дизайнер", text: "Подписка на Adobe Creative Cloud без танцев с бубном. Просто выпустила карту, добавила реквизиты и готово!", stars: 5 },
              { name: "Игорь С.", role: "Разработчик", text: "Использую API для автоматизации. Документация хорошая, поддержка отвечает быстро. Рекомендую.", stars: 5 },
              { name: "Кирилл Б.", role: "Геймер", text: "Steam, Xbox, PlayStation — всё работает. Купил кучу игр без VPN и прокси. Огонь!", stars: 5 },
            ].map((r) => (
              <div key={r.name} className="card-glass rounded-2xl p-6 hover:border-emerald-500/20 transition-all">
                <div className="flex mb-3">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{r.name}</div>
                    <div className="text-muted-foreground text-xs">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</div>
            <h2 className="text-4xl font-black text-foreground">Часто задаваемые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card-glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/2 transition-colors"
                >
                  <span className="font-semibold text-foreground">{faq.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={18}
                    className={`text-muted-foreground transition-transform flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-4">Начни сегодня</div>
          <h2 className="text-5xl font-black text-foreground mb-6">
            Создай карту<br />
            <span className="gradient-text">за 2 минуты</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Присоединяйся к 50 000+ пользователям, которые уже оплачивают зарубежные сервисы без ограничений
          </p>
          <button
            onClick={() => onAuth("register")}
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xl px-12 py-5 rounded-2xl transition-all neon-glow inline-flex items-center gap-3"
          >
            <Icon name="CreditCard" size={24} />
            Получить карту бесплатно
          </button>
          <div className="flex justify-center gap-8 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Icon name="Lock" size={14} className="text-emerald-400" /> Безопасно</div>
            <div className="flex items-center gap-2"><Icon name="Zap" size={14} className="text-emerald-400" /> Мгновенно</div>
            <div className="flex items-center gap-2"><Icon name="Globe" size={14} className="text-emerald-400" /> Без ограничений</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/30 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="gradient-text font-bold text-2xl">CardFlow</span>
              <p className="text-muted-foreground text-sm mt-1">Виртуальные карты без ограничений</p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-foreground transition-colors">Условия использования</a>
              <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
            </div>
            <p className="text-muted-foreground text-sm">© 2026 CardFlow. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;