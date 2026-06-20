import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590643571056', icon: FaFacebook },
  { name: 'X', href: 'https://x.com/buzzzcoin', icon: FaXTwitter },
  { name: 'Telegram', href: 'https://t.me/Buzzzcoin', icon: FaTelegram },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/10">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
              href="#home"
              className="flex items-center justify-center md:justify-start shrink-0"
            >
              <img
                src="/images/Nav_logo.webp"
                alt="BUZ"
                className="h-8 lg:h-10 w-auto transition-opacity hover:opacity-90"
              />
            </a>
            <p className="text-white/40 text-sm max-w-xs">
              The future of digital value. Fast, secure, and community-powered.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass border border-primary/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} BUZ. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
