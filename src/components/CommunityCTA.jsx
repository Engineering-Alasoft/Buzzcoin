export default function CommunityCTA() {
  return (
    <section id="community" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
          <div className="glass rounded-3xl p-8 md:p-14 text-center border border-primary/20 shadow-glow-sm">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Join the Movement</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-4">
              Be Part of the <span className="text-gradient">BUZ Community</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Connect with thousands of holders, get early updates, and help shape the future of the BUZ ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-dark font-bold text-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Join Telegram
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full glass border border-primary/30 text-white font-semibold text-sm hover:border-primary/60 hover:shadow-glow-sm transition-all duration-300"
              >
                Follow on X
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                24,500+ Holders
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Active Community
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Weekly Updates
              </span>
            </div>
          </div>
      </div>
    </section>
  );
}
