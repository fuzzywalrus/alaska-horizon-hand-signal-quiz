import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        alaska: {
          blue: "#01426A",
          lightblue: "#0074C7",
          green: "#62B233",
          orange: "#F57C00",
          red: "#D32F2F",
          gray: "#5D6C83"
        },
      },
    },
  },
  plugins: [],
};
export default config;