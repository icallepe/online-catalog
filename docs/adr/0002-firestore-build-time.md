# ADR 0002 — Firestore leído en tiempo de build

**Fecha:** 2024-01-01  
**Estado:** Aceptado

## Contexto

Necesitamos una fuente de datos que sea fácil de gestionar, escalable en el futuro y que funcione con la exportación estática de Next.js.

## Decisión

Usar Firestore como única fuente de datos, leído durante `next build` mediante el SDK web de Firebase (credenciales públicas). Las páginas se generan como HTML estático.

Los datos se cargan en Firestore con `npm run seed` desde archivos JSON locales.

## Consecuencias

**Positivas:**
- Las credenciales de Firebase (NEXT_PUBLIC_*) son seguras para exponer: solo identifican el proyecto. El acceso real lo controlan las reglas de Firestore.
- Sin backend propio: el hosting es 100% estático
- Firestore es la misma base que usaremos en fases futuras (panel admin, etc.)

**Negativas / compromisos:**
- Actualizar productos requiere un nuevo build + deploy
- Sin paginación real en la V1 (todos los productos activos se cargan en el build)

## Alternativas consideradas

- **JSON local en /data:** sin Firestore, pero impide migrar a panel admin en el futuro
- **Contentful / Sanity:** CMSs externos de pago o con límites en tier gratuito
