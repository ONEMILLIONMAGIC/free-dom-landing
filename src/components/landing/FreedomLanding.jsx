import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import StatsSection from './StatsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const FreedomLanding = () => {
  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden scanlines">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default FreedomLanding;
