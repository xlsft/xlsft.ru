import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/utils.css'],
  modules: ['@tresjs/nuxt'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
