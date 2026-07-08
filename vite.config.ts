import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        ws: true,
      },
    },
  },
  build: {
    outDir: 'dist/frontend',
    emptyOutDir: true,
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'node',
    // Only run Vitest unit tests; Playwright e2e tests use their own runner
    include: ['tests/unit.test.ts', 'src/**/*.test.ts'],
    exclude: ['tests/e2e.spec.ts', 'node_modules/**'],
  },
});

