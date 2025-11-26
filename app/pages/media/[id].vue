<template>
  <LayoutBreadcrumbs :breadcrumbs>
    <UiPageHeader
      class="media__header"
      :title="currentMedia[`title_${$i18n.locale}`]"
      :subtitle="currentMedia[`body_${$i18n.locale}`]"
    />
    <ul class="media__list">
      <li v-for="(image, index) in gallery" :key="index">
        <img :src="`${DOMAIN_URL}${image}`" alt="media banner" class="media__list-item" />
      </li>
    </ul>
  </LayoutBreadcrumbs>
</template>

<script setup>
const { t, locale } = useI18n();
const route = useRoute();
const { media } = useApiStore();

const currentMedia = media.data.find(m => m.id === +route.params.id);
const gallery = currentMedia ? JSON.parse(currentMedia.gallery) : [];

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/media',
    label: t('nav.media')
  },
  {
    to: `/media/${route.params.id}`,
    label: route.params.id
  }
]);

useDynamicSEO('currentMedia', {
  mediaTitle: currentMedia[`title_${locale.value}`],
  mediaBody: currentMedia[`body_${locale.value}`],
  mediaDate: Intl.DateTimeFormat().format(new Date(currentMedia.updated_at)),
  galleryCount: JSON.parse(currentMedia.gallery)?.length || 0
});

useGSAPAnimate({
  selector: '.media__list li',
  mode: 'group',
  base: { y: 30 }
});
</script>

<style lang="scss" scoped>
.media {
  &__list {
    display: grid;
    column-gap: max(3.2rem, 16px);
    row-gap: max(2rem, 16px);
    grid-template-columns: repeat(auto-fill, minmax(max(42.1rem, 328px), 1fr));
    li {
      display: flex;
    }
    &-item {
      border-radius: 12px;
    }
  }
  &__header {
    max-width: 65%;
  }
}
</style>
