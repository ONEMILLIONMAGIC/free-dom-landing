import React from 'react';
import { Zap, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t-2 border-cyan-500/30 py-12 overflow-hidden">
      {/* Background noise */}
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="font-['Orbitron'] text-xl font-bold">
              <span className="text-cyan-400">FREE</span>
              <span className="text-pink-500">DOM</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="font-['Share_Tech_Mono'] text-gray-500 text-sm text-center">
            <span className="text-cyan-400">&copy;</span> 2025 FREEDOM.
            <span className="text-pink-400"> Все права защищены.</span>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-['Share_Tech_Mono'] text-gray-400 hover:text-cyan-400 text-sm uppercase tracking-wider transition-colors"
          >
            Наверх
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Decorative line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        {/* Glitch text effect */}
        <div className="mt-6 text-center">
          <span className="font-['Press_Start_2P'] text-xs text-gray-700 tracking-widest">
            [ SYSTEM_ONLINE ]
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
