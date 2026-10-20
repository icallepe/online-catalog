'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem('cookie_consent')) {
        setVisible(true);
      }
    } catch {
      // localStorage may be unavailable in private mode
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookie_consent', 'all');
    } catch {}
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('cookie_consent', 'essential');
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="font-sans text-xs text-muted leading-relaxed max-w-xl">
          Usamos tecnologías esenciales (Firebase) para que el sitio funcione correctamente. No
          usamos cookies de seguimiento ni publicidad.{' '}
          <Link
            href="/politica-cookies/"
            className="underline hover:text-terracotta transition-colors"
          >
            Política de cookies
          </Link>
          .
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="font-sans text-xs uppercase tracking-widest text-muted hover:text-soft-black transition-colors px-4 py-2 border border-border hover:border-soft-black"
          >
            Solo esenciales
          </button>
          <button
            onClick={handleAccept}
            className="font-sans text-xs uppercase tracking-widest bg-soft-black text-white px-4 py-2 hover:bg-soft-black/80 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
