<template>
  <Transition name="slide">
    <div v-if="isActive" class="cookie">
      <div class="cookie__content">
        <h2 class="title-charcoal-gray-32">Cookies advice</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They are
          widely used to enhance user experience by remembering your preferences, enabling
          functionalities, and providing insights into website performance.
        </p>
      </div>
      <div class="cookie__buttons">
        <button class="cookie__button cookie__button--reject" @click="acceptCookie('reject')">
          Reject
        </button>
        <button class="cookie__button cookie__button--accept" @click="acceptCookie('accept')">
          Accept
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
  bottom: clamp(16px, 1.6vw, 30px);
  background: $clr-almost-white;
  box-shadow: 0px 114px 60px 20px #0000001a;
  border: 1px solid #e9eaec;
  margin-inline: $inline-spacing;
  z-index: 10;
  padding: clamp(16px, 1.6vw, 30px);
  border-radius: clamp(12px, 1.6vw, 30px);
  display: flex;
  justify-content: space-between;
  gap: clamp(16px, 1.7vw, 30px);
  &__content {
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 0.9vw, 16px);
  }
  &__button {
    font-size: clamp(14px, 0.9vw, 16px);
    font-weight: 500;
    padding-block: clamp(11px, 0.9vw, 16.5px);
    padding-inline: clamp(47px, 2.7vw, 51px);
    border-radius: 42px;
    transition: color 0.3s, background-color 0.3s;
    &--reject {
      background: $clr-light-white;
      border: 1px solid #f1f2f4;
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
    align-self: flex-end;
    display: flex;
    gap: clamp(16px, 1.1vw, 20px);
  }
  h2 {
    text-transform: none;
  }
}
</style>
