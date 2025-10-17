<template>
  <BreadcrumbsLayout :breadcrumbs>
    <PageHeader
      class="media__header"
      title="Bank va moliya tashkilotlarining Expo doirasida namoyish etgan xizmatlari"
      subtitle="Innovatsion yechimlar va raqamli xizmatlar taqdimoti"
    />
    <div class="media__list">
      <MyPicture
        v-for="(image, index) in data"
        :key="index"
        :src="image"
        alt="media banner"
        class="media__list-item"
      />
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
const { t } = useI18n();
const route = useRoute();

const data = [
  'media-1.jpg',
  'media-2.jpg',
  'media-3.jpg',
  'media-4.jpg',
  'media-2.jpg',
  'media-4.jpg',
  'media-3.jpg',
  'media-1.jpg',
  'media-4.jpg',
  'media-3.jpg',
  'media-1.jpg',
  'media-2.jpg',
  'media-3.jpg',
  'media-4.jpg',
  'media-2.jpg',
  'media-1.jpg'
];
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
    label: 'media name'
  }
]);
</script>

<style lang="scss" scoped>
.media {
  &__list {
    display: grid;
    column-gap: max(3.2rem, 16px);
    row-gap: max(2rem, 16px);
    grid-template-columns: repeat(auto-fill, minmax(max(42.1rem, 328px), 1fr));
    &-item {
      border-radius: 12px;
    }
  }
  &__header {
    max-width: 65%;
  }
}
</style>
