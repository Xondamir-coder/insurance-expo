<template>
  <section class="section">
    <HomeContent
      class="section__content"
      :title="$t('home.section-3.content.title')"
      :label="$t('home.section-3.content.label')"
      :texts="[$t('home.section-3.content.text')]"
    />
    <div class="section__list">
      <div class="section__item">
        <div class="section__item-content">
          <h3 class="section__title">Promoting Innovation and Implementing New Technologies</h3>
          <p class="text-white-17">
            Our mission is to identify the latest technologies and innovations in the insurance
            sector and develop new solutions based on them.
          </p>
        </div>
        <MyPicture src="home-section-3.png" alt="security banner" class="section__image" />
      </div>
      <div class="section__item">
        <h4 class="title-charcoal-gray-20-16">
          Fostering Collaboration and Creating New Business Opportunities
        </h4>
        <p class="text-16">
          We strive to connect the leading companies and experts in the industry to foster
          collaboration and create new business opportunities
        </p>
      </div>
      <div class="section__item small-1">
        <h4 class="title-charcoal-gray-20-16">Advancing the Industry Through Knowledge Sharing</h4>
        <p class="text-16">
          Insurance Expo 2025 enables professionals to expand their knowledge and stay updated on
          industry trends through seminars and discussions
        </p>
      </div>
      <div class="section__item small-2">
        <h4 class="title-charcoal-gray-20-16">
          Developing the Insurance Industry for a Secure Future
        </h4>
        <p class="text-16">
          We aim to promote innovative solutions that ensure stability and sustainability within the
          insurance industry, shaping a secure future through Insurance Expo 2025
        </p>
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
  &__content {
  }
  &__title {
    text-transform: uppercase;
    font-weight: 800;
    font-size: max(16px, 2.4rem);
    line-height: 1.35;
  }
  &__item {
    border-radius: 20px;
    padding: max(14px, 3rem);
    overflow: hidden;
    color: #fff;
    background: #fafafa;
    border: 1px solid #e9eaec;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:nth-child(2) {
      grid-row: span 2;
    }
    &:first-child {
      grid-column: span 2;
      border-color: $clr-dark-teal;
      background: linear-gradient(90deg, #008b5e 0%, #08ad78 100%);
      display: grid;
      grid-template-columns: 1fr 300px;
      position: relative;
      @media only screen and (max-width: $bp-lg) {
        grid-template-columns: 1fr;
      }
      .section__item-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1.32fr;
    grid-auto-rows: 1fr 0.8fr 0.8fr;
    gap: max(16px, 2rem);
  }
  &__image {
    width: max(100px, 35rem);
    object-fit: cover;
    transform: translateY(25%);
    position: absolute;
    right: 0;
    bottom: 0;

    @media only screen and (max-width: $bp-lg) {
      width: 150px;
      left: 60%;
      top: 45%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
