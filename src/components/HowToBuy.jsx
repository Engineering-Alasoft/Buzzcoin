const steps = [
  {
    step: '1',
    title: 'Get a Wallet',
    description:
      'Create a secure Web3 wallet like MetaMask or Trust Wallet to store and manage your BUZ tokens safely.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
  },
  {
    step: '2',
    title: 'Add Funds',
    description:
      'Deposit ETH or USDT into your wallet from any supported exchange to prepare for purchasing BUZ.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    step: '3',
    title: 'Swap for BUZ',
    description:
      'Connect your wallet to the BUZ platform and complete a secure swap to receive BUZ tokens instantly.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    step: '4',
    title: 'Hold & Earn',
    description:
      'Hold BUZ to participate in ecosystem rewards, staking opportunities, and future community utilities.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

function StepCard({ item }) {
  return (
    <article
      className="how-step-card group relative flex flex-col min-h-[280px] sm:min-h-[300px]
                 border border-white/10 bg-[#061822]/80 backdrop-blur-sm
                 p-6 sm:p-7 md:p-8
                 transition-all duration-300 ease-out
                 hover:bg-primary hover:border-primary
                 hover:shadow-[0_8px_40px_rgba(3,248,197,0.35)]
                 active:bg-primary active:border-primary active:shadow-[0_8px_40px_rgba(3,248,197,0.35)]
                 focus-within:bg-primary focus-within:border-primary"
    >


      {/* Icon box — same as before; inverts on hover fill */}
      <div
        className="how-step-icon mt-5 w-14 h-14 sm:w-16 sm:h-16 rounded-xl shrink-0
                   border border-primary/30 bg-primary/5
                   flex items-center justify-center text-primary
                   transition-all duration-1000
                   group-hover:bg-[#010b11]/10 group-hover:border-[#010b11]/20 group-hover:text-[#010b11]
                   group-focus-within:bg-[#010b11]/10 group-focus-within:border-[#010b11]/20 group-focus-within:text-[#010b11]"
      >
        {item.icon}
      </div>

      <h3
        className="how-step-title mt-5 text-lg sm:text-xl font-bold text-white
                   transition-colors duration-300
                   group-hover:text-[#010b11] group-focus-within:text-[#010b11]"
      >
        {item.title}
      </h3>

      <p
        className="how-step-desc mt-3 text-sm sm:text-[15px] text-white/50 leading-relaxed flex-1
                   transition-colors duration-300
                   group-hover:text-[#010b11]/75 group-focus-within:text-[#010b11]/75"
      >
        {item.description}
      </p>
    </article>
  );
}

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="section-padding relative overflow-hidden bg-[#010b11]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">
            How to <span className="text-gradient">Buy BUZ</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Four simple steps to join the BUZ ecosystem and start building your digital portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {steps.map((item) => (
            <StepCard key={item.step} item={item} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="#how-to-buy"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full
                       bg-primary text-[#010b11] font-bold text-sm
                       shadow-[0_0_30px_rgba(3,248,197,0.35)]
                       hover:shadow-[0_0_45px_rgba(3,248,197,0.55)]
                       hover:scale-105 transition-all duration-300"
          >
            Buy BUZ Now
          </a>
        </div>
      </div>
    </section>
  );
}
