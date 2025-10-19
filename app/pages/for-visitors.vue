<template>
  <BreadcrumbsLayout :breadcrumbs>
    <GreenPageHeader :title="$t('for-visitors.title')" :subtitle="$t('for-visitors.subtitle')" />
    <section class="hero">
      <MyPicture src="visitors-hero.jpg" alt="museum" class="hero__image" />
      <ul class="hero__list">
        <li v-for="(item, index) in $tm('for-visitors.hero-items')" :key="index" class="hero__item">
          <h3 class="hero__item-label">{{ $rt(item.label) }}</h3>
          <p class="text-medium clr-white">{{ $rt(item.text) }}</p>
        </li>
      </ul>
    </section>
    <section class="leaders">
      <div class="leaders__left">
        <div class="leaders__left-content">
          <h2 class="leaders__left-content-title">{{ $t('for-visitors.leaders.title') }}</h2>
          <p class="text-medium">{{ $t('for-visitors.leaders.text') }}</p>
        </div>
        <div class="leaders__numbers">
          <div v-for="i in 3" :key="i" class="leaders__number">
            {{ i.toString().padStart(2, '0') }}
          </div>
        </div>
      </div>
      <div class="leaders__right">
        <div v-for="(card, index) in leadersCards" :key="index" class="leaders__card">
          <MyPicture :src="card.image" alt="banner" class="leaders__card-image" />
          <div class="leaders__card-content">
            <ul class="leaders__card-content-labels">
              <li v-for="label in card.labels" :key="label" class="leaders__card-content-label">
                #{{ $rt(label) }}
              </li>
            </ul>
            <h3 class="leaders__card-content-title">
              {{ $rt(card.title) }}
            </h3>
            <p>
              {{ $rt(card.text) }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <FormSection class="visitors__form" />
    <section class="visit">
      <MyPicture src="visitors-plan.jpeg" alt="banner" class="visit__banner" />
      <div class="visit__container">
        <h2 class="visit__title">{{ $t('for-visitors.visit.title') }}</h2>
        <div v-for="(card, index) in cards" :key="index" class="visit__card">
          <h3 class="visit__card-title">{{ $rt(card.label) }}</h3>
          <ul class="visit__card-list">
            <li v-for="(item, itemIndex) in card.items" :key="itemIndex" class="visit__card-item">
              <div class="visit__card-box">
                <component :is="item.icon" class="visit__card-icon" />
              </div>
              <p class="text-medium">{{ $rt(item.text) }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <FaqSection />
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsPin from '~/components/icons/pin.vue';
import IconsTime from '~/components/icons/time.vue';
import IconsTaxi from '~/components/icons/taxi.vue';
import IconsTrain from '~/components/icons/train.vue';

const { t, tm } = useI18n();
const { $gsap } = useNuxtApp();

useGSAPAnimate({
  selector: '.hero__image',
  base: { scale: 0.95 }
});
useGSAPAnimate({
  selector: '.hero__item',
  mode: 'group',
  base: { y: 30, stagger: 0.2 }
});
useGSAPAnimate({
  selector: '.visit__card',
  base: { x: -20, stagger: 0.2 }
});
useGSAPAnimate({
  selector: '.visit__banner',
  base: { filter: 'blur(5px)', scale: 1.05 }
});

onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '.leaders',
      pin: true,
      scrub: 1,
      start: 'center center+=80',
      end: '+=100%',
      pinSpacing: true
    }
  });

  const cards = $gsap.utils.toArray('.leaders__card');
  const numbers = $gsap.utils.toArray('.leaders__number');

  // Loop through both arrays in parallel
  cards.forEach((card, i) => {
    const number = numbers[i];

    tl.to(
      card,
      {
        rotate: i === 2 ? 0 : i % 2 === 0 ? -15 : 15,
        opacity: 1,
        scale: i === cards.length - 1 ? 1 : undefined,
        duration: 0.5
      },
      `pair${i}`
    ); // label keeps them grouped

    tl.to(
      number,
      {
        background: '#008b5f',
        color: '#fff',
        duration: 0.3
      },
      `pair${i}`
    ); // same label = same moment
  });

  // Enter animation
  $gsap
    .timeline({
      scrollTrigger: {
        trigger: '.leaders',
        start: 'top 90%'
      },
      defaults: {
        opacity: 0
      }
    })
    .from('.leaders__left-content>*', {
      x: -50,
      stagger: 0.15
    })
    .from('.leaders__numbers>*', {
      y: 10,
      stagger: 0.15
    });
});

const icons = [[IconsTime], [IconsTaxi, IconsTrain], [IconsPin, IconsPin, IconsPin]];
const images = ['leaders-1.jpg', 'leaders-2.jpg', 'leaders-3.jpg'];

const leadersCards = computed(() =>
  tm('for-visitors.leaders.cards').map((el, index) => ({
    ...el,
    image: images[index]
  }))
);
const cards = computed(() =>
  tm('for-visitors.visit.items').map((el, index) => ({
    label: el.label,
    items: el.items.map((item, itemIndex) => ({
      icon: icons[index][itemIndex],
      text: item
    }))
  }))
);
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/for-visitors',
    label: t('nav.for-visitors')
  }
]);

useMySEO('visitors');
</script>

<style lang="scss" scoped>
.leaders {
  color: #323b49;
  display: grid;
  grid-template-columns: 1fr 1.13fr;
  gap: max(23.5rem, 84px);
  @media screen and (max-width: $bp-md) {
    grid-template-columns: 1fr;
  }
  &__right {
    position: relative;
    display: grid;
    padding-right: 17.6rem;
    @media screen and (max-width: $bp-md) {
      padding-inline: 20%;
    }
    @media screen and (max-width: $bp-sm) {
      padding-inline: 40px;
    }
    & > * {
      grid-area: 1/1/2/2;
      opacity: 0;
      &:first-child {
        place-self: flex-start;
        max-width: 87.6%;
        transform-origin: bottom left;
        transform: translate(10%, -10%) rotate(-30deg);
        @media screen and (max-width: $bp-md) {
          max-width: 80%;
          transform: translate(10%, 0%) rotate(-30deg);
        }
      }
      &:nth-child(2) {
        place-self: flex-end;
        max-width: 78.3%;
        transform: translate(5%, -15%) rotate(30deg);
        transform-origin: bottom right;
        @media screen and (max-width: $bp-md) {
          max-width: 70%;
          transform: translate(-10%, -5%) rotate(30deg);
        }
      }
      &:last-child {
        place-self: center;
        transform: scale(0.85) rotate(5deg);
      }
    }
  }
  &__card {
    background-color: #f3f4f5;
    padding: max(0.8rem, 4px);
    border-radius: max(2.2rem, 8px);
    display: flex;
    flex-direction: column;
    gap: max(1rem, 4px);
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(0.8rem, 4px);
      padding: max(2.2rem, 8px);
      p {
        font-size: max(1.7rem, 8px);
      }
      &-title {
        font-size: max(2.8rem, 12px);
        font-weight: bold;
        color: #323b49;
      }
      &-labels {
        display: flex;
        gap: max(0.8rem, 4px);
      }
      &-label {
        color: #90703c;
        font-size: max(1.7rem, 8px);
      }
    }
    &-image {
      border-radius: max(1.3rem, 8px);
      aspect-ratio: 628/457;
    }
  }
  &__number {
    @include flex-center;
    background-color: #f3f4f5;
    border-radius: 8px;
    padding-block: 4.5px;
    font-size: max(2rem, 16px);
    font-weight: 500;
  }
  &__numbers {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max(12rem, 105px);
    gap: 7px;
  }
  &__left {
    display: flex;
    flex-direction: column;
    gap: max(2.8rem, 20px);

    &-content {
      display: flex;
      flex-direction: column;
      gap: max(1.6rem, 12px);
      &-title {
        font-size: max(4.2rem, 20px);
        font-weight: bold;
        color: #271f0c;
      }
    }
  }
}
.visit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: max(3.2rem, 12px);
  &__banner {
    border-radius: max(2rem, 12px);
    @media screen and (max-width: $bp-sm) {
      aspect-ratio: 328/200;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: max(2.4rem, 12px);
  }
  &__title {
    font-size: max(4.2rem, 20px);
    font-weight: bold;
    color: #271f0c;
  }
  &__card {
    background: #f8f8f8;
    border: 1px solid #0000001f;
    padding: max(3rem, 16px);
    border-radius: max(2.4rem, 12px);
    display: flex;
    flex-direction: column;
    gap: max(3.2rem, 16px);
    &-title {
      color: #323b49;
      font-size: max(2.4rem, 14px);
      font-weight: bold;
    }
    &-icon {
      width: 54.5454%;
    }
    &-box {
      @include flex-center;
      background-color: $clr-dark-teal;
      width: max(4.4rem, 36px);
      height: max(4.4rem, 36px);
      border-radius: 12px;
      fill: #fff;
      @media screen and (max-width: $bp-sm) {
        border-radius: 50%;
      }
    }
    &-list {
      display: flex;
      flex-direction: column;
      gap: max(2rem, 12px);
    }
    &-item {
      color: #323b49;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
}
.visitors {
  &__form {
    background-color: #eaebed4d !important;
  }
}
.hero {
  position: relative;
  display: grid;
  @media screen and (min-width: $bp-md) {
    grid-template-rows: 1fr 9rem auto;
  }
  @media screen and (max-width: $bp-md) {
    gap: 20px;
  }
  & > * {
    @media screen and (min-width: $bp-md) {
      grid-column: 1 / 2;
    }
  }
  &__item {
    gap: 89px;
    background: linear-gradient(90deg, #008b5e 0%, #08ad78 100%);
    padding: max(3rem, 16px);
    border-radius: max(2rem, 12px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-label {
      color: #fff;
      font-size: max(3.2rem, 20px);
      font-weight: bold;
    }
  }
  &__list {
    display: grid;
    gap: max(2.4rem, 12px);
    grid-template-columns: repeat(auto-fit, minmax(54.7rem, 1fr));
    z-index: 2;
    @media screen and (min-width: $bp-md) {
      margin-inline: 3.2rem;
      grid-row: 2 / 4;
      // position: absolute;
      // left: 0;
      // right: 0;
      // bottom: 0;
      // z-index: 2;
      // translate: 0 65%;
    }
    @media screen and (max-width: $bp-md) {
      @include grid-scroll(280px);
    }
  }
  &__image {
    // position: absolute;
    // inset: 0;
    aspect-ratio: 1780/720;
    border-radius: max(2rem, 12px);
    @media screen and (min-width: $bp-md) {
      grid-row: 1 / 3;
    }
    @media screen and (max-width: $bp-md) {
      position: static;
      aspect-ratio: 328/200;
    }
  }
}
</style>
