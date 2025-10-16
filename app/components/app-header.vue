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
        <div v-for="(link, index) in links" :key="index" class="header__nav-item">
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
              <div class="dots">
                <div v-for="i in 3" :key="i" class="dot" />
              </div>
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
      <div class="header__lang-container">
        <button class="header__lang" @click="toggleDropdown">
          <IconsGlobe class="icon-globe" />
          <span>{{ $i18n.locale }}</span>
        </button>
        <Transition name="slide">
          <div v-if="showLangDropdown" class="header__dropdown">
            <button
              v-for="lang in langs"
              :key="lang"
              class="header__item"
              :class="{ active: lang.code === $i18n.locale }"
              @click="changeLang(lang)"
            >
              <component :is="lang.icon" class="header__item-icon" />
              <span>{{ lang.name }}</span>
            </button>
          </div>
        </Transition>
      </div>
      <button class="btn-green header__button">{{ $t('contact-us') }}</button>
    </div>
  </header>
</template>

<script setup>
import IconsRus from '~/components/icons/rus.vue';
import IconsUzb from '~/components/icons/uzb.vue';
import IconsUsa from '~/components/icons/usa.vue';

const { locales, setLocale, t } = useI18n();
const { aboutLinks, mediaLinks } = useLinks();

const showLangDropdown = ref(false);
const activeSublinkDropdowns = ref([]);
const showMenu = useState('showMenu');
const icons = [IconsUsa, IconsRus, IconsUzb];

const langs = computed(
  () =>
    locales.value?.map((locale, index) => ({
      ...locale,
      icon: icons[index]
    })) ?? []
);
const links = computed(() => [
  {
    label: t('nav.about'),
    sublinks: aboutLinks.value
  },
  {
    to: '/participants',
    label: t('nav.participants')
  },
  {
    to: '/speakers',
    label: t('nav.speakers')
  },
  {
    to: '/partners',
    label: t('nav.partners')
  },
  {
    to: '/sponsors',
    label: t('nav.sponsors')
  },
  {
    label: t('nav.media'),
    sublinks: mediaLinks.value
  },
  {
    to: '/for-visitors',
    label: t('nav.for-visitors')
  }
]);

const changeLang = newLang => {
  setLocale(newLang.code);
  toggleDropdown();
};
const toggleDropdown = () => {
  showLangDropdown.value = !showLangDropdown.value;
};
const handleSublinkDropdowns = index => {
  if (activeSublinkDropdowns.value.includes(index)) {
    activeSublinkDropdowns.value = activeSublinkDropdowns.value.filter(i => i !== index);
  } else {
    activeSublinkDropdowns.value.push(index);
  }
};

onMounted(() => {
  document.addEventListener('click', e => {
    if (!e.target.closest('.header__lang-container') && showLangDropdown.value) {
      showLangDropdown.value = false;
    }
    if (!e.target.closest('.header__nav') && activeSublinkDropdowns.value.length) {
      activeSublinkDropdowns.value = [];
    }
  });
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-top {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-from-bottom {
  from {
    transform: translateY(5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
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
  &__dropdown {
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: absolute;
    top: calc(100% + 16px);
    right: 0;
    width: 196px;
    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #f1f2f4;
    box-shadow: 0px 10px 80px -3px #0000001a;
    z-index: 10;
  }
  &__lang {
    text-transform: uppercase;
    font-weight: 500;
    font-size: max(12px, 1.7rem);
    color: $clr-charcoal-gray;
    display: flex;
    align-items: center;
    gap: max(8px, 1.2rem);
    background: #eaebed3d;
    border: 1px solid #eaebed;
    padding: 1.4rem;
    border-radius: 4.2rem;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    &:hover {
      background-color: #eaebed;
    }
    &.active {
      background: $clr-dark-teal;
      border-color: $clr-dark-teal;
      color: #fff;
      .icon-globe {
        fill: #fff;
      }
    }
    @media only screen and (max-width: 1260px) {
      display: none;
    }
    &-container {
      display: flex;
      position: relative;
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
    & > * {
      animation: 0.5s 0.3s backwards;
      &:first-child {
        animation-name: slide-from-left;
      }
      &:last-child {
        animation-name: slide-from-right;
      }
      @media only screen and (max-width: 1260px) {
        animation-delay: 0s;
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
      transition: color 0.3s, background-color 0.3s;
      animation-duration: 0.5s;
      animation-fill-mode: backwards;
      display: flex;

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          @if ($i % 2 == 0) {
            animation-name: slide-from-top;
          } @else {
            animation-name: slide-from-bottom;
          }
          animation-delay: $i * 0.1s;
        }
      }
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
    @media only screen and (max-width: 1260px) {
      animation: slide-from-left 0.5s;
    }
  }
  &__logo {
    width: max(110px, 12.8rem);
    @media only screen and (max-width: 1260px) {
      animation: none;
    }
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
