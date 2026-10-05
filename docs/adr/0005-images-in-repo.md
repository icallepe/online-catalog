# ADR 0005 — Imágenes en el repositorio

**Fecha:** 2024-01-01  
**Estado:** Aceptado

## Contexto

Las imágenes de los productos necesitan estar disponibles en el sitio estático. Podríamos usar Firebase Storage, un CDN externo, o guardarlas en el repo.

## Decisión

Las imágenes viven en `/public/images/` dentro del repositorio, en formato WebP (ya optimizadas antes de commitear). El JSON almacena solo la ruta (`/images/archivo.webp`). Se configura `images.unoptimized: true` en Next.js para compatibilidad con la exportación estática.

## Consecuencias

**Positivas:**
- Cero dependencias externas para imágenes en la V1
- Sin costo adicional (Firebase Hosting sirve los assets del build)
- Rutas simples y predecibles
- Las imágenes quedan versionadas en git

**Negativas / compromisos:**
- El repositorio crece con las imágenes (mitigar con WebP optimizado ≤200KB por imagen)
- Sin transformaciones dinámicas de imagen (resize, crop en el servidor)
- Para catálogos muy grandes (>200 productos) conviene migrar a Firebase Storage + CDN

## Alternativas consideradas

- **Firebase Storage:** más escalable, pero añade complejidad y requiere Cloud Functions para acceso seguro
- **Cloudinary / Imgix:** óptimos para transformaciones, pero costo adicional y dependencia externa
