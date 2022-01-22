import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'
import ViteComponents from "vite-plugin-components";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),ViteComponents({ transformer: "vue2" }),],
  resolve: {
    alias: {
      "@": `${resolve(__dirname, "src")}`,
    },
  },
})
