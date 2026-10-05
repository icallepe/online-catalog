import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#FAFAF8',
        muted: '#8C8C8A',
        border: '#E5E5E3',
        surface: '#F5F5F2',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      aspectRatio: {
        product: '3 / 4',
      },
    },
  },
  plugins: [],
};

export default config;
