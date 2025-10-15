<template>
  <div class="layout">
    <AppPreloader :is-active="isPreloaderActive" @inactive="isPreloaderActive = false" />
    <AppCookie />
    <AppHeader />
    <AppMenu />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
const isPreloaderActive = ref(true);
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: $clr-steel-blue;
}
</style>
