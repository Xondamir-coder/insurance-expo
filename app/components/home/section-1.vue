<template>
  <section class="section-1">
    <div class="section-1__container">
      <HomeContent
        title="Insurance Expo 2025 is your gateway to a secure future!"
        label="Insurance Expo"
        :texts="[
          'Discover leading companies and innovative services at the international insurance exhibition. Explore the latest updates and opportunities in the insurance industry all in one place.'
        ]"
      />
      <div class="section-1__umbrella-container">
        <div class="section-1__location">
          <div class="section-1__location-icontainer">
            <IconsLocation class="icon-location" />
          </div>
          <div class="section-1__location-content">
            <strong class="section-1__location-out">
              {{ formattedDate }}
            </strong>
            <span>Tashkent</span>
          </div>
        </div>
        <MyPicture src="umbrella.png" alt="umbrella" class="section-1__umbrella" />
      </div>
    </div>
    <HomeDeadlineBanner :deadline />
    <HomeImageCardCarousel :images="['couple-signing.jpg', 'group-people.jpg']" />
  </section>
</template>

<script setup>
const { locale } = useI18n();

const deadline = new Date('March 16, 2026');
const formattedDate = computed(() =>
  Intl.DateTimeFormat(locale.value, {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).format(deadline)
);
</script>

<style lang="scss" scoped>
@property --angle {
  syntax: '<angle>';
  initial-value: 92.56deg;
  inherits: false;
}
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
@keyframes slide-from-right {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-from-top {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes rotate-bg {
  from {
    --angle: -92.56deg;
  }
  to {
    --angle: 92.56deg;
  }
}
@keyframes rotate-pattern {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(90deg);
  }
}
.section-1 {
  display: grid;
  grid-template-areas:
    'hero content'
    'time content';
  grid-template-columns: 1fr 1.42fr;
  grid-auto-rows: 1fr max-content;
  row-gap: max(16px, 2rem);
  column-gap: max(20px, 3.2rem);
  @media only screen and (max-width: $bp-lg) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'content'
      'hero'
      'time';
  }
  &__umbrella-container {
    display: grid;
    align-items: flex-end;
    row-gap: 10px;

    @media only screen and (min-width: $bp-lg) {
      grid-template-columns: 1fr 1.3fr;
    }
    @media only screen and (max-width: $bp-lg) {
      padding-right: max(14px, 3.6rem);
    }
    & > * {
      animation: backwards 0.3s 0.4s;
      &:first-child {
        animation-name: slide-from-left;
      }
      &:last-child {
        animation-name: slide-from-right;
      }
    }
  }
  &__container {
    grid-area: hero;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba($clr-light-gray, 0.3);
    border: 1px solid $clr-light-gray;
    border-radius: max(16px, 3rem);
    padding-top: max(14px, 4.2rem);
    padding-left: max(14px, 3.6rem);
  }
  &__location {
    font-size: max(14px, 1.6rem);
    display: flex;
    gap: 12px;
    text-transform: uppercase;
    position: relative;
    padding-bottom: max(14px, 4.2rem);
    @media only screen and (max-width: $bp-lg) {
      order: 1;
    }

    &-content {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    }
    &-icontainer {
      @include flex-center;
      border-radius: max(10px, 1.2rem);
      width: max(40px, 5rem);
      aspect-ratio: 1;
      background: $clr-dark-teal;
      border: 1px solid #ffffff1a;
      backdrop-filter: blur(32px);
    }
  }
}
</style>
