import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // or any port you prefer
  },
  define: {
    'process.env': {} // avoids errors when importing env vars
  }
})
