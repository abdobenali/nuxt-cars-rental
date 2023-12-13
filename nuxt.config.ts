// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["~/assets/scss/global.scss"],
  devtools: { enabled: true },
});
