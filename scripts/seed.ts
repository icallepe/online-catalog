/**
 * Seed script: sube data/categories.json y data/products.json a Firestore.
 * Requiere serviceAccountKey.json en la raíz del proyecto (no commitear).
 *
 * Uso: npm run seed
 */

import { initializeApp, cert, type ServiceAccount } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Carga las credenciales del servicio (solo para scripts locales)
const serviceAccount = JSON.parse(
  readFileSync(resolve(__dirname, '../serviceAccountKey.json'), 'utf-8')
) as ServiceAccount;

initializeApp({ credential: cert(serviceAccount) });

const db = getFirestore();

type RawCategory = {
  id: string;
  name: string;
  slug: string;
  order: number;
};

type RawProduct = {
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
  sku?: string;
  createdAt?: string;
  updatedAt?: string;
};

async function seedCollection<T extends { id: string }>(
  collectionName: string,
  items: T[]
): Promise<void> {
  // Borra todos los documentos existentes antes de insertar
  const existing = await db.collection(collectionName).listDocuments();
  if (existing.length > 0) {
    const deleteBatch = db.batch();
    existing.forEach((ref) => deleteBatch.delete(ref));
    await deleteBatch.commit();
  }

  const batch = db.batch();
  for (const item of items) {
    const { id, ...data } = item;
    const ref = db.collection(collectionName).doc(id);
    batch.set(ref, {
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
  }
  await batch.commit();
  console.log(`✓ ${collectionName}: ${items.length} documentos subidos`);
}

async function main() {
  const categories: RawCategory[] = JSON.parse(
    readFileSync(resolve(__dirname, '../data/categories.json'), 'utf-8')
  );
  const products: RawProduct[] = JSON.parse(
    readFileSync(resolve(__dirname, '../data/products.json'), 'utf-8')
  );

  console.log('Iniciando seed de Firestore...\n');
  await seedCollection('categories', categories);
  await seedCollection('products', products);
  console.log('\n✅ Seed completado');
  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Error en seed:', err);
  process.exit(1);
});
