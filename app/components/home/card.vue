<template>
  <div class="card">
    <div class="card__top">
      <img :src="`${DOMAIN_URL}${data.poster}`" alt="banner" class="card__image" />
      <div class="card__date">
        <IconsCalendar class="icon" />
        <span>{{ formatDateRange(data.start_at, data.end_at) }}</span>
      </div>
    </div>
    <div class="card__content">
      <h3 class="card__content-title">
        {{ data[`name_${$i18n.locale}`] }}
      </h3>
      <p class="card__content-text">
        {{ data[`body_${$i18n.locale}`] }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    required: true,
    type: Object
  }
});
const formatDateRange = (startAt, endAt) => {
  const { locale } = useI18n();
  const lang = locale.value;

  const start = new Date(startAt);
  const end = new Date(endAt);

  const month =
    lang === 'uz'
      ? [
          'Yanvar',
          'Fevral',
          'Mart',
          'Aprel',
          'May',
          'Iyun',
          'Iyul',
          'Avgust',
          'Sentabr',
          'Oktabr',
          'Noyabr',
          'Dekabr'
        ][start.getMonth()]
      : start.toLocaleDateString(lang, { month: 'long' });

  return `${start.getDate()}-${end.getDate()} ${month} ${start.getFullYear()}`;
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: max(10px, 1.2rem);
  &:hover &__content {
    border-color: $clr-dark-green;
  }
  &:hover &__top {
    box-shadow: 0px 49px 60px -20px #03ab3233;
  }
  &__date {
    background: #ffffff;
    border: 1px solid #0000001a;
    align-self: flex-end;
    justify-self: flex-start;
    font-size: 14px;
    border-radius: 8px;
    padding-block: 8px;
    padding-inline: 10px;
    display: flex;
    align-items: center;
    font-weight: 500;
    gap: 8px;
    margin: 16px;
  }
  &__content {
    @include flex-gap(12px);
    border-radius: max(16px, 2rem);
    padding: max(14px, 2rem);
    background: $clr-almost-white;
    border: 1px solid #e9eaec;
    border-bottom: 6px solid #e9eaec;
    transition: border-color 0.3s;
    &-title {
      font-size: max(16px, 2rem);
      font-weight: 700;
      color: $clr-charcoal-gray;
      line-height: 1.35;
      text-transform: uppercase;
    }
    &-text {
      font-size: 14px;
      color: $clr-dark-slate-blue;
      line-height: 1.45;
    }
  }
  &__top {
    display: grid;
    border-radius: max(16px, 2rem);
    overflow: hidden;
    transition: box-shadow 0.3s;
    & > * {
      grid-area: 1/1/2/2;
    }
  }
  &__image {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 421/280;
  }
}
</style>
