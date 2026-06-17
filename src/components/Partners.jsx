const partners = [
  'CoinGecko',
  'DexTools',
  'Uniswap',
  'Etherscan',
  'MetaMask',
  'Chainlink',
];

export default function Partners() {
  const items = [...partners, ...partners];

  return (
    <section className="py-10 border-y border-primary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-white/40 text-xs font-semibold uppercase tracking-[0.25em]">
          Ecosystem & Integrations
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center mx-8 px-6 py-3 rounded-full glass text-white/40 text-sm font-semibold tracking-wide hover:text-primary hover:border-primary/30 transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
