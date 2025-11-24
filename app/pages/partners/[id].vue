<template>
  <LayoutBreadcrumbs :breadcrumbs class="participant">
    <UiDetailedHero
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
      <UiInfoCard v-for="(card, index) in infoCards" :key="index" :data="card" />
    </section>
    <UiImageSlider :images="carouselImages" />
  </LayoutBreadcrumbs>
</template>

<script setup>
import SvgBanksKapital from '~/components/svg/banks/kapital.vue';
import { IconsPin, IconsCalling, IconsMail, IconsLocation } from '#components';

const { t } = useI18n();

const infoCards = [
  {
    title: t('contact-information'),
    content: [
      {
        icon: IconsPin,
        label: t('address'),
        href: 'https://google.com',
        text: '15 Mustaqillik Avenue, Tashkent City'
      },
      {
        icon: IconsCalling,
        label: t('phone'),
        href: 'tel:+998 (71) 233 45 67',
        text: '+998 (71) 233 45 67'
      },
      {
        icon: IconsMail,
        label: t('email'),
        href: 'mailto:info@kapitalsugurta.uz',
        text: 'info@kapitalsugurta.uz'
      },
      {
        icon: IconsLocation,
        label: t('website'),
        href: 'https://www.kapitalsugurta.uz',
        text: 'www.kapitalsugurta.uz'
      }
    ]
  },
  {
    title: t('participant.info.services'),
    content: [
      'New “Online Insurance” platform',
      'Instant insurance processing via mobile app',
      'Insurance solutions for startups and small businesses',
      'Digital insurance services (remote contract signing)',
      'Insurance products integrated with fintech solutions'
    ]
  }
];
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

useGSAPAnimate({
  selector: '.hero>*',
  mode: 'group',
  base: { y: 25 }
});
useGSAPAnimate({
  selector: '.info>*',
  base: { y: 20 }
});
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
}
.participant > *:last-child {
  gap: 32px;
}
</style>
