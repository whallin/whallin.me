import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next(), partytown(), compress(), prefetch(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: 'en-US',
        sv: 'sv-SE',
        fr: 'fr-FR'
      },
    },
  })],
  site: 'https://whallin.me',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      wrap: true
    },
  },
});