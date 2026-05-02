import { useState } from "react";
import Icon from "@/components/ui/icon";
import VirtualCard from "@/components/VirtualCard";

const Dashboard = ({ onBack }: { onBack: () => void }) => {
  const [showCreate, setShowCreate] = useState(false);
  const [activeTab, setActiveTab] = useState<"cards" | "history">("cards");

  const cards = [
    { number: "4532 •••• •••• 8821", holder: "IVAN PETROV", expiry: "12/27", balance: "$124.50", type: "visa" as const, color: "bg-gradient-to-br from-slate-700 to-slate-900" },
    { number: "5412 •••• •••• 3394", holder: "IVAN PETROV", expiry: "09/26", balance: "$48.00", type: "mastercard" as const, color: "bg-gradient-to-br from-emerald-700 to-teal-900" },
  ];

  const transactions = [
    { id: 1, service: "ChatGPT Plus", amount: "-$20.00", date: "01 мая 2026", icon: "Bot", status: "success" },
    { id: 2, service: "Netflix", amount: "-$15.99", date: "28 апр 2026", icon: "Play", status: "success" },
    { id: 3, service: "Пополнение", amount: "+$100.00", date: "25 апр 2026", icon: "ArrowDownCircle", status: "success" },
    { id: 4, service: "Spotify", amount: "-$9.99", date: "22 апр 2026", icon: "Music", status: "success" },
    { id: 5, service: "Google Ads", amount: "-$50.00", date: "20 апр 2026", icon: "BarChart2", status: "success" },
    { id: 6, service: "Steam", amount: "-$29.99", date: "18 апр 2026", icon: "Gamepad2", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-background dot-grid">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="ArrowLeft" size={18} />
            <span className="gradient-text font-bold text-xl">CardFlow</span>
          </button>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground px-4 py-2 rounded-xl transition-colors text-sm">
              <Icon name="Plus" size={16} />
              Пополнить
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
              И
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Balance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Общий баланс", value: "$172.50", icon: "Wallet", color: "text-emerald-400" },
            { label: "Карт выпущено", value: "2", icon: "CreditCard", color: "text-blue-400" },
            { label: "Транзакций", value: "24", icon: "ArrowRightLeft", color: "text-purple-400" },
          ].map((stat) => (
            <div key={stat.label} className="card-glass rounded-2xl p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center ${stat.color}`}>
                <Icon name={stat.icon} size={22} />
              </div>
              <div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
                <div className="text-foreground text-2xl font-bold">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-secondary/50 p-1 rounded-xl w-fit">
          {(["cards", "history"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-emerald-500 text-black"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "cards" ? "Мои карты" : "История"}
            </button>
          ))}
        </div>

        {activeTab === "cards" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {cards.map((card, i) => (
                <VirtualCard key={i} {...card} />
              ))}
              {/* Create Card Button */}
              <button
                onClick={() => setShowCreate(true)}
                className="rounded-2xl border-2 border-dashed border-border hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-muted-foreground hover:text-emerald-400 cursor-pointer"
                style={{ minHeight: 200 }}
              >
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-current flex items-center justify-center">
                  <Icon name="Plus" size={24} />
                </div>
                <span className="font-medium">Создать карту</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="card-glass rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-border/50">
              <h3 className="font-semibold text-foreground">История транзакций</h3>
            </div>
            <div className="divide-y divide-border/30">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-5 hover:bg-white/2 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground">
                      <Icon name={tx.icon} size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{tx.service}</div>
                      <div className="text-muted-foreground text-sm">{tx.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-base font-semibold ${tx.amount.startsWith("+") ? "text-emerald-400" : "text-foreground"}`}>
                      {tx.amount}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${tx.status === "success" ? "bg-emerald-500/15 text-emerald-400" : "bg-yellow-500/15 text-yellow-400"}`}>
                      {tx.status === "success" ? "Выполнено" : "В обработке"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Create Card Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowCreate(false)}>
          <div className="card-glass rounded-3xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Новая виртуальная карта</h3>
              <button onClick={() => setShowCreate(false)} className="text-muted-foreground hover:text-foreground">
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Тип карты</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Visa", "Mastercard"].map((t) => (
                    <button key={t} className="border border-border rounded-xl p-3 text-center hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all font-medium">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Начальный баланс</label>
                <input
                  type="text"
                  placeholder="0.00 USD"
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-emerald-500/50"
                />
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 text-sm text-muted-foreground">
                <div className="flex justify-between mb-2">
                  <span>Стоимость выпуска</span>
                  <span className="text-foreground font-medium">$1.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Время выпуска</span>
                  <span className="text-emerald-400 font-medium">~2 мин</span>
                </div>
              </div>
              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 rounded-xl transition-all neon-glow">
                Выпустить карту
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
