import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        openSans: ["var(--font-open-sans)"],
        lato: ["var(--font-lato)"],
        sarabun: ["var(--font-sarabun)"],
        epilogue: ["var(--font-epilogue)"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem", //16px
        xl: "1.125rem", //18px
        "2xl": "1.25rem", //20px
        "3xl": "1.5rem", //24px
        "4xl": "1.625rem", // 26px
        "5xl": "2.5rem", // 40px
        "6xl": "2.875rem", // 46px
      },
      screens: {
        "2sm": "481px",
        "max-2sm": { raw: "(max-width: 480px)" },
        "2smh": { raw: "(max-height: 600px)" },
        smh: { raw: "(max-height: 680px)" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "max-sm": { raw: "(max-width: 640px)" },
        "max-md": { raw: "(max-width: 768px)" },
        "max-lg": { raw: "(max-width: 1024px)" },
        "max-xl": { raw: "(max-width: 1280px)" },
        "max-2xl": { raw: "(max-width: 1536px)" },
      },
      colors: {
        branco: {
          "100": "rgb(var(--var-branco-100))",
          "100-2": "rgb(var(--var-branco-100-2))",
          "100-3": "rgb(var(--var-branco-100-3))",
        },
        azul: {
          "20": "rgb(var(--var-azul-20))",
          "30": "rgb(var(--var-azul-30))",
          "40": "rgb(var(--var-azul-40))",
          "40-2": "rgb(var(--var-azul-40-2))",
          "50": "rgb(var(--var-azul-50))",
          "100": "rgb(var(--var-azul-100))",
          "150": "rgb(var(--var-azul-150))",
          "150-2": "rgb(var(--var-azul-150-2))",
          "150-3": "rgb(var(--var-azul-150-3))",
          "200": "rgb(var(--var-azul-200))",
          "250": "rgb(var(--var-azul-250))",
          "300": "rgb(var(--var-azul-300))",
          "350": "rgb(var(--var-azul-350))",
          "500": "rgb(var(--var-azul-500))",
        },
        cinza: {
          "100": "rgb(var(--var-cinza-100))",
          "300": "rgb(var(--var-cinza-200))",
          "500": "rgb(var(--var-cinza-500))",
          "800": "rgb(var(--var-cinza-800))",
          "900": "rgb(var(--var-cinza-900))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        miniSectionBackgroundTexture: "url(/img/miniSectionBackgroundTexture.svg)",
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 14))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [
    animatePlugin,
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(var(--rev-azul-principal))",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(var(--rev-azul-principal))",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    require("tailwind-scrollbar-hide"),
  ],
};

export default config;
