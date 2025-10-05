export default defineNuxtConfig({
    devtools: { enabled: true },

    css: [
        '~/assets/css/main.css',
    ],

    modules: [
        '@sidebase/nuxt-auth',
        '@pinia/nuxt',
    ],

    auth: {
        provider: {
            type: 'authjs'
        }
    },

    runtimeConfig: {
        googleClientId: process.env.GOOGLE_CLIENT_ID,
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
        nuauthSecret: process.env.NUAUTH_SECRET,

        public: {}
    }
})