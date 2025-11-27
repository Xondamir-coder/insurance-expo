<template>
  <LayoutBreadcrumbs :breadcrumbs class="participant">
    <UiDetailedHero
      :logo="participant.logo"
      :title="participant[`name_${$i18n.locale}`]"
      :subtitle="$t('insurance-services')"
      :about="{
        label: $t('about-company'),
        text: participant[`body_${$i18n.locale}`]
      }"
      :highlights="participant.highlights"
      :cards
      :banner="participant.hero_image"
    />
    <section class="info">
      <UiInfoCard v-for="(card, index) in [contactsCard, servicesCard]" :key="index" :data="card" />
    </section>
    <UiImageSlider :images="JSON.parse(participant.gallery).map(img => `${DOMAIN_URL}${img}`)" />
  </LayoutBreadcrumbs>
</template>

<script setup>
import { IconsPin, IconsCalling, IconsMail, IconsGlobe } from '#components';

const { t, locale } = useI18n();
const route = useRoute();
const { participants } = useApiStore();

const participant = participants.data.find(p => p.id === +route.params.id);
const cards = computed(() => [
  {
    title: participant.clients,
    text: t('participant.clients')
  },
  {
    title: participant.partners,
    text: t('participant.partners')
  },
  {
    title: participant.products,
    text: t('participant.products')
  },
  {
    title: participant.experiences,
    text: t('participant.experiences')
  }
]);
const contactsCard = computed(() => ({
  title: t('contact-information'),
  content: [
    {
      icon: IconsPin,
      href: participant.address_map,
      label: participant[`address_${locale.value}`]
    },
    {
      icon: IconsCalling,
      href: `tel:${participant.phone}`,
      label: participant.phone
    },
    {
      icon: IconsMail,
      href: `mailto:${participant.email}`,
      label: participant.email
    },
    {
      icon: IconsGlobe,
      href: participant.link,
      label: participant.link.replace('http://', '').replace('https://', '')
    }
  ]
}));
const servicesCard = computed(() => ({
  title: t('participant.info.services'),
  content: participant.services.map(el => el[`title_${locale.value}`])
}));
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
    label: participant[`name_${locale.value}`]
  }
]);

useDynamicSEO('participant', {
  companyName: participant[`name_${locale.value}`],
  clientsCount: participant.clients,
  experienceYears: participant.experiences,
  productsCount: participant.products
});

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
