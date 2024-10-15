import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        cardElementDark: "#333741",
        cardElementLight: "#F5F5F6",
        textElementDark: "#F5F5F6",
        textElementLight: "#101828",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(180deg, rgba(0,34,102,1) 0%, rgba(12,17,29,1) 100%)",
        "gradient-light": "linear-gradient(#D1E0FF, #F9FAFB)",
        "contenedor-dark": "#0C111D",
      },
      backgroundColor: {
        "contenedor-dark": "#0C111D",
        "contenedor-light": "#F9FAFB",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        dark: {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            foreground: "#F5F5F6",
            background: "#fff",
            primary: {
              50: "#E2E6EE",
              100: "#C5CDDD",
              200: "#8E9DBE",
              300: "#586C98",
              400: "#36435E",
              500: "#161B26",
              600: "#11151D",
              700: "#0D1017",
              800: "#090C10",
              900: "#040506",
              DEFAULT: "#161B26",
              foreground: "#fff",
            },
            secondary: {
              50: "#D6E4FF",
              100: "#ADC9FF",
              200: "#5C92FF",
              300: "#0A5CFF",
              400: "#003DB8",
              500: "#002266",
              600: "#001B52",
              700: "#00143D",
              800: "#000E29",
              900: "#000714",
              DEFAULT: "#003DB8",
              foreground: "#fff",
            },
            focus: "#4A4E59",
          },
          layout: {
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },

        light: {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            foreground: "#000",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#FFFFFF",
              foreground: "#002266",
            },
            focus: "#F182F6",
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
