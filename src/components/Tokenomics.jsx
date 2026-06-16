const allocations = [
  { label: 'Ecosystem', percent: 40, color: 'bg-primary' },
  { label: 'Liquidity', percent: 25, color: 'bg-emerald-400' },
  { label: 'Marketing', percent: 15, color: 'bg-teal-400' },
  { label: 'Team', percent: 10, color: 'bg-cyan-400' },
  { label: 'Reserve', percent: 10, color: 'bg-green-300' },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Token Distribution</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">
            <span className="text-gradient">Tokenomics</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            A transparent and balanced distribution model designed for sustainable ecosystem growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Donut chart visual */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {(() => {
                  let offset = 0;
                  const colors = ['#03f8c5', '#34d399', '#2dd4bf', '#22d3ee', '#6ee7b7'];
                  return allocations.map((item, i) => {
                    const dash = item.percent;
                    const gap = 100 - dash;
                    const circle = (
                      <circle
                        key={item.label}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={colors[i]}
                        strokeWidth="12"
                        strokeDasharray={`${dash} ${gap}`}
                        strokeDashoffset={-offset}
                        className="transition-all duration-500"
                        style={{ filter: 'drop-shadow(0 0 6px rgba(3,248,197,0.3))' }}
                      />
                    );
                    offset += dash;
                    return circle;
                  });
                })()}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-extrabold text-gradient">1B</span>
                <span className="text-white/50 text-sm font-medium">Total Supply</span>
              </div>
            </div>
          </div>

          {/* Allocation cards */}
          <div className="space-y-4">
            {allocations.map((item) => (
              <div key={item.label} className="glass glass-hover rounded-xl p-4 md:p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-white">{item.label}</span>
                  <span className="text-primary font-bold text-lg">{item.percent}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-700`}
                    style={{
                      width: `${item.percent}%`,
                      boxShadow: '0 0 10px rgba(3, 248, 197, 0.4)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
