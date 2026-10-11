import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActiveProducts, getProductBySlug } from '@/features/products/api';
import { getCategories } from '@/features/categories/api';
import { ImageStack } from '@/components/ImageStack';
import { ImageCarousel } from '@/components/ImageCarousel';
import { ContactButtons } from '@/components/ContactButtons';
import { ProductAccordion } from '@/components/ProductAccordion';
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const products = await getActiveProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: 'Producto no encontrado' };

  return {
    title: product.name,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | PIERA`,
      description: product.description.slice(0, 160),
      images: product.images[0] ? [{ url: product.images[0], alt: product.name }] : [],
    },
  };
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function ProductPage({ params }: PageProps) {
  const [product, categories] = await Promise.all([getProductBySlug(params.slug), getCategories()]);

  if (!product) notFound();

  const category = categories.find((c) => c.id === product.categoryId);

  const accordionItems = [
    {
      title: 'Descripción',
      content: product.description,
    },
    ...(product.composicion ? [{ title: 'Composición', content: product.composicion }] : []),
    ...(product.cuidado && product.cuidado.length > 0
      ? [{ title: 'Cuidado', content: product.cuidado }]
      : []),
    {
      title: 'Consultas y disponibilidad',
      content:
        'Para conocer disponibilidad y métodos de pago, contáctanos directamente por WhatsApp. Respondemos en menos de 24 horas.',
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Breadcrumb */}
      <nav className="px-4 py-4 font-sans text-xs text-muted uppercase tracking-widest flex items-center gap-2">
        <Link href="/" className="hover:text-terracotta transition-colors">
          Catálogo
        </Link>
        {category && (
          <>
            <span>/</span>
            <span>{category.name}</span>
          </>
        )}
      </nav>

      {/* Layout principal: imágenes | panel sticky */}
      <div className="flex flex-col md:flex-row">
        {/* Mobile: carrusel swipeable. Desktop: stack vertical */}
        <div className="w-full md:w-[62%]">
          <div className="md:hidden">
            <ImageCarousel images={product.images} productName={product.name} />
          </div>
          <div className="hidden md:block">
            <ImageStack images={product.images} productName={product.name} />
          </div>
        </div>

        {/* Panel sticky con info */}
        <div className="w-full md:w-[38%] px-4 md:px-8 py-6 md:py-0">
          <div className="md:sticky md:top-16 flex flex-col gap-5 py-4 md:py-8">
            {/* Badge */}
            {product.badge && (
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta">
                {product.badge}
              </span>
            )}

            {/* SKU */}
            {product.sku && (
              <p className="font-sans text-xs text-muted tracking-widest uppercase">
                {product.sku}
              </p>
            )}

            {/* Nombre */}
            <h1 className="font-heading text-2xl sm:text-3xl text-soft-black leading-snug uppercase tracking-wide">
              {product.name}
            </h1>

            {/* Precio */}
            {product.price !== undefined && (
              <p className="font-sans text-xl font-medium text-soft-black">
                {formatPrice(product.price)}
              </p>
            )}

            {/* Tallas */}
            {product.tallas && (
              <div className="flex flex-col gap-1">
                <p className="font-sans text-xs text-muted uppercase tracking-widest">Talla</p>
                <p className="font-sans text-sm text-soft-black font-medium">{product.tallas}</p>
              </div>
            )}

            {/* CTA principal */}
            <ContactButtons product={product} />

            {/* Separador */}
            <hr className="border-border" />

            {/* Acordeones */}
            <ProductAccordion items={accordionItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
