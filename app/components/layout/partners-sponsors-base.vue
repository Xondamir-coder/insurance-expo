<template>
  <LayoutBreadcrumbs :breadcrumbs class="base">
    <div class="base__title">{{ partnersAndSponsors.data.length }}</div>
    <UiGreenPageHeader
      :title="
        $t(`${pageName}.title`, {
          count: partnersAndSponsors.data.length
        })
      "
      :subtitle="$t(`${pageName}.subtitle`)"
    />
    <slot />
    <UiFormSection :title="formTitle" />
  </LayoutBreadcrumbs>
</template>

<script setup>
const { partnersAndSponsors } = useApiStore();
usePageSEO('partners');
defineProps({
  breadcrumbs: {
    required: true,
    type: Array
  },
  pageName: {
    required: true,
    type: String
  },
  formTitle: {
    required: true,
    type: String
  }
});
</script>

<style lang="scss" scoped>
.base {
  position: relative;
  gap: 30px;
  & > *:last-child > *:not(:first-child) {
    z-index: 2;
  }
  &__title {
    position: absolute;
    right: 5%;
    top: 0;
    font-weight: 700;
    line-height: 0.7;
    font-size: 60rem;
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
