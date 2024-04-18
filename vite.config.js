import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002, // Change the port number here
  },
  build: {
    rollupOptions: {
      input: {
        main: "./src/main.jsx", // Update the input entry point if necessary
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // You can customize the options here if needed
      },
    },
  },
});
