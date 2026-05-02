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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="max-w-6xl mx-auto card-glass rounded-full px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl gradient-mint-violet flex items-center justify-center">
              <span className="text-background font-display font-black text-lg">N</span>
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-foreground">NexCard</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Преимущества</a>
            <a href="#how" className="hover:text-foreground transition-colors">Как работает</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => onAuth("login")} className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
              Войти
            </button>
            <button
              onClick={() => onAuth("register")}
              className="gradient-mint-violet text-background font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105 mint-glow"
            >
              Открыть карту
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-36 pb-24 px-4 hero-glow grid-pattern overflow-hidden">
        <div className="blob bg-[hsl(var(--mint))] w-[400px] h-[400px] opacity-30 top-20 -left-20 animate-blob" />
        <div className="blob bg-[hsl(var(--violet))] w-[500px] h-[500px] opacity-25 top-40 -right-32 animate-blob" style={{ animationDelay: "3s" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in">
              <div className="inline-flex items-center gap-2 card-glass text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--mint))] animate-pulse" />
                <span className="text-[hsl(var(--mint))]">Live</span>
                <span className="text-muted-foreground">Карты выпускаются прямо сейчас</span>
              </div>
              <h1 className="font-display font-black leading-[0.95] mb-6 text-foreground" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
                Платежи<br />
                <span className="gradient-text italic">без границ.</span><br />
                Карты <span className="relative inline-block">
                  <span className="relative z-10">за 2 мин</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 200 14" fill="none">
                    <path d="M2 11C50 4 100 4 198 8" stroke="url(#g1)" strokeWidth="4" strokeLinecap="round"/>
                    <defs><linearGradient id="g1" x1="0" y1="0" x2="200" y2="0"><stop stopColor="#40e0b2"/><stop offset="1" stopColor="#a86ef0"/></linearGradient></defs>
                  </svg>
                </span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
                Виртуальные Visa и Mastercard для оплаты ChatGPT, Netflix, Steam и тысяч других сервисов. Без VPN, без блокировок, без танцев с бубном.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onAuth("register")}
                  className="gradient-mint-violet text-background font-bold text-base px-7 py-4 rounded-full transition-all hover:scale-105 mint-glow flex items-center gap-2 justify-center"
                >
                  Получить карту
                  <Icon name="ArrowRight" size={18} />
                </button>
                <button className="card-glass hover:bg-white/5 text-foreground font-medium text-base px-7 py-4 rounded-full transition-all flex items-center gap-2 justify-center">
                  <Icon name="Play" size={16} />
                  Как это работает
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={14} className="text-[hsl(var(--mint))]" />
                  Без комиссии за открытие
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={14} className="text-[hsl(var(--mint))]" />
                  3D Secure
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={14} className="text-[hsl(var(--mint))]" />
                  150+ стран
                </div>
              </div>
            </div>

            {/* Hero Cards Visual */}
            <div className="lg:col-span-5 relative flex justify-center items-center min-h-[400px]">
              <div className="relative w-full max-w-sm">
                {/* фоновая карта 1 */}
                <div className="absolute top-12 -right-6 w-72 h-44 rounded-3xl bg-gradient-to-br from-[hsl(var(--violet))] to-purple-800 opacity-70 rotate-12 shadow-2xl violet-glow" />
                {/* фоновая карта 2 */}
                <div className="absolute -top-4 -left-6 w-72 h-44 rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 opacity-80 -rotate-6 shadow-2xl" />
                {/* основная карта */}
                <div className="relative z-10 w-72 h-44 rounded-3xl p-5 shadow-2xl mint-glow animate-float overflow-hidden"
                  style={{ background: "linear-gradient(135deg, hsl(var(--mint)) 0%, hsl(var(--violet)) 100%)" }}>
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/15 blur-2xl" />
                  <div className="flex justify-between items-start relative">
                    <div>
                      <div className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-semibold">NexCard Premium</div>
                      <div className="text-white text-2xl font-display font-black mt-1">$247.50</div>
                    </div>
                    <span className="text-white font-display italic font-black text-xl">VISA</span>
                  </div>
                  <div className="mt-5 relative">
                    <div className="text-white/80 text-sm font-mono tracking-[0.25em]">4532 •••• •••• 7741</div>
                  </div>
                  <div className="flex justify-between items-end mt-3 relative">
                    <div>
                      <div className="text-white/50 text-[9px] uppercase tracking-wider">Держатель</div>
                      <div className="text-white text-xs font-semibold">ALEX IVANOV</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/50 text-[9px] uppercase tracking-wider">До</div>
                      <div className="text-white text-xs font-semibold">08/28</div>
                    </div>
                  </div>
                </div>

                {/* плавающий бейдж — оплата */}
                <div className="absolute -top-6 -left-10 card-glass rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                  <div className="w-8 h-8 rounded-xl bg-[hsl(var(--mint))]/20 flex items-center justify-center">
                    <span className="text-base">🤖</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground">Оплачено</div>
                    <div className="text-xs font-bold text-foreground">ChatGPT $20</div>
                  </div>
                  <Icon name="Check" size={14} className="text-[hsl(var(--mint))]" />
                </div>

                {/* плавающий бейдж — успешно */}
                <div className="absolute -bottom-6 -right-4 card-glass rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                  <div className="w-8 h-8 rounded-xl bg-[hsl(var(--violet))]/20 flex items-center justify-center">
                    <span className="text-base">🎬</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground">Подписка</div>
                    <div className="text-xs font-bold text-foreground">Netflix активна</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ticker */}
          <div className="mt-20 relative card-glass rounded-2xl overflow-hidden py-4">
            <div className="flex ticker whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 pr-12">
                  {["ChatGPT", "Netflix", "Spotify", "Steam", "Adobe", "Google Ads", "Facebook Ads", "Amazon", "OpenAI", "Disney+"].map((s) => (
                    <span key={s} className="font-display font-bold text-2xl text-muted-foreground/60">
                      {s} <span className="text-[hsl(var(--mint))]">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { value: "50K+", label: "Активных карт" },
              { value: "99.2%", label: "Успешных платежей" },
              { value: "2 мин", label: "Время выпуска" },
            ].map((stat) => (
              <div key={stat.label} className="text-center card-glass rounded-2xl p-5">
                <div className="text-3xl md:text-4xl font-display font-black gradient-text">{stat.value}</div>
                <div className="text-muted-foreground text-xs md:text-sm mt-1">{stat.label}</div>
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
            <h2 className="text-4xl font-display font-black text-foreground">Почему выбирают NexCard</h2>
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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl gradient-mint-violet flex items-center justify-center">
                <span className="text-background font-display font-black text-lg">N</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-foreground">NexCard</span>
                <p className="text-muted-foreground text-xs">Виртуальные карты без границ</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-foreground transition-colors">Условия</a>
              <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
            </div>
            <p className="text-muted-foreground text-sm">© 2026 NexCard</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;