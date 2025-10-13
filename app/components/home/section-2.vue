<template>
  <section class="section">
    <HomeContent
      class="section__content"
      title="Insurance Expo 2025: Step into the Future of Insurance"
      label="About the Event"
      :texts="[
        'Insurance Expo 2025 is the international exhibition showcasing the latest innovations and opportunities in the insurance industry. Discover leading companies and cutting-edge services, and explore secure solutions for the futureInsurance Expo 2025 is the international exhibition showcasing the latest innovations and opportunities in the insurance industry. Discover leading companies and cutting-edge services, and explore secure solutions for the future',
        'Insurance Expo 2025 is the international exhibition showcasing the latest innovations and opportunities in the insurance industry. Discover leading companies and cutting-edge services, and explore secure solutions for the future'
      ]"
    />
    <div class="section__video">
      <MyPicture src="home-section-2.jpg" alt="banner" class="section__image" />
      <button class="section__play">
        <IconsPlay class="icon-play" />
      </button>
      <span class="section__progress"> 03:36 </span>
    </div>
    <div class="section__data">
      <div class="section__box" v-for="(item, i) in data" :key="i">
        <h3 class="title-charcoal-gray-24-20">{{ item.number }}</h3>
        <div class="section__box-wrapper">
          <component :is="item.icon" class="section__box-icon" />
          <span class="section__box-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconsWhiteboard from '~/components/icons/whiteboard.vue';
import IconsFlag from '~/components/icons/flag.vue';
import IconsHuman from '~/components/icons/human.vue';

const data = [
  {
    icon: IconsHuman,
    number: '20k+',
    label: 'Visitors'
  },
  {
    icon: IconsWhiteboard,
    number: '200+',
    label: 'Exibitors'
  },
  {
    icon: IconsFlag,
    number: '50+ ',
    label: 'Countries'
  },
  {
    icon: IconsFlag,
    number: '50+ ',
    label: 'Countries'
  }
];
</script>

<style lang="scss" scoped>
.section {
  display: grid;
  grid-template-areas:
    'content video'
    '. data';
  grid-template-columns: 1fr 1.41fr;
  row-gap: clamp(16px, 1.5vw, 20px);
  column-gap: clamp(20px, 2vw, 32px);
  @media only screen and (max-width: $bp-lg) {
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-template-areas:
      'content'
      'video'
      'data';
  }
  .section__content,
  .section__video,
  .section__data {
    transition: opacity var(--section-transition-duration) var(--section-transition-delay),
      transform var(--section-transition-duration) var(--section-transition-delay);
  }
  &:not(.active) {
    .section__content {
      transform: translateX(-100px);
      opacity: 0;
    }
    .section__video,
    .section__data {
      transform: translateX(100px);
      opacity: 0;
    }
  }
  &__image {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  &__progress {
    align-self: flex-end;
    justify-self: flex-start;
    color: #000;
    padding-block: 4px;
    padding-inline: 16px;
    font-size: clamp(14px, 1vw, 18px);
    background-color: #fff;
    border-radius: 8px;
    margin: clamp(16px, 1.2vw, 20px);
  }
  &__play {
    place-self: center;
    background-color: $clr-dark-teal;
    border-radius: 50%;
    width: clamp(52px, 3.7vw, 70px);
    aspect-ratio: 1;
    transition: background-color 0.3s;
    @include flex-center;
    &:hover {
      background: #fff;
      .icon-play {
        fill: $clr-dark-teal;
      }
    }
  }
  &__video {
    grid-area: video;
    overflow: hidden;
    border-radius: clamp(16px, 2vw, 30px);
    display: grid;
    & > * {
      grid-area: 1/1/2/2;
    }
  }
  &__content {
    grid-area: content;
    padding-right: 0;
    & > * {
      max-width: 100%;
      &:last-child {
        @media only screen and (min-width: $bp-lg) {
          max-width: 80%;
        }
      }
    }
  }
  &__data {
    grid-area: data;
    display: flex;
    gap: clamp(16px, 1.5vw, 23px);
    @media only screen and (max-width: $bp-lg) {
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      &::-webkit-scrollbar {
        display: none;
      }
      & > * {
        scroll-snap-align: start;
      }
    }
  }
  &__box {
    @include flex-gap(clamp(24px, 2.5vw, 47px));
    justify-content: space-between;
    flex: 1;
    background-color: $clr-light-white;
    border-radius: 16px;
    padding: 20px;
    &-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    &-icon {
      width: 28px;
      fill: $clr-dark-teal;
    }
  }
}
</style>
