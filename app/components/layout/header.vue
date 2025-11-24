<template>
  <header class="header">
    <div class="header__left">
      <button class="header__hamburger" :class="{ active: showMenu }" @click="showMenu = !showMenu">
        <IconsMenu class="icon-menu" />
        <IconsCross class="icon-menu" />
      </button>
      <NuxtLink :to="$localePath('/')">
        <SvgLogo class="header__logo" />
      </NuxtLink>
      <nav class="header__nav">
        <div v-for="(link, index) in headerLinks" :key="index" class="header__nav-item">
          <NuxtLink
            v-if="link.to"
            :to="$localePath(link.to)"
            class="header__nav-link"
            :class="{ active: $route.path.includes(link.to) }"
            active-class="active"
          >
            {{ link.label }}
          </NuxtLink>
          <div v-else class="header__nav-container">
            <button
              class="header__nav-button"
              :class="{
                show: activeSublinkDropdowns.includes(index),
                active: link.sublinks?.some(sublink => $route.path?.includes(sublink.to))
              }"
              @click="handleSublinkDropdowns(index)"
            >
              <span>{{ link.label }}</span>
            </button>
            <Transition name="slide">
              <div v-if="activeSublinkDropdowns.includes(index)" class="header__nav-dropdown">
                <NuxtLink
                  v-for="sublink in link.sublinks"
                  :key="sublink.to"
                  :to="$localePath(sublink.to)"
                  class="header__nav-dropdown-link"
                  @click="activeSublinkDropdowns.length = 0"
                >
                  {{ sublink.label }}
                </NuxtLink>
              </div>
            </Transition>
          </div>
        </div>
      </nav>
    </div>
    <div class="header__right">
      <UiLangChanger class="header__right-lang" />
      <button class="btn-green header__button" @click="showFormModal = true">
        {{ $t('contact-us') }}
      </button>
    </div>
  </header>
</template>

<script setup>
const showFormModal = useState('showFormModal');
const { headerLinks } = useLinks();

const activeSublinkDropdowns = ref([]);
const showMenu = useState('showMenu');

const handleSublinkDropdowns = index => {
  if (activeSublinkDropdowns.value.includes(index)) {
    activeSublinkDropdowns.value = activeSublinkDropdowns.value.filter(i => i !== index);
  } else {
    activeSublinkDropdowns.value.push(index);
  }
};

onMounted(() => {
  document.addEventListener('click', e => {
    if (!e.target.closest('.header__nav') && activeSublinkDropdowns.value.length) {
      activeSublinkDropdowns.value = [];
    }
  });
});

useGSAPAnimate({
  selector: '.header__left',
  base: { x: -20 }
});
useGSAPAnimate({
  selector: '.header__right>*',
  base: { y: 5 },
  staggerStep: 0.2,
  initialDelay: 0.8
});
useGSAPAnimate({
  selector: '.header__nav-item',
  base: { y: 5 },
  staggerStep: 0.1
});
</script>

<style lang="scss" scoped>
.header {
  padding-block: max(16px, 2rem);
  display: flex;
  justify-content: space-between;
  padding-inline: $inline-spacing;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);
  z-index: 50;
  background-color: #ffffffcc;

  &__hamburger {
    border-radius: 42px;
    width: 42px;
    aspect-ratio: 1;
    background: #eaebed3d;
    border: 1px solid #eaebed;
    display: grid;
    place-items: center;
    &.active > * {
      &:first-child {
        transform: scale(0);
      }
      &:last-child {
        transform: scale(1);
      }
    }
    & > * {
      grid-area: 1/1/2/2;
      transition: transform 0.3s;
      &:last-child {
        transform: scale(0);
      }
    }
    @media only screen and (min-width: 1260px) {
      display: none;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #334155;
    font-size: 14px;
    font-weight: 500;
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
    &.active,
    &:hover {
      background: #f1f2f4;
      color: $clr-deep-green;
    }
  }
  &__button {
    border-radius: 40px;
    padding-inline: max(12px, 2.4rem);
    font-size: max(14px, 1.6rem);
    @include flex-center;
  }
  &__right {
    align-self: center;
    display: flex;
    gap: max(10px, 2rem);
    &-lang {
      @media only screen and (max-width: 1260px) {
        display: none;
      }
    }
    & > * {
      @media only screen and (max-width: 1260px) {
        height: auto;
      }
    }
    @media only screen and (max-width: 1260px) {
      & > * {
        padding-block: 10px;
      }
    }
  }
  &__nav {
    display: flex;
    background: #eaebed40;
    border: 1px solid #eaebed;
    gap: 5px;
    border-radius: 6.1rem;
    padding: 6px;
    &-button,
    &-link {
      padding-block: max(6px, 1.2rem);
      padding-inline: max(10px, 2rem);
      display: flex;
      border-radius: 3.4rem;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        color: $clr-bright-teal-alt;
      }
    }
    &-link.active {
      background-color: $clr-dark-teal;
      color: #fff;
    }
    &-item {
      color: $clr-charcoal-gray;
      font-weight: 500;
      font-size: max(14px, 1.7rem);
      display: flex;
    }
    &-container {
      position: relative;
      display: flex;
    }
    &-dropdown {
      min-width: 127%;
      position: absolute;
      left: 0;
      top: calc(100% + 10px);
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border: 1px solid #e9eaec;
      box-shadow: 0px 2px 32px 0px #0000001f;
      border-radius: 10px;
      z-index: 5;
      overflow: hidden;
      &-link {
        text-wrap: nowrap;
        padding-block: 12px;
        padding-inline: 12px;
        transition: background-color 0.5s;
        &:hover {
          background-color: #e9eaec;
        }
      }
    }
    &-button {
      display: flex;
      align-items: center;
      gap: 10px;
      &.show {
        background-color: #e9eaec;
      }
      &.active {
        background-color: $clr-dark-teal;
        color: #fff;
      }
    }
    @media only screen and (max-width: 1260px) {
      display: none;
    }
  }

  &__left {
    display: flex;
    align-items: center;
    gap: max(10px, 3.2rem);
  }
  &__logo {
    width: max(110px, 12.8rem);
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.dots {
  display: flex;
  gap: 4px;
}
.dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: currentColor;
}
</style>
