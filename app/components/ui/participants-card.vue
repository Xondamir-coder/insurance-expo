<template>
  <NuxtLink :to="$localePath(`/participants/${participant.id}`)" class="participants-card">
    <div class="participants-card__left">
      <div class="participants-card__box">
        <img :src="`${DOMAIN_URL}${participant.logo}`" class="participants-card__logo" />
      </div>
      <div class="participants-card__left-content">
        <p class="participants-card__text">{{ $t('company-name') }}</p>
        <h4 class="participants-card__title">{{ participant[`name_${$i18n.locale}`] }}</h4>
      </div>
    </div>
    <div v-for="(col, index) in cols" :key="index" class="participants-card__col">
      <div class="participants-card__icon-container">
        <component :is="col.icon" class="participants-card__icon icon" />
      </div>
      <div class="participants-card__col-content">
        <p>{{ col.title }}</p>
        <h3 class="participants-card__col-label">{{ col.text }}</h3>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { IconsCityBuilding, IconsFlag, IconsRouteDirection } from '#components';

const props = defineProps({
  participant: {
    required: true,
    type: Object
  }
});
const { t, locale } = useI18n();

const icons = [IconsFlag, IconsCityBuilding, IconsRouteDirection];
const content = computed(() => [
  {
    title: t('years-of-exp'),
    text: props.participant.experiences
  },
  {
    title: t('branch-network'),
    text: props.participant.branch
  },
  {
    title: t('specify'),
    text: props.participant[`specify_${locale.value}`]
  }
]);
const cols = computed(() =>
  icons.map((icon, i) => ({
    icon,
    ...content.value[i]
  }))
);
</script>

<style scoped lang="scss">
.participants-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  background-color: #eaebed4d;
  border: 1px solid #eaebed;
  padding: 16px;
  border-radius: max(2rem, 16px);
  gap: 16px;
  transition: all 0.4s;
  &:hover {
    background-color: #eaebed;
    transform: scale(0.99);
  }
  &__left {
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
  &__title {
    font-size: max(2rem, 16px);
    color: $clr-deep-slate;
    font-weight: bold;
    text-transform: uppercase;
  }
  &__col {
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
  &__icon {
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
  &__box {
    @include flex-center;
    background-color: #fff;
    border: 1px solid #2c3a471a;
    width: max(10rem, 60px);
    height: max(10rem, 60px);
    border-radius: 12px;
  }
  &__logo {
    width: 90%;
  }
}
</style>
