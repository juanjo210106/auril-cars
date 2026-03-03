import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#353c4a',
        'accent-red': '#d94e50',
        'light-bg': '#f8f8f9',
        'text-gray': '#909193',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'martel': ['Martel Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
