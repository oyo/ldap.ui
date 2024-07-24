import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/ldap/ui/',
  plugins: [react(), tsconfigPaths()],
  build: {
    copyPublicDir: true,
    outDir: 'build',
  },
  server: {
    proxy: {
      '/ldap/api': {
        target: 'http://127.0.0.1:8001/',
      },
    },
  },
})
