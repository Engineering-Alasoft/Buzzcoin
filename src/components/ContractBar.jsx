import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

const CONTRACT = '0x79fa1Ea465a08b319595BAeDbb32009E6dde0F42';

export default function ContractBar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="relative py-6 border-y border-primary/10 bg-card/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Live
            </span>
            <span className="text-white/50 text-sm font-medium">Contract Address</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto max-w-full">
            <code className="flex-1 sm:flex-none glass rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white/80 font-mono truncate sm:max-w-md">
              {CONTRACT}
            </code>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy contract address"
              className="shrink-0 w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-primary hover:text-dark hover:bg-primary transition-all duration-300"
            >
              {copied ? <FaCheck className="w-4 h-4" /> : <FaCopy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
