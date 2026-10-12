export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  price?: number;
  images: string[];
  thumbnail?: string;
  contactWhatsapp?: string;
  contactEmail?: string;
  status: 'active' | 'draft';
  sku?: string;
  badge?: string;
  tallas?: string;
  composicion?: string;
  cuidado?: string[];
  createdAt?: string;
  updatedAt?: string;
}
