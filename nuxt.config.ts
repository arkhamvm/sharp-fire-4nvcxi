import { NuxtConfig } from '@nuxt/types'
import { makeNodeTransport } from '@sentry/node'

const config: NuxtConfig = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/sentry', { ignore: ['node_modules'] }],
  ],
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  typescript: {
    typeCheck: false,
  },
  sentry: {
    dsn: true, // for canInitialize
    clientConfig: {
      dsn:
        'https://1bb14c755cb74918a94d8e2b507642f7@o4504751361228800.ingest.sentry.io/4504751364046848',
    },
    serverConfig: {
      dsn:
        'https://057e33ab442e4e9d929aa58c69403f9a@o4504751361228800.ingest.sentry.io/4504751367127040',
    },
    lazy: false,
    disabled: false,
    debug: true,
    tracing: {
      tracesSampleRate: 1.0,
      vueOptions: {
        tracing: true,
        tracingOptions: {
          hooks: ['mount', 'update'],
          timeout: 2000,
          trackComponents: true,
        },
      },
      browserOptions: {},
    },
    config: {
      environment: 'codesandbox',
    },
  },
}

export default config
