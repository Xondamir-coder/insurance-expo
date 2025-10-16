<template>
  <BreadcrumbsLayout :breadcrumbs>
    <section class="hero">
      <MyPicture src="participants-hero-big.png" alt="people" class="hero__image" />
      <MyPicture src="participants-hero-small.png" alt="people" class="hero__image" />
      <PageHeader
        :title="$t('participants.title')"
        :subtitle="$t('participants.subtitle')"
        class="hero__content"
      />
    </section>
    <section class="content">
      <div class="content__list">
        <NuxtLink
          v-for="(item, index) in list"
          :key="index"
          :to="$localePath(`/participants/${index}`)"
          class="content__item"
        >
          <div class="content__item-left">
            <div class="content__item-box">
              <component :is="item.logo" class="content__item-logo" />
            </div>
            <div class="content__item-left-content">
              <p class="content__item-text">{{ $rt(item.service) }}</p>
              <h4 class="content__item-title">{{ $rt(item.name) }}</h4>
            </div>
          </div>
          <div class="content__item-col">
            <div class="content__item-icon-container">
              <IconsFlag class="content__item-icon icon" />
            </div>
            <div class="content__item-col-content">
              <p>{{ $t('years-of-exp') }}</p>
              <h3 class="content__item-col-label">{{ $rt(item.exp) }}+</h3>
            </div>
          </div>
          <div class="content__item-col">
            <div class="content__item-icon-container">
              <IconsCityBuilding class="content__item-icon icon" />
            </div>
            <div class="content__item-col-content">
              <p>{{ $t('branch-network') }}</p>
              <h3 class="content__item-col-label">{{ $rt(item.networks) }}+</h3>
            </div>
          </div>
          <div class="content__item-col">
            <div class="content__item-icon-container">
              <IconsRouteDirection class="content__item-icon icon" />
            </div>
            <div class="content__item-col-content">
              <p>{{ $t('specify') }}</p>
              <h3 class="content__item-col-label">{{ $rt(item.service) }}</h3>
            </div>
          </div>
        </NuxtLink>
      </div>
      <AppPagination
        :pages-count="list.length"
        :current-page="currentPage"
        @change-page="changePage"
      />
    </section>
  </BreadcrumbsLayout>
</template>

<script setup>
import SvgBanksMastercard from '~/components/svg/banks/mastercard.vue';
import SvgBanksTbc from '~/components/svg/banks/asaka.vue';
import SvgBanksKapital from '~/components/svg/banks/kapital.vue';
import SvgBanksQqb from '~/components/svg/banks/qqb.vue';
import SvgBanksSqb from '~/components/svg/banks/sqb.vue';
import SvgBanksZiraat from '~/components/svg/banks/ziraat.vue';

const { t, tm } = useI18n();

const currentPage = ref(1);

const changePage = newPage => (currentPage.value = newPage);

const logos = [
  SvgBanksMastercard,
  SvgBanksTbc,
  SvgBanksKapital,
  SvgBanksQqb,
  SvgBanksSqb,
  SvgBanksZiraat
];

const list = computed(() =>
  logos.map((logo, index) => ({
    logo,
    ...tm('participants.list')[index]
  }))
);
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/participants',
    label: t('nav.participants')
  }
]);
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 12px);
  & > *:last-child {
    align-self: center;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 12px);
  }
  &__item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    background-color: #eaebed4d;
    border: 1px solid #eaebed;
    padding: 16px;
    border-radius: max(2rem, 16px);
    gap: 16px;
    &-left {
      display: flex;
      align-items: center;
      gap: max(2.2rem, 12px);
      &-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    }
    &-title {
      font-size: max(2rem, 16px);
      color: $clr-deep-slate;
      font-weight: bold;
      text-transform: uppercase;
    }
    &-col {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      &-content {
        display: flex;
        flex-direction: column;
        gap: max(0.8rem, 4px);
      }
      &-label {
        font-weight: bold;
        color: $clr-dark-charcoal;
        font-size: max(2.8rem, 16px);
        line-height: 1.2;
      }
    }
    &-icon {
      width: 50%;
      &-container {
        @include flex-center;
        fill: #fff;
        background-color: $clr-dark-teal;
        width: 40px;
        height: 40px;
        border-radius: 8px;
      }
    }
    &-box {
      @include flex-center;
      background-color: #fff;
      border: 1px solid #2c3a471a;
      width: max(10rem, 60px);
      height: max(10rem, 60px);
      border-radius: 12px;
    }
    &-logo {
      width: 90%;
    }
  }
}
.hero {
  position: relative;
  aspect-ratio: 1780/680;
  display: flex;
  justify-content: center;
  @media screen and (max-width: $bp-md) {
    flex-direction: column;
    justify-content: stretch;
    gap: 20px;
  }
  &__content {
    align-self: flex-end;
    margin-bottom: 6rem;
    & > * {
      @media screen and (min-width: $bp-md) {
        color: #fff;
      }
    }
  }
  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    z-index: -1;
    @media screen and (max-width: $bp-md) {
      position: static;
      order: 1;
      z-index: initial;
      border-radius: 16px;
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
}
</style>
