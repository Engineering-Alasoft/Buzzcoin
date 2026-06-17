const milestones = [
  {
    quarter: 'Q1',
    title: 'Launch',
    description:
      'Token launch, website release, initial liquidity pool, and community onboarding.',
    status: 'completed',
  },
  {
    quarter: 'Q2',
    title: 'Community Growth',
    description:
      'Ambassador program, social campaigns, staking platform, and holder rewards.',
    status: 'active',
  },
  {
    quarter: 'Q3',
    title: 'Exchange Listings',
    description:
      'CEX and DEX listings, trading pairs, and expanded market access.',
    status: 'upcoming',
  },
  {
    quarter: 'Q4',
    title: 'Ecosystem Expansion',
    description:
      'DeFi integrations, partnerships, NFT utilities, and cross-chain bridge.',
    status: 'upcoming',
  },
];

function RoadmapConnectorDesktop() {
  const smoothPath = 'M 26 14 C 48 14, 60 22, 74 34 S 48 44, 26 58 S 60 72, 74 82';

  const nodes = [
    { cx: 26, cy: 14 },
    { cx: 74, cy: 34 },
    { cx: 26, cy: 58 },
    { cx: 74, cy: 82 },
  ];

  return (
    <svg
      className="roadmap-connector-desktop"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="roadmapLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#03f8c5" stopOpacity="0.05" />
          <stop offset="18%" stopColor="#03f8c5" stopOpacity="0.28" />
          <stop offset="50%" stopColor="#03f8c5" stopOpacity="0.5" />
          <stop offset="82%" stopColor="#03f8c5" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#03f8c5" stopOpacity="0.05" />
        </linearGradient>
        <filter id="roadmapLineGlowSoft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="roadmapLineGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.45" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Wide ambient glow */}
      <path
        d={smoothPath}
        fill="none"
        stroke="#03f8c5"
        strokeWidth="3.5"
        strokeOpacity="0.07"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#roadmapLineGlowSoft)"
        vectorEffect="non-scaling-stroke"
      />

      {/* Mid soft glow */}
      <path
        d={smoothPath}
        fill="none"
        stroke="#03f8c5"
        strokeWidth="1.8"
        strokeOpacity="0.14"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#roadmapLineGlowSoft)"
        vectorEffect="non-scaling-stroke"
      />

      {/* Main neon path */}
      <path
        d={smoothPath}
        fill="none"
        stroke="url(#roadmapLineGrad)"
        strokeWidth="0.65"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#roadmapLineGlow)"
        vectorEffect="non-scaling-stroke"
      />

      {/* Junction spots */}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r="2.8"
            fill="#03f8c5"
            fillOpacity="0.2"
            filter="url(#roadmapLineGlow)"
          />
          <circle
            cx={node.cx}
            cy={node.cy}
            r="1.35"
            fill="#010b11"
            stroke="#03f8c5"
            strokeWidth="0.55"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx={node.cx} cy={node.cy} r="0.45" fill="#03f8c5" />
        </g>
      ))}
    </svg>
  );
}

function RoadmapConnectorMobile() {
  return (
    <div className="roadmap-connector-mobile" aria-hidden="true">
      <div className="roadmap-connector-mobile__line" />
    </div>
  );
}

function RoadmapCard({ item }) {
  const isActive = item.status === 'active';
  const isCompleted = item.status === 'completed';

  return (
    <article
      className={`roadmap-card ${isActive ? 'roadmap-card--active' : ''} ${isCompleted ? 'roadmap-card--completed' : ''}`}
    >
      <span className="roadmap-card__node lg:hidden" aria-hidden="true">
        <span className="roadmap-card__node-ring" />
        <span className="roadmap-card__node-core" />
      </span>

      <div className="roadmap-card__glow" aria-hidden="true" />

      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="roadmap-card__quarter">{item.quarter}</span>
        {isActive && (
          <span className="roadmap-card__badge">
            <span className="roadmap-card__badge-dot" />
            In Progress
          </span>
        )}
      </div>

      <h3 className="roadmap-card__title">{item.title}</h3>
      <p className="roadmap-card__desc">{item.description}</p>
    </article>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding relative overflow-hidden bg-dark">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[min(600px,70vw)] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <header className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">
            <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            A clear path from launch to a fully expanded ecosystem.
          </p>
        </header>

        <div className="roadmap-flow">
          <RoadmapConnectorDesktop />
          <RoadmapConnectorMobile />

          <div className="roadmap-cards">
            {milestones.map((item) => (
              <RoadmapCard key={item.quarter} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
