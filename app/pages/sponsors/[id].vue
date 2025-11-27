<template>
  <LayoutPartnersSponsorsDetailed :breadcrumbs page-name="sponsor" />
</template>

<script setup>
const route = useRoute();
const { t, locale } = useI18n();
const { partnersAndSponsors } = useApiStore();

const currentDetailed = partnersAndSponsors.data.find(s => s.id === +route.params.id);

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/sponsors',
    label: t('nav.sponsors')
  },
  {
    to: `/sponsors/${route.params.id}`,
    label: currentDetailed[`name_${locale.value}`]
  }
]);
</script>
