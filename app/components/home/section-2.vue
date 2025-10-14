<template>
  <section class="section">
    <HomeContent
      class="section__content"
      :title="$t('home.section-2.content.title')"
      :label="$t('home.section-2.content.label')"
      :texts="$tm('home.section-2.content.texts').map(text => $rt(text))"
    />
    <div class="section__container">
      <video ref="videoRef" class="section__video" muted @click="toggleVideo">
        <source src="/videos/home.mp4" type="video/mp4" >
      </video>
      <button class="section__play" :class="{ hidden: isVideoPlaying }" @click="toggleVideo">
        <IconsPlay class="icon-play" />
      </button>
      <span class="section__progress"> {{ formattedTime }} </span>
    </div>
    <div class="section__data">
      <div v-for="(card, i) in cards" :key="i" class="section__box">
        <h3 class="title-charcoal-gray-24-20">{{ $rt(card.number) }}</h3>
        <div class="section__box-wrapper">
          <component :is="card.icon" class="section__box-icon" />
          <span class="section__box-label">{{ $rt(card.label) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconsWhiteboard from '~/components/icons/whiteboard.vue';
import IconsFlag from '~/components/icons/flag.vue';
import IconsHuman from '~/components/icons/human.vue';

const { tm } = useI18n();

const currentTime = ref(0);
const isVideoPlaying = ref(false);
const videoRef = ref();

const icons = [IconsHuman, IconsWhiteboard, IconsFlag, IconsFlag];
const cards = computed(() =>
  icons.map((icon, index) => ({
    icon,
    ...tm('home.section-2.cards')[index]
  }))
);

const toggleVideo = () => {
  if (!videoRef.value) return;
  if (isVideoPlaying.value) videoRef.value.pause();
  else videoRef.value.play();
  isVideoPlaying.value = !isVideoPlaying.value;
};

const formatTime = seconds => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const formattedTime = computed(() => formatTime(currentTime.value));

let timeUpdateHandler, endedHandler;

onMounted(() => {
  const video = videoRef.value;
  if (!video) return;

  timeUpdateHandler = () => {
    currentTime.value = video.currentTime;
  };

  endedHandler = () => {
    currentTime.value = 0;
    isVideoPlaying.value = false;
  };

  video.addEventListener('timeupdate', timeUpdateHandler);
  video.addEventListener('ended', endedHandler);
});

onUnmounted(() => {
  const video = videoRef.value;
  if (!video) return;

  video.removeEventListener('timeupdate', timeUpdateHandler);
  video.removeEventListener('ended', endedHandler);
});
</script>

<style lang="scss" scoped>
.section {
  display: grid;
  grid-template-areas:
    'content video'
    '. data';
  row-gap: max(16px, 3.2rem);
  column-gap: max(20px, 9rem);
  @media only screen and (min-width: $bp-lg) {
    grid-template-columns: 1fr 1.41fr;
    grid-auto-rows: 1fr max-content;
  }
  @media screen and (max-width: $bp-lg) {
    grid-template-areas:
      'content'
      'video'
      'data';
  }
  &__progress {
    align-self: flex-end;
    justify-self: flex-start;
    color: #000;
    padding-block: 4px;
    padding-inline: 16px;
    font-size: max(14px, 1.8rem);
    background-color: #fff;
    border-radius: 8px;
    margin: max(16px, 2rem);
  }
  &__play {
    z-index: 2;
    place-self: center;
    background-color: $clr-dark-teal;
    border-radius: 50%;
    width: max(52px, 7rem);
    height: max(52px, 7rem);
    transition: background-color 0.3s, transform 0.6s, opacity 0.6s;
    @include flex-center;
    &.hidden {
      transform: scale(1.25);
      opacity: 0;
    }
    &:hover {
      background: #fff;
      .icon-play {
        fill: $clr-dark-teal;
      }
    }
  }
  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  &__container {
    grid-area: video;
    overflow: hidden;
    border-radius: max(16px, 3rem);
    display: grid;
    animation: slide-from-bottom-20 0.6s backwards 0.1s;
    & > * {
      grid-area: 1/1/2/2;
    }
  }
  &__content {
    grid-area: content;
    padding-right: 0;
  }
  &__data {
    grid-area: data;
    display: flex;
    gap: max(16px, 2.3rem);
    & > * {
      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          animation: slide-from-bottom-20 0.6s backwards ($i * 0.1s) + 0.2s;
        }
      }
    }
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
    @include flex-gap(max(24px, 4.7rem));
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
