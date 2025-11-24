<template>
  <LayoutBreadcrumbs :breadcrumbs>
    <UiGreenPageHeader :title="$t('media.title')" :subtitle="$t('media.subtitle')" />
    <ul class="list">
      <li v-for="(item, index) in data" :key="index">
        <NuxtLink :to="$localePath(`/media/${index}`)" class="list__item">
          <div class="list__item-left">
            <UiPicture
              v-for="image in item.images"
              :key="image"
              :src="image"
              alt="media banner"
              class="list__item-image"
            />
          </div>
          <div class="list__item-content">
            <div class="list__item-content-top">
              <p class="text-medium">{{ item.date }}</p>
              <h2 class="list__item-title">{{ item.title }}</h2>
            </div>
            <p class="text-medium">{{ item.text }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </LayoutBreadcrumbs>
</template>

<script setup>
const { t } = useI18n();
const { $gsap } = useNuxtApp();

const data = [
  {
    images: ['media-1.jpg', 'media-2.jpg'],
    date: 'October 12, 2025',
    title: 'Ceremony, ribbons, first impressions, and media shots from the hall',
    text: 'Expo Insurance 2025 kicked off with a grand opening ceremony. The event was attended by insurance market leaders, partners, and media representatives. This album captures the first impressions, striking moments, and the inspiring atmosphere of the launch.'
  },
  {
    images: ['media-3.jpg', 'media-4.jpg'],
    date: 'October 12, 2025',
    title: 'Ceremony, ribbons, first impressions, and media shots from the hall',
    text: 'Expo Insurance 2025 kicked off with a grand opening ceremony. The event was attended by insurance market leaders, partners, and media representatives. This album captures the first impressions, striking moments, and the inspiring atmosphere of the launch.'
  },
  {
    images: ['media-1.jpg', 'media-3.jpg'],
    date: 'October 12, 2025',
    title: 'Ceremony, ribbons, first impressions, and media shots from the hall',
    text: 'Expo Insurance 2025 kicked off with a grand opening ceremony. The event was attended by insurance market leaders, partners, and media representatives. This album captures the first impressions, striking moments, and the inspiring atmosphere of the launch.'
  },
  {
    images: ['media-3.jpg', 'media-2.jpg'],
    date: 'October 12, 2025',
    title: 'Ceremony, ribbons, first impressions, and media shots from the hall',
    text: 'Expo Insurance 2025 kicked off with a grand opening ceremony. The event was attended by insurance market leaders, partners, and media representatives. This album captures the first impressions, striking moments, and the inspiring atmosphere of the launch.'
  }
];
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/media',
    label: t('nav.media-library')
  }
]);

useGSAPAnimate({
  selector: '.list li',
  custom: ({ el, i }) => {
    $gsap.from(el, {
      x: i % 2 === 0 ? 50 : -50,
      ...defaultAnimProps,
      ...getDefaultScrollTrigger(el)
    });
  }
});

useMySEO('media');
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    &:first-child > * {
      padding-top: 0;
    }
    &:last-child > * {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
  &__item {
    padding-block: max(3.2rem, 20px);
    color: #687588;
    display: grid;
    gap: max(3.3rem, 16px);
    transition: all 0.5s;
    border-bottom: 1px solid #e9eaec;
    &:hover {
      background-color: #e9eaec;
      .list__item-image > * {
        transform: scale(1.2);
      }
    }
    @media screen and (min-width: $bp-md) {
      align-items: flex-start;
      grid-template-columns: 1fr 1.42fr;
    }

    &-left {
      position: relative;
      padding-bottom: max(6rem, 10px);
    }
    &-image {
      border-radius: max(1.2rem, 6px);
      & > * {
        transition: all 0.7s;
      }
      &:first-child {
        max-width: 79.224%;
        @media screen and (max-width: $bp-sm) {
          max-width: 85.4%;
        }
      }
      &:last-child {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 58.2%;
      }
    }
    &-title {
      font-size: max(4.2rem, 20px);
      font-weight: bold;
      color: #111827;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(3.2rem, 16px);
      &-top {
        display: flex;
        flex-direction: column;
        gap: max(2rem, 8px);
      }
    }
  }
}
</style>
