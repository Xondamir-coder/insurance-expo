<template>
  <div class="layout" :class="{ 'almost-white': isAlmostWhite }">
    <AppPreloader :is-active="isPreloaderActive" @inactive="isPreloaderActive = false" />
    <AppCookie />
    <AppHeader />
    <AppMenu />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
const route = useRoute();

const isPreloaderActive = ref(true);
const pages = ['partners', 'participants-id', 'sponsors', 'speakers', 'media'];

const isAlmostWhite = computed(() => pages.some(p => route.path.includes(p)));
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: $clr-steel-blue;
  &.almost-white {
    background-color: #f9f9fa;
  }
}
</style>
