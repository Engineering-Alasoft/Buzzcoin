const stats = [
  { label: 'Market Cap', value: '$12.4M', change: '+8.2%' },
  { label: 'Holders', value: '24,500+', change: '+1,200' },
  { label: 'Total Supply', value: '300M BUZ', change: 'Fixed' },
  { label: 'Volume', value: '$2.1M', change: '24h' },
];

function StatCard({ stat }) {
  return (
    <div className="glass glass-hover rounded-2xl p-5 md:p-6 text-center group">
      <p className="text-white/50 text-xs md:text-sm font-medium uppercase tracking-wider mb-2">
        {stat.label}
      </p>
      <p className="text-2xl md:text-3xl font-extrabold text-white mb-1 group-hover:text-gradient transition-all duration-300">
        {stat.value}
      </p>
      <p className="text-primary text-xs font-semibold">{stat.change}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
