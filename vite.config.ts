import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig(() => {
  const port = Number.parseInt(process.env.PORT || '8443', 10)

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: true,
      port,
      strictPort: true,
    },
    preview: {
      host: true,
      port,
    },
  }
})
