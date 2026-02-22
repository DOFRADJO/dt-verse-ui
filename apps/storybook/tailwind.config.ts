import type { Config } from "tailwindcss";

export default {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",

    // scanner les packages du monorepo
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/utils/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;