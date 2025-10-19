export default defineNuxtConfig({
  app: {
    baseURL: '/ToraBika/',   // имя репозитория, со слэшем
  },
  nitro: {
    preset: 'github-pages',
  },
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true }
})
