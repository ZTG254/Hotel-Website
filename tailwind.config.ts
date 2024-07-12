import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        1: '#000000',
      },
      colors: {
        nav: {
          1: '#222831',
          100: '#42b883',
          200: '#2c786c',
        },
      },
    },
  },
  plugins: [],
};

export default config;
