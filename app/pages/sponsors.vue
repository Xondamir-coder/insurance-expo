<template>
  <LayoutBreadcrumbs :breadcrumbs class="sponsors">
    <div class="sponsors__title">100</div>
    <UiGreenPageHeader :title="$t('sponsors.title')" :subtitle="$t('sponsors.subtitle')" />
    <ul class="sponsors__list">
      <li v-for="(sponsor, index) in sponsors" :key="index" class="sponsors__item">
        <component :is="sponsor" class="sponsors__item-logo" />
      </li>
    </ul>
    <UiFormSection :title="$t('become-sponsor')" />
  </LayoutBreadcrumbs>
</template>

<script setup>
import SvgBanksMastercard from '~/components/svg/banks/mastercard.vue';
import SvgBanksTbc from '~/components/svg/banks/asaka.vue';
import SvgBanksKapital from '~/components/svg/banks/kapital.vue';
import SvgBanksQqb from '~/components/svg/banks/qqb.vue';
import SvgBanksSqb from '~/components/svg/banks/sqb.vue';
import SvgBanksZiraat from '~/components/svg/banks/ziraat.vue';
import SvgBanksTrast from '~/components/svg/banks/trast.vue';
import SvgBanksVisa from '~/components/svg/banks/visa.vue';

const { t } = useI18n();

const sponsors = [
  SvgBanksMastercard,
  SvgBanksTbc,
  SvgBanksKapital,
  SvgBanksQqb,
  SvgBanksSqb,
  SvgBanksZiraat,
  SvgBanksTrast,
  SvgBanksVisa,
  SvgBanksMastercard,
  SvgBanksTbc,
  SvgBanksKapital,
  SvgBanksQqb,
  SvgBanksSqb,
  SvgBanksMastercard,
  SvgBanksTbc,
  SvgBanksKapital,
  SvgBanksQqb,
  SvgBanksSqb,
  SvgBanksZiraat,
  SvgBanksTrast,
  SvgBanksVisa,
  SvgBanksMastercard,
  SvgBanksTbc,
  SvgBanksKapital,
  SvgBanksQqb,
  SvgBanksSqb,
  SvgBanksMastercard,
  SvgBanksTbc,
  SvgBanksKapital,
  SvgBanksQqb,
  SvgBanksSqb,
  SvgBanksZiraat,
  SvgBanksTrast,
  SvgBanksVisa,
  SvgBanksMastercard,
  SvgBanksTbc
];
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/sponsors',
    label: t('nav.sponsors')
  }
]);

useGSAPAnimate({
  selector: '.sponsors__item',
  base: {
    scale: 0.85,
    stagger: {
      each: 0.02,
      from: 'random'
    }
  },
  mode: 'group'
});

usePageSEO('sponsors');
</script>

<style lang="scss" scoped>
.sponsors {
  position: relative;
  gap: 30px;
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(27rem, 160px), 1fr));
    gap: max(3.2rem, 8px);
  }
  &__item {
    @include flex-center;
    border: 1px solid #e9eaec;
    background: #ffffff;
    box-shadow: 0px 2px 2px -1px #00000014;
    aspect-ratio: 27/22;
    border-radius: max(2.4rem, 16px);
    &-logo {
      width: 55.6%;
    }
  }
  & > *:last-child > *:not(:first-child) {
    z-index: 2;
  }
  &__title {
    position: absolute;
    right: 5%;
    top: 0;
    font-weight: 700;
    font-size: 60rem;
    line-height: 0.7;
    letter-spacing: -0.02em;
    color: transparent;
    background: linear-gradient(180deg, #f3f3f3 0%, rgba(235, 235, 235, 0) 82.62%);
    -webkit-background-clip: text;
    background-clip: text;
    @media screen and (max-width: $bp-lg) {
      display: none;
    }
  }
}
</style>
