import { NuxtAuthHandler } from '#auth'
import GoogleProvider from 'next-auth/providers/google'

export default NuxtAuthHandler({
    secret: useRuntimeConfig().nuauthSecret,
    providers: [
        // @ts-expect-error
        GoogleProvider.default({
            clientId: useRuntimeConfig().googleClientId,
            clientSecret: useRuntimeConfig().googleClientSecret,
        })
    ]
})