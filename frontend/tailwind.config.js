/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // É aqui que suas cores customizadas devem viver.
      // Vamos usar nomes diferentes para garantir que não há cache.
      colors: {
        'meu-azul': '#1fb6ff',
        'meu-roxo': '#7e5bef',
      },
    },
  },
  plugins: [],
}