// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir:"src",
  modules:['@unocss/nuxt','@vueuse/nuxt','@pinia/nuxt'],
  unocss:{
    uno:true,
    icons:true,
    attributify:true,
  }
})
