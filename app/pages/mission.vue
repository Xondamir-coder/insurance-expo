<template>
  <BreadcrumbsLayout :breadcrumbs>
    <section class="hero">
      <PageHeader :title="$t('mission.title')" :subtitle="$t('mission.subtitle')" />
      <div class="hero__images">
        <MyPicture src="mission-1.png" alt="buying car" class="hero__image" />
        <MyPicture src="mission-2.png" alt="ai image" class="hero__image" />
        <MyPicture src="mission-3.png" alt="teaching" class="hero__image" />
      </div>
    </section>
    <section class="texts">
      <p v-for="text in $tm('mission.texts')" :key="$rt(text)">{{ $rt(text) }}</p>
    </section>
    <section class="info">
      <div class="info__banner">
        <h2 class="info__banner-title">
          {{ $t('mission.info.title') }}
        </h2>
        <p class="info__banner-subtitle">
          {{ $t('mission.info.subtitle') }}
        </p>
        <MyPicture src="mission-banner.jpg" alt="banner" class="info__banner-image" />
      </div>
      <ul class="info__list">
        <li v-for="(card, index) in infoCards" :key="index" class="info__item">
          <div class="info__item-icon-container">
            <component :is="card.icon" class="info__item-icon" />
          </div>
          <div class="info__item-content">
            <h3 class="info__item-title">{{ $rt(card.title) }}</h3>
            <p class="info__item-text">{{ $rt(card.text) }}</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="team">
      <SectionHeader :title="$t('mission.team.title')" :subtitle="$t('mission.team.subtitle')" />
      <ul class="team__list">
        <li v-for="(teammate, index) in teamList" :key="index" class="team__item">
          <MyPicture :src="teammate.image" :alt="$rt(teammate.title)" class="team__item-image" />
          <div class="team__item-content">
            <h4 class="team__item-title">{{ $rt(teammate.title) }}</h4>
            <p class="text-medium clr-dark-slate-blue">{{ $rt(teammate.text) }}</p>
          </div>
        </li>
      </ul>
    </section>
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsGlobe from '~/components/icons/globe.vue';
import IconsUsers from '~/components/icons/users.vue';
import IconsChat from '~/components/icons/chat.vue';

const { tm, t } = useI18n();

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/mission',
    label: t('nav.mission')
  }
]);

const infoIcons = [IconsUsers, IconsChat, IconsGlobe];
const teamImages = ['team-1.jpg', 'team-2.jpg', 'team-3.jpg', 'team-4.jpg'];

const infoCards = computed(() =>
  infoIcons.map((icon, index) => ({
    icon,
    ...tm('mission.info.cards')[index]
  }))
);
const teamList = computed(() =>
  teamImages.map((image, index) => ({
    image,
    ...tm('mission.team.list')[index]
  }))
);
</script>

<style lang="scss" scoped>
.team {
  display: flex;
  flex-direction: column;
  gap: max(4.5rem, 20px);
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: max(2rem, 12px);
    @media screen and (max-width: $bp-md) {
      @include grid-scroll(250px);
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 16px);
    &-title {
      color: $clr-dark-charcoal;
      font-weight: bold;
      font-size: max(2.8rem, 20px);
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    &-image {
      border-radius: 20px;
      @media screen and (max-width: $bp-md) {
        max-width: 88%;
      }
    }
  }
}
.info {
  display: flex;
  flex-direction: column;
  gap: max(1.6rem, 12px);
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: max(2rem, 12px);
  }
  &__item {
    padding: max(3.2rem, 16px);
    background-color: $clr-light-white;
    border-radius: max(2.4rem, 16px);
    display: flex;
    flex-direction: column;
    gap: max(5.5rem, 32px);
    &-title {
      color: #140f06;
      font-weight: 700;
      font-size: max(3.2rem, 18px);
    }
    &-text {
      color: $clr-dark-slate-blue;
      font-size: max(2rem, 14px);
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(1.6rem, 8px);
    }
    &-icon {
      width: 54%;
      fill: #fff;
      &-container {
        @include flex-center;
        width: max(5.2rem, 42px);
        height: max(5.2rem, 42px);
        border-radius: max(1.6rem, 8px);
        background-color: $clr-dark-teal;
      }
    }
  }
  &__banner {
    position: relative;
    color: #fff;
    padding-block: max(5.7rem, 20px);
    padding-inline: max(6rem, 20px);
    border-radius: max(2.4rem, 16px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: max(2rem, 12px);
    &-subtitle {
      font-size: max(2rem, 14px);
      z-index: 1;
      @media screen and (min-width: $bp-md) {
        max-width: 40%;
      }
      @media screen and (max-width: $bp-md) {
        max-width: 90%;
      }
    }
    &-title {
      text-transform: uppercase;
      z-index: 1;
      font-size: max(3.6rem, 18px);
      color: #fff;
      @media screen and (max-width: $bp-md) {
        max-width: 70%;
      }
    }
    &-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;

      @media screen and (max-width: $bp-md) {
        & > * {
          object-position: 60%;
        }
      }
    }
  }
}
.texts {
  display: flex;
  flex-direction: column;
  gap: max(2.4rem, 14px);
  font-size: max(2rem, 14px);
}
.hero {
  display: flex;
  flex-direction: column;
  gap: max(6rem, 32px);
  &__image {
    @media screen and (max-width: $bp-sm) {
      &:not(:nth-child(2)) {
        position: absolute;
      }
      &:first-child {
        left: 0;
        top: 0;
        width: 49%;
        left: -10%;
      }
      &:nth-child(2) {
        z-index: 2;
      }
      &:last-child {
        right: 0;
        bottom: 0;
        width: 64%;
      }
    }
  }
  &__images {
    display: flex;
    align-items: flex-start;
    gap: 4rem;
    position: relative;
    @media screen and (max-width: $bp-sm) {
      aspect-ratio: 328/400;
      align-items: center;
    }
  }
}
</style>
