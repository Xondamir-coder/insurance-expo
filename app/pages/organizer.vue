<template>
  <BreadcrumbsLayout :breadcrumbs>
    <section class="hero">
      <PageHeader :title="$t('organizer.title')" :subtitle="$t('organizer.subtitle')" />
      <div class="hero__container">
        <MyPicture src="organizer-hero-big.png" alt="banner" class="hero__banner" />
        <MyPicture src="organizer-hero-small.png" alt="banner" class="hero__banner" />
        <div class="hero__wrapper">
          <div class="hero__content">
            <h2 class="hero__content-title">{{ $t('organizer.hero.title') }}</h2>
            <p class="hero__content-text">{{ $t('organizer.hero.text') }}</p>
          </div>
          <MyPicture src="shield.png" alt="shield" class="hero__shield" />
        </div>
      </div>
    </section>
    <section class="vision">
      <SectionHeader
        :title="$t('organizer.vision.title')"
        :subtitle="$t('organizer.vision.subtitle')"
        class="vision__header"
      />
      <ul class="vision__list">
        <li v-for="(item, index) in $tm('organizer.vision.list')" :key="index" class="vision__item">
          <h3 class="vision__item-title">{{ $rt(item.title) }}</h3>
          <p>{{ $rt(item.text) }}</p>
        </li>
      </ul>
    </section>
    <section class="partners">
      <SectionHeader
        :title="$t('organizer.partners.title')"
        :subtitle="$t('organizer.partners.subtitle')"
      />
      <PartnersList />
    </section>
  </BreadcrumbsLayout>
</template>

<script setup>
const { t } = useI18n();

useGSAPAnimate({
  selector: '.hero__container',
  base: { scale: 0.95 },
  initialDelay: 0.2
});
useGSAPAnimate({
  selector: '.vision__item',
  base: { y: 30 }
});

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/organizer',
    label: t('nav.organizer')
  }
]);
</script>

<style lang="scss" scoped>
.partners {
  display: flex;
  flex-direction: column;
  gap: max(4.5rem, 20px);
}
.vision {
  display: flex;
  gap: max(18.2rem, 20px);
  @media screen and (max-width: $bp-lg) {
    gap: max(6rem, 20px);
  }
  @media screen and (max-width: $bp-md) {
    flex-direction: column;
  }
  &__header {
    align-self: flex-start !important;
    text-align: left !important;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: max(2.4rem, 12px);
  }
  &__item {
    padding: max(2.4rem, 16px);
    border-radius: max(2rem, 16px);
    background-color: #f1f2f4;
    display: flex;
    flex-direction: column;
    gap: max(10.6rem, 62px);
    &-title {
      font-weight: bold;
      font-size: max(2.8rem, 18px);
      color: #140f06;
    }
  }
}
.hero {
  display: flex;
  flex-direction: column;
  &__banner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    @media screen and (max-width: $bp-md) {
      position: static;
    }
    &:first-of-type {
      @media screen and (max-width: $bp-md) {
        display: none;
      }
    }
    &:last-of-type {
      @media screen and (min-width: $bp-md) {
        display: none;
      }
    }
  }
  &__shield {
    width: 37%;
    position: absolute;
    right: 10%;
    top: 50%;
    mix-blend-mode: soft-light;
    transform: rotate(15deg) translateY(-45%);
    @media screen and (max-width: $bp-md) {
      top: auto;
      bottom: 0;
      right: auto;
      transform: rotate(15deg) translateY(30%);
      width: 94.2%;
    }
  }
  &__wrapper {
    align-self: flex-end;
    background: linear-gradient(90deg, #008b5e 0%, #08ad78 100%);
    border: 1px solid #2c3a471a;
    border-radius: max(2.4rem, 16px);
    padding-block: max(8rem, 16px);
    padding-inline: max(6rem, 16px);
    position: relative;
    @media screen and (max-width: $bp-md) {
      aspect-ratio: 328/320;
      margin-top: -50px;
    }
  }
  &__content {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: max(2rem, 12px);
    @media screen and (min-width: $bp-md) {
      max-width: 40%;
    }
    &-title {
      font-size: max(3.6rem, 18px);
      font-weight: 900;
      text-transform: uppercase;
      color: #fff;
    }
    &-text {
      font-size: max(2rem, 12px);
    }
  }
  &__container {
    position: relative;
    aspect-ratio: 1780/900;
    border-radius: max(2.4rem, 16px);
    overflow: hidden;
    display: flex;
    @media screen and (max-width: $bp-md) {
      aspect-ratio: initial;
      flex-direction: column;
    }
  }
}
</style>
