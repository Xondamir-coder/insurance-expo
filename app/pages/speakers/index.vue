<template>
  <BreadcrumbsLayout :breadcrumbs class="speakers">
    <GreenPageHeader
      :title="$t('speakers.title')"
      :subtitle="$t('speakers.subtitle')"
      class="speakers__header"
    />
    <div class="carousel">
      <ClientOnly>
        <swiper-container
          class="carousel__slider"
          grab-cursor="true"
          slides-per-view="auto"
          :free-mode="true"
          :autoplay="{ delay: 0, disableOnInteraction: false }"
          :speed="15000"
          :loop="true"
          :breakpoints
        >
          <swiper-slide v-for="(speaker, index) in speakers" :key="index" class="carousel__slide">
            <NuxtLink :to="$localePath(`/speakers/${index}`)" class="carousel__slide-wrapper">
              <MyPicture :alt="speaker.name" :src="speaker.image" class="carousel__slide-box" />
              <div class="carousel__slide-content">
                <h3 class="carousel__slide-name">{{ speaker.name }}</h3>
                <p class="carousel__slide-job">{{ speaker.job }}</p>
              </div>
            </NuxtLink>
          </swiper-slide>
        </swiper-container>
        <swiper-container
          class="carousel__slider"
          grab-cursor="true"
          slides-per-view="auto"
          :free-mode="true"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }"
          :speed="10000"
          :loop="true"
          :breakpoints
        >
          <swiper-slide v-for="(speaker, index) in speakers" :key="index" class="carousel__slide">
            <NuxtLink :to="$localePath(`/speakers/${index}`)" class="carousel__slide-wrapper">
              <MyPicture :alt="speaker.name" :src="speaker.image" class="carousel__slide-box" />
              <div class="carousel__slide-content">
                <h3 class="carousel__slide-name">{{ speaker.name }}</h3>
                <p class="carousel__slide-job">{{ speaker.job }}</p>
              </div>
            </NuxtLink>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
const { t } = useI18n();

const breakpoints = {
  0: { spaceBetween: 12 },
  768: { spaceBetween: 22 },
  1360: { spaceBetween: 32 }
};
const speakers = computed(() => [
  {
    image: 'team-1.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-2.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-3.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-4.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-1.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-2.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-3.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-4.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-1.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-2.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-3.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  },
  {
    image: 'team-4.jpg',
    name: 'Kuchiki Byakuya',
    job: 'Founder and CEO'
  }
]);
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/speakers',
    label: t('nav.speakers')
  }
]);

useGSAPAnimate({
  selector: '.carousel',
  base: { y: -20 },
  initialDelay: 0.1
});
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__slide {
    max-width: 30rem;
    min-width: 216px;
    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &-name {
      color: $clr-dark-charcoal;
      font-weight: bold;
      font-size: max(2.4rem, 20px);
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    &-box {
      border-radius: 50%;
      aspect-ratio: 1;
    }
  }
}
.hero {
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 10px);
  padding-inline: $inline-spacing;
  @media screen and (min-width: $bp-lg) {
    max-width: 70%;
  }
  &__title {
    font-weight: 700;
    font-size: max(7rem, 20px);
    line-height: 120%;
    color: $clr-dark-teal;
  }
  &__subtitle {
    color: #22282b;
    font-weight: 500;
    font-size: max(2.4rem, 14px);
  }
}
.speakers {
  padding: 0;
  &__header {
    padding-left: $inline-spacing;
  }
  & > *:first-child {
    padding-inline: $inline-spacing;
  }
}
</style>
