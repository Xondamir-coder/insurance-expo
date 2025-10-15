<template>
  <section class="section">
    <HomeContent
      class="section__content"
      :title="$t('home.section-3.content.title')"
      :label="$t('home.section-3.content.label')"
      :texts="[$t('home.section-3.content.text')]"
    />
    <div class="section__list">
      <div v-for="(card, index) in $tm('home.section-3.cards')" :key="index" class="section__item">
        <div class="section__item-content">
          <h3 class="section__title">{{ $rt(card.title) }}</h3>
          <p class="section__text">
            {{ $rt(card.text) }}
          </p>
        </div>
        <MyPicture
          v-if="index === 0"
          src="home-section-3.png"
          alt="security banner"
          class="section__image"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
  display: grid;
  grid-template-columns: 1fr 1.54fr;
  row-gap: max(16px, 2rem);
  column-gap: max(20px, 9rem);
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-auto-rows: max-content 1fr;
  }
  &__title {
    color: $clr-deep-slate;
    font-weight: 700;
    font-size: max(16px, 2rem);
    line-height: 1.35;
    text-transform: uppercase;
  }
  &__text {
    font-size: max(14px, 1.6rem);
    line-height: 1.45;
    color: $clr-steel-blue;
  }
  &__item {
    border-radius: 20px;
    padding: max(14px, 3rem);
    overflow: hidden;
    color: #fff;
    background: $clr-almost-white;
    border: 1px solid #e9eaec;
    display: flex;
    animation: 0.6s backwards;

    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        @if ($i == 1) {
          animation-name: slide-from-top-20;
        }
        @if ($i == 2) {
          animation-name: slide-from-bottom-20;
        }
        @if (($i == 3) or ($i == 4)) {
          animation-name: slide-from-right-20;
        }

        animation-delay: ($i * 0.1s) + 0.2s;
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media screen and (max-width: 512px) {
        gap: 20px;
      }
    }
    &:nth-child(2) {
      @media screen and (min-width: 768px) {
        grid-row: span 2;
      }
    }
    &:first-child {
      @media screen and (min-width: 768px) {
        grid-column: span 2;
      }
      position: relative;
      border-color: $clr-dark-teal;
      background: linear-gradient(90deg, $clr-bright-teal-alt 0%, #08ad78 100%);
      .section__text {
        color: #fff;
      }
      .section__title {
        font-size: max(2.4rem, 16px);
        font-weight: 800;
        color: #fff;
      }
      & > *:first-child {
        @media screen and (min-width: 500px) {
          max-width: 55%;
        }
      }
    }
  }
  &__list {
    display: grid;
    gap: max(16px, 2rem);
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1.32fr;
      grid-auto-rows: 1fr 0.75fr 0.75fr;
    }
  }
  &__image {
    width: max(100px, 30%);
    position: absolute;
    right: 0;
    top: 0;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
}
</style>
