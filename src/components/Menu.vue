<template>
    <aside class="dark:text-gray-100 text-blak">
        <div class="text-center">
            <div class="i-logos:nuxt w-30 h-30"></div>
        </div>


        <div class="">
            <button class="border-none bg-transparent">
                <div class="i-ic:twotone-double-arrow w-10 h-10 "></div>
            </button>
        </div>
        <div>
            <nav class="flex flex-col items-center justify-center text-center">

                <nuxt-link to="/">
                    <span class="i-carbon-home text-2xl">home</span>
                    <span>Home</span>
                </nuxt-link>

                <nuxt-link to="/">
                    <span class="i-mdi-login text-2xl">Login</span>
                    <span>Login</span>
                </nuxt-link>

                <nuxt-link to="/">
                    <span i-carbon-email text-2xl>Contactos</span>
                    <samp>Contactos</samp>
                </nuxt-link>
                <nuxt-link to="/">
                    <span>About</span>
                </nuxt-link>
                <button @click="toggleDark()"
                    class="i-carbon-sun dark:i-carbon-moon text-2xl text-orange-500 dark:text-orange-500" />

            </nav>
        </div>


    </aside>
</template>
<style scoped>
aside {
    @apply: flex flex-col w-60 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100;

}

nav {
    @apply: flex flex-col justyfy-center decoration-none font-bold;
}

a {
    @apply: decoration-none font-bold text-gray-900;
}
</style>
<script lang="ts" setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>