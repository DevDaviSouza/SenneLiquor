import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Importe o plugin do Tailwind

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Ative o plugin do Tailwind aqui
  ],
})