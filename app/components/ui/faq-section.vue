<template>
  <section class="faq">
    <h2 class="faq__title">{{ $t('faq.title') }}</h2>
    <ul class="faq__list">
      <li v-for="(faq, index) in $tm('faq.items')" :key="index">
        <button class="faq__item" :class="{ active: index === activeFaq }" @click="toggle(index)">
          <div class="faq__item-top">
            <h4 class="faq__item-title">{{ $rt(faq.question) }}</h4>
            <IconsChevronDown class="faq__item-icon" />
          </div>

          <!-- animated wrapper -->
          <div
            ref="answers"
            class="faq__item-answer"
            :style="{ height: activeFaq === index ? heights[index] + 'px' : 0 }"
          >
            <p class="faq__item-text">{{ $rt(faq.answer) }}</p>
          </div>
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup>
const activeFaq = ref(null);
const answers = ref([]);
const heights = ref([]);

onMounted(() => {
  heights.value = answers.value.map(el => el.scrollHeight);
});

const toggle = index => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

useGSAPAnimate({
  selector: '.faq__list li',
  base: { filter: 'blur(5px)', scale: 1.05 }
});
</script>

<style lang="scss" scoped>
.faq {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 12px);
  color: #323b49;
  &__title {
    font-size: max(4.2rem, 20px);
    font-weight: bold;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 8px);
    li {
      display: flex;
    }
  }

  &__item {
    flex: 1;
    padding: max(2rem, 16px);
    border: 1px solid #0000001f;
    background: #f8f8f8;
    border-radius: max(1.2rem, 12px);
    display: flex;
    flex-direction: column;
    transition: all 0.5s;
    &:hover {
      background-color: #0000001f;
    }
    &.active {
      .faq__item-answer {
        margin-top: max(1.2rem, 8px);
      }
      .faq__item-icon {
        transform: rotate(540deg);
      }
    }

    &-title {
      font-size: max(2rem, 14px);
      font-weight: 700;
    }

    &-text {
      font-size: max(1.6rem, 12px);
    }

    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-icon {
      width: max(2.4rem, 20px);
      fill: #111827;
      transition: transform 0.6s ease;
    }

    &-answer {
      align-self: flex-start;
      margin-top: 0;
      overflow: hidden;
      transition: height 0.6s, margin 0.6s;
    }
  }
}
</style>
