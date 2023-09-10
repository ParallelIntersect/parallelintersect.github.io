import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://parallelintersect.github.io"
  //   base: "/parallelintersect.github.io",
  ,
  integrations: [tailwind()]
});