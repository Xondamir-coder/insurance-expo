<template>
  <section class="section">
    <HomeContent
      class="section__content"
      :title="$t('home.section-5.content.title')"
      :label="$t('home.section-5.content.label')"
      :texts="[$t('home.section-5.content.text')]"
    />
    <div class="section__list">
      <div v-for="bank in banks" :key="bank" class="section__item">
        <component :is="bank" class="section__bank" />
      </div>
    </div>
  </section>
</template>

<script setup>
import BanksAgro from '~/components/svg/banks/agro.vue';
import BanksAsaka from '~/components/svg/banks/asaka.vue';
import BanksDavr from '~/components/svg/banks/davr.vue';
import BanksHamkor from '~/components/svg/banks/hamkor.vue';
import BanksIpak from '~/components/svg/banks/ipak.vue';
import BanksKapital from '~/components/svg/banks/kapital.vue';
import BanksMarkaziy from '~/components/svg/banks/markaziy.vue';
import BanksQqb from '~/components/svg/banks/qqb.vue';
import BanksSqb from '~/components/svg/banks/sqb.vue';
import BanksTbc from '~/components/svg/banks/tbc.vue';
import BanksTrast from '~/components/svg/banks/trast.vue';

const banks = [
  BanksAgro,
  BanksAsaka,
  BanksDavr,
  BanksHamkor,
  BanksIpak,
  BanksKapital,
  BanksMarkaziy,
  BanksQqb,
  BanksSqb,
  BanksTbc,
  BanksTrast,
  BanksAgro
];
</script>

<style lang="scss" scoped>
.section {
  display: grid;
  grid-template-columns: 1fr 1.41fr;
  align-items: flex-start;
  row-gap: max(16px, 2rem);
  column-gap: max(20px, 3.2rem);
  @media only screen and (max-width: $bp-lg) {
    grid-template-columns: 1fr;
    align-self: flex-start;
  }
  &__item {
    @include flex-center;
    background: $clr-light-white;
    border: 1px solid #2c3a471a;
    border-radius: 20px;
    aspect-ratio: 1;
    animation: slide-from-top-20 0.6s backwards;
    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.05s + 0.25s;
      }
    }
  }
  &__bank {
    width: 80%;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: max(10px, 2.3rem);

    @media only screen and (min-width: 1600px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    @media only screen and (max-width: $bp-lg) {
      @include grid-scroll(239px);
    }
  }
}
</style>
