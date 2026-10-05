# CALA — Catálogo de Productos

Catálogo de moda estático generado con Next.js, servido desde Firebase Hosting y con datos en Firestore.

## Stack

| Tecnología | Rol |
|---|---|
| Next.js 14 (App Router) | Framework, exportación estática |
| TypeScript | Tipado estricto |
| Tailwind CSS | Estilos |
| Firestore | Base de datos (lectura pública) |
| Firebase Hosting | Hosting (plan Spark gratuito) |

## Requisitos

- Node.js ≥ 18
- npm ≥ 9
- Proyecto Firebase con Firestore habilitado

## Correr en local

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd cala-catalog

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.local.example .env.local
# Editar .env.local con las credenciales de tu proyecto Firebase

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Subir datos a Firestore (seed)

El seed requiere un `serviceAccountKey.json` con credenciales de Admin SDK.

```bash
# 1. Ir a Firebase Console → Configuración del proyecto → Cuentas de servicio
#    → Generar nueva clave privada → Descargar JSON

# 2. Guardar el JSON como serviceAccountKey.json en la raíz del proyecto
#    (está en .gitignore — NO lo commitees)

# 3. Editar data/products.json y data/categories.json con tus productos reales

# 4. Ejecutar el seed
npm run seed
```

## Imágenes de productos

Las imágenes viven en `/public/images/`. Deben ser WebP, optimizadas antes de commitear (≤200KB por imagen recomendado).

En el JSON de productos, la ruta es relativa: `"/images/mi-producto.webp"`.

Los archivos `.svg` en `/public/images/` son placeholders — reemplázalos con imágenes reales.

## Despliegue a Firebase Hosting

### Primera vez (configuración manual)

```bash
# Instalar Firebase CLI (global)
npm install -g firebase-tools

# Login
firebase login

# Actualizar .firebaserc con tu project ID
# Editar .firebaserc → "default": "tu-project-id"

# Publicar reglas de Firestore
firebase deploy --only firestore:rules

# Build + deploy
npm run build
firebase deploy --only hosting
```

### Deploy automático (GitHub Actions)

Agrega los siguientes Secrets en tu repositorio de GitHub
(`Settings → Secrets and variables → Actions`):

| Secret | Descripción |
|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | API Key de Firebase |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Auth Domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Storage Bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Messaging Sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | App ID |
| `NEXT_PUBLIC_SITE_URL` | URL del sitio, ej: `https://tu-proyecto.web.app` |
| `FIREBASE_SERVICE_ACCOUNT` | JSON completo de la cuenta de servicio (para el deploy action) |

Cada push a `main` dispara el build y el deploy automáticamente.

## Estructura del proyecto

```
├── .github/workflows/     CI/CD (lint en PR, deploy a main)
├── data/                  JSON fuente de verdad para el seed
├── docs/adr/              Decisiones arquitectónicas
├── public/images/         Imágenes de productos (WebP)
├── scripts/seed.ts        Sube datos a Firestore
└── src/
    ├── app/               Rutas de Next.js (App Router)
    ├── components/        Componentes React
    │   └── ui/            Primitivos reutilizables
    ├── features/          Lógica por dominio
    │   ├── products/      Tipos + API de productos
    │   └── categories/    Tipos + API de categorías
    └── lib/               Configuración de Firebase
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en localhost:3000 |
| `npm run build` | Build estático en `/out` |
| `npm run lint` | ESLint + Prettier check |
| `npm run lint:fix` | Corrección automática |
| `npm run format` | Formatear todos los archivos |
| `npm run seed` | Subir datos a Firestore |
| `npm test` | Ejecutar tests |
