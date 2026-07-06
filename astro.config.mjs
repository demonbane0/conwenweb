import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://conwen.com.tw",
  base: "/",
  output: "static",
  integrations: [sitemap()],
});
