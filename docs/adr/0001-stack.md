# ADR 0001 — Stack tecnológico

**Fecha:** 2024-01-01  
**Estado:** Aceptado

## Contexto

Necesitamos construir un catálogo de productos MVP que sea rápido, económico de desplegar y fácil de mantener por un equipo pequeño. El sitio es de solo lectura pública en la V1.

## Decisión

- **Framework:** Next.js 14 con App Router y exportación estática (`output: 'export'`)
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** Tailwind CSS v3
- **Base de datos:** Firestore (plan Spark gratuito)
- **Hosting:** Firebase Hosting (plan Spark gratuito)

## Consecuencias

**Positivas:**
- Cero costos de infraestructura en el plan gratuito
- Build estático = máxima velocidad de carga (HTML pre-renderizado)
- TypeScript previene errores en tiempo de compilación
- Tailwind reduce el CSS customizado y acelera el desarrollo

**Negativas / compromisos:**
- La exportación estática impide SSR dinámico y Route Handlers
- Los datos reflejan el estado del build, no tiempo real (requiere rebuild para actualizar)

## Alternativas consideradas

- **Remix + PlanetScale:** más flexible, pero costo de hosting no gratuito
- **Astro + Markdown:** simple pero no permite Firestore como CMS
