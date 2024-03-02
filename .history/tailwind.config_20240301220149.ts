import type { Config } from "tailwindcss"
import { withUt } from "uploadthing/tw";

import svgToDataUri from "mini-svg-data-uri"
import colors from "tailwindcss/colors"
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "shareOpen":{
          from: {"min-width": "0", height:"auto"},
          to: {"min-width":"26vw", height:"auto"}
        },
        "shareClose":{
          from: {"min-width": "26vw", height:"auto"},
          to: {"min-width":"0", height:"auto"}
        },
        "fadeIn":{
          from: {"opacity": "0"},
          to: {opacity:"100"}
        },
        "fadeOut":{
          from: {"opacity": "100"},
          to: {opacity:"0"}
        },
        "changingColor":{
          "0%": {"background": "#fffff"},
          "10%": {"background": "#4C0519"},
          "20%": {"background": "#155E75"},
          "30%": {"background": "#581C87"},
          "40%": {"background": "#4C0519"},
          "50%": {"background": "#155E75"},
          "60%": {"background": "#581C87"},
          "70%": {"background": "#4C0519"},
          "80%": {"background": "#155E75"},
          "90%": {"background": "#4C0519"},
          "100%": {"background": "#155E75"},

        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "share-close": "shareClose 1s linear",
        "share-open": "shareOpen 1s linear",
        "fade-in": "fadeIn 0.5s linear",
        "fade-out": "fadeOut 0.5s linear",
        "changing-color": "changingColor 20s linear infinite",
      },
      transitionTimingFunction:{
        "nav-in-out": "cubic-bezier(.69,-0.11,.51,1.18)"
      },
      transitionProperty:{
        "scroll-nav":"opacity,transform"
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        // { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    addVariablesForColors,
  ],
} satisfies Config

export default withUt(config)

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}