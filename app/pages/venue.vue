<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="venue">
      <section class="hero">
        <MyPicture src="venue-hero.png" alt="people" class="hero__image" />
        <PageHeader
          :title="$t('venue.hero.title')"
          :subtitle="$t('venue.hero.subtitle')"
          class="hero__content"
        />
      </section>
      <section class="texts">
        <p v-for="text in $tm('venue.texts')" :key="$rt(text)" class="text-medium">
          {{ $rt(text) }}
        </p>
      </section>
      <section class="visit">
        <div class="visit__top">
          <h2 class="title-42">
            {{ $t('venue.visit.title') }}
          </h2>
          <button class="visit__button btn-green">
            <IconsPin class="icon" />
            <span>{{ $t('view-maps') }}</span>
          </button>
        </div>
        <ul class="visit__list">
          <li v-for="(item, index) in visitList" :key="index" class="visit__item">
            <div class="visit__item-top">
              <h3 class="visit__item-title">{{ $rt(item.title) }}</h3>
              <p>{{ $rt(item.subtitle) }}</p>
            </div>
            <div class="visit__item-bottom">
              <ul class="visit__item-bullets">
                <li
                  v-for="(bullet, bulletIndex) in item.bullets"
                  :key="bulletIndex"
                  class="visit__item-bullet"
                >
                  <div class="visit__item-icon-container">
                    <component :is="bullet.icon" class="visit__item-icon" />
                  </div>
                  <p>{{ $rt(bullet.text) }}</p>
                </li>
              </ul>
              <p>{{ $rt(item.text) }}</p>
            </div>
          </li>
        </ul>
        <div class="visit__map">
          <MyPicture src="visit-map.jpg" alt="map" class="visit__map-image" />
          <div class="visit__map-container">
            <div class="visit__map-box">
              <SvgLogoSmall class="visit__map-box-logo" />
            </div>
            <div class="visit__map-dot" />
          </div>
        </div>
        <button class="visit__button btn-green">
          <IconsPin class="icon" />
          <span>{{ $t('view-maps') }}</span>
        </button>
      </section>
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsCalendar from '~/components/icons/calendar.vue';
import IconsTaxi from '~/components/icons/taxi.vue';
import IconsTrain from '~/components/icons/train.vue';
import IconsPin from '~/components/icons/pin.vue';

const { t, tm } = useI18n();

const bulletIcons = [[IconsCalendar], [IconsTaxi, IconsTrain], [IconsPin, IconsPin]];

const visitList = computed(() =>
  tm('venue.visit.list').map((item, index) => ({
    ...item,
    bullets: item.bullets.map((bullet, bulletIndex) => ({
      icon: bulletIcons[index][bulletIndex],
      text: bullet
    }))
  }))
);
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/venue',
    label: t('nav.venue')
  }
]);
</script>

<style lang="scss" scoped>
.visit {
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 20px);
  &__map {
    @include flex-center;
    position: relative;
    aspect-ratio: 1780/320;
    border-radius: max(2.4rem, 16px);
    overflow: hidden;
    @media screen and (max-width: $bp-md) {
      aspect-ratio: 328/280;
    }
    &-container {
      display: flex;
      flex-direction: column;
      gap: 4px;
      align-items: center;
    }
    &-box {
      @include flex-center;
      border-radius: 50%;
      width: max(8.2rem, 60px);
      height: max(8.2rem, 60px);
      box-shadow: 0px 114px 60px 20px #0000001a;
      border: 1px solid #0000001f;
      background: #ffffff;
      &-logo {
        width: 51.2%;
      }
    }
    &-dot {
      border-radius: 50%;
      background-color: $clr-dark-teal;
      width: 12px;
      height: 12px;
    }
    &-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max(30rem, 300px), 1fr));
    gap: max(3.2rem, 12px);
  }
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: max(3.2rem, 16px);
    border-radius: max(2.4rem, 16px);
    background-color: $clr-light-white;
    gap: max(26rem, 60px);
    &-title {
      color: #140f06;
      font-size: max(2.8rem, 18px);
      font-weight: bold;
    }

    &-top,
    &-bottom {
      display: flex;
      flex-direction: column;
      gap: max(1.6rem, 8px);
    }
    &-top {
      gap: max(1rem, 8px);
    }
    &-bullet {
      font-size: max(1.8rem, 14px);
      color: $clr-dark-slate-blue;
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: bold;
      p {
        flex: 1;
      }
    }
    &-bullets {
      display: flex;
      flex-direction: column;
      gap: max(1.6rem, 8px);
    }
    &-icon {
      width: 54.54545454%;
      fill: #fff;
      &-container {
        @include flex-center;
        width: max(4.4rem, 40px);
        height: max(4.4rem, 40px);
        border-radius: 50%;
        background-color: $clr-dark-teal;
      }
    }
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      @media screen and (max-width: $bp-sm) {
        display: none;
      }
    }
  }
  &__button {
    padding-inline: max(3rem, 30px);
    padding-block: 14px;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 40px;
    justify-content: center;
  }
  & > *:last-child {
    @media screen and (min-width: $bp-sm) {
      display: none;
    }
  }
}
.hero {
  position: relative;
  aspect-ratio: 1780/680;
  display: flex;
  justify-content: center;
  &__content {
    align-self: flex-end;
    margin-bottom: 6rem;
    & > * {
      color: #fff;
    }
  }
  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    z-index: -1;
  }
}
.venue {
  display: flex;
  flex-direction: column;
  gap: max(8rem, 32px);
}
</style>
