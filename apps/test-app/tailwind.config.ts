import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // IMPORTANT: scanner le code de la lib (monorepo)
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/utils/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;