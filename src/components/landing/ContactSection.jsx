import React, { useEffect, useRef, useState } from 'react';
import { Send, MessageCircle, Zap, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { contactData } from '../../data/mock';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 2500);
    return () => clearInterval(interval);
  }, [isVisible]);

  const handleTelegramClick = () => {
    window.open(`https://t.me/${contactData.telegram.replace('@', '')}`, '_blank');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Section header */}
          <span className="inline-flex items-center gap-2 font-['Share_Tech_Mono'] text-lime-400 text-sm uppercase tracking-[0.3em] mb-6">
            <Zap className="w-4 h-4" />
            СВЯЗАТЬСЯ
            <Zap className="w-4 h-4" />
          </span>

          <h2 className="font-['Orbitron'] text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-4">
            <span className="text-white">{contactData.tagline}</span>
          </h2>

          <p className="font-['Share_Tech_Mono'] text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Напишите нам в Telegram и получите мгновенную консультацию
          </p>

          {/* Main contact card */}
          <div
            className={`relative max-w-xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-gray-900/80 via-black to-gray-900/80 border-4 ${
              glitchActive ? 'border-pink-500' : 'border-cyan-500'
            } transition-colors duration-100`}
          >
            {/* Animated border effect */}
            <div className="absolute inset-0 border border-cyan-400/20 m-2" />
            <div className="absolute inset-0 border border-pink-400/10 m-4" />

            {/* Glitch lines */}
            <div className="absolute top-1/4 left-0 right-0 h-px bg-cyan-500/30 animate-pulse" />
            <div className="absolute top-3/4 left-0 right-0 h-px bg-pink-500/30 animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Icon */}
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 border-2 border-cyan-400 flex items-center justify-center mb-8">
              <MessageCircle className="w-10 h-10 text-cyan-400" />
            </div>

            {/* Telegram handle - MAIN FOCUS */}
            <div
              className={`font-['Press_Start_2P'] text-2xl sm:text-3xl md:text-4xl mb-8 ${
                glitchActive ? 'glitch-text text-pink-400' : 'text-cyan-400'
              }`}
              style={{
                textShadow: glitchActive
                  ? '3px 0 #ff00ff, -3px 0 #00ffff'
                  : '0 0 20px rgba(0,255,255,0.7), 0 0 40px rgba(0,255,255,0.4)',
              }}
            >
              {contactData.telegram}
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleTelegramClick}
              className="relative px-12 py-6 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-pink-500 hover:to-pink-600 text-black font-['Orbitron'] font-bold text-xl uppercase tracking-wider transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Send className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                {contactData.cta}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-lime-400" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-lime-400" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-lime-400" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-lime-400" />
          </div>

          {/* Sub-text */}
          <p className="mt-8 font-['Share_Tech_Mono'] text-gray-500 text-sm">
            Отвечаем в течение <span className="text-lime-400">5 минут</span> • 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
