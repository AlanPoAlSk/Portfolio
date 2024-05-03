import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   // Resolve configuration
  resolve: {
    // Ensure that .jsx files are treated as JavaScript files
    extensions: ['.js', '.jsx', '.json'],
  },
  build: {
    outDir: 'dist', 
    assetsDir: 'assets', 
    base: '/Portfolio/',
  },
});