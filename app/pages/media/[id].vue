<template>
  <BreadcrumbsLayout :breadcrumbs>
    <PageHeader
      class="media__header"
      title="Bank va moliya tashkilotlarining Expo doirasida namoyish etgan xizmatlari"
      subtitle="Innovatsion yechimlar va raqamli xizmatlar taqdimoti"
    />
    <ul class="media__list">
      <li v-for="(image, index) in data" :key="index">
        <MyPicture :src="image" alt="media banner" class="media__list-item" />
      </li>
    </ul>
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
