export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-xl font-bold tracking-[0.3em] uppercase text-ink">CALA</p>
            <p className="mt-2 text-xs text-muted tracking-wide">
              Moda consciente y atemporal
            </p>
          </div>
          <div className="text-xs text-muted space-y-1">
            <p>¿Preguntas? Contáctanos directamente en cada producto.</p>
            <p>© {new Date().getFullYear()} Cala. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
