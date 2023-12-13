// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    "/proxy/**": {
      proxy: { to: "https://dm-assignment-commonshare.koyeb.app/api/**" },
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/scss/global.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-rating",
  ],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      "Jakarta+Plus+Sans": [400, 500, 600, 700],
    },
    display: "swap",
    prefetch: true,
  },
});
