import type { Config } from "tailwindcss";
import baseConfig from "project-tailwind/base-config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [baseConfig],
  theme: {},
  plugins: [require("tailwindcss-animate")],
};
export default config;
