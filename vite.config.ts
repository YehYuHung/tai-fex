import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [react(), viteBasicSslPlugin()],
  server: {
    proxy: {
      "/api/taifex/OpenInterestOfLargeTradersFutures": {
        target:
          "https://openapi.taifex.com.tw/v1/OpenInterestOfLargeTradersFutures",
        changeOrigin: true,
        secure: false,
        rewrite: (path) =>
          path.replace(/^\/api\/taifex\/OpenInterestOfLargeTradersFutures/, ""),
      },
    },
  },
});
