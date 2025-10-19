<template>
  <div ref="headerRef" class="green-page-header">
    <h1 class="green-page-header__title">{{ title }}</h1>
    <p class="green-page-header__subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
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

const { $gsap } = useNuxtApp();
const headerRef = ref();
const showPreloader = useState('showPreloader');

onMounted(() => {
  $gsap.from(headerRef.value?.children, {
    y: 25,
    stagger: 0.1,
    delay: showPreloader.value ? 3.25 : 0,
    ...defaultAnimProps
  });
});
</script>

<style scoped lang="scss">
.green-page-header {
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 10px);
  @media screen and (min-width: $bp-lg) {
    max-width: 60%;
  }
  &__title {
    font-weight: 700;
    font-size: max(7rem, 20px);
    line-height: 120%;
    color: $clr-dark-teal;
  }
  &__subtitle {
    color: #22282b;
    font-weight: 500;
    font-size: max(2.4rem, 14px);
  }
}
</style>
