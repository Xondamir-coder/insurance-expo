<template>
  <main class="home">
    <div class="home__container">
      <!-- <HomeSection1 /> -->
      <!-- <HomeSection2 /> -->
      <!-- <HomeSection3 /> -->
      <!-- <HomeSection4 /> -->
      <!-- <HomeSection5 /> -->
      <HomeSection6 />
    </div>
    <HomeNav />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
  flex: 1;
  padding-inline: $padding-inline;
  color: $clr-charcoal-gray;
  padding-top: 1.2rem;
  padding-bottom: max(3.2rem, 16px);
  display: flex;
  flex-direction: column;
  gap: max(20px, 3.2rem);
  &__container {
    flex: 1;
    overflow: hidden;
    display: grid;
    & > * {
      // grid-area: 1/1/2/2;
      transition-property: transform, opacity;
      transition-duration: 0.6s;
      &.before {
        opacity: 0;
        transform: translateX(-105vw);
      }
      &.after {
        opacity: 0;
        transform: translateX(105vw);
      }
    }
  }
}
</style>
