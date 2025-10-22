<template>
  <Transition name="slide">
    <div v-if="isActive" class="cookie">
      <div class="cookie__content">
        <h2 class="cookie__title">{{ $t('cookie.title') }}</h2>
        <p>
          {{ $t('cookie.text') }}
        </p>
      </div>
      <div class="cookie__buttons">
        <button class="cookie__button cookie__button--reject" @click="acceptCookie('reject')">
          {{ $t('reject') }}
        </button>
        <button class="cookie__button cookie__button--accept" @click="acceptCookie('accept')">
          {{ $t('accept') }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isActive = ref(false);

const acceptCookie = approval => {
  localStorage.setItem('cookie', approval);
  isActive.value = false;
};

onMounted(() => {
  const cookie = localStorage.getItem('cookie');
  if (cookie) isActive.value = false;
  else isActive.value = true;
});
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.cookie {
  position: fixed;
  bottom: max(16px, 3rem);
  background: $clr-almost-white;
  box-shadow: 0px 114px 60px 20px #0000001a;
  border: 1px solid #e9eaec;
  margin-inline: $inline-spacing;
  z-index: 50;
  padding: max(16px, 3rem);
  border-radius: max(12px, 3rem);
  display: flex;
  justify-content: space-between;
  gap: max(16px, 3rem);
  @media screen and (max-width: $bp-md) {
    flex-direction: column;
  }
  p {
    font-size: max(1.6rem, 12px);
  }
  &__title {
    font-weight: bold;
    font-size: max(3.2rem, 17px);
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(12px, 1.6rem);
  }
  &__button {
    font-size: max(14px, 1.6rem);
    font-weight: 500;
    padding-block: max(11px, 1.6rem);
    padding-inline: max(47px, 5.1rem);
    border-radius: 42px;
    transition: color 0.3s, background-color 0.3s;
    @media screen and (max-width: $bp-sm) {
      flex: 1;
    }
    &--reject {
      background: #eaebed3d;
      border: 1px solid #eaebed;
      &:hover {
        background-color: $clr-charcoal-gray;
        color: $clr-light-white;
      }
    }
    &--accept {
      color: #ffffff;
      background-color: $clr-dark-teal;
      &:hover {
        background-color: #fff;
        color: $clr-dark-teal;
      }
    }
  }
  &__buttons {
    display: flex;
    gap: max(16px, 2rem);
    @media screen and (min-width: $bp-sm) {
      align-self: flex-end;
    }
  }
  h2 {
    text-transform: none;
  }
}
</style>
