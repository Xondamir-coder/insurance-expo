<template>
  <footer v-if="!$route.name.includes('index')" id="footer" class="footer">
    <SvgLogo class="footer__logo" />
    <div class="footer__middle">
      <div class="footer__middle-cta">
        <h2 class="footer__title">Discover the future of banking technology in one place!</h2>
        <button to="/contact" class="footer__button">
          Get started
          <IconsCircleNoArrow class="footer__arrow" />
        </button>
      </div>
      <div class="footer__cols">
        <div v-for="item in allLinks" :key="item.label" class="footer__col">
          <h4 class="footer__col-label">{{ item.label }}</h4>
          <div class="footer__links">
            <NuxtLink
              v-for="link in item.links"
              :key="link.to"
              :to="$localePath(link.to)"
              class="footer__link"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
        <div class="footer__col">
          <h4 class="footer__col-label">Contacts</h4>
          <div class="footer__contacts">
            <a class="footer__contact" href="mailto:Example@gmail.com">
              <IconsMail class="footer__icon" />
              Example@gmail.com
            </a>
            <a class="footer__contact" href="tel:+777 123 88 71">
              <IconsTel class="footer__icon" />
              +777 123 88 71
            </a>
          </div>
          <div class="footer__social">
            <a class="footer__social-item" href="#" target="_blank" rel="noopener noreferrer">
              <IconsInsta class="footer__social-icon" />
            </a>
            <a class="footer__social-item" href="#" target="_blank" rel="noopener noreferrer">
              <IconsTelegram class="footer__social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copyright">
        &copy; {{ new Date().getFullYear() }} Expo - All rights reserved
      </p>
      <div class="footer__bottom-links">
        <NuxtLink to="/terms-of-service" class="footer__bottom-link">
          <span>Terms of service</span>
        </NuxtLink>
        <NuxtLink to="/privacy-policy" class="footer__bottom-link">
          <span>Privacy policy</span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { allLinks } = useLinks();

onMounted(() => {
  GSAPanimation('.footer', {
    animProps: { y: 100 },
    scrollTriggerOptions: { end: '20% bottom' }
  });
});
</script>

<style lang="scss" scoped>
@mixin button-style {
  background-color: $clr-dark-teal;
  font-weight: 400;
  border-radius: 40px;
  padding-block: 14px;
  padding-inline: 24px;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #fff;
    color: $clr-dark-teal;
    svg {
      fill: $clr-dark-teal;
    }
  }
}
.footer {
  background-color: $clr-deep-slate;
  z-index: 3;
  padding-block: max(16px, 3rem);
  display: flex;
  position: relative;
  flex-direction: column;
  gap: max(16px, 3rem);
  color: #ffffff;
  padding-inline: $padding-inline;
  &__arrow {
    width: max(20px, 2.4rem);
  }
  &__title {
    line-height: 1.34;
    font-size: max(20px, 2.6rem);
    font-weight: 700;
    text-transform: uppercase;
    @media only screen and (min-width: $bp-md) {
      max-width: 23ch;
    }
    @media only screen and (max-width: $bp-md) {
      line-height: 1.5;
    }
  }
  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__contact {
    display: grid;
    grid-template-columns: max(20px, 2.4rem) 1fr;
    align-items: center;
    gap: 8px;
    transition: color 0.3s;
    svg {
      transition: fill 0.3s;
      fill: #fff;
    }
    &:hover {
      color: $clr-dark-teal;
      svg {
        fill: $clr-dark-teal;
      }
    }
  }
  &__button {
    @include button-style();
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 17px;

    svg {
      transition: fill 0.3s;
      fill: #fff;
    }
  }
  &__links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  &__link {
    transition: color 0.2s;
    &:hover {
      color: $clr-dark-teal;
    }
  }
  &__col {
    opacity: 0.8;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    &-label {
      font-weight: 700;
    }
  }
  &__cols {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media only screen and (max-width: $bp-lg) {
      column-gap: 16px;
      row-gap: 20px;
      justify-content: space-between;
      padding-right: 10px;
    }
  }
  &__copyright {
    opacity: 0.8;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    flex-wrap: wrap;
    gap: 10px;
    @media only screen and (max-width: $bp-sm) {
      justify-content: center;
      & > *:last-child {
        order: -1;
      }
    }
    &-links {
      display: flex;
    }
    &-link {
      padding-inline: 12px;
      position: relative;
      transition: color 0.3s;
      &:first-child::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -2px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #fff;
      }
      &:hover {
        color: $clr-dark-teal;
      }
    }
  }
  &__middle {
    padding-bottom: max(16px, 6rem);
    border-bottom: 1px solid #ffffff1f;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 12.4rem;
    @media only screen and (max-width: 1200px) {
      gap: max(3rem, 30px);
      grid-template-columns: 1fr;
    }
    &-cta {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: max(16px, 3rem);

      @media only screen and (max-width: $bp-md) {
        gap: 16px;
      }
    }
  }
  &__social {
    margin-top: 10px;
    display: flex;
    gap: 12px;
    &-item {
      width: max(42px, 4.8rem);
      aspect-ratio: 1;
      border: 1px solid #ffffff1f;
      backdrop-filter: blur(12px);
      border-radius: 10px;
      transition: background-color 0.3s;
      @include flex-center;
      &:hover {
        background-color: #fff;
        svg {
          fill: $clr-dark-teal;
        }
      }
    }
    &-icon {
      fill: #fff;
      width: max(20px, 2.4rem);
      height: max(20px, 2.4rem);
      transition: transform 0.3s, fill 0.3s;
    }
  }
  &__divider {
    width: 1px;
    background-color: #ffffff;
    opacity: 0.12;
    align-self: stretch;
    transform: scaleY(0.5);
    margin-inline: -20px;
    @media only screen and (max-width: $bp-lg) {
      display: none;
    }
  }
  &__logo {
    width: 195px;
    @media only screen and (max-width: $bp-md) {
      margin-inline: auto;
    }
  }
}
</style>
