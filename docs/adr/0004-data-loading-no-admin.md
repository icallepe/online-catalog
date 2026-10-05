# ADR 0004 — Carga de datos sin panel de administración

**Fecha:** 2024-01-01  
**Estado:** Aceptado

## Contexto

En la V1 del catálogo no existe panel de admin. Sin embargo, los datos necesitan estar en Firestore para que el build los pueda leer.

## Decisión

Los datos se gestionan mediante:

1. **Archivos JSON** en `/data/products.json` y `/data/categories.json` (fuente de verdad local)
2. **Script `npm run seed`** que usa Firebase Admin SDK para subir los JSON a Firestore
3. El script requiere `serviceAccountKey.json` (no commitear), obtenido desde la consola de Firebase

## Consecuencias

**Positivas:**
- Proceso simple, sin UI que desarrollar en la V1
- Los JSON sirven como respaldo versionado en git
- El script es idempotente (sobreescribe con `set`)

**Negativas / compromisos:**
- Requiere acceso a la terminal y al `serviceAccountKey.json` para actualizar datos
- No es apto para usuarios no técnicos

## Alternativas consideradas

- **Panel admin en la V1:** fuera de scope, añade complejidad innecesaria
- **Importación directa desde la consola de Firebase:** tedioso para múltiples documentos
