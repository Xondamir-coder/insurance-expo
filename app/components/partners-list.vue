<template>
  <div class="container">
    <div class="list">
      <PartnersCard v-for="(item, index) in partnersList.slice(0, 4)" :key="index" :data="item" />
    </div>
    <div class="list">
      <PartnersCard v-for="(item, index) in partnersList.slice(4, 8)" :key="index" :data="item" />
    </div>
    <div class="list">
      <PartnersCard v-for="(item, index) in partnersList.slice(8, 12)" :key="index" :data="item" />
    </div>
  </div>
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

const logos = [
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
  SvgBanksSqb
];

const partnersList = computed(() =>
  logos.map(logo => ({
    logo,
    name: 'Ziraat Bank',
    service: 'Insurance expert'
  }))
);
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 12px);
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(42rem, 151px), 1fr));
  gap: max(3rem, 12px);
  @media screen and (max-width: $bp-md) {
    @include grid-scroll(190px);
  }
}
</style>
