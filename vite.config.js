import { defineConfig } from "vite";
export default defineConfig({
  optimizeDeps: { entries: ["index.html"] },
  build: {
    rolldownOptions: {
      onwarn(warning, warn) {
        if (warning.code !== "MODULE_LEVEL_DIRECTIVE") warn(warning);
      },
    },
  },
});
