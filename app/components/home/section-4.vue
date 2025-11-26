<template>
  <section class="section">
    <div class="section__top">
      <HomeLabel
        class="section__label"
        :title="$t('home.section-4.content.title')"
        :label="$t('home.section-4.content.label')"
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
    <ClientOnly>
      <swiper-container ref="listRef" class="section__slider" init="false">
        <swiper-slide v-for="event in events" :key="event.id" class="section__slide">
          <HomeCard :data="event" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
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
const listRef = ref();
const { events } = useApiStore();

useSwiper(listRef, {
  spaceBetween: 22,
  grabCursor: true,
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.section__button--prev',
    nextEl: '.section__button--next'
  },
  breakpoints: {
    0: { spaceBetween: 12 },
    1280: { spaceBetween: 32 }
  }
});
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: max(16px, 3.2rem);
  overflow: hidden;
  &__label {
    @media screen and (min-width: $bp-lg) {
      max-width: 43.5%;
    }
  }
  &__slide {
    max-width: 42.1rem;
    min-width: 328px;
    animation: slide-from-bottom-20 0.6s backwards;
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s + 0.2s;
      }
    }
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
    gap: 16px;
  }
  &__button {
    width: max(40px, 5.6rem);
    height: max(40px, 5.6rem);
    border-radius: 50%;
    border: 1px solid #2c3a4733;
    transition: all 0.5s;
    @include flex-center;
    svg {
      fill: inherit;
    }
    &:hover {
      background-color: $clr-dark-teal;
      fill: #fff;
    }
  }
}
</style>
