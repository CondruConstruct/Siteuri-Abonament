import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = '/Siteuri-Abonament/'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? repoBase : '/',
}))
