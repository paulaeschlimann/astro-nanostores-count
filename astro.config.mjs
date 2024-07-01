import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import lit from "@astrojs/lit";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), lit(), react()]
});