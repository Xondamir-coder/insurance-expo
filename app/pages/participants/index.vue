<template>
  <LayoutBreadcrumbs :breadcrumbs>
    <section class="hero">
      <UiPicture src="participants-hero-big.png" alt="people" class="hero__image" />
      <UiPicture src="participants-hero-small.png" alt="people" class="hero__image" />
      <UiPageHeader
        :title="$t('participants.title')"
        :subtitle="$t('participants.subtitle')"
        class="hero__content"
      />
    </section>
    <section class="content">
      <ul class="content__list">
        <li
          v-for="(participant, index) in participants?.data"
          :key="index"
          class="content__list-item"
        >
          <UiParticipantsCard :participant />
        </li>
      </ul>
      <UiPagination
        class="content__pagination"
        :pages-count="participants.last_page"
        @change-page="changePage"
      />
    </section>
  </LayoutBreadcrumbs>
</template>

<script setup>
const { t } = useI18n();
const apiStore = useApiStore();
const { participants } = storeToRefs(apiStore);
const { fetchParticipants } = apiStore;
const route = useRoute();

const changePage = () => fetchParticipants(+route.query.page);

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/participants',
    label: t('nav.participants')
  }
]);

useGSAPAnimate({
  selector: '.hero__image',
  base: { scale: 0.95 }
});
useGSAPAnimate({
  selector: '.content__list-item',
  base: { y: 20 }
});

usePageSEO('participants');
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: max(3.2rem, 12px);
  &__pagination {
    align-self: center;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 12px);
  }
}
.hero {
  position: relative;
  aspect-ratio: 1780/680;
  display: flex;
  justify-content: center;
  @media screen and (max-width: $bp-md) {
    aspect-ratio: initial;
    flex-direction: column;
    justify-content: stretch;
    gap: 20px;
  }
  &__content {
    align-self: flex-end;
    margin-bottom: 6rem;
    z-index: 2;
    @media screen and (max-width: $bp-md) {
      margin-bottom: 0;
    }
    & > * {
      @media screen and (min-width: $bp-md) {
        color: #fff;
      }
    }
  }
  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    @media screen and (max-width: $bp-md) {
      position: static;
      order: 1;
      z-index: initial;
      border-radius: 16px;
    }
    &:first-of-type {
      @media screen and (max-width: $bp-md) {
        display: none;
      }
    }
    &:last-of-type {
      @media screen and (min-width: $bp-md) {
        display: none;
      }
    }
  }
}
</style>
