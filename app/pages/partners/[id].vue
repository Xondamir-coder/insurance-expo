<template>
  <BreadcrumbsLayout :breadcrumbs class="participant">
    <DetailedHero
      :logo="SvgBanksKapital"
      title="Kapital Sug‘urta"
      subtitle="Insurance services"
      :info="{
        label: 'Why They Partner with Expo Insurance',
        text: 'Expo Insurance provides Kapital Bank Insurance with a platform to showcase innovation, connect with international investors, and exchange insights with global experts. Through this partnership, the company aims to expand its digital product ecosystem and strengthen Uzbekistan’s position in the regional insurance market.'
      }"
      :about="{
        label: 'About',
        text: 'Kapital Sug’urta is one of Uzbekistan’s leading insurance companies, offering a wide range of insurance services for both individuals and legal entities. The company provides innovative solutions aimed at ensuring clients’ financial security and minimizing risks. Kapital Sug’urta’s services include life insurance, property protection, health insurance, and vehicle insurance.'
      }"
      :quote="{
        image: 'partners-banner.jpg',
        text: '“Our goal is to make technology serve to make human life more comfortable and efficient.” — Ahmadjon Rahmatjonov, CEO of Samsung Uzbekistan'
      }"
    />
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
import SvgBanksKapital from '~/components/svg/banks/kapital.vue';

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

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/partners',
    label: t('nav.partners')
  },
  {
    to: '/partners/1',
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
.participant > *:last-child {
  gap: 32px;
}
</style>
