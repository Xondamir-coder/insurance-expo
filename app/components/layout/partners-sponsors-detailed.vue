<template>
  <LayoutBreadcrumbs :breadcrumbs class="participant">
    <UiDetailedHero
      :logo="currentDetailed.logo"
      :title="currentDetailed[`name_${$i18n.locale}`]"
      :subtitle="currentDetailed[`short_info_${$i18n.locale}`]"
      :about="{
        label: $t(`about-${pageName}`),
        text: currentDetailed[`about_${$i18n.locale}`]
      }"
      :info="{
        label: $t('why-partner-expo'),
        text: currentDetailed[`body_${$i18n.locale}`]
      }"
      :quote="{
        image: currentDetailed.hero_image,
        text: currentDetailed[`quote_${$i18n.locale}`]
      }"
      :cards
    />
    <section class="info">
      <UiInfoCard v-for="(card, index) in [contactsCard, servicesCard]" :key="index" :data="card" />
    </section>
    <UiImageSlider
      v-if="currentDetailed.gallery"
      :images="JSON.parse(currentDetailed.gallery).map(img => `${DOMAIN_URL}${img}`)"
    />
  </LayoutBreadcrumbs>
</template>

<script setup>
import { IconsPin, IconsCalling, IconsMail, IconsGlobe } from '#components';

const { partnersAndSponsors } = useApiStore();
const { t, locale } = useI18n();
const route = useRoute();

const currentDetailed = partnersAndSponsors.data.find(s => s.id === +route.params.id);

const cards = computed(() => [
  {
    title: currentDetailed.clients,
    text: t('participant.clients')
  },
  {
    title: currentDetailed.partners,
    text: t('participant.partners')
  },
  {
    title: currentDetailed.products,
    text: t('participant.products')
  },
  {
    title: currentDetailed.experiences,
    text: t('participant.experiences')
  }
]);
const contactsCard = computed(() => ({
  title: t('contact-information'),
  content: [
    {
      icon: IconsPin,
      href: currentDetailed.address_map,
      label: currentDetailed[`address_${locale.value}`]
    },
    {
      icon: IconsCalling,
      href: `tel:${currentDetailed.phone}`,
      label: currentDetailed.phone
    },
    {
      icon: IconsMail,
      href: `mailto:${currentDetailed.email}`,
      label: currentDetailed.email
    },
    {
      icon: IconsGlobe,
      href: currentDetailed.link,
      label: currentDetailed.link.replace('http://', '').replace('https://', '')
    }
  ]
}));
const servicesCard = computed(() => ({
  title: t('key-areas'),
  content: currentDetailed.services.map(el => el[`title_${locale.value}`])
}));

useDynamicSEO('partnerSponsor', {
  partnerName: currentDetailed[`name_${locale.value}`],
  shortInfo: currentDetailed[`short_info_${locale.value}`],
  about: currentDetailed[`about_${locale.value}`],
  servicesCount: currentDetailed.services?.length || 0,
  industry: currentDetailed[`short_info_${locale.value}`],
  address: currentDetailed[`address_${locale.value}`],
  ecosystemInfo: currentDetailed[`body_${locale.value}`]
});

defineProps({
  breadcrumbs: {
    required: true,
    type: Array
  },
  pageName: {
    required: true,
    type: String
  }
});

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
