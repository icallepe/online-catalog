import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de marca CALA
        ivory: '#F3EFE5',
        ecru: '#E5D9C5',
        sand: '#CBB895',
        olive: '#69704F',
        'deep-blue': '#263F46',
        terracotta: '#B56F58',
        ochre: '#C49A45',
        'soft-black': '#252624',

        // Aliases semánticos usados en los componentes
        ink: '#252624', // texto principal → soft black
        paper: '#F3EFE5', // fondo → ivory
        muted: '#9A8C7A', // texto secundario (derivado de sand)
        border: '#E5D9C5', // bordes → ecru
        surface: '#EDE7D8', // fondos de tarjeta → entre ivory y ecru
      },
      fontFamily: {
        // Manrope Regular/Medium: textos y comunicación
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        // Canela Regular: logotipo y titulares — stand-in: Cormorant via --font-heading
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
      },
      aspectRatio: {
        product: '3 / 4',
      },
    },
  },
  plugins: [],
};

export default config;
