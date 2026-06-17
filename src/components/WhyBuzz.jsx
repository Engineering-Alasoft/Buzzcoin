import { useState } from 'react';

/*
  Image paths (place in public/images/):
  - why-buz-unlimited-scale.png  → 500×500px  (top + bottom horizontal cards)
  - why-buz-fast-transactions
.png      → 400×400px  (middle left card)
  - why-buz-developer-hub.png    → 400×400px  (middle right card)
  - why-buz-creativity.png       → 500×500px  (optional alias for bottom card)

  Use png or png with transparent background for best results.
*/

const features = [
  {
    id: 'fast-transactions',
    layout: 'horizontal',
    image: '/images/1.png',
    imageSize: '500 × 500px',
    title: 'Fast Transactions',
    description:
      "BUZ is built on a high-performance blockchain infrastructure designed to process transactions quickly and efficiently. Whether you're transferring tokens, participating in ecosystem activities, or interacting with future utilities, every transaction is optimized for speed, reliability, and a seamless user experience.",
    button: null,
  },
  {
    id: 'secure-ecosystem',
    layout: 'vertical',
    image: '/images/2.png',
    imageSize: '400 × 400px',
    title: 'Secure Ecosystem',
    description:
      "Security is at the core of the BUZ ecosystem. Built using trusted blockchain technology and transparent smart contract standards, BUZ prioritizes asset protection, network integrity, and user confidence. Our focus is creating a secure environment where holders can participate with peace of mind.",
    button: null,
  },
  {
    id: 'community-driven',
    layout: 'vertical',
    image: '/images/3.png',
    imageSize: '400 × 400px',
    title: 'Community Driven',
    description: "The BUZ community plays a central role in shaping the future of the ecosystem. Through engagement, collaboration, and shared vision, holders contribute to growth, adoption, and innovation. Together, we are building a stronger network powered by collective participation and long-term commitment.",
    button: null,
  },
  {
    id: 'built-for-growth',
    layout: 'horizontal',
    image: '/images/4.png',
    imageSize: '500 × 500px',
    title: 'Built for Growth',
    description: "BUZ is designed with scalability and long-term expansion in mind. As the ecosystem evolves, new opportunities, partnerships, and utilities will strengthen the token's value and reach. Our roadmap focuses on sustainable growth, increasing adoption, and creating lasting utility for the community.",
    button: null,
  },
];

function FeatureImage({ src, alt, sizeLabel, className = '' }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-2xl border border-dashed border-primary/25 bg-[#010b11] ${className}`}
      >
        <svg className="w-10 h-10 text-primary/30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-primary/50 text-xs font-semibold uppercase tracking-wider">Your image here</p>
        <p className="text-white/30 text-xs mt-1">{sizeLabel}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
      onError={() => setHasError(true)}
      loading="lazy"
      decoding="async"
    />
  );
}

function CardButton({ label, href = '#' }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-sm font-semibold text-dark
                 bg-gradient-to-r from-primary to-emerald-300
                 hover:shadow-glow-sm hover:scale-[1.02] transition-all duration-300"
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function HorizontalCard({ feature }) {
  return (
    <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-primary/10 bg-[#00040e] transition-all duration-300 hover:border-primary/30 hover:shadow-glow-sm">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="w-full md:w-[42%] flex justify-center shrink-0">
          <FeatureImage
            src={feature.image}
            alt={feature.title}
            sizeLabel={feature.imageSize}
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] aspect-square"
          />
        </div>

        <div className="w-full md:flex-1 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {feature.title}
          </h3>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed mt-4 max-w-xl md:max-w-none mx-auto md:mx-0">
            {feature.description}
          </p>
          {feature.button && (
            <div className="flex justify-center md:justify-start">
              <CardButton label={feature.button.label} href={feature.button.href} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function VerticalCard({ feature }) {
  return (
    <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-primary/10 bg-[#00040e] h-full transition-all duration-300 hover:border-primary/30 hover:shadow-glow-sm">
      <div className="flex flex-col p-6 sm:p-8 md:p-10 h-full">
        <div className="flex justify-center mb-6 md:mb-8">
          <FeatureImage
            src={feature.image}
            alt={feature.title}
            sizeLabel={feature.imageSize}
            className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] aspect-square"
          />
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
            {feature.title}
          </h3>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed mt-3 flex-1">
            {feature.description}
          </p>
          {feature.button && (
            <CardButton label={feature.button.label} href={feature.button.href} />
          )}
        </div>
      </div>
    </div>
  );
}

export default function WhyBuzz() {
  const [horizontalTop, verticalLeft, verticalRight, horizontalBottom] = features;

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3">
            Why <span className="text-gradient">BUZ</span>?
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Built from the ground up to deliver speed, security, and sustainable growth for every holder.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <HorizontalCard feature={horizontalTop} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <VerticalCard feature={verticalLeft} />
            <VerticalCard feature={verticalRight} />
          </div>

          <HorizontalCard feature={horizontalBottom} />
        </div>
      </div>
    </section>
  );
}
