<template>
    <nav class="flex flex-row  dark:text-gray-100 text-blak">
        <div class=" ">

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
            <div class="flex-row justify-end ">
                <button @click="toggleDark()"
                    class="i-carbon-sun dark:i-carbon-moon text-2xl text-orange-500 dark:text-orange-500" />

            </div>

        </div>



    </nav>
</template>
<style scoped>
aside {
    @apply: flex flex-col w-60 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100;

}

nav {
    @apply: flex flex-col decoration-none font-bold;
}

a {
    @apply: decoration-none font-bold text-gray-900 ml-2;
}
</style>
<script lang="ts" setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>