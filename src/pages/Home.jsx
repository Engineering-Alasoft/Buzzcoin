import Hero from '../components/Hero';
import ContractBar from '../components/ContractBar';
import Partners from '../components/Partners';
import WhyBuzz from '../components/WhyBuzz';
import HowToBuy from '../components/HowToBuy';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import FAQ from '../components/FAQ';
import CommunityCTA from '../components/CommunityCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ContractBar />
      <Partners />
      <WhyBuzz />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <CommunityCTA />
    </>
  );
}
