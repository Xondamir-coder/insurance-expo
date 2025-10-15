<template>
  <div class="label">
    <div class="label__top">
      <IconsHash class="icon-hash" />
      <p class="label__text">{{ label }}</p>
    </div>
    <h2 class="label__title">{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  label: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  }
});
</script>
<style scoped lang="scss">
@keyframes slide-from-left {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.label {
  @include flex-gap(12px);
  & > * {
    animation: slide-from-left 0.3s backwards;
    @for $i from 1 through 2 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
  }
  &__title {
    color: $clr-deep-slate;
    font-size: max(3.2rem, 18px);
    font-weight: 900;
    text-transform: uppercase;
  }
  &__text {
    font-weight: 700;
    color: $clr-charcoal-gray;
    font-size: max(1.7rem, 14px);
  }
  &__top {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
