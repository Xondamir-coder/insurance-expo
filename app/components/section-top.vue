<template>
	<div class="top">
		<h2 class="title-42" v-if="isSecond">{{ title }}</h2>
		<h1 class="title-42" v-else>{{ title }}</h1>
		<p class="text-20">
			{{ text }}
		</p>
	</div>
</template>

<script setup>
defineProps({
	text: String,
	title: String,
	isSecond: Boolean
});
</script>

<style scoped lang="scss">
@keyframes slide-from-left {
	from {
		transform: translateX(-50px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-from-right {
	from {
		transform: translateX(50px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
.top {
	align-self: center;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: clamp(10px, 1vw, 20px);
	@media only screen and (min-width: $bp-xl) {
		max-width: 57%;
	}
	&:not([data-stationary]) {
		.title-42 {
			animation: slide-from-left 0.6s backwards;
		}
		p {
			animation: slide-from-right 0.6s backwards;
		}
	}
}
</style>
