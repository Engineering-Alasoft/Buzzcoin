const milestones = [
  {
    quarter: 'Q1',
    title: 'Launch',
    description: 'Token launch, website release, initial liquidity pool, and community onboarding.',
    status: 'completed',
  },
  {
    quarter: 'Q2',
    title: 'Community Growth',
    description: 'Ambassador program, social campaigns, staking platform, and holder rewards.',
    status: 'active',
  },
  {
    quarter: 'Q3',
    title: 'Exchange Listings',
    description: 'CEX and DEX listings, trading pairs, and expanded market access.',
    status: 'upcoming',
  },
  {
    quarter: 'Q4',
    title: 'Ecosystem Expansion',
    description: 'DeFi integrations, partnerships, NFT utilities, and cross-chain bridge.',
    status: 'upcoming',
  },
];

const statusStyles = {
  completed: 'border-primary bg-primary/10 text-primary',
  active: 'border-primary bg-primary text-dark shadow-glow-sm',
  upcoming: 'border-white/10 bg-white/5 text-white/50',
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">
            <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            A clear path from launch to a fully expanded ecosystem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {milestones.map((item, index) => (
            <div
              key={item.quarter}
              className="glass glass-hover rounded-2xl p-6 relative group"
            >
              {/* Connector line (desktop) */}
              {index < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-primary/20" />
              )}

              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border font-bold text-sm mb-4 ${statusStyles[item.status]}`}>
                {item.quarter}
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>

              {item.status === 'active' && (
                <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  In Progress
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
