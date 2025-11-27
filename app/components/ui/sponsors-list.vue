<template>
  <div class="container">
    <div class="list">
      <UiSponsorsCard v-for="(item, index) in partnersAndSponsors.data" :key="index" :data="item" />
    </div>
  </div>
</template>

<script setup>
const { partnersAndSponsors } = useApiStore();

useGSAPAnimate({
  selector: '.list',
  base: { y: 50 }
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 12px);
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(42rem, 151px), 1fr));
  gap: max(3rem, 12px);
  &:has(> *:hover) > *:not(:hover) {
    opacity: 0.5;
  }
  @media screen and (max-width: $bp-md) {
    @include grid-scroll(190px);
  }
}
</style>
