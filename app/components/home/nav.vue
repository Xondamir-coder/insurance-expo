<template>
  <div class="nav">
    <button
      v-for="(button, i) in buttons"
      :key="i"
      class="nav__button"
      :class="{ active: i === currentIndex }"
      @click="emits('change', i)"
    >
      <div class="nav__button-icontainer">
        <component :is="button.icon" class="nav__button-icon" />
      </div>
      <span>{{ $rt(button.label) }}</span>
    </button>
  </div>
</template>

<script setup>
import IconsBriefcase from '~/components/icons/briefcase.vue';
import IconsMonth from '~/components/icons/month.vue';
import IconsMission from '~/components/icons/mission.vue';
import IconsTel from '~/components/icons/tel.vue';
import IconsHome from '~/components/icons/home.vue';
import IconsFaq from '~/components/icons/faq.vue';

defineProps({
  currentIndex: {
    required: true,
    type: Number
  }
});
const emits = defineEmits(['change']);

const { tm } = useI18n();

const icons = [IconsHome, IconsFaq, IconsMission, IconsMonth, IconsBriefcase, IconsTel];
const buttons = computed(() =>
  icons.map((icon, index) => ({
    icon,
    label: tm('home.nav')[index]
  }))
);
</script>

<style lang="scss" scoped>
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
.nav {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: max(10px, 2rem);
  scrollbar-width: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: $bp-lg) {
    position: fixed;
    bottom: 16px;
    left: 16px;
    width: 100%;
    z-index: 10;
    padding-right: 20px;
  }
  @media only screen and (min-width: $bp-lg) {
    &:has(.nav__button:hover) .nav__button:not(:hover) {
      opacity: 0.5;
    }
  }
  &__button {
    scroll-snap-align: start;
    background-color: #f1f2f4;
    border: 1px solid #f1f2f4;
    display: flex;
    gap: 24px;
    border-radius: 42px;
    align-items: center;
    padding: 6px;
    padding-right: 26px;
    font-size: 17px;
    font-weight: 500;
    text-wrap: nowrap;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s, opacity 0.6s;
    animation: slide-from-left 0.5s backwards;
    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
    &:hover {
      color: $clr-dark-teal;
    }
    &.active {
      background-color: $clr-dark-teal;
      color: $clr-light-white;
      border-color: $clr-dark-teal;
      .nav__button-icontainer {
        background-color: $clr-light-white;
      }
      .nav__button-icon {
        fill: $clr-dark-teal;
      }
    }

    &-icontainer {
      background-color: $clr-dark-teal;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      @include flex-center;
    }
    &-icon {
      width: 54.5454%;
      fill: $clr-light-white;
    }
  }
}
</style>
