'use client';

import { useEffect, useState } from 'react';

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen min-h-[540px] flex flex-col items-center justify-end pb-16 overflow-hidden bg-deep-blue">
      {/* Fondo — reemplazar con <Image> cuando haya foto de campaña */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/60 via-deep-blue/30 to-deep-blue/80" />

      {/* Patrón decorativo sutil */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 40%, #CBB895 0%, transparent 50%),
                            radial-gradient(circle at 75% 70%, #B56F58 0%, transparent 45%)`,
        }}
      />

      {/* Contenido */}
      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <button
          onClick={scrollToProducts}
          className="font-sans text-xs uppercase tracking-[0.3em] text-ivory border border-ivory/50 px-8 py-3 hover:bg-ivory hover:text-deep-blue transition-all duration-300"
        >
          Ver colección
        </button>
      </div>

      {/* Flecha scroll */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/50 hover:text-ivory transition-colors animate-bounce"
        aria-label="Ir a productos"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
