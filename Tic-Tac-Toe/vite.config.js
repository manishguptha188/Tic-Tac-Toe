import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tic-tac-toe/'   // <-- MUST match your repo name
})
