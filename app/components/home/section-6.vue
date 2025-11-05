<template>
  <section class="section">
    <div class="section__box">
      <HomeContent
        :title="$t('home.section-6.content.title')"
        :label="$t('home.section-6.content.label')"
      />
      <button class="btn-green section__button">
        <span>Get started</span>
        <IconsArrowUpRight class="icon-arrow" />
      </button>
    </div>
    <div class="section__wrapper">
      <div class="section__details">
        <div v-for="item in footerLinks" :key="item.label" class="section__detail">
          <h4 class="section__label">{{ item.label }}</h4>
          <div class="section__links">
            <NuxtLink
              v-for="link in item.links"
              :key="link.to"
              :to="$localePath(link.to)"
              class="section__link"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
        <div class="section__detail">
          <h4 class="section__label">{{ $t('contacts') }}</h4>
          <div class="section__links">
            <a class="section__cta" :href="`tel:${TEL_NUMBER}`">
              <IconsTel class="section__icon" />
              <span>{{ TEL_NUMBER }}</span>
            </a>
            <a class="section__cta" :href="`mailto:${GMAIL}`">
              <IconsMail class="section__icon" />
              <span>{{ GMAIL }}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="section__social">
        <a class="section__social-icon" href="#" target="_blank" rel="noopener noreferrer">
          <IconsInsta class="section__icon" />
        </a>
        <a class="section__social-icon" href="#" target="_blank" rel="noopener noreferrer">
          <IconsTelegram class="section__icon" />
        </a>
      </div>
      <div class="section__bottom">
        <p class="footer__copyright">© {{ new Date().getFullYear() }} Expo - All rights reserved</p>
        <div class="section__bottom-links">
          <NuxtLink :to="$localePath('/terms-of-service')" class="section__bottom-link">
            <span>Terms of service</span>
          </NuxtLink>
          <NuxtLink :to="$localePath('/privacy-policy')" class="section__bottom-link">
            <span>Privacy policy</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="section__right">
      <MyPicture src="map.jpg" alt="map" class="section__image" />
    </div>
  </section>
</template>

<script setup>
const { footerLinks } = useLinks();
</script>

<style lang="scss" scoped>
.section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: max(16px, 2rem);
  column-gap: max(20px, 3.2rem);
  grid-template-areas:
    'content map'
    'links map';
  @media only screen and (max-width: $bp-lg) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'content'
      'map'
      'links';
    grid-auto-rows: max-content;
  }
  &__bottom {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    padding-block: max(16px, 3rem);
    border-top: 1px solid #e9eaec;
    @media only screen and (max-width: $bp-sm) {
      justify-content: center;
    }
    &-links {
      display: flex;
      align-items: center;
    }
    &-link {
      padding-inline: 12px;
      position: relative;
      transition: color 0.3s;
      &:hover {
        color: $clr-dark-teal;
      }
    }
  }
  &__social {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: flex-end;
    &-icon {
      background: #ffffff14;
      border: 1px solid #eaebed;
      backdrop-filter: blur(12px);
      width: 48px;
      aspect-ratio: 1;
      border-radius: 12px;
      @include flex-center;
    }
  }
  &__link {
    transition: color 0.3s;
    &:hover {
      color: $clr-dark-teal;
    }
  }
  &__right {
    border-radius: 12px;
    overflow: hidden;
    grid-area: map;
  }
  &__detail {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: max(1.8rem, 16px);
    font-weight: 400;
  }
  &__links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
  &__cta {
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s;
    &:hover {
      color: $clr-dark-teal;
      svg {
        fill: $clr-dark-teal;
      }
    }
  }
  &__label {
    font-size: 18px;
    font-weight: 700;
  }
  &__details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: rgba(#000, 0.8);
  }
  &__icon {
    width: max(20px, 2.4rem);
    fill: #000;
    transition: fill 0.3s;
  }
  &__image {
    width: 100%;
    height: 100%;
    animation: slide-from-bottom-20 0.6s backwards 0.3s;
  }
  &__wrapper {
    grid-area: links;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > * {
      animation: slide-from-bottom-20 0.6s backwards;
      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          animation-delay: $i * 0.1s + 0.2s;
        }
      }
    }
    @media only screen and (max-width: $bp-lg) {
      gap: 16px;
    }
  }
  &__box {
    display: flex;
    flex-direction: column;
    gap: max(16px, 2.4rem);
    align-items: flex-start;
    grid-area: content;
    @media only screen and (min-width: $bp-xl) {
      & > *:first-child > * {
        max-width: 65%;
      }
    }
  }
  &__button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-inline: max(3rem, 30px);
    padding-block: max(1.5rem, 14px);
    border-radius: max(5.8rem, 58px);
    animation: slide-from-bottom-10 0.6s 0.2s backwards;
    &:hover {
      .icon-arrow {
        fill: $clr-dark-teal;
      }
    }
    .icon-arrow {
      fill: #fff;
    }
  }
}
</style>
