import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Базовый путь для GitHub Pages (username.github.io/repo-name/)
  base: '/english-collocations/',
  plugins: [react(), tailwindcss()],
})
