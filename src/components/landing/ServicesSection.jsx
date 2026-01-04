import React, { useEffect, useRef, useState } from 'react';
import { Globe, Bitcoin, Sparkles, Repeat, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/mock';

const iconMap = {
  globe: Globe,
  bitcoin: Bitcoin,
  sparkles: Sparkles,
  repeat: Repeat,
};

const ServiceCard = ({ service, index, isVisible }) => {
  const IconComponent = iconMap[service.icon] || Sparkles;
  const isHighlighted = service.highlighted;

  return (
    <div
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`relative p-6 sm:p-8 rounded-lg overflow-hidden ${
          isHighlighted
            ? 'bg-gradient-to-br from-pink-900/40 via-black to-cyan-900/40 border-2 border-pink-500'
            : 'bg-gradient-to-br from-gray-900/80 to-black border-2 border-cyan-500/30'
        } hover:border-cyan-400 transition-all duration-500 h-full`}
      >
        {/* Monitor effect - top bar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-cyan-500/30 flex items-center px-3 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-lime-500/80" />
          <span className="ml-auto font-['Share_Tech_Mono'] text-xs text-gray-500">
            SERVICE_{String(index + 1).padStart(2, '0')}.exe
          </span>
        </div>

        {/* Content */}
        <div className="pt-8">
          {/* Icon container */}
          <div
            className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
              isHighlighted
                ? 'bg-pink-500/20 border border-pink-500'
                : 'bg-cyan-500/10 border border-cyan-500/50'
            } group-hover:scale-110 transition-transform duration-300`}
          >
            <IconComponent
              className={`w-8 h-8 ${
                isHighlighted ? 'text-pink-400' : 'text-cyan-400'
              }`}
            />
          </div>

          {/* Title */}
          <h3
            className={`font-['Orbitron'] text-lg sm:text-xl font-bold mb-4 ${
              isHighlighted
                ? 'text-pink-400 glitch-text'
                : 'text-cyan-400'
            }`}
            style={isHighlighted ? { animationDuration: '3s' } : {}}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-['Share_Tech_Mono'] text-gray-400 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Action link */}
          <button className="flex items-center gap-2 text-cyan-400 hover:text-pink-400 font-['Share_Tech_Mono'] text-sm uppercase tracking-wider group/link transition-colors">
            <span>Подробнее</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Glitch overlay for highlighted card */}
        {isHighlighted && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-0 right-0 h-1 bg-pink-500/20 animate-pulse" />
            <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-cyan-500/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        )}

        {/* Hover glow effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
            isHighlighted
              ? 'shadow-[inset_0_0_60px_rgba(236,72,153,0.2)]'
              : 'shadow-[inset_0_0_60px_rgba(0,255,255,0.1)]'
          }`}
        />
      </div>

      {/* Special badge for highlighted */}
      {isHighlighted && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-pink-500 text-black px-4 py-1 font-['Orbitron'] text-xs font-bold uppercase tracking-wider rotate-12 shadow-[0_0_20px_rgba(236,72,153,0.5)]">
            HOT
          </div>
        </div>
      )}
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-['Share_Tech_Mono'] text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4">
            // НАШИ УСЛУГИ
          </span>
          <h2 className="font-['Orbitron'] text-4xl sm:text-5xl md:text-6xl font-black uppercase">
            <span className="text-white">Что мы </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              предлагаем
            </span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
