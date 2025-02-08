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
        'bounce' : 'bounce 5s ease-in-out infinite', // Ajusta la duración y el tipo de animación
      },
      keyframes: {
        slideRightToLeft: {
          '0%': { transform: 'translateX(100%)' }, // Comienza fuera del contenedor (derecha)
          '100%': { transform: 'translateX(-100%)' }, // Termina fuera del contenedor (izquierda)
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '17%': { transform: 'translateY(-8px)' },
          '34%': { transform: 'translateY(-4px))' },
          '50%': { transform: 'translateY(0)' },
          '67%': { transform: 'translateY(-8px)' },
          '84%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
