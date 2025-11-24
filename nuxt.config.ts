// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/styles/abstracts/_variables.scss" as *; @use "~/assets/styles/abstracts/_mixins.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      titleTemplate: '%s | Insurance Expo',
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-VSCY8WYK39',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VSCY8WYK39');
          `,
          type: 'text/javascript'
        }
      ]
    }
  },
  modules: ['nuxt-swiper', '@nuxtjs/seo', '@nuxtjs/i18n', '@nuxt/eslint', '@pinia/nuxt'],
  i18n: {
    defaultLocale: 'en',
    baseUrl: 'https://insurexpo.uz',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ru',
        language: 'ru-RU',
        name: 'Русский',
        file: 'ru.json'
      },
      {
        code: 'uz',
        language: 'uz-UZ',
        name: "O'zbekcha",
        file: 'uz.json'
      }
    ]
  }
});