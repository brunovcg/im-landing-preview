import './Home.css';
import Footer from 'layouts/footer/Footer';
import FeaturedBy from './components/featured-by/FeaturedBy';
import Presentation from './components/presentation/Presentation';
import FAQ from './components/faq/FAQ';
import WhatIsInvestorMachine from './components/what-is-investor-machine/WhatIsInvestorMachine';
import Testimonials from './components/testimonials/Testimonials';
import Community from './components/community/Community';
import GetStarted from './components/get-started/GetStarted';
import LeadGeneration from './components/lead-generation/LeadGeneration';

export default function Home() {
  return (
    <div className="im-home">
      <Presentation />
      <FeaturedBy />
      <LeadGeneration />
      <Testimonials />
      <Community />
      <GetStarted />
      <WhatIsInvestorMachine />
      <FAQ />
      <Footer />
    </div>
  );
}
