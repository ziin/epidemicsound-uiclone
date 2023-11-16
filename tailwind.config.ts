import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        20: "80px",
      },
      screens: {
        sm: "22rem",
        md: "30rem",
        lg: "40rem",
        xl: "60rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          hovered: "hsl(var(--foreground-hovered))",
          pressed: "hsl(var(--foreground-pressed))",
          muted: "hsl(var(--foreground-muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hovered: "hsl(var(--accent-hovered))",
          pressed: "hsl(var(--accent-pressed))",
        },
        btn: {
          DEFAULT: "hsl(var(--btn))",
          hovered: "hsl(var(--btn-hovered))",
          pressed: "hsl(var(--btn-pressed))",
        },
        "btn-brighter": {
          DEFAULT: "hsl(var(--btn-brighter))",
          hovered: "hsl(var(--btn-brighter-hovered))",
          pressed: "hsl(var(--btn-brighter-pressed))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
        },
        ring: "hsl(var(--ring))",
        purple: "hsl(var(--purple))",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      keyframes: {
        fadeup: {
          "100%": { transform: "translateY(-100%)", opacity: "0" },
          "14%": {
            transform: "translateY(-100%)",
            opacity: "0",
            animationTimingFunction: "cubic-bezier(0, 0, 0.25, 1)",
          },
          "12%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "1.5%": { transform: "translateY(0)", opacity: "1" },
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
            animationTimingFunction: "cubic-bezier(0, 0, 0.25, 1)",
          },
        },
        slideleft: {
          "100%": { transform: "translateX(-100%)" },
          "0%": { transform: "translateX(0%)" },
        },
        instagram: {
          "100%": { transform: "translateX(calc(-100% - 2rem))" },
          "0%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        fadeup: "fadeup 32s infinite",
        slideleft: "slideleft 60s linear infinite",
        instagram: "instagram 120s linear infinite",
      },
      lineHeight: {
        "12": "3.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
