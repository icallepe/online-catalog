'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-heading text-2xl tracking-[0.25em] uppercase text-soft-black">
              PIERA
            </p>
          </div>
          <div className="font-sans text-xs text-muted space-y-1 text-right">
            <p>¿Preguntas? Contáctanos directamente en cada producto.</p>
            <p>© {new Date().getFullYear()} Piera. Todos los derechos reservados.</p>
          </div>
        </div>

        <nav
          aria-label="Páginas legales"
          className="mt-8 pt-6 border-t border-border flex flex-wrap gap-x-6 gap-y-2"
        >
          <Link
            href="/privacidad/"
            className="font-sans text-xs text-muted hover:text-soft-black transition-colors uppercase tracking-widest"
          >
            Política de Privacidad
          </Link>
          <Link
            href="/terminos/"
            className="font-sans text-xs text-muted hover:text-soft-black transition-colors uppercase tracking-widest"
          >
            Términos y Condiciones
          </Link>
          <Link
            href="/politica-cookies/"
            className="font-sans text-xs text-muted hover:text-soft-black transition-colors uppercase tracking-widest"
          >
            Política de Cookies
          </Link>
          <Link
            href="/politica-reembolso/"
            className="font-sans text-xs text-muted hover:text-soft-black transition-colors uppercase tracking-widest"
          >
            Política de Reembolso
          </Link>
          <button
            onClick={() => {
              try {
                localStorage.removeItem('cookie_consent');
              } catch {}
              window.location.reload();
            }}
            className="font-sans text-xs text-muted hover:text-soft-black transition-colors uppercase tracking-widest"
          >
            Gestionar Cookies
          </button>
        </nav>
      </div>
    </footer>
  );
}
