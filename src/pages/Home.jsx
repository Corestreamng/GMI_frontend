import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/sections/HeroSection";
import NewsMentions from "../components/sections/NewsMentions";
import ProgramsSection from "../components/sections/ImpactSectionStory";
import ImpactHighlights from "../components/sections/ProgramsSection";


import PartnersMarquee from "../components/sections/PartnersMarquee";

import ScrollToTop from "../components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      
      <Navbar />

      <main>
        <HeroSection />
        <NewsMentions />
        <ProgramsSection />
        <ImpactHighlights />
        <PartnersMarquee />

        
      </main>

      <Footer />
       <ScrollToTop />
    </>
  );
}
