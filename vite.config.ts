import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./"),
      "@app": path.resolve(__dirname, "src/app"),
      "@common": path.resolve(__dirname, "src/common"),
      "@expenses": path.resolve(__dirname, "src/app/expenses"),
      "@wallets": path.resolve(__dirname, "src/app/wallets"),
      "@components": path.resolve(__dirname, "src/common/components"),
      "@constants": path.resolve(__dirname, "src/common/constants"),
      "@store": path.resolve(__dirname, "src/common/store"),
      "@style": path.resolve(__dirname, "src/style"),
      "@types": path.resolve(__dirname, "src/common/types/types"),
    },
  },
});
