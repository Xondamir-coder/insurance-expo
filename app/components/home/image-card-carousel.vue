<template>
  <div class="image-card-carousel">
    <Transition name="picture">
      <UiPicture
        :key="currentIndex"
        :src="content[currentIndex].image"
        alt="banner"
        class="image-card-carousel__image"
      />
    </Transition>
    <div class="image-card-carousel__wrapper">
      <div class="image-card-carousel__container">
        <Transition name="box">
          <div :key="currentIndex" class="image-card-carousel__box">
            <h3 class="image-card-carousel__title">
              {{ $rt(content[currentIndex].title) }}
            </h3>
            <p class="image-card-carousel__text">
              {{ $rt(content[currentIndex].text) }}
            </p>
          </div>
        </Transition>
      </div>
      <div v-if="images.length > 1" class="image-card-carousel__dots">
        <button
          v-for="val in images.length"
          :key="val"
          class="image-card-carousel__dot"
          :class="{ active: currentIndex === val - 1 }"
          @click="changeContent(val)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { tm } = useI18n();

const props = defineProps({
  images: { type: Array, required: true }
});

const currentIndex = ref(0);

const content = computed(() =>
  props.images.map((image, index) => ({
    image,
    ...tm('home.section-1.cards')[index]
  }))
);

const initInterval = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
  }, intervalTime * 1000);
};
const changeContent = val => {
  currentIndex.value = val - 1;
  if (interval) clearInterval(interval);
  initInterval();
};

const intervalTime = 5;
let interval;
onMounted(() => {
  if (props.images.length < 2) return;
  initInterval();
});
onUnmounted(() => {
  if (!interval) return;
  clearInterval(interval);
});
</script>

<style scoped lang="scss">
.image-card-carousel {
  overflow: hidden;
  grid-area: content;
  display: flex;
  align-items: flex-end;
  position: relative;
  border-radius: max(16px, 2rem);
  animation: slide-from-bottom-20 1s 0.3s backwards;
  @media screen and (max-width: $bp-sm) {
    aspect-ratio: 328/343;
  }
  &__title {
    color: $clr-charcoal-gray;
    text-transform: uppercase;
    font-size: max(2rem, 14px);
    font-weight: 700;
  }
  &__text {
    font-size: max(12px, 1.4rem);
  }
  &__container {
    display: grid;
    align-items: flex-end;
    & > * {
      grid-area: 1/1/2/2;
    }
    @media screen and (min-width: 1024px) {
      max-width: 54%;
    }
  }
  &__wrapper {
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: max(2rem, 10px);
    @media screen and (max-width: $bp-md) {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
  &__dot {
    background-color: $clr-light-gray;
    border-radius: 8px;
    transition: background-color 1s;
    &.active {
      background-color: $clr-dark-teal;
    }
  }
  &__dots {
    display: flex;
    gap: 2px;
    padding: 2px;
    background-color: #ffffff;
    border-radius: 24px;
    height: 9px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 42px;
  }
  &__box {
    @include flex-gap(max(10px, 2rem));
    background: #ffffff;
    border-radius: max(14px, 2rem);
    padding: max(10px, 3rem);
  }
  &__image {
    width: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
  }
  &-wrapper {
    z-index: 5;
    display: flex;
    align-items: flex-end;
    margin: max(10px, 2rem);
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
}
.picture-enter-active,
.picture-leave-active {
  transition: opacity 1s;
}
.picture-enter-from,
.picture-leave-to {
  opacity: 0;
}
.box-enter-active,
.box-leave-active {
  transition: opacity 1s, transform 1s;
}
.box-enter-from,
.box-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
