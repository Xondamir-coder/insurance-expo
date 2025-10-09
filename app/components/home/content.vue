<template>
	<div class="content">
		<HomeLabel :title="title" :label="label" />
		<p class="text-16 content__text" v-for="text in texts" :key="text">
			{{ text }}
		</p>
	</div>
</template>

<script setup>
defineProps({
	label: String,
	title: String,
	texts: Array
});
</script>

<style scoped lang="scss">
@keyframes slide-from-left {
	from {
		transform: translateX(-20px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
.content {
	@include flex-gap(clamp(16px, 1.5vw, 20px));
	padding-right: clamp(14px, 1.9vw, 36px);
	transition-property: transform, opacity;
	transition-duration: var(--section-transition-duration);
	transition-delay: var(--section-transition-delay);

	&__text {
		animation: slide-from-left 0.3s 0.3s backwards;

		@media only screen and (min-width: $bp-lg) {
			max-width: 80%;
		}
	}
}
</style>
