import type { MetadataRoute } from 'next';
import { getActiveProducts } from '@/features/products/api';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tu-proyecto.web.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getActiveProducts();

  const productUrls: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/productos/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...productUrls,
  ];
}
