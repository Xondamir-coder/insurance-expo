<template>
  <LayoutBreadcrumbs :breadcrumbs class="speakers">
    <UiGreenPageHeader
      :title="$t('speakers.title')"
      :subtitle="$t('speakers.subtitle')"
      class="speakers__header"
    />
    <div class="carousel" :style="`--items-count: ${speakers.length}`">
      <div v-for="i in 2" :key="i" class="carousel__slider" :class="{ reverse: i === 2 }">
        <div class="carousel__track">
          <NuxtLink
            v-for="(speaker, index) in infiniteSpeakers"
            :key="index"
            :to="$localePath(`/speakers/${speaker.id}`)"
            class="carousel__slide"
          >
            <img
              :alt="speaker[`name_${$i18n.locale}`]"
              :src="`${DOMAIN_URL}${speaker.image}`"
              class="carousel__slide-box"
            />
            <div class="carousel__slide-content">
              <h3 class="carousel__slide-name">{{ speaker[`name_${$i18n.locale}`] }}</h3>
              <p class="carousel__slide-job">{{ speaker[`role_${$i18n.locale}`] }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </LayoutBreadcrumbs>
</template>

<script setup>
const { t } = useI18n();
const apiStore = useApiStore();
const { speakers } = storeToRefs(apiStore);

const infiniteSpeakers = computed(() => {
  const MIN_ITEMS = 12;
  const original = speakers.value;

  if (original.length === 0) return [];

  const timesToRepeat = Math.ceil(MIN_ITEMS / original.length);
  return Array.from({ length: timesToRepeat }, () => original).flat();
});

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/speakers',
    label: t('nav.speakers')
  }
]);

useGSAPAnimate({
  selector: '.carousel',
  base: { y: -20 },
  initialDelay: 0.1
});

usePageSEO('speakers');
</script>

<style lang="scss" scoped>
$item-width: max(27rem, 200px);
$item-gap: max(3.2rem, 16px);
$animation-speed: 40s;

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    // Move exactly by the width of original items (half of the track)
    transform: translateX(calc(-1 * (#{$item-width} + #{$item-gap}) * var(--items-count)));
  }
}

@keyframes scroll-reverse {
  0% {
    transform: translateX(calc(-1 * (#{$item-width} + #{$item-gap}) * var(--items-count)));
  }
  100% {
    transform: translateX(0);
  }
}

.carousel {
  --items-count: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  &__slide {
    width: $item-width;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &-name {
      color: $clr-dark-charcoal;
      font-weight: bold;
      font-size: max(2.4rem, 20px);
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    &-box {
      border-radius: 50%;
      aspect-ratio: 1;
    }
  }
  &__slider {
    position: relative;
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 100px;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, var(--bg-color, white) 0%, transparent 100%);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, var(--bg-color, white) 0%, transparent 100%);
    }

    &.reverse .carousel__track {
      animation-name: scroll-reverse;
    }
  }

  &__track {
    display: flex;
    gap: $item-gap;
    animation: scroll $animation-speed linear infinite;
    will-change: transform;
  }
}
.hero {
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 10px);
  padding-inline: $inline-spacing;
  @media screen and (min-width: $bp-lg) {
    max-width: 70%;
  }
  &__title {
    font-weight: 700;
    font-size: max(7rem, 20px);
    line-height: 120%;
    color: $clr-dark-teal;
  }
  &__subtitle {
    color: #22282b;
    font-weight: 500;
    font-size: max(2.4rem, 14px);
  }
}
.speakers {
  padding: 0;
  &__header {
    padding-left: $inline-spacing;
  }
  & > *:first-child {
    padding-inline: $inline-spacing;
  }
}
</style>
