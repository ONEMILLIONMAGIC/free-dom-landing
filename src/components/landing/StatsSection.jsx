import React, { useEffect, useRef, useState } from 'react';
import { statsData } from '../../data/mock';

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    statsData.forEach((stat, index) => {
      const numericValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, duration / steps);

      return () => clearInterval(timer);
    });
  }, [isVisible]);

  const formatValue = (originalValue, countedValue) => {
    if (originalValue.includes('K+')) return `${countedValue}K+`;
    if (originalValue.includes('+')) return `${countedValue}+`;
    if (originalValue.includes('%')) return `${countedValue}%`;
    if (originalValue.includes('/')) return originalValue;
    return countedValue.toString();
  };

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#0a0a0a] via-[#0f0518] to-[#0a0a0a] overflow-hidden"
    >
      {/* Animated background lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent w-full"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-['Share_Tech_Mono'] text-pink-400 text-sm uppercase tracking-[0.3em] mb-4">
            // ЦИФРЫ
          </span>
          <h2 className="font-['Orbitron'] text-4xl sm:text-5xl font-black uppercase">
            <span className="text-white">Наша </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
              статистика
            </span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Glowing border box */}
              <div className="absolute inset-0 border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors duration-500">
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-pink-500" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-pink-500" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-pink-500" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-pink-500" />
              </div>

              {/* Value */}
              <div className="relative z-10">
                <span
                  className={`block font-['Orbitron'] text-4xl sm:text-5xl lg:text-6xl font-black ${
                    index % 2 === 0 ? 'text-cyan-400' : 'text-pink-400'
                  } group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    textShadow: index % 2 === 0
                      ? '0 0 20px rgba(0,255,255,0.5)'
                      : '0 0 20px rgba(236,72,153,0.5)',
                  }}
                >
                  {formatValue(stat.value, counts[index])}
                </span>
                <span className="block mt-3 font-['Share_Tech_Mono'] text-gray-400 text-sm uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-cyan-500/5 to-pink-500/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
