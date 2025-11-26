<template>
  <LayoutBreadcrumbs :breadcrumbs>
    <div class="media-accreditation">
      <h1 class="media-accreditation__title">{{ $t('media-accreditation.title') }}</h1>
      <div class="card">
        <div
          v-for="(item, index) in $tm('media-accreditation.texts')"
          :key="index"
          class="card__item"
        >
          <h2 class="card__title">
            {{ $rt(item.title) }}
          </h2>
          <p class="text-medium">
            {{ $rt(item.text) }}
          </p>
        </div>
      </div>
      <div class="card text-medium">
        <span>{{ $t('media-accreditation.available') }}</span>
        <a
          href="https://gov.uz/en/mfa/sections/xorijiy-jurnalistlarni-akkreditasiyadan-o-tkazish-tartibi"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://gov.uz/en/mfa/sections/xorijiy-jurnalistlarni-akkreditasiyadan-o-tkazish-tartibi
        </a>
      </div>
      <div class="card">
        <h2 class="card__title">Contacts of the Media Department:</h2>
        <div class="card__info">
          <div class="card__info-box">
            <IconsMail class="card__info-icon" />
          </div>
          <a href="mailto:media@tiif.online" class="text-medium">media@tiif.online</a>
        </div>
      </div>
    </div>
  </LayoutBreadcrumbs>
</template>

<script setup>
const { t } = useI18n();
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/media-accreditation',
    label: t('nav.media-accreditation')
  }
]);
useGSAPAnimate({
  selector: '.media-accreditation>*',
  mode: 'group',
  base: { y: 20 }
});
usePageSEO('media-accreditation');
</script>

<style lang="scss" scoped>
.card {
  background: #eaebed4d;
  border: 1px solid #eaebed;
  padding: max(3.2rem, 16px);
  border-radius: max(2rem, 12px);
  &.text-medium a {
    color: #3399cc;
    text-decoration: underline;
  }
  &:last-child {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__title {
    font-weight: bold;
    font-size: max(2.4rem, 16px);
    color: #111827;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 12px;
    &:first-child {
      padding-bottom: 12px;
      border-bottom: 1px solid #d9d9d9;
    }
    &:last-child {
      padding-top: 12px;
    }
  }
  &__info {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
    &-box {
      @include flex-center;
      width: max(4.4rem, 36px);
      height: max(4.4rem, 36px);
      background-color: $clr-dark-teal;
      fill: #fff;
      border-radius: 50%;
    }
    &-icon {
      width: 54.545454%;
    }
  }
}
.media-accreditation {
  display: flex;
  flex-direction: column;
  gap: max(2rem, 16px);
  align-self: center;
  max-width: max(117.6rem, 700px);
  &__title {
    align-self: center;
    text-transform: uppercase;
    font-weight: 900;
    font-size: max(4.2rem, 20px);
    color: #11171c;
  }
}
</style>
