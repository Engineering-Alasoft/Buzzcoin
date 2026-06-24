import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function LegalPageLayout({ title, lastUpdated, children }) {
  return (
    <div className="relative min-h-screen bg-dark overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="section-padding pt-28 md:pt-32 pb-8">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors mb-8"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>

            <article className="glass rounded-2xl md:rounded-3xl border border-primary/15 p-6 sm:p-8 md:p-10 shadow-glow-sm">
              <header className="mb-8 pb-6 border-b border-white/10">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{title}</h1>
                <p className="text-white/40 text-sm">Last Updated: {lastUpdated}</p>
              </header>

              <div className="legal-content">{children}</div>
            </article>
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
