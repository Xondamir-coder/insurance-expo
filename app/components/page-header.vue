<template>
  <div class="page-header">
    <h1 class="page-header__title">{{ title }}</h1>
    <p class="text-medium">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    required: true,
    type: String
  },
  subtitle: {
    required: true,
    type: String
  }
});
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  flex-direction: column;
  gap: max(1.6rem, 10px);
  text-align: center;
  align-self: center;
  max-width: 60%;
  @media screen and (max-width: $bp-md) {
    max-width: 100% !important;
  }
  &__title {
    font-weight: 900;
    font-size: max(4.8rem, 24px);
    text-transform: uppercase;
  }
}
</style>
