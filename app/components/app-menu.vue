<template>
  <Transition name="appear">
    <div v-if="showMenu" class="menu">
      <nav class="nav" data-lenis-prevent>
        <NuxtLink
          v-for="link in allLinks"
          :key="link.to"
          :to="$localePath(link.to)"
          class="nav__link"
          @click="showMenu = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
      <div class="menu__content">
        <div class="menu__details">
          <h3 class="menu__title">{{ $t('contacts') }}</h3>
          <div class="menu__cta">
            <a class="menu__social" :href="`tel:${TEL_NUMBER}`">
              <IconsTel class="icon menu__social-icon" />
              <span>{{ TEL_NUMBER }}</span>
            </a>
            <a class="menu__social" :href="`mailto:${GMAIL}`">
              <IconsMail class="icon menu__social-icon" />
              <span>{{ GMAIL }}</span>
            </a>
          </div>
        </div>
        <div class="menu__links">
          <a
            class="menu__link"
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram link"
          >
            <IconsInsta class="icon menu__icon" />
          </a>
          <a
            class="menu__link"
            href="https://telegram.org"
            target="_blank"
            aria-label="Telegram link"
          >
            <IconsTelegram class="icon menu__icon" />
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { allLinks } = useLinks();
const showMenu = useState('showMenu', () => false);
const { $lenis } = useNuxtApp();

watchEffect(() => {
  if (!import.meta.client) return;
  if (showMenu.value) $lenis.stop();
  else $lenis.start();
});
</script>

<style lang="scss" scoped>
.icon {
  min-width: 24px;
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #eaebed40;
  border: 1px solid #eaebed;
  padding: 6px;
  border-radius: 16px;
  max-height: 50vh;
  overflow-y: auto;
  scrollbar-width: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  &__link {
    transition: transform 0.5s, opacity 0.5s;
    color: $clr-charcoal-gray;
    font-weight: 500;
    font-size: 17px;
    padding: 12px;
    animation: slide-from-left-10 0.6s backwards;
    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
  }
}
.menu {
  background-color: #ffffff;
  position: fixed;
  inset: 0;
  top: 70px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;

  &__cta {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__links {
    display: flex;
    gap: 12px;
    animation: slide-from-bottom-10 0.7s backwards 0.7s;
  }
  &__link {
    @include flex-center;
    border: 1px solid $clr-rich-teal;
    backdrop-filter: blur(12px);
    width: 48px;
    height: 48px;
    border-radius: 12px;
    .icon {
      width: 45.9%;
    }
  }
  &__social {
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: 18px;
    color: rgba($clr-deep-green, 0.8);
    span {
      opacity: 0.8;
    }
    &-icon {
      fill: $clr-deep-green;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 18px;
    color: rgba($clr-deep-green, 0.8);
  }
  &__details {
    display: flex;
    flex-direction: column;
    gap: 16px;
    animation: slide-from-bottom-20 0.7s backwards 0.5s;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__icon {
    fill: $clr-deep-green;
  }
}
.appear-enter-active,
.appear-leave-active {
  transition: all 0.6s;
}
.appear-enter-from,
.appear-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
