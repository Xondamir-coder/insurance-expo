<template>
  <LayoutBreadcrumbs :breadcrumbs>
    <UiDetailedHero
      title="Ahmadjon Rahmatjonov"
      subtitle="Founder and CEO at Samsung"
      :about="{
        label: 'About',
        text: 'Samsung is one of the world’s leading technology companies, recognized as a global leader in smartphones, televisions, home appliances, and the semiconductor industry. The company operates in more than 80 countries, offering innovative products and services.'
      }"
      :focus="heroFocus"
      :quote="{
        image: 'team-4.jpg',
        text: '“Our goal is to make technology serve to make human life more comfortable and efficient.” — Ahmadjon Rahmatjonov, CEO of Samsung Uzbekistan'
      }"
    />
  </LayoutBreadcrumbs>
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

useGSAPAnimate({
  selector: '.hero>*',
  base: { x: -35 },
  mode: 'group'
});
</script>

<style lang="scss" scoped></style>
