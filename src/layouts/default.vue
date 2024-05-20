<template>
  <div>
    <Menu />
    <section>
      <slot />
    </section>
  </div>
</template>
<style>
* {
  padding: 0%;
  margin: 0;
  width: 100%;

}

.dark {
  background-color: #242424;
  color: #fff;
}
</style>
