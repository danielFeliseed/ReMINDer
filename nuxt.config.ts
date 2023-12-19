// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
