import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContractBar from './components/ContractBar';
import Stats from './components/Stats';
import Partners from './components/Partners';
import WhyBuzz from './components/WhyBuzz';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import CommunityCTA from './components/CommunityCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark overflow-x-hidden">
      {/* Global ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ContractBar />
          {/* <Stats /> */}
          <Partners />
          <WhyBuzz />
          <HowToBuy />
          <Tokenomics />
          <Roadmap />
          <FAQ />
          <CommunityCTA />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
