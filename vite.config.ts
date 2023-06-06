// @ts-ignore
import { defineConfig } from 'vite'
// @ts-ignore
import { fileURLToPath, URL } from "node:url";
// @ts-ignore
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import { createSvg } from "./src/icons/index.ts"
// import { svg4VuePlugin } from 'vite-plugin-svg4vue'
// @ts-ignore
import  { svg4VuePlugin } from 'vite-plugin-svg4vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), createSvg("./src/icons/svg/"),svg4VuePlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
