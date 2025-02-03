import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralBlue: '#003355',
        foreground: '#ffffff',
        deepNavyBlue: '#002144',
        darkSeaGreen: '#004466',
      },
      fontFamily: {
        pirate: ["Charm"],
      },
      animation: {
        'slide-right-to-left': 'slideRightToLeft 5s linear infinite',
      },
      keyframes: {
        slideRightToLeft: {
          '0%': { transform: 'translateX(100%)' }, // Comienza fuera del contenedor (derecha)
          '100%': { transform: 'translateX(-100%)' }, // Termina fuera del contenedor (izquierda)
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
