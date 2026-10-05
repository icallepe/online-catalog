import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/features/products/types';

interface ProductCardProps {
  product: Product;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(price);
}

export function ProductCard({ product }: ProductCardProps) {
  const thumbnail = product.images[0] ?? '/images/placeholder.svg';

  return (
    <Link href={`/productos/${product.slug}/`} className="group block">
      {/* Imagen */}
      <div className="relative aspect-[3/4] bg-surface overflow-hidden">
        <Image
          src={thumbnail}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Información */}
      <div className="mt-3 space-y-1">
        <p className="text-xs uppercase tracking-widest text-muted">
          {product.sku ?? ''}
        </p>
        <h3 className="text-sm font-medium text-ink leading-tight group-hover:underline underline-offset-2">
          {product.name}
        </h3>
        {product.price !== undefined && (
          <p className="text-sm text-ink">{formatPrice(product.price)}</p>
        )}
      </div>
    </Link>
  );
}
