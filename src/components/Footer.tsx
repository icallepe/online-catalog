export function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-ivory">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-heading text-2xl tracking-[0.25em] uppercase text-soft-black">
              CALA
            </p>
            <p className="mt-2 font-sans text-xs text-muted tracking-wide">
              Pantalones de diseño atemporal
            </p>
          </div>
          <div className="font-sans text-xs text-muted space-y-1 text-right">
            <p>¿Preguntas? Contáctanos directamente en cada producto.</p>
            <p>© {new Date().getFullYear()} Cala. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
