export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  privateRuntimeConfig: {
    apiKey: process.env.API_KEY,
    serviceId: process.env.SERVICE_DOMAIN,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ichikihayato_lp_202303',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '市来ハヤト公式サイトは、大阪維新の会・府政対策委員として、大阪・高槻の課題解決に取り組む市来ハヤトの活動を報告します。教育無償化都市の実現を中心とした改革を維新の実行力で実現します。活動報告などを掲載し、進捗状況などをお伝えします。是非、ご覧ください。 ' },
      { hid: 'og:image', property: 'og:image', content: '/ogp.png' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/stylus/style.styl' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    {
      path: '@/components/',
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-microcms-module',
    '@nuxtjs/google-gtag',
  ],
  "google-gtag": {
    id: "G-J8867LD2LK",
    debug: true
  },
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       path: '/news/:p',
  //       component: resolve(__dirname, 'pages/news/index.vue'),
  //       name: 'newsPage',
  //     })
  //   },
  // },
}
