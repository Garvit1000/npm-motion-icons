import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'MotionIcons',
      formats: ['es', 'cjs'],
      fileName: (format: string) => format === 'es' ? 'index.esm.js' : 'index.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'lucide-react': 'lucide-react'
        }
      }
    },
    cssCodeSplit: false,
    minify: 'esbuild'
  }
});