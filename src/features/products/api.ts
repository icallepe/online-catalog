import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Product } from './types';

export async function getActiveProducts(): Promise<Product[]> {
  const q = query(collection(db, 'products'), where('status', '==', 'active'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Product));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const q = query(
    collection(db, 'products'),
    where('slug', '==', slug),
    where('status', '==', 'active')
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Product;
}

export async function getActiveProductSlugs(): Promise<string[]> {
  const products = await getActiveProducts();
  return products.map((p) => p.slug);
}
