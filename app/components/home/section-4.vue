<template>
  <section class="section">
    <div class="section__top">
      <HomeLabel
        class="section__label"
        title="Uniting the Insurance Industry to Build a Secure and Sustainable Future"
        label="Our mission"
      />
      <div class="section__buttons">
        <button class="section__button section__button--prev">
          <IconsArrowLeft class="icon-arrow" />
        </button>
        <button class="section__button section__button--next">
          <IconsArrowLeft class="icon-arrow icon-arrow--reverse" />
        </button>
      </div>
    </div>
    <swiper-container class="section__slider" ref="listRef" init="false">
      <swiper-slide v-for="item in items" :key="item.title" class="section__slide">
        <Card :data="item" />
      </swiper-slide>
    </swiper-container>
    <div class="section__buttons">
      <button class="section__button section__button--prev">
        <IconsArrowLeft class="icon-arrow" />
      </button>
      <button class="section__button section__button--next">
        <IconsArrowLeft class="icon-arrow icon-arrow--reverse" />
      </button>
    </div>
  </section>
</template>

<script setup>
const PROTO_OBJ = {
  title: 'Insurance Expo 2025: A Space for New Opportunities',
  text: 'Discover leading companies and innovative services at the international insurance exhibition. Explore the latest updates and opportunities in the insurance industry all in one place. Insurance Expo 2025 ',
  img: 'home-section-4.jpg',
  date: '12-16 March 2025'
};
const PROTO_COUNT = 12;
const items = Array(PROTO_COUNT).fill(PROTO_OBJ);
const listRef = ref();

useSwiper(listRef, {
  grabCursor: true,
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.section__button--prev',
    nextEl: '.section__button--next'
  },
  breakpoints: {
    0: {
      spaceBetween: 12
    },
    768: {
      spaceBetween: 32
    }
  }
});
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 1.7vw, 32px);
  overflow: hidden;
  .section__label,
  .section__slide {
    transition-delay: var(--section-transition-delay);
    transition-duration: var(--section-transition-duration);
    transition-property: opacity, transform;
  }
  &:not(.active) {
    .section__label {
      transform: translateX(-25%);
      opacity: 0;
    }
    .section__slide {
      transform: translateY(100px);
      opacity: 0;
    }
  }
  &__slide {
    max-width: 421px;
    min-width: 340px;
  }
  &__label {
    max-width: 62ch;
  }
  &__list {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: clamp(340px, 30vw, 421px);
    gap: clamp(16px, 2vw, 32px);
  }
  &__top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    .section__buttons {
      @media only screen and (max-width: $bp-sm) {
        display: none;
      }
    }
  }
  & > *.section__buttons {
    @media only screen and (min-width: $bp-sm) {
      display: none;
    }
    @media only screen and (max-width: $bp-sm) {
      justify-content: center;
    }
  }
  &__buttons {
    display: flex;
    gap: 1vw;
  }
  &__button {
    width: clamp(40px, 3vw, 56px);
    border-radius: 50%;
    border: 1px solid #2c3a4733;
    aspect-ratio: 1;
    @include flex-center;
  }
}
</style>
