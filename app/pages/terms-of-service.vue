<template>
  <LayoutBreadcrumbs :breadcrumbs>
    <UiLegalBase
      :title="$t('terms-of-service.title')"
      :subtitle="$t('terms-of-service.subtitle')"
      :content="$tm('terms-of-service.content')"
    />
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
    to: '/terms-of-service',
    label: t('nav.terms-of-service')
  }
]);

useMySEO('terms-of-service');
</script>
