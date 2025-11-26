<template>
  <LayoutBreadcrumbs :breadcrumbs>
    <UiDetailedHero
      :title="speaker[`name_${$i18n.locale}`]"
      :subtitle="speaker[`role_${$i18n.locale}`]"
      :about="{
        label: $t('about-speaker'),
        text: speaker[`info_${$i18n.locale}`]
      }"
      :highlights="speaker.highlights"
      :quote="{
        image: `${DOMAIN_URL}${speaker.image}`,
        text: speaker[`quote_${$i18n.locale}`]
      }"
      :cards
    />
  </LayoutBreadcrumbs>
</template>

<script setup>
const { t, locale } = useI18n();
const route = useRoute();
const { speakers } = useApiStore();

const speaker = speakers.find(s => s.id === +route.params.id);
const cards = computed(() => [
  {
    title: speaker.clients,
    text: t('participant.clients')
  },
  {
    title: speaker.partners,
    text: t('participant.partners')
  },
  {
    title: speaker.products,
    text: t('participant.products')
  },
  {
    title: speaker.experiences,
    text: t('participant.experiences')
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
    label: speaker[`name_${locale.value}`]
  }
]);

useDynamicSEO('speaker', {
  speakerName: speaker[`name_${locale.value}`],
  speakerRole: speaker[`role_${locale.value}`],
  clientsCount: speaker.clients,
  experienceYears: speaker.experiences,
  productsCount: speaker.products
});

useGSAPAnimate({
  selector: '.hero>*',
  base: { x: -35 },
  mode: 'group'
});
</script>

<style lang="scss" scoped></style>
