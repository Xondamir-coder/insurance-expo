<template>
  <LayoutBreadcrumbs :breadcrumbs>
    <UiLegalBase
      :title="$t('privacy-policy.title')"
      :subtitle="$t('privacy-policy.subtitle')"
      :content="$tm('privacy-policy.content')"
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
    to: '/privacy-policy',
    label: t('nav.privacy-policy')
  }
]);

useMySEO('privacy-policy');
</script>
