import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '../ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b-2 border-cyan-500/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <Zap className="w-8 h-8 text-cyan-400 group-hover:text-pink-500 transition-colors duration-300" />
            <span className="font-['Orbitron'] text-2xl font-black tracking-wider">
              <span className="text-cyan-400">FREE</span>
              <span className="text-pink-500">DOM</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['services', 'stats', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative font-['Share_Tech_Mono'] text-sm uppercase tracking-widest text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item === 'services' && 'Услуги'}
                {item === 'stats' && 'Статистика'}
                {item === 'contact' && 'Контакт'}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-['Orbitron'] font-bold tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] px-6"
          >
            НАЧАТЬ
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-pink-500 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b-2 border-cyan-500/50 transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {['services', 'stats', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="font-['Share_Tech_Mono'] text-lg uppercase tracking-widest text-gray-300 hover:text-cyan-400 py-2 text-left transition-colors"
            >
              {item === 'services' && 'Услуги'}
              {item === 'stats' && 'Статистика'}
              {item === 'contact' && 'Контакт'}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('contact')}
            className="mt-4 bg-cyan-400 text-black font-['Orbitron'] font-bold tracking-wider hover:bg-cyan-300"
          >
            НАЧАТЬ
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
