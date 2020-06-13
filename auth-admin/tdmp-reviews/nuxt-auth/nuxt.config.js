module.exports = {
  /*
  ** Headers of the page
  */

  head: {
    title: 'yes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'text mockup' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
          rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {
    baseURL: 'https://demo.travelasia.com.my/wp-json'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'jwt-auth/v1/token', method: 'post', propertyName: 'token' },
          user: { url: 'tripcarte_api/v1/credits', method: 'get', propertyName: 'balance' },
          products: { url: 'tripcarte_api/v1/product?tags[]=&page_size=100&offset=0', method: 'get' },
          logout: false
        }
      }
    }
  }
}

