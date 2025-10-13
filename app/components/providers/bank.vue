<template>
  <div class="bank">
    <div class="bank__top">
      <div class="bank__icon">
        <MyPicture src="bank.png" alt="bank" class="bank__image" />
      </div>
      <div class="bank__top-content">
        <p class="text-16">Kompaniya nomi</p>
        <h3 class="title-20-16">{{ bank.name }}</h3>
      </div>
    </div>
    <div class="bank__list">
      <div class="bank__item">
        <div class="bank__label-container">
          <IconsFlag class="icon fill-dark-teal" />
          <h4 class="bank__label">Year of experience:</h4>
        </div>
        <ProvidersDots class="bank__dots" />
        <h4 class="bank__label">{{ bank.experience }}</h4>
      </div>
      <div class="bank__item">
        <div class="bank__label-container">
          <IconsBuilding class="icon fill-dark-teal" />
          <h4 class="bank__label">Branch Network</h4>
        </div>
        <ProvidersDots class="bank__dots" />
        <h4 class="bank__label">{{ bank.branchNetwork }}</h4>
      </div>
      <div class="bank__item">
        <div class="bank__label-container">
          <IconsDirection class="icon fill-dark-teal" />
          <h4 class="bank__label">Specify</h4>
        </div>
        <ProvidersDots class="bank__dots" />
        <h4 class="bank__label">{{ bank.specify }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bank: Object
});
</script>

<style lang="scss" scoped>
@keyframes scale-up {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.bank {
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 1.3vw, 24px);
  background: #ffffff;
  border-radius: 16px;
  padding: clamp(16px, 1.1vw, 20px);
  border-bottom: 4px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s;
  @media only screen and (min-width: $bp-md) {
    animation: scale-up 0.5s backwards;
    @for $index from 1 through 20 {
      &:nth-child(#{$index}) {
        animation-delay: 0.1s * $index;
      }
    }
  }
  @media only screen and (max-width: $bp-md) {
    transform: translateY(50px);
  }
  &:hover {
    border-bottom: 4px solid $clr-dark-teal;
    box-shadow: 0px 114px 60px 20px #0000001a;
  }
  &__label {
    font-size: clamp(14px, 0.9vw, 17px);
    font-weight: 500;
    &-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  &__item {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
    gap: 12px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 1.3vw, 24px);
  }
  &__top {
    align-items: center;
    display: flex;
    gap: 22px;
    &-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
}
</style>
