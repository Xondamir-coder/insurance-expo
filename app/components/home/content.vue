<template>
  <div class="content">
    <HomeLabel :title="title" :label="label" />
    <p v-for="text in texts" :key="text" class="text-16 content__text">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  label: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  texts: {
    required: true,
    type: Array
  }
});
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: max(16px, 2rem);
  padding-right: max(14px, 3.6rem);

  &__text {
    animation: slide-from-left-20 0.6s backwards 0.3s;
  }
}
</style>
