<template>
  <div class="content">
    <HomeLabel :title="title" :label="label" />
    <p class="text-16 content__text" v-for="text in texts" :key="text">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  title: String,
  texts: Array
});
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: max(16px, 2rem);
  padding-right: max(14px, 3.6rem);

  &__text {
    animation: slide-from-left-20 0.3s backwards 0.3s;

    @media only screen and (min-width: $bp-lg) {
      max-width: 80%;
    }
  }
}
</style>
