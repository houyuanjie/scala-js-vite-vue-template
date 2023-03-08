import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { linkJS } from "./buildSrc/scalaJS";

const scalaJSOutputPath = linkJS();

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@scalajs": scalaJSOutputPath,
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
});
