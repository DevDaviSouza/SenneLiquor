/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ajusta conforme seu projeto
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec6726",
        inputColor: "#9b9b9b",
      },
    },
  },
  plugins: [],
};
