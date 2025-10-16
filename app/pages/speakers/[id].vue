<template>
  <BreadcrumbsLayout :breadcrumbs>
    <section class="hero">
      <div class="hero__header">
        <div class="hero__top-content">
          <h1 class="hero__title">Ahmadjon Rahmatjonov</h1>
          <p class="text-medium">Founder and CEO at Samsung</p>
        </div>
        <div class="hero__info">
          <h2 class="hero__label">About</h2>
          <p class="text-medium">
            Samsung is one of the world’s leading technology companies, recognized as a global
            leader in smartphones, televisions, home appliances, and the semiconductor industry. The
            company operates in more than 80 countries, offering innovative products and services.
          </p>
        </div>
      </div>
      <div class="hero__area">
        <h2 class="hero__label">Exhibition Focus / Highlights</h2>
        <ul class="hero__area-list">
          <li v-for="(item, index) in heroFocus" :key="index" class="hero__area-item">
            <div class="hero__area-box">
              <IconsGameHeart class="hero__area-icon" />
            </div>
            <p class="hero__text">
              {{ item.text }}
            </p>
          </li>
        </ul>
      </div>
      <ul class="hero__cards">
        <li v-for="(item, index) in heroCards" :key="index" class="hero__card">
          <span class="hero__title">{{ item.title }}</span>
          <p class="hero__text">{{ item.text }}</p>
        </li>
      </ul>
      <div class="hero__right">
        <MyPicture src="team-4.jpg" alt="person" class="hero__right-banner" />
        <div class="hero__right-content">
          <h4>{{ $t('quote') }}</h4>
          <p class="text-medium">
            “Our goal is to make technology serve to make human life more comfortable and
            efficient.” — Ahmadjon Rahmatjonov, CEO of Samsung Uzbekistan
          </p>
        </div>
      </div>
    </section>
  </BreadcrumbsLayout>
</template>

<script setup>
const { t } = useI18n();

const heroFocus = computed(() => [
  {
    text: 'Life and health insurance services'
  },
  {
    text: 'Car insurance (OSAGO, KASKO)'
  },
  {
    text: 'Travel insurance'
  }
]);
const heroCards = computed(() => [
  {
    title: '123 000+',
    text: 'Clients who have used our services'
  },
  {
    title: '250+',
    text: 'Corporate partner organizations'
  },
  {
    title: '70+',
    text: 'Insurance products and solutions'
  },
  {
    title: '25 years',
    text: 'Market experience and history of trust'
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
  },
  {
    to: '/speakers/1',
    label: 'speaker name'
  }
]);
</script>

<style lang="scss" scoped>
.hero {
  padding: max(4.8rem, 16px);
  background-color: #eaebed4d;
  border: 1px solid #eaebed;
  border-radius: max(3.2rem, 16px);
  display: grid;
  grid-template-areas:
    'header right'
    'area right'
    'cards cards';
  grid-template-columns: repeat(2, 1fr);
  gap: max(6rem, 32px);
  @media screen and (max-width: $bp-lg) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'right'
      'header'
      'area'
      'cards';
  }
  &__right {
    grid-area: right;
    display: flex;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: $bp-lg) {
      margin-bottom: 100px;
    }
    &-banner {
      border-radius: max(2rem, 12px);
      align-self: flex-end;
      @media screen and (min-width: $bp-lg) {
        max-width: 84%;
      }
      @media screen and (max-width: $bp-sm) {
        aspect-ratio: 296 / 342;
      }
    }
    &-content {
      position: absolute;
      right: 2%;
      bottom: 0;
      translate: 0 23%;
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 8px);
      background: #eaebed;
      border: 1px solid #eaebed;
      box-shadow: 0px 2px 32px 0px #ffffff29;
      padding: max(3.2rem, 12px);
      border-radius: max(2rem, 8px);
      @media screen and (max-width: $bp-lg) {
        max-width: 92%;
        width: 100%;
        right: auto;
        left: 50%;
        translate: -50% 60%;
      }

      h4 {
        font-size: max(2.4rem, 16px);
        font-weight: bold;
        color: #111827;
      }
    }
  }
  &__card {
    padding: max(3.2rem, 16px);
    border-radius: max(2.4rem, 12px);
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aspect-ratio: 403/280;
    @media screen and (max-width: $bp-md) {
      aspect-ratio: 296/150;
    }
  }
  &__cards {
    grid-area: cards;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: max(2.4rem, 12px);
  }
  &__label {
    color: $clr-dark-charcoal;
    font-weight: bold;
    font-size: max(2.8rem, 18px);
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 10px);
  }
  &__text {
    font-weight: 500;
    color: $clr-dark-charcoal;
  }
  &__area {
    grid-area: area;
    display: flex;
    flex-direction: column;
    gap: max(2rem, 12px);
    &-item {
      display: flex;
      align-items: center;
      gap: max(1.6rem, 12px);
      background-color: #ffffff;
      border: 1px solid #eaebed;
      padding: max(1.6rem, 12px);
      border-radius: max(1.6rem, 12px);
    }
    &-list {
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 8px);
    }
    &-box {
      @include flex-center;
      width: max(5rem, 42px);
      height: max(5rem, 42px);
      background-color: $clr-bright-teal-alt;
      border-radius: max(1.2rem, 8px);
      fill: #fff;
    }
    &-icon {
      width: 56%;
    }
  }
  &__title {
    color: $clr-dark-charcoal;
    font-size: max(3.8rem, 20px);
    font-weight: bold;
  }
  &__top {
    &-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 4px);
    }
  }
  &__header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    gap: max(6rem, 32px);
  }
}
</style>
