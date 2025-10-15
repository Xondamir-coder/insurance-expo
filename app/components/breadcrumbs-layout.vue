<template>
  <main class="container">
    <AppBreadcrumbs :breadcrumbs />
    <slot />
  </main>
</template>

<script setup>
const { t } = useI18n();

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/mission',
    label: t('nav.mission')
  }
]);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: max(4.5rem, 20px);
  padding-inline: $inline-spacing;
  overflow: hidden;
}
</style>
