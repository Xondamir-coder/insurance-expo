<template>
  <main class="container">
    <UiBreadcrumbs :breadcrumbs />
    <div class="container__content">
      <slot />
    </div>
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
  gap: max(4.5rem, 20px);
  padding-inline: $inline-spacing;
  overflow: hidden;
  opacity: 0;
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(8rem, 32px);
  }
}
</style>
