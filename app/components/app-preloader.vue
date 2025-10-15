<template>
  <Transition name="fade">
    <div v-if="isActive" class="preloader">
      <SvgPattern class="preloader__pattern" />
      <div class="preloader__wrapper">
        <div class="preloader__content">
          <SvgPreloaderLogo class="preloader__logo" />
          <h2 class="preloader__title">{{ Math.round(progress) }}%</h2>
        </div>
        <svg
          class="preloader__circle"
          viewBox="-10 -10 585 585"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="circle-path"
            d="M282.5,0
           A281.5,281.5,0,1,1,282.5,564
           A281.5,281.5,0,1,1,282.5,0"
            stroke="white"
            stroke-width="2"
            fill="none"
          />
          <circle id="moving-circle" cx="282.5" cy="0" r="6" fill="white" />
        </svg>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { $lenis, $gsap } = useNuxtApp();

const progress = ref(0);
let animationStarted = false;
const LOADING_TIME = 3; // 3 seconds
const SLOT_ANIMATION_DELAY = 0.35;
defineProps({
  isActive: Boolean
});
const emits = defineEmits(['inactive']);

const toggleElements = () => {
  const main = document.querySelector('main');
  const header = document.querySelector('header');
  main?.classList.add('dis-none');
  header.classList.add('dis-none');

  setTimeout(() => {
    main?.classList.remove('dis-none');
    header.classList.remove('dis-none');
  }, SLOT_ANIMATION_DELAY * 1000);
};
const checkProgress = () => {
  // start this toggling process when the preloader is at 100%, for SEO purposes
  if (Math.round(progress.value) === 100 && !animationStarted) {
    animationStarted = true;
    toggleElements();
  }
};
const removePreloader = () => {
  emits('inactive', false);
  document.body.style.overflow = 'visible';
  document.querySelector('.layout').classList.remove('overflow-hidden');
  $lenis.start();
};

onMounted(() => {
  $lenis.stop();

  // Animation
  $gsap.to(progress, {
    value: 100,
    duration: LOADING_TIME,
    onUpdate: checkProgress
  });
  $gsap.to('#circle-path', {
    strokeDashoffset: 0,
    duration: LOADING_TIME,
    onComplete: removePreloader
  });
  $gsap.to('#moving-circle', {
    duration: LOADING_TIME, // Animation duration in seconds
    motionPath: {
      path: '#circle-path',
      align: '#circle-path',
      alignOrigin: [0.5, 0.5]
    }
  });
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@keyframes scale-up {
  from {
    opacity: 0;
    transform: scale(1.25);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.preloader {
  position: fixed;
  inset: 0;
  background: linear-gradient(180deg, $clr-dark-teal 0%, #155440 100%);
  z-index: 100;
  overflow: hidden;
  @include flex-center;
  &__title {
    color: #fff;
    font-weight: 500;
    font-size: max(24px, 5.4rem);
  }
  &__logo {
    width: max(175px, 35rem);
  }
  &__circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%) scale(1.5);
  }
  &__content {
    animation: scale-up 0.5s 0.2s backwards;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: max(17px, 3.2rem);
  }
  &__wrapper {
    position: relative;
    @include flex-center;
  }
  &__pattern {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    fill: $clr-dark-green;
    opacity: 0.2;
    @media only screen and (max-width: $bp-lg) {
      height: 150%;
      inset: 0;
    }
  }
}
#circle-path {
  stroke-dashoffset: 1768.9649658203125;
  stroke-dasharray: 1768.9649658203125;
}
</style>
