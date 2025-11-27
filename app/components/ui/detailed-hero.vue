<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="hero">
    <img v-if="banner" :src="`${DOMAIN_URL}${banner}`" alt="person" class="hero__banner" />
    <div v-if="quote" class="hero__right">
      <img
        v-if="quote.image"
        :src="`${DOMAIN_URL}${quote.image}`"
        alt="banner"
        class="hero__right-banner"
      />
      <div class="hero__right-content">
        <h4>{{ $t('quote') }}</h4>
        <p class="text-medium">{{ quote.text }}</p>
      </div>
    </div>
    <div class="hero__top">
      <div v-if="logo" class="hero__top-box">
        <img :src="`${DOMAIN_URL}${logo}`" alt="logo" class="hero__top-logo" />
      </div>
      <div class="hero__top-content">
        <h1 class="hero__title">{{ title }}</h1>
        <p class="text-medium">{{ subtitle }}</p>
      </div>
    </div>
    <div v-if="about.text" class="hero__info">
      <h2 class="hero__label">{{ about.label }}</h2>
      <p class="text-medium">
        {{ about.text }}
      </p>
    </div>
    <div v-if="info" class="hero__info">
      <h2 class="hero__label">{{ info.label }}</h2>
      <p class="text-medium">
        {{ info.text }}
      </p>
    </div>
    <div v-if="highlights" class="hero__focus">
      <h2 class="hero__label">{{ $t('detailed-hero.focus-label') }}</h2>
      <ul class="hero__focus-list">
        <li v-for="(highlight, index) in highlights" :key="index" class="hero__focus-item">
          <div class="hero__focus-box" v-html="highlight.svg" />
          <p class="hero__text">
            {{ highlight[`title_${$i18n.locale}`] }}
          </p>
        </li>
      </ul>
    </div>
    <ul class="hero__cards">
      <li v-for="(item, index) in cards" :key="index" class="hero__card">
        <span class="hero__title">{{ item.title }}</span>
        <p class="hero__text">{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  banner: {
    type: String,
    default: null
  },
  logo: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  about: {
    type: Object,
    required: true
  },
  info: {
    type: Object,
    default: null
  },
  quote: {
    type: Object,
    default: null
  },
  highlights: {
    type: Array,
    default: null
  },
  cards: {
    type: Array,
    default: null
  }
});
</script>

<style lang="scss" scoped>
.hero {
  padding: max(4.8rem, 16px);
  background-color: #eaebed4d;
  border: 1px solid #eaebed;
  border-radius: max(3.2rem, 16px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: max(6rem, 32px);
  @media screen and (max-width: $bp-lg) {
    grid-template-columns: 1fr;
  }
  &__banner {
    @media screen and (min-width: $bp-lg) {
      grid-row: 1 / span 3;
      grid-column: 2 / 3;
    }
    align-self: flex-start;
  }
  &__right {
    display: flex;
    flex-direction: column;
    position: relative;
    @media screen and (min-width: $bp-lg) {
      grid-row: 1 / span 3;
      grid-column: 2 / 3;
    }
    @media screen and (max-width: $bp-lg) {
      margin-bottom: 100px;
    }
    &-banner {
      border-radius: max(2rem, 12px);
      align-self: flex-end;
      @media screen and (min-width: $bp-lg) {
        max-width: 84%;
      }
      @media screen and (max-width: $bp-sm) {
        aspect-ratio: 296 / 342;
      }
    }
    &-content {
      position: absolute;
      right: 2%;
      bottom: 0;
      translate: 0 23%;
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 8px);
      background: #eaebed;
      border: 1px solid #eaebed;
      box-shadow: 0px 2px 32px 0px #ffffff29;
      padding: max(3.2rem, 12px);
      border-radius: max(2rem, 8px);
      @media screen and (max-width: $bp-lg) {
        max-width: 92%;
        width: 100%;
        right: auto;
        left: 50%;
        translate: -50% 60%;
      }

      h4 {
        font-size: max(2.4rem, 16px);
        font-weight: bold;
        color: #111827;
      }
    }
  }
  &__card {
    padding: max(3.2rem, 16px);
    border-radius: max(2.4rem, 12px);
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aspect-ratio: 403/280;
    @media screen and (max-width: $bp-md) {
      aspect-ratio: 296/150;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: max(2.4rem, 12px);
    @media screen and (min-width: $bp-lg) {
      grid-column: 1 / span 2;
    }
  }
  &__label {
    color: $clr-dark-charcoal;
    font-weight: bold;
    font-size: max(2.8rem, 18px);
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 10px);
  }
  &__text {
    font-weight: 500;
    color: $clr-dark-charcoal;
  }
  &__focus {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 12px);
    &-item {
      display: flex;
      align-items: center;
      gap: max(1.6rem, 12px);
      background-color: #ffffff;
      border: 1px solid #eaebed;
      padding: max(1.6rem, 12px);
      border-radius: max(1.6rem, 12px);
    }
    &-list {
      display: flex;
      gap: max(1.2rem, 8px);
      flex-direction: column;
      &:has(:nth-child(4)) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
    &-box {
      @include flex-center;
      width: max(5rem, 42px);
      height: max(5rem, 42px);
      background-color: $clr-bright-teal-alt;
      border-radius: max(1.2rem, 8px);
      fill: #fff;
      & > * {
        width: 54.5454545%;
      }
    }
    &-icon {
      width: 56%;
    }
  }
  &__title {
    color: $clr-dark-charcoal;
    font-size: max(3.8rem, 20px);
    font-weight: bold;
  }
  &__top {
    display: flex;
    align-items: center;
    gap: max(2.4rem, 12px);
    &-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 4px);
    }
    &-logo {
      width: 86%;
    }
    &-box {
      @include flex-center;
      width: max(14rem, 60px);
      height: max(14rem, 60px);
      border: 0.6px solid #2c3a471a;
      background-color: #fff;
      border-radius: max(2rem, 12px);
    }
  }
}
</style>
