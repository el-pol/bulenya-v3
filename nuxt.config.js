export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Bulenya - The Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Bulenya (meaning 'stranger' in Indonesian) is a blog about traveling, food and existence.",
      },
      { property: "og:site_name", content: "Bulenya" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://bulenya.xyz",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Bulenya - The Blog",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Bulenya (meaning 'stranger' in Indonesian) is a blog about traveling, food and existence.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/mtgillenpol.jpeg",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:site", content: "@bulenya" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://bulenya.xyz",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Bulenya - The Blog",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Bulenya (meaning 'stranger' in Indonesian) is a blog about traveling, food and existence.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/mtgillenpol.jpeg",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://bulenya.xyz",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-analytics",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  googleAnalytics: {
    id: "UA-113570864-2",
  },
};
