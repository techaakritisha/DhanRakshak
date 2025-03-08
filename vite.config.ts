import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import the path module

export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // Map @/ to the src/ directory
      },
    },
  server: {
    port: 3000, // Set the development server port
    open: true, // Open the browser automatically
  },
  build: {
    outDir: "dist", // Output directory for the build
    emptyOutDir: true, // Clear the output directory before building
  },
});