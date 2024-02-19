import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./"),
      "@app": path.resolve(__dirname, "src/app"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@store": path.resolve(__dirname, "src/store"),
      "@style": path.resolve(__dirname, "src/style"),
      "@types": path.resolve(__dirname, "src/types/types"),
    },
  },
})
