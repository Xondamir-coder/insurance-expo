<template>
  <LayoutPartnersSponsorsBase :breadcrumbs :form-title="$t('become-sponsor')" page-name="sponsors">
    <div class="sponsors__list">
      <NuxtLink
        v-for="sponsor in partnersAndSponsors.data"
        :key="sponsor.id"
        :to="$localePath(`/sponsors/${sponsor.id}`)"
        class="sponsors__item"
      >
        <img :src="`${DOMAIN_URL}${sponsor.logo}`" class="sponsors__item-logo" />
      </NuxtLink>
    </div>
  </LayoutPartnersSponsorsBase>
</template>

<script setup>
const { t } = useI18n();
const { partnersAndSponsors } = useApiStore();

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
}
</style>
