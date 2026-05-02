const VirtualCard = ({
  number,
  holder,
  expiry,
  balance,
  type,
  color,
}: {
  number: string;
  holder: string;
  expiry: string;
  balance: string;
  type: "visa" | "mastercard";
  color: string;
}) => (
  <div
    className={`relative rounded-2xl p-6 w-full max-w-sm aspect-[1.6/1] flex flex-col justify-between overflow-hidden ${color} cursor-pointer hover:scale-105 transition-all duration-300`}
    style={{ minHeight: 200 }}
  >
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"
    }} />
    <div className="flex justify-between items-start relative z-10">
      <div>
        <div className="text-white/60 text-xs font-medium uppercase tracking-wider">Баланс</div>
        <div className="text-white text-2xl font-bold mt-1">{balance}</div>
      </div>
      <div className="text-white/80 font-bold text-lg tracking-widest">
        {type === "visa" ? (
          <span className="italic font-black text-2xl">VISA</span>
        ) : (
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-red-500 opacity-90" />
            <div className="w-8 h-8 rounded-full bg-yellow-400 opacity-90 -ml-4" />
          </div>
        )}
      </div>
    </div>
    <div className="relative z-10">
      <div className="text-white/70 text-sm font-mono tracking-[0.2em] mb-3">
        {number}
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="text-white/50 text-xs uppercase tracking-wider">Держатель</div>
          <div className="text-white text-sm font-semibold">{holder}</div>
        </div>
        <div className="text-right">
          <div className="text-white/50 text-xs uppercase tracking-wider">До</div>
          <div className="text-white text-sm font-semibold">{expiry}</div>
        </div>
      </div>
    </div>
  </div>
);

export default VirtualCard;
