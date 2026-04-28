import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa",
  server: {
    open: "/index_2.html",
  },
  build: {
    rollupOptions: {
      input: "index_2.html",
    },
  },
});
