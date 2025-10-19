<template>
  <main class="home">
    <component
      :is="section"
      v-for="(section, index) in sections"
      :key="index"
      class="home__section"
      :class="{ hidden: index !== currentIndex }"
    />
    <HomeNav :current-index="currentIndex" @change="changeIndex" />
  </main>
</template>

<script setup>
import HomeSection1 from '~/components/home/section-1.vue';
import HomeSection2 from '~/components/home/section-2.vue';
import HomeSection3 from '~/components/home/section-3.vue';
import HomeSection4 from '~/components/home/section-4.vue';
import HomeSection5 from '~/components/home/section-5.vue';
import HomeSection6 from '~/components/home/section-6.vue';

const showPreloader = useState('showPreloader');
const sections = [
  HomeSection1,
  HomeSection2,
  HomeSection3,
  HomeSection4,
  HomeSection5,
  HomeSection6
];

watch(showPreloader, () => {
  if (!showPreloader.value) {
    document.querySelector('main').classList.remove('dis-none');
  }
});

onMounted(() => {
  if (showPreloader.value) {
    document.querySelector('main').classList.add('dis-none');
  }
});
const currentIndex = ref(0);

const changeIndex = newIndex => {
  currentIndex.value = newIndex;
};
</script>

<style lang="scss" scoped>
.home {
  flex: 1;
  padding-inline: $inline-spacing;
  padding-top: 1.2rem;
  padding-bottom: max(3.2rem, 16px);
  display: flex;
  flex-direction: column;
  gap: max(20px, 3.2rem);
  @media screen and (max-width: $bp-lg) {
    margin-bottom: calc(58px + max(3.2rem, 16px));
  }
  &__section {
    flex: 1;
    &.hidden {
      display: none;
    }
  }
}
</style>
