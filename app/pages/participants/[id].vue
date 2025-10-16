<template>
  <BreadcrumbsLayout :breadcrumbs class="participant">
    <section class="hero">
      <div class="hero__header">
        <div class="hero__top">
          <div class="hero__top-box">
            <SvgBanksKapital class="hero__top-logo" />
          </div>
          <div class="hero__top-content">
            <h1 class="hero__title">Kapital Sug‘urta</h1>
            <p class="text-medium">Insurance services</p>
          </div>
        </div>
        <div class="hero__info">
          <h2 class="hero__label">About company</h2>
          <p class="text-medium">
            Kapital Sug’urta is one of Uzbekistan’s leading insurance companies, offering a wide
            range of insurance services for both individuals and legal entities. The company
            provides innovative solutions aimed at ensuring clients’ financial security and
            minimizing risks. Kapital Sug’urta’s services include life insurance, property
            protection, health insurance, and vehicle insurance.
          </p>
        </div>
      </div>
      <div class="hero__area">
        <h2 class="hero__label">Main areas of focus</h2>
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
      <MyPicture src="participants-index.png" alt="banner" class="hero__banner" />
    </section>
    <section class="info">
      <div class="info__card">
        <h2 class="hero__label">{{ $t('contact-information') }}</h2>
        <ul class="info__list">
          <li class="info__item">
            <div class="info__item-box">
              <IconsPin class="info__item-icon" />
            </div>
            <div class="text-medium fill-dark-slate-blue">
              {{ $t('address') }}:
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                {{ infoListData.address }}
              </a>
            </div>
          </li>
          <li class="info__item">
            <div class="info__item-box">
              <IconsCalling class="info__item-icon" />
            </div>
            <div class="text-medium fill-dark-slate-blue">
              {{ $t('phone') }}:
              <a :href="`tel:${infoListData.phone}`">
                {{ infoListData.phone }}
              </a>
            </div>
          </li>
          <li class="info__item">
            <div class="info__item-box">
              <IconsMail class="info__item-icon" />
            </div>
            <div class="text-medium fill-dark-slate-blue">
              {{ $t('email') }}:
              <a :href="`mailto:${infoListData.email}`">
                {{ infoListData.email }}
              </a>
            </div>
          </li>
          <li class="info__item">
            <div class="info__item-box">
              <IconsPin class="info__item-icon" />
            </div>
            <div class="text-medium fill-dark-slate-blue">
              {{ $t('website') }}:
              <a :href="`https://${infoListData.website}`" target="_blank">
                {{ infoListData.website }}
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="info__card">
        <h2 class="hero__label">{{ $t('participant.info.services') }}</h2>
        <ul class="info__list">
          <li>New “Online Insurance” platform</li>
          <li>Instant insurance processing via mobile app</li>
          <li>Insurance solutions for startups and small businesses</li>
          <li>Digital insurance services (remote contract signing)</li>
          <li>Insurance products integrated with fintech solutions</li>
        </ul>
      </div>
    </section>
    <ClientOnly>
      <swiper-container
        class="carousel"
        space-between="12"
        slides-per-view="auto"
        grab-cursor="true"
      >
        <swiper-slide v-for="(image, index) in carouselImages" :key="index" class="carousel__slide">
          <MyPicture :src="image" alt="carousel image" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </BreadcrumbsLayout>
</template>

<script setup>
const { t } = useI18n();

const infoListData = {
  address: '15 Mustaqillik Avenue, Tashkent City',
  phone: '+998 (71) 233 45 67',
  email: 'info@kapitalsugurta.uz',
  website: 'www.kapitalsugurta.uz'
};
const carouselImages = [
  'participant-1.jpg',
  'participant-2.jpg',
  'participant-3.jpg',
  'participant-4.jpg',
  'participant-1.jpg'
];

const heroFocus = computed(() => [
  {
    text: 'Life and health insurance services'
  },
  {
    text: 'Car insurance (OSAGO, KASKO)'
  },
  {
    text: 'Travel insurance'
  },
  {
    text: 'Travel insurance'
  },
  {
    text: 'Property and real estate insurance'
  },
  {
    text: 'Corporate insurance packages'
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
    to: '/participants',
    label: t('nav.participants')
  },
  {
    to: '/participants/1',
    label: 'participant name'
  }
]);
</script>

<style lang="scss" scoped>
.carousel {
  &__slide {
    max-width: 42rem;
    min-width: 268px;
  }
}
.info {
  display: flex;
  gap: max(3.4rem, 32px);
  @media screen and (max-width: $bp-lg) {
    flex-direction: column;
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    a {
      transition: color 0.3s;
    }
    a:hover {
      color: $clr-bright-teal-alt;
    }
    &-box {
      @include flex-center;
      background-color: $clr-dark-teal;
      width: max(4.4rem, 36px);
      height: max(4.4rem, 36px);
      border-radius: max(1.2rem, 8px);
      fill: #fff;
    }
    &-icon {
      width: 54.5454%;
    }
  }
  &__card {
    padding: max(3.2rem, 16px);
    border-radius: max(2.4rem, 16px);
    display: flex;
    flex-direction: column;
    gap: max(2.4rem, 16px);
    color: $clr-dark-slate-blue;
    font-size: max(2rem, 14px);
    font-weight: 500;
    background: #eaebed4d;
    border: 1px solid #eaebed;
    &:last-child {
      flex: 1;
      .info__list {
        list-style: disc;
        margin-left: 20px;
      }
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 12px);
  }
}
.hero {
  padding: max(4.8rem, 16px);
  background-color: #eaebed4d;
  border: 1px solid #eaebed;
  border-radius: max(3.2rem, 16px);
  display: grid;
  grid-template-areas:
    'header banner'
    'area banner'
    'cards cards';
  grid-template-columns: repeat(2, 1fr);
  gap: max(6rem, 16px);
  @media screen and (max-width: $bp-lg) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'banner'
      'header'
      'area'
      'cards';
  }
  &__banner {
    grid-area: banner;
    align-self: flex-start;
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
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max(30rem, 250px), 1fr));
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
    font-size: max(3.8rem, 16px);
    font-weight: bold;
  }
  &__top {
    display: flex;
    align-items: center;
    gap: max(2.4rem, 12px);
    &-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 4px);
    }
    &-logo {
      width: 86%;
    }
    &-box {
      @include flex-center;
      width: max(14rem, 60px);
      height: max(14rem, 60px);
      border: 0.6px solid #2c3a471a;
      background-color: #fff;
      border-radius: max(2rem, 12px);
    }
  }
  &__header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    gap: max(6rem, 16px);
    margin-bottom: 3rem;
    @media screen and (max-width: $bp-md) {
      margin-bottom: 0;
    }
  }
}
.participant > *:last-child {
  gap: 32px;
}
</style>
