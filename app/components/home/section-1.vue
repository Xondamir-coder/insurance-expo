<template>
  <section class="section">
    <div class="section__container">
      <HomeContent
        class="section__content"
        :title="$t('home.section-1.content.title')"
        :label="$t('home.section-1.content.label')"
        :texts="[$t('home.section-1.content.text')]"
      />
      <div class="section__umbrella-container">
        <div class="section__location">
          <div class="section__location-icontainer">
            <IconsLocation class="icon-location" />
          </div>
          <div class="section__location-content">
            <strong class="section__location-out">
              {{ formattedDate }}
            </strong>
            <span>{{ $t('tashkent') }}</span>
          </div>
        </div>
        <MyPicture src="umbrella.png" alt="umbrella" class="section__umbrella" />
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
body.preloading .section__umbrella-container > * {
  opacity: 0;
  &:first-child {
    transform: translateX(-20px);
  }
  &:last-child {
    transform: translateX(20px);
  }
}
.section {
  display: grid;
  grid-template-areas:
    'hero content'
    'time content';
  grid-template-columns: 1fr 1.42fr;
  grid-auto-rows: 1fr max-content;
  row-gap: max(16px, 2rem);
  column-gap: max(20px, 3.2rem);
  @media only screen and (max-width: $bp-lg) {
    grid-auto-rows: 1fr max-content max-content;
    grid-template-columns: 1fr;
    grid-template-areas:
      'content'
      'hero'
      'time';
  }
  &__umbrella {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 52%;
    @media only screen and (max-width: $bp-md) {
      position: static;
      width: 100%;
    }
    &-container {
      display: flex;
      row-gap: 10px;
      position: relative;
      @media only screen and (max-width: $bp-lg) {
        padding-right: max(14px, 3.6rem);
      }
      @media only screen and (max-width: $bp-md) {
        flex-direction: column;
      }
      & > * {
        animation: backwards 1s 0.4s;
        &:first-child {
          animation-name: slide-from-left-20;
        }
        &:last-child {
          animation-name: slide-from-right-20;
        }
      }
    }
  }
  &__content {
    z-index: 3;
  }
  &__container {
    grid-area: hero;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
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
      color: $clr-charcoal-gray;
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
