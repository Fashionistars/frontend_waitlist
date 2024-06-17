import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s forwards',
        fadeOut: 'fadeOut 0.5s 4.5s forwards',
      },
   
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
        bon_foyage: ['var(--font-bon_foyage)']
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(339px, 1fr))',
        card_fluid: 'repeat(auto-fit, minmax(170px, 1fr))',

      }
    },
  },

  plugins: [
    plugin(function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.hide_scrollbar': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none'
        },
        '.hide_scrollbar::-webkit-scrollbar': {
          'display': 'none'
        }
      };
      addUtilities(newUtilities);
     })
   ],
};
export default config;
