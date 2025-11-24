<template>
  <LayoutBreadcrumbs :breadcrumbs class="participant">
    <UiDetailedHero
      :logo="SvgBanksKapital"
      title="Kapital Sug‘urta"
      subtitle="Insurance services"
      :about="{
        label: 'About company',
        text: 'Kapital Sug’urta is one of Uzbekistan’s leading insurance companies, offering a wide range of insurance services for both individuals and legal entities. The company provides innovative solutions aimed at ensuring clients’ financial security and minimizing risks. Kapital Sug’urta’s services include life insurance, property protection, health insurance, and vehicle insurance.'
      }"
      :focus="heroFocus"
      banner="participants-index.png"
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

useGSAPAnimate({
  selector: '.hero>*',
  mode: 'group',
  base: { y: 20 }
});
useGSAPAnimate({
  selector: '.info>*',
  base: { y: 20 }
});
useGSAPAnimate({
  selector: '.carousel__container',
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
