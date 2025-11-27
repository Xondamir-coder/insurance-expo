<template>
  <NuxtLink :to="$localePath(`/partners/${data.id}`)" class="card">
    <SvgGrid class="card__grid" />
    <div class="card__container">
      <img :src="`${DOMAIN_URL}${data.logo}`" class="card__logo" />
    </div>
    <div class="card__content">
      <h3 class="card__title">{{ data[`name_${$i18n.locale}`].slice(0, 200) }}</h3>
      <p class="text-small">{{ data[`short_info_${$i18n.locale}`] }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  data: {
    required: true,
    type: Object
  }
});
</script>

<style scoped lang="scss">
.card {
  position: relative;
  border: 1px solid #e9eaec;
  box-shadow: 0px 2px 2px -1px #00000014;
  border-radius: max(2.4rem, 16px);
  padding: max(3.2rem, 16px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: max(2rem, 16px);
  overflow: hidden;
  background-color: #fff;
  transition: all 0.4s;
  &:hover {
    background-color: #e9eaec;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(1rem, 4px);
  }
  &__title {
    color: #003323;
    font-weight: bold;
    font-size: max(2rem, 14px);
  }
  &__grid {
    position: absolute;
    width: 63.5%;
    top: -1px;
    left: 50%;
    translate: -50% 0;
    @media screen and (max-width: $bp-sm) {
      display: none;
    }
  }
  &__logo {
    width: 86%;
  }
  &__container {
    @include flex-center;
    box-shadow: 0px 7.71px 5.33px -2.67px #0000001a;
    width: max(7rem, 60px);
    height: max(7rem, 60px);
    border-radius: max(1.6rem, 14px);
    background-color: #fff;
    z-index: 2;
  }
}
</style>
