import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
environment: 'jsdom',
setupFiles: ['./src/setupTests.ts'],
css: false,
coverage: {
reporter: ['text', 'html'],
statements: 100,
branches: 100,
functions: 100,
lines: 100,
include: ['src/**/*.{ts,tsx}'],
exclude: ['src/main.tsx']
}
}
})
