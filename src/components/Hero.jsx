function CoinVisual() {
  return (
    <div className="coin-visual-wrapper">
      <div className="coin-inner animate-coin-float">
        <img
          src="/images/Coin.webp"
          alt="BUZ Token Coin"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          draggable={false}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 0 40px rgba(3,248,197,0.45))',
          }}
        />
      </div>

      <img
        src="/images/stage.webp"
        alt=""
        aria-hidden="true"
        draggable={false}
        decoding="async"
        className="coin-stage"
      />

      {/* Particles */}
      <span className="particle particle--tr" />
      <span className="particle particle--bl" style={{ animationDelay: '1s' }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-20 sm:pt-24 md:pt-28 lg:pt-32"
      style={{ overflow: 'hidden' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

          {/* ── Left content ─────────────────────────── */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Modern Crypto Token
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
              The Future of{' '}
              <span className="text-gradient">Digital Value</span>{' '}
              Starts with BUZ
            </h1>

            <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
              BUZ is a digital asset focused on speed, security, and real-world utility. Built for modern investors and Web3 users, it offers a seamless experience supported by scalable blockchain infrastructure and an expanding ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#how-to-buy"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#061822] text-primary font-bold text-sm sm:text-base hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Buy BUZ
              </a>
              <a
                href="https://buzzcoin.co/WhitePaper.pdf"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full glass border border-primary/30 text-white font-semibold text-sm sm:text-base hover:border-primary/60 hover:shadow-glow-sm transition-all duration-300"
              >
                View Whitepaper
              </a>
            </div>
          </div>

          {/* ── Right visual ─────────────────────────── */}
          <div
            className="order-1 lg:order-2 w-full"
            style={{ overflow: 'visible' }}
          >
            <CoinVisual />
          </div>

        </div>
      </div>

      <style>{`
        /* ── Coin Visual wrapper ───────────────────────────────── */
        .coin-visual-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          overflow: visible;
          min-height: 380px;
        }
        @media (min-width: 768px) {
          .coin-visual-wrapper {
            min-height: 420px;
          }
        }
        @media (min-width: 1024px) {
          .coin-visual-wrapper {
            min-height: 500px;
          }
        }

        /* ── Coin ─────────────────────────────────────────────── */
        .coin-inner {
          flex-shrink: 0;
          /* Mobile: larger */
          width: 75%;
          max-width: 280px;
        }
        @media (min-width: 640px) {          /* sm */
          .coin-inner { width: 78%; max-width: 320px; }
        }
        @media (min-width: 768px) {          /* md */
          .coin-inner { width: 80%; max-width: 380px; }
        }
        @media (min-width: 1024px) {         /* lg — desktop */
          .coin-inner { width: 85%; max-width: 460px; }
        }

        /* ── Stage ────────────────────────────────────────────── */
        .coin-stage {
          display: block;
          height: auto;
          user-select: none;
          pointer-events: none;
          flex-shrink: 0;
          /* Mobile: larger, closer overlap */
          width: 82%;
          max-width: 300px;
          margin-top: -35%;
        }
        @media (min-width: 640px) {          /* sm */
          .coin-stage { width: 85%; max-width: 360px; margin-top: -33%; }
        }
        @media (min-width: 768px) {          /* md */
          .coin-stage { width: 88%; max-width: 420px; margin-top: -30%; }
        }
        @media (min-width: 1024px) {         /* lg */
          .coin-stage { width: 92%; max-width: 520px; margin-top: -28%; }
        }

        /* ── Particles ────────────────────────────────────────── */
        .particle {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
          animation: pulse 2s infinite;
        }
        .particle--tr {
          top: 8%; right: 2%;
          width: 6px; height: 6px;
          background: #03f8c5;
        }
        @media (min-width: 768px) {
          .particle--tr {
            width: 8px; height: 8px;
          }
        }
        .particle--bl {
          bottom: 28%; left: 2%;
          width: 5px; height: 5px;
          background: rgba(3,248,197,0.6);
        }
        @media (min-width: 768px) {
          .particle--bl {
            width: 6px; height: 6px;
          }
        }

        /* ── Reduced motion ───────────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .animate-coin-float { animation: none !important; }
          .particle { animation: none !important; }
        }

        /* ── Smooth animations ─────────────────────────────────── */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}