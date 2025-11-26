<template>
  <div class="error">
    <SvgPattern class="error__pattern" />
    <SvgLogo class="error__top" />
    <div class="error__content">
      <h1 class="error__title">{{ $t('error.number') }}</h1>
      <SvgPlug class="error__plug" />
      <SvgPlugSmall class="error__plug" />
    </div>
    <div class="error__bottom">
      <h2 class="error__bottom-title">
        {{ $t('error.title') }}
      </h2>
      <p class="error__text">
        {{ $t('error.subtitle') }}
      </p>
      <NuxtLink :to="$localePath('/')" class="error__link">
        <span>{{ $t('error.back') }}</span>
        <IconsCircleNoArrow class="error__arrow" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
});
usePageSEO('error');
</script>

<style lang="scss" scoped>
@keyframes plug-slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-from-bottom {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes appear-from-small {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes slide-from-top {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: clamp(30px, 4vw, 60px);
  min-height: 100vh;
  justify-content: center;
  position: relative;
  overflow: hidden;
  gap: 32px;
  & > *:not(.error__content) {
    padding-inline: 16px;
  }
  &__pattern {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    z-index: -1;
    padding-inline: 0 !important;
    fill: $clr-light-beige;
    @media only screen and (max-width: $bp-lg) {
      height: 150%;
      inset: 0;
      padding-inline: 0;
    }
  }
  &__plug {
    animation: plug-slide 1s 0.3s backwards;
    &:first-of-type {
      max-width: 73%;
    }
    @media only screen and (min-width: $bp-md) {
      &:last-of-type {
        display: none;
      }
    }
    @media only screen and (max-width: $bp-md) {
      &:first-of-type {
        display: none;
      }
    }
  }
  &__content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  &__text {
    font-size: clamp(14px, 1vw, 17px);
    max-width: 50ch;
    font-weight: 400;
    line-height: 1.45;
    text-align: center;
    color: rgba($clr-dark-slate-blue, 0.8);
  }
  &__title {
    color: #c89e45;
    font-size: clamp(150px, 15vw, 350px);
    align-self: center;
    font-weight: 500;
    animation: appear-from-small 0.7s backwards 0.15s;
  }
  &__link {
    background-color: $clr-dark-teal;
    padding-inline: clamp(20px, 3vw, 30px);
    padding-block: clamp(12.5px, 1vw, 15.5px);
    border-radius: clamp(10px, 1vw, 12px);
    display: flex;
    align-items: center;
    color: #fff;
    transition: background-color 0.3s, color 0.3s;
    font-size: clamp(16px, 1vw, 17px);
    gap: 10px;
    margin-top: clamp(8px, 1vw, 14px);
    &:hover {
      background-color: #fff;
      color: $clr-dark-teal;
      svg {
        fill: $clr-dark-teal;
      }
    }
  }
  &__arrow {
    width: 24px;
    fill: #fff;
    transition: fill 0.3s;
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(12px, 1vw, 16px);
    & > * {
      animation: slide-from-bottom 0.7s backwards;
      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          animation-delay: $i * 0.15s + 0.45s;
        }
      }
    }
    &-title {
      font-size: clamp(20px, 2vw, 28px);
      font-weight: 700;
      color: $clr-dark-charcoal;
    }
  }
  &__top {
    width: clamp(194px, 15vw, 232px);
    height: auto;
    animation: slide-from-top 0.7s backwards;
  }
}
</style>
