<template>
	<div class="layout overflow-hidden" :style="layoutStyle">
		<Preloader :is-active="isPreloaderActive" @inactive="isPreloaderActive = false" />
		<Cookie />
		<Header />
		<slot />
		<Footer v-if="route.path !== '/'" />
	</div>
</template>

<script setup>
const route = useRoute();
const layoutStyle = computed(() => ({
	backgroundColor: route.path === '/' ? '#fff' : ''
}));
const isPreloaderActive = ref(true);
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	// min-height: 100vh;
	color: $clr-charcoal-gray;
	background-color: #f9f9fa;
}
</style>
