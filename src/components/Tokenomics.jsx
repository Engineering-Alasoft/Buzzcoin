import { useState } from 'react';

const TOTAL_SUPPLY = 300_000_000;

function formatTotalSupply() {
  if (TOTAL_SUPPLY >= 1_000_000_000) {
    return `${TOTAL_SUPPLY / 1_000_000_000}B`;
  }
  return `${TOTAL_SUPPLY / 1_000_000}M`;
}

function formatTokenAmount(percent) {
  const amount = (TOTAL_SUPPLY * percent) / 100;
  if (amount >= 1_000_000_000) return `${amount / 1_000_000_000}B`;
  if (amount >= 1_000_000) return `${amount / 1_000_000}M`;
  if (amount >= 1_000) return `${amount / 1_000}K`;
  return `${amount}`;
}

const allocations = [
  { label: 'Ecosystem', percent: 40, color: '#03f8c5', description: 'Development, dApps, and ecosystem rewards' },
  { label: 'Liquidity', percent: 25, color: '#34d399', description: 'DEX pools and market stability' },
  { label: 'Marketing', percent: 15, color: '#2dd4bf', description: 'Growth campaigns and partnerships' },
  { label: 'Team', percent: 10, color: '#22d3ee', description: 'Core team with vesting schedule' },
  { label: 'Reserve', percent: 10, color: '#6ee7b7', description: 'Treasury and future opportunities' },
];

function toggleSelection(current, label) {
  return current === label ? null : label;
}

function DonutChart({ hovered, onHover }) {
  const radius = 38;
  const strokeWidth = 11;
  const hitWidth = 22;
  const gap = 4;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  const active = allocations.find((item) => item.label === hovered);

  const handleSelect = (label) => {
    onHover(toggleSelection(hovered, label));
  };

  return (
    <div className="relative aspect-square w-full max-w-[240px] sm:max-w-[300px] md:max-w-[352px] mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full -rotate-90 overflow-visible touch-manipulation"
        aria-label="Token allocation chart"
      >
        <defs>
          <filter id="donutGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#03f8c5" floodOpacity="0.35" />
          </filter>
          <filter id="donutGlowActive" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#03f8c5" floodOpacity="0.75" />
          </filter>
        </defs>

        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />

        {allocations.map((item) => {
          const segmentLength = (item.percent / 100) * circumference - gap;
          const isActive = hovered === item.label;
          const isDimmed = hovered && !isActive;
          const dashOffset = -offset;

          const segmentGroup = (
            <g key={item.label}>
              {/* Wider invisible hit area for touch */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="transparent"
                strokeWidth={hitWidth}
                strokeDasharray={`${segmentLength} ${circumference}`}
                strokeDashoffset={dashOffset}
                className="cursor-pointer"
                style={{ pointerEvents: 'stroke' }}
                onClick={() => handleSelect(item.label)}
                onMouseEnter={() => onHover(item.label)}
                onMouseLeave={() => onHover(null)}
                tabIndex={0}
                role="button"
                aria-label={`${item.label}: ${item.percent}%`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelect(item.label);
                  }
                }}
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth={isActive ? strokeWidth + 3 : strokeWidth}
                strokeDasharray={`${segmentLength} ${circumference}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="butt"
                className="transition-all duration-300 pointer-events-none"
                style={{
                  opacity: isDimmed ? 0.35 : 1,
                  filter: isActive ? 'url(#donutGlowActive)' : 'url(#donutGlow)',
                }}
              />
            </g>
          );

          offset += segmentLength + gap;
          return segmentGroup;
        })}
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 pointer-events-none transition-all duration-300">
        {active ? (
          <>
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold transition-all duration-300 leading-none"
              style={{ color: active.color }}
            >
              {active.percent}%
            </span>
            <span className="text-white font-semibold text-xs sm:text-sm mt-1">{active.label}</span>
            <span className="text-white/40 text-[10px] sm:text-xs mt-1">{formatTokenAmount(active.percent)} BUZ</span>
          </>
        ) : (
          <>
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient leading-none">{formatTotalSupply()}</span>
            <span className="text-white/50 text-xs sm:text-sm mt-1">Total Supply</span>
            <span className="text-primary/60 text-[10px] sm:text-xs mt-1.5 font-medium hidden sm:block">
              Hover a segment
            </span>
            <span className="text-primary/60 text-[10px] sm:text-xs mt-1.5 font-medium sm:hidden">
              Tap a segment
            </span>
          </>
        )}
      </div>
    </div>
  );
}

function AllocationCard({ item, hovered, onHover }) {
  const isActive = hovered === item.label;
  const isDimmed = hovered && !isActive;

  const handleSelect = () => {
    onHover(toggleSelection(hovered, item.label));
  };

  return (
      <button
        type="button"
        onClick={handleSelect}
        onMouseEnter={() => onHover(item.label)}
        onMouseLeave={() => onHover(null)}
        className={`w-full text-left glass rounded-xl p-3 sm:p-4 md:p-5 transition-all duration-300 border touch-manipulation ${
          isActive
            ? 'border-primary/40 bg-primary/5 shadow-glow-sm md:scale-[1.02]'
            : 'border-primary/10 hover:border-primary/25 active:border-primary/30'
        }`}
        style={{ opacity: isDimmed ? 0.5 : 1 }}
      >
        <div className="flex items-start justify-between gap-2 sm:gap-4 mb-2.5 sm:mb-3">
          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
            <span
              className="shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mt-1 sm:mt-0"
              style={{
                backgroundColor: item.color,
                boxShadow: isActive ? `0 0 10px ${item.color}` : 'none',
              }}
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-white text-sm sm:text-base">{item.label}</p>
              <p className="text-white/40 text-[11px] sm:text-xs mt-0.5 line-clamp-2 sm:line-clamp-1 sm:truncate">
                {item.description}
              </p>
            </div>
          </div>
          <div className="text-right shrink-0 pl-1">
            <p className="text-primary font-bold text-base sm:text-lg leading-none">{item.percent}%</p>
            <p className="text-white/30 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{formatTokenAmount(item.percent)}</p>
          </div>
        </div>

        <div className="w-full h-1.5 sm:h-2 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${item.percent}%`,
              background: `linear-gradient(90deg, ${item.color}, #03f8c5)`,
              boxShadow: isActive ? '0 0 12px rgba(3, 248, 197, 0.5)' : '0 0 6px rgba(3, 248, 197, 0.2)',
            }}
          />
        </div>
      </button>
  );
}

export default function Tokenomics() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="tokenomics" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative px-0">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Token Distribution
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-2 sm:mt-3">
            <span className="text-gradient">Tokenomics</span>
          </h2>
          <p className="text-white/50 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            A transparent and balanced distribution model designed for sustainable ecosystem growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          <div className="flex justify-center w-full min-w-0 px-2 sm:px-0">
            <DonutChart hovered={hovered} onHover={setHovered} />
          </div>

          <div className="w-full min-w-0">
          <div className="space-y-2.5 sm:space-y-3 w-full min-w-0">
            {allocations.map((item) => (
              <AllocationCard
                key={item.label}
                item={item}
                hovered={hovered}
                onHover={setHovered}
              />
            ))}
          </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
            {[
              { label: 'Total Supply', value: `${formatTotalSupply()} BUZ` },
              { label: 'Tax', value: '0%' },
              { label: 'Liquidity', value: 'Locked' },
              { label: 'Contract', value: 'Renounced' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-lg sm:rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-center border border-primary/10"
              >
                <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider font-medium mb-0.5 sm:mb-1 leading-tight">
                  {stat.label}
                </p>
                <p className="text-white font-bold text-xs sm:text-sm md:text-base">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
