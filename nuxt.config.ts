export default defineNuxtConfig({
  app: {
    baseURL: '/Business-Card/',   // имя репозитория, со слэшем
  },
  nitro: {
    preset: 'github-pages',
  },
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true }
})
