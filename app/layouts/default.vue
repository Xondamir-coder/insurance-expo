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
  color: $clr-charcoal-gray;
  background-color: #f9f9fa;
  min-height: 100vh;
}
</style>
