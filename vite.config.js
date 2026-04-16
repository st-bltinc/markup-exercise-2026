import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa",
  server: {
    open: "/index_1.html",
  },
  build: {
    rollupOptions: {
      input: "index_1.html",
    },
  },
});
