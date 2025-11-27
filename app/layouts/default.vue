<template>
  <div class="layout" :class="{ 'almost-white': isAlmostWhite }">
    <UiPreloader />
    <UiCookie />
    <LayoutHeader />
    <UiMenu />
    <slot />
    <LayoutFooter />
    <UiFormModal />
    <UiSuccessModal />
  </div>
</template>

<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const route = useRoute();
const router = useRouter();

const { fetchData } = useApiStore();
fetchData();

if (import.meta.client) {
  router.afterEach(() => {
    nextTick(() => {
      ScrollTrigger.refresh();
    });
  });
}

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
