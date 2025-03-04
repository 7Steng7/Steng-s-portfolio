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
        'bounce' : 'bounce 5s ease-in-out infinite',
        'floating': 'floating 2s ease-in-out infinite',
        'floatingLeft': 'floatingLeft 2s ease-in-out infinite',
        'floatingRight': 'floatingRight 2s ease-in-out infinite',
        'swing': 'swing 5s ease-in-out infinite',
      },
      keyframes: {
        slideRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '17%': { transform: 'translateY(-8px)' },
          '34%': { transform: 'translateY(-4px))' },
          '50%': { transform: 'translateY(0)' },
          '67%': { transform: 'translateY(-8px)' },
          '84%': { transform: 'translateY(-4px)' },
        },
        floating: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0)' },
        },
        floatingLeft: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        floatingRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        swing: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
