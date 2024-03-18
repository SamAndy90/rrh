import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--gorditas-font)", ...fontFamily.sans],
        garamond: ["var(--eb_garamond-font)"],
      },
      colors: {
        hub_green: {
          50: "#EFF6F3",
          100: "#AAE2CA",
          300: "#D2F34C",
          500: "#00BF58",
          600: "#31795A",
          700: "#005025",
          800: "#244034",
          900: "#212121",
        },
      },
      boxShadow: {
        DEFAULT: "0 0 15px rgba(0,0,0,.07)",
        // sm: "0 1px 2px 0 rgb(9 0 51 / 0.05)",
        // md: "0 4px 6px -1px rgb(9 0 51 / 0.06), 0 2px 4px -2px rgb(9 0 51 / 0.06)",
        // lg: "0 10px 15px -3px rgb(9 0 51 / 0.06), 0 4px 6px -4px rgb(9 0 51 / 0.06)",
        // xl: "0 20px 25px -5px rgb(9 0 51 / 0.06), 0 8px 10px -6px rgb(9 0 51 / 0.06)",
        // "2xl": "0 25px 50px -12px rgb(9 0 51 / 0.25)",
        // inner: "inset 0 2px 4px 0 rgb(9 0 51 / 0.05)",
        // "3xl": "0 50px 100px -24px rgb(9 0 51 / 0.2)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-block": {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in-block": "fade-in-block 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
