<template>
  <div ref="containerRef" class="section-header">
    <h1 class="section-header__title">{{ title }}</h1>
    <p class="text-medium">{{ subtitle }}</p>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();

const containerRef = ref();
const showPreloader = useState('showPreloader');

onMounted(() => {
  $gsap.from(containerRef.value?.children, {
    y: 25,
    stagger: 0.1,
    delay: showPreloader.value ? 3.25 : 0,
    ...defaultAnimProps,
    ...getDefaultScrollTrigger(containerRef.value)
  });
});
defineProps({
  title: {
    required: true,
    type: String
  },
  subtitle: {
    required: true,
    type: String
  }
});
</script>

<style lang="scss" scoped>
.section-header {
  display: flex;
  flex-direction: column;
  gap: max(2rem, 10px);
  text-align: center;
  align-self: center;
  @media screen and (min-width: $bp-md) {
    max-width: 60%;
  }
  &__title {
    font-weight: 900;
    font-size: max(4.2rem, 24px);
    text-transform: uppercase;
  }
}
</style>
