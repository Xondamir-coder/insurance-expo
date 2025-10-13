<template>
  <ClientOnly>
    <div class="deadline-banner">
      <HomePattern class="deadline-banner__pattern" />

      <template v-for="(unit, index) in timeUnits" :key="unit.label">
        <div class="deadline-banner-container">
          <span class="deadline-banner-out">{{ unit.value }}</span>
          <span class="deadline-banner-label">{{ unit.label }}</span>
        </div>
        <span v-if="index < timeUnits.length - 1" class="deadline-banner-divider"> : </span>
      </template>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
  deadline: {
    type: Date,
    required: true
  }
});

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateCountdown = () => {
  const now = Date.now();
  const distance = props.deadline.getTime() - now;

  if (distance <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0;
    return;
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((distance / (1000 * 60)) % 60);
  seconds.value = Math.floor((distance / 1000) % 60);
};

onMounted(() => {
  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
  onUnmounted(() => clearInterval(interval));
});

const timeUnits = computed(() => [
  { label: 'Days', value: days.value },
  { label: 'Hours', value: hours.value },
  { label: 'Minutes', value: minutes.value },
  { label: 'Seconds', value: seconds.value }
]);
</script>

<style lang="scss" scoped>
.deadline-banner {
  overflow: hidden;
  position: relative;
  grid-area: time;
  border-radius: max(16px, 3rem);
  padding-inline: max(10px, 3.6rem);
  padding-block: max(14px, 4.1rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(var(--angle), #008b5f 4.36%, #044430 95.17%);
  transition: --angle 1s;
  color: #fff;
  animation: rotate-bg 1.5s forwards 0.3s;
  &__pattern {
    animation: rotate-pattern 1.5s forwards 0.3s;
    position: absolute;
    right: -30%;
    top: 0;
    width: auto;
    height: 300%;
    pointer-events: none;
    transition: transform 1s;
    @media only screen and (max-width: $bp-lg) {
      display: none;
    }
  }
  &-container {
    display: flex;
    flex-direction: column;
    gap: max(7px, 1.2rem);
    @media only screen and (max-width: $bp-lg) {
      text-align: center;
    }
  }
  &-divider {
    align-self: center;
  }
  &-out,
  &-divider {
    font-size: max(24px, 4.2rem);
    font-weight: 700;
  }
  &-label {
    font-size: max(10px, 1.7rem);
    color: rgba(#fff, 0.7);
  }
}
</style>
