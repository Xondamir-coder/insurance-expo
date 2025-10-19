<template>
  <Transition name="fade">
    <div
      v-if="showSuccessModal"
      class="success-modal-container"
      @click.self="showSuccessModal = false"
    >
      <div class="success-modal">
        <button class="success-modal__x" @click="showSuccessModal = false">
          <IconsClose class="success-modal__icon" />
        </button>
        <div class="success-modal__content">
          <IconsCheck class="success-modal__check" />
          <h2 class="success-modal__title">
            {{ $t('success-modal.title') }}
          </h2>
          <p class="success-modal__text">
            {{ $t('success-modal.subtitle') }}
          </p>
        </div>
        <button class="success-modal__button" @click="showSuccessModal = false">
          {{ $t('okay') }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const showSuccessModal = useState('showSuccessModal');
</script>

<style lang="scss" scoped>
.success-modal {
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 16px);
  background-color: #fff;
  border-radius: max(2.4rem, 14px);
  padding: max(3.2rem, 16px);
  max-width: max(34.5%, 328px);
  transition: transform 0.5s, opacity 0.5s;
  &__icon {
    width: 50%;
  }
  &__x {
    @include flex-center;
    align-self: flex-end;
    width: max(5rem, 42px);
    height: max(5rem, 42px);
    background: #fafafa;
    border: 1px solid #cbd5e0;
    border-radius: max(1.2rem, 8px);
    transition: background 0.3s;
    &:hover {
      background-color: #cbd5e0;
    }
  }
  &-container {
    position: fixed;
    z-index: 102;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000000, 0.7);
    @include flex-center;
  }
  &__button {
    font-size: max(1.7rem, 14px);
    padding-block: max(1.8rem, 11px);
    background-color: $clr-dark-teal;
    border-radius: max(1.2rem, 8px);
    min-width: max(60%, 200px);
    align-self: center;
    color: #fff;
    transition: all 0.4s;
    &:hover {
      background-color: $clr-medium-beige;
    }
  }
  &__title {
    font-size: max(3.6rem, 18px);
    line-height: 1.35;
  }
  &__text {
    line-height: 1.45;
    font-size: max(1.6rem, 14px);
    opacity: 0.8;
  }
  &__check {
    width: max(8rem, 56px);
  }
  &__close {
    align-self: flex-end;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 16px);
    align-items: center;
    text-align: center;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: background 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  background-color: transparent;
}
.fade-enter-from > *,
.fade-leave-to > * {
  transform: translateY(20px);
  opacity: 0;
}
</style>
