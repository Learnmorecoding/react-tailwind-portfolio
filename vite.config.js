import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
 // base: "/react-tailwind-portfolio/",
 /* server: {
    open:true,
    port:4001,
  },*/
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

});
