import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  base: "/tai-fex/",
  plugins: [react(), viteBasicSslPlugin()],
  server: {
    proxy: {
      "/api/taifex/": {
        target: "https://openapi.taifex.com.tw/v1/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/taifex/, ""),
      },
    },
  },
});
