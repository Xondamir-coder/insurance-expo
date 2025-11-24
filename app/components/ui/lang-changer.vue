<template>
  <div class="lang-changer">
    <button class="lang-changer__button" @click="showLangDropdown = !showLangDropdown">
      <IconsGlobe class="icon-globe" />
      <span>{{ $i18n.locale }}</span>
    </button>
    <Transition name="slide">
      <div v-if="showLangDropdown" class="lang-changer__dropdown">
        <button
          v-for="lang in langs"
          :key="lang"
          class="lang-changer__item"
          :class="{ active: lang.code === $i18n.locale }"
          @click="changeLang(lang)"
        >
          <component :is="lang.icon" class="lang-changer__item-icon" />
          <span>{{ lang.name }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import IconsRus from '~/components/icons/rus.vue';
import IconsUzb from '~/components/icons/uzb.vue';
import IconsUsa from '~/components/icons/usa.vue';

const { locales, setLocale } = useI18n();

const icons = [IconsUsa, IconsRus, IconsUzb];
const showLangDropdown = ref(false);
const langs = computed(
  () =>
    locales.value?.map((locale, index) => ({
      ...locale,
      icon: icons[index]
    })) ?? []
);

const changeLang = newLang => {
  setLocale(newLang.code);
  showLangDropdown.value = !showLangDropdown.value;
};

onMounted(() => {
  document.addEventListener('click', e => {
    if (!e.target.closest('.lang-changer') && showLangDropdown.value) {
      showLangDropdown.value = false;
    }
  });
});
</script>

<style scoped lang="scss">
.lang-changer {
  display: flex;
  position: relative;
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
    @media screen and (max-width: 1260px) {
      top: auto;
      bottom: calc(100% + 10px);
      left: 0;
    }
  }
  &__button {
    text-transform: uppercase;
    font-weight: 500;
    font-size: max(14px, 1.7rem);
    color: $clr-charcoal-gray;
    display: flex;
    align-items: center;
    gap: max(8px, 1.2rem);
    background: #eaebed3d;
    border: 1px solid #eaebed;
    padding: max(1.4rem, 10px);
    border-radius: max(4.2rem, 20px);
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
</style>
