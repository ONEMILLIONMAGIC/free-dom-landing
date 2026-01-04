import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Wallet, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { heroData } from '../../data/mock';

const HeroSection = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-500/30 rotate-45 float-element" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-pink-500/30 rotate-12 float-element" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-lime-500/30 -rotate-12 float-element" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-yellow-500/30 rotate-45 float-element" style={{ animationDelay: '0.5s' }} />
        
        {/* Neon circles */}
        <div className="absolute top-1/4 right-10 w-4 h-4 rounded-full bg-cyan-400 blur-sm animate-pulse" />
        <div className="absolute bottom-1/3 left-20 w-3 h-3 rounded-full bg-pink-500 blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-lime-400 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glitch Title */}
        <div className={`mb-8 transition-all duration-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1
            className={`font-['Orbitron'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider leading-none ${
              glitchActive ? 'glitch-text' : ''
            }`}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
              {heroData.title}
            </span>
          </h1>
          <h2
            className="mt-4 font-['Orbitron'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-500 flicker-text"
            style={{ animationDelay: '0.5s' }}
          >
            {heroData.subtitle}
          </h2>
        </div>

        {/* Subtitle with icons */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12 transition-all duration-500 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Globe className="w-5 h-5 text-cyan-400" />
            <span className="font-['Share_Tech_Mono'] text-sm sm:text-base">Международные переводы</span>
          </div>
          <span className="text-pink-500 text-2xl">•</span>
          <div className="flex items-center gap-2 text-gray-400">
            <Wallet className="w-5 h-5 text-lime-400" />
            <span className="font-['Share_Tech_Mono'] text-sm sm:text-base">Криптовалюта</span>
          </div>
          <span className="text-pink-500 text-2xl">•</span>
          <div className="flex items-center gap-2 text-gray-400">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="font-['Share_Tech_Mono'] text-sm sm:text-base">Мгновенный вывод</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-500 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            onClick={scrollToContact}
            className="relative px-10 py-6 bg-transparent border-2 border-cyan-400 text-cyan-400 font-['Orbitron'] font-bold text-lg uppercase tracking-widest overflow-hidden group hover:text-black transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {heroData.cta}
            </span>
          </Button>
          <Button
            onClick={scrollToServices}
            variant="ghost"
            className="px-8 py-6 text-pink-500 font-['Share_Tech_Mono'] uppercase tracking-wider hover:bg-pink-500/10 border border-pink-500/50 hover:border-pink-500 transition-all duration-300"
          >
            Наши услуги
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={scrollToServices} className="text-cyan-400 hover:text-pink-500 transition-colors">
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-cyan-500/50" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-pink-500/50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-pink-500/50" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-cyan-500/50" />
    </section>
  );
};

export default HeroSection;
