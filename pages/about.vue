<template>
	<main class="about">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<AboutHero />
	</main>
</template>

<script setup>
const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/about',
		label: 'About'
	}
];
</script>

<style lang="scss" scoped>
.about {
	margin-top: 0.7vw;
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 1.7vw, 30px);
}
</style>
