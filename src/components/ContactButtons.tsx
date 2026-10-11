import type { Product } from '@/features/products/types';

interface ContactButtonsProps {
  product: Product;
}

function buildWhatsAppUrl(product: Product): string {
  const price = product.price
    ? new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0,
      }).format(product.price)
    : '';

  const lines = [
    `Hola! Me interesa este producto de PIERA:`,
    ``,
    `*${product.name}*`,
    product.sku ? `SKU: ${product.sku}` : '',
    price ? `Precio: ${price}` : '',
    product.tallas ? `Talla: ${product.tallas}` : '',
    product.composicion ? `Composición: ${product.composicion}` : '',
    ``,
    `¿Está disponible?`,
  ].filter((l) => l !== undefined);

  const text = encodeURIComponent(lines.join('\n'));
  const phone = (product.contactWhatsapp ?? '').replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${text}`;
}

export function ContactButtons({ product }: ContactButtonsProps) {
  if (!product.contactWhatsapp) return null;

  return (
    <div className="flex flex-col gap-3">
      <a
        href={buildWhatsAppUrl(product)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-soft-black text-white px-6 py-4 font-sans text-xs uppercase tracking-widest hover:bg-soft-black/80 transition-colors"
      >
        <WhatsAppIcon />
        Consultar por WhatsApp
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.124 1.529 5.852L0 24l6.335-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.668-.505-5.2-1.387l-.373-.22-3.862.92.957-3.768-.243-.387A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
