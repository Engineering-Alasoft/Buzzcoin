import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-[#010b11]/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center shrink-0"
            >
              <img
                src="/images/Nav_logo.png"
                alt="BUZ"
                className="h-8 lg:h-10 w-auto transition-opacity hover:opacity-90"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(3,248,197,0.4)]"
              >
                Buy BUZ
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden rounded-xl border border-primary/20 p-2.5 text-primary"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-[#010b11]/95 backdrop-blur-xl transition-all duration-300 ${menuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
          }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-semibold text-white hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-dark shadow-[0_0_30px_rgba(3,248,197,0.4)]"
          >
            Buy BUZ
          </a>
        </div>
      </div>
    </>
  );
}