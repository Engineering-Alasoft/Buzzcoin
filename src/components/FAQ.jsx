import { useState } from 'react';

const faqs = [
  {
    question: 'What is BUZ?',
    answer: 'BUZ is a modern crypto token designed for fast transactions, secure ecosystem interactions, and community-driven governance. It powers the entire BUZ digital value network.',
  },
  {
    question: 'How can I buy BUZ?',
    answer: 'You can purchase BUZ through our official DEX link or supported centralized exchanges. Connect your wallet, select the trading pair, and complete your purchase securely.',
  },
  {
    question: 'Is BUZ audited?',
    answer: 'Yes. Our smart contracts have undergone comprehensive third-party security audits. Audit reports are available in our documentation and whitepaper.',
  },
  {
    question: 'What blockchain is BUZ built on?',
    answer: 'BUZ is deployed on a high-performance EVM-compatible blockchain, ensuring fast finality, low fees, and broad wallet compatibility.',
  },
  {
    question: 'How does staking work?',
    answer: 'Holders can stake BUZ to earn rewards and participate in governance. Staking tiers unlock additional benefits including voting power and exclusive ecosystem access.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`glass rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/30 shadow-glow-sm' : 'border-primary/10'}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'border-primary bg-primary/10 text-primary rotate-180'
                        : 'border-white/10 text-white/50'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-white/50 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
