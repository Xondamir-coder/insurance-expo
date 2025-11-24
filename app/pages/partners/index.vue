<template>
  <LayoutBreadcrumbs :breadcrumbs class="partners">
    <div class="partners__title">100</div>
    <UiGreenPageHeader :title="$t('partners.title')" :subtitle="$t('partners.subtitle')" />
    <UiPartnersList />
    <UiFormSection :title="$t('become-partner')" />
  </LayoutBreadcrumbs>
</template>

<script setup>
const { t } = useI18n();

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/partners',
    label: t('nav.partners')
  }
]);

useMySEO('partners');
</script>

<style lang="scss" scoped>
.partners {
  position: relative;
  gap: 30px;
  & > *:last-child > *:not(:first-child) {
    z-index: 2;
  }
  &__title {
    position: absolute;
    right: 5%;
    top: 0;
    font-weight: 700;
    line-height: 0.7;
    font-size: 60rem;
    letter-spacing: -0.02em;
    color: transparent;
    background: linear-gradient(180deg, #f3f3f3 0%, rgba(235, 235, 235, 0) 82.62%);
    -webkit-background-clip: text;
    background-clip: text;
    @media screen and (max-width: $bp-lg) {
      display: none;
    }
  }
}
</style>
