<template>
  <div class="info-card">
    <h2 class="info-card__label">{{ data.title }}</h2>
    <ul class="info-card__list">
      <li v-for="(item, index) in data.content" :key="index">
        <span v-if="typeof item === 'string'" class="info-card__item">{{ item }}</span>
        <div v-if="typeof item === 'object'" class="info-card__item">
          <div class="info-card__item-box">
            <component :is="item.icon" class="info-card__item-icon" />
          </div>
          <a class="text-medium fill-dark-slate-blue" :href="item.href">
            {{ item.label }}
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  data: {
    required: true,
    type: Object
  }
});
</script>

<style scoped lang="scss">
.info-card {
  padding: max(3.2rem, 16px);
  border-radius: max(2.4rem, 16px);
  display: flex;
  flex-direction: column;
  gap: max(2.4rem, 16px);
  color: $clr-dark-slate-blue;
  font-size: max(2rem, 14px);
  font-weight: 500;
  background: #eaebed4d;
  border: 1px solid #eaebed;
  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    a {
      transition: color 0.3s;
    }
    a:hover {
      color: $clr-bright-teal-alt;
    }
    &-box {
      @include flex-center;
      background-color: $clr-dark-teal;
      width: max(4.4rem, 36px);
      height: max(4.4rem, 36px);
      border-radius: max(1.2rem, 8px);
      fill: #fff;
    }
    &-icon {
      width: 54.5454%;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 12px);
    &:has(span) {
      list-style-type: disc;
      padding-left: max(1.6rem, 10px);
    }
  }
  &__label {
    color: $clr-dark-charcoal;
    font-weight: bold;
    font-size: max(2.8rem, 18px);
  }
  &:last-child {
    flex: 1;
    .info__list {
      list-style: disc;
      margin-left: 20px;
    }
  }
}
</style>
