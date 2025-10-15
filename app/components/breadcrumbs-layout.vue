<template>
  <main class="container">
    <AppBreadcrumbs :breadcrumbs />
    <slot />
  </main>
</template>

<script setup>
defineProps({
  breadcrumbs: {
    required: true,
    type: Array
  }
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: max(8rem, 32px);
  padding-inline: $inline-spacing;
  overflow: hidden;
}
</style>
