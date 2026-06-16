function CoinVisual() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-xl mx-auto min-h-[500px] overflow-visible">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Orbit Ring */}
      <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border border-primary/10 animate-spin-slow pointer-events-none" />

      {/* Dashed Ring */}
      <div
        className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-primary/20 animate-spin-slow pointer-events-none"
        style={{
          animationDirection: 'reverse',
          animationDuration: '30s',
        }}
      />

      {/* Coin */}
      <div className="relative z-10 animate-float flex items-center justify-center">
        <img
          src="/images/Coin.png"
          alt="BUZ Token Coin"
          className="block w-full max-w-[300px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[450px] h-auto object-contain select-none"
          draggable={false}
          style={{
            filter:
              'drop-shadow(0 0 50px rgba(3,248,197,0.45))',
          }}
        />
      </div>

      {/* Particles */}
      <span className="absolute top-12 right-10 w-2 h-2 rounded-full bg-primary animate-pulse" />

      <span
        className="absolute bottom-20 left-8 w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <span
        className="absolute top-1/3 left-0 w-1 h-1 rounded-full bg-primary/50 animate-pulse"
        style={{ animationDelay: '2s' }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Modern Crypto Token
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
              The Future of{' '}
              <span className="text-gradient">Digital Value</span>{' '}
              Starts with BUZ
            </h1>

            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Experience fast, secure, and community-powered crypto built for today's investors. BUZ combines cutting-edge technology with a thriving ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-dark font-bold text-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Buy BUZ
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full glass border border-primary/30 text-white font-semibold text-sm hover:border-primary/60 hover:shadow-glow-sm transition-all duration-300"
              >
                View Whitepaper
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="order-first lg:order-last overflow-visible">
            <CoinVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
