<template>
  <Transition name="appear">
    <div v-if="showFormModal" class="form-modal__overlay" @click.self="showFormModal = false">
      <div class="form-modal">
        <div class="form-modal__header">
          <div class="form-modal__top">
            <h1 class="form-modal__title">{{ $t('form-modal.title') }}</h1>
            <button class="form-modal__button" @click="showFormModal = false">
              <IconsClose class="form-modal__icon" />
            </button>
          </div>
          <p>{{ $t('form-modal.subtitle') }}</p>
        </div>
        <AppForm class="form-modal__form" />
      </div>
    </div>
  </Transition>
</template>

<script setup>
const showFormModal = useState('showFormModal', () => false);
</script>

<style lang="scss" scoped>
.form-modal {
  max-width: max(66.8rem, 570px);
  border-radius: 2.4rem;
  background-color: #fff;
  padding: max(2.4rem, 16px);
  transition: opacity 0.5s, transform 0.5s;
  display: flex;
  flex-direction: column;
  gap: 25px;
  &__title {
    font-size: max(3.6rem, 20px);
  }
  &__form {
    & > *:last-child {
      flex-direction: column;
      align-items: stretch;
    }
  }
  &__header {
    display: flex;
    flex-direction: column;
    gap: max(1.5rem, 8px);
    p {
      opacity: 0.8;
    }
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__icon {
    width: 50%;
  }
  &__button {
    @include flex-center;
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
  &__overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.7);
    @include flex-center;

    @media screen and (max-width: $bp-sm) {
      align-items: stretch;
    }
  }
}
.appear-enter-active,
.appear-leave-active {
  transition: background-color 0.5s;
}
.appear-enter-from,
.appear-leave-to {
  background-color: rgba(0, 0, 0, 0);
  & > * {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
