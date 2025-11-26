<template>
  <div class="image-slider__wrapper">
    <ClientOnly>
      <swiper-container
        class="image-slider"
        space-between="12"
        slides-per-view="auto"
        :grab-cursor="true"
      >
        <swiper-slide v-for="(image, index) in images" :key="index" class="image-slider__slide">
          <img :src="image" alt="image" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<script setup>
useGSAPAnimate({
  selector: '.image-slider__wrapper',
  base: { y: 20 }
});

defineProps({
  images: {
    type: Array,
    required: true
  }
});
</script>

<style scoped lang="scss">
.image-slider {
  &__slide {
    max-width: 42rem;
    min-width: 268px;
    aspect-ratio: 420/344;
  }
}
</style>
