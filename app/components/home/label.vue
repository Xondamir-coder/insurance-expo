<template>
  <div class="label">
    <div class="label__top">
      <IconsHash class="icon-hash" />
      <h4 class="title-charcoal-gray-17-14">{{ label }}</h4>
    </div>
    <h2 class="title-32">{{ title }}</h2>
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
  &__top {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
