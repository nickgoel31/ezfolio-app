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
        "changingColor": {
          "0%": {"background": "linear-gradient(to right, #ff5858 0%, #f09819 100%)"},
          "5%": {"background": "linear-gradient(45deg, #F15F79 0%, #B24592 100%)"},
          "10%": {"background": "linear-gradient(135deg, #FF6B95 0%, #FFA2A2 100%)"},
          "15%": {"background": "linear-gradient(to top, #6a11cb 0%, #2575fc 100%)"},
          "20%": {"background": "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"},
          "25%": {"background": "linear-gradient(45deg, #f3ec78 0%, #af4261 100%)"},
          "30%": {"background": "linear-gradient(to right, #12c2e9 0%, #c471ed 100%)"},
          "35%": {"background": "linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)"},
          "40%": {"background": "linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%)"},
          "45%": {"background": "linear-gradient(135deg, #52E5E7 0%, #130CB7 100%)"},
          "50%": {"background": "linear-gradient(to right, #ff5858 0%, #f09819 100%)"},
          "55%": {"background": "linear-gradient(45deg, #23a6d5 0%, #23d5ab 100%)"},
          "60%": {"background": "linear-gradient(to right, #fa709a 0%, #fee140 100%)"},
          "65%": {"background": "linear-gradient(to top, #b92b27 0%, #1565c0 100%)"},
          "70%": {"background": "linear-gradient(120deg, #abecd6 0%, #fbed96 100%)"},
          "75%": {"background": "linear-gradient(45deg, #f85032 0%, #e73827 100%)"},
          "80%": {"background": "linear-gradient(to right, #fc4a1a 0%, #f7b733 100%)"},
          "85%": {"background": "linear-gradient(to right, #abbaab 0%, #ffffff 100%)"},
          "90%": {"background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},
          "95%": {"background": "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)"},
          "100%": {"background": "linear-gradient(to top, #ff5858 0%, #f09819 100%)"}
        },
        "revolutionizeCard": {
          "0%":{
            "transform":"translateY(0)"
          },
          "50%":{
            "transform":"translateY(-204%)"
          },
          "51%":{
            "transform":"translateX(200%)"
          },
          
          "53%":{
            "transform":"translateX(0%)"
          },
          "54%":{
            "transform":"translateY(80%)"
          },
          "100%":{
            "transform":"translateY(0%)"
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "share-close": "shareClose 1s linear",
        "share-open": "shareOpen 1s linear",
        "fade-in": "fadeIn 0.5s linear",
        "fade-out": "fadeOut 0.5s linear",
        "changing-color": "changingColor 4s linear infinite",
        "revolutionize-card": "revolutionizeCard 5s cubic-bezier(.69,-0.11,.51,1.18) 1",
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