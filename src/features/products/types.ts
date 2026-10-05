export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  price?: number;
  images: string[];
  contactWhatsapp?: string;
  contactEmail?: string;
  status: 'active' | 'draft';
  // Reservados — no usados aún
  stock?: number;
  sku?: string;
  createdAt?: string;
  updatedAt?: string;
}
