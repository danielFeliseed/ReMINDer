// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    title: 'ReMINDer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  app: {
    pageTransition: { name: 'page', mode: 'slide' },
  },
    
  modules: ['@nuxtjs/supabase','@samk-dev/nuxt-vcalendar'],
  css: ['~/assets/css/main.css'],
  supabase: {
    redirect: false
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

