// tailwind.config.ts
import type { Config } from "tailwindcss";
// @keyframes flicker {
//   0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0.6; shadow: 0 0 20px #0ea5e9; }
//   20%, 22%, 24%, 55% { opacity: 0.2; shadow: none; }
// }

const config: Config = {
  darkMode: 'class', // HUBI INAY TANI 'class' TAHAY, MA AHA 'media'
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ...
};
export default config;