<template>
	<main class="about">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<AboutHero />
		<AboutProviders />
		<AboutTeam />
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

const currentYear = new Date().getFullYear(); // Get the current year dynamically

useHead({
	title: `About - Insurance Expo ${currentYear}`,
	titleTemplate: `%s`,
	meta: [
		{
			name: 'description',
			content: `Discover leading companies and innovative services at Insurance Expo ${currentYear}. This transformative event connects leaders in the insurance industry to explore trends, innovations, and solutions for a secure future.`
		},
		{
			name: 'keywords',
			content: `Insurance Expo, Insurance ${currentYear}, insurance event, fintech, insurance innovations, secure future, digital transformation`
		},
		{
			name: 'author',
			content: 'Spacelabs | https://spacelabs.studio'
		},
		{
			property: 'og:title',
			content: `Insurance Expo ${currentYear} - Your Gateway to a Secure Future!`
		},
		{
			property: 'og:description',
			content: `Join Insurance Expo ${currentYear} to discover groundbreaking trends and connect with top leaders from the insurance and fintech industries.`
		},
		{
			property: 'og:url',
			content: `https://insurexpo.uz/about` // Replace with the actual URL of the page
		},
		{
			property: 'og:type',
			content: 'website'
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image'
		},
		{
			name: 'twitter:title',
			content: `Insurance Expo ${currentYear} - Your Gateway to a Secure Future!`
		},
		{
			name: 'twitter:description',
			content: `Discover leading companies and innovative services at Insurance Expo ${currentYear}. Explore insurance trends, solutions, and innovations.`
		}
	],
	link: [
		{
			rel: 'canonical',
			href: `https://insurexpo.uz/about` // Replace with the actual canonical URL of the page
		}
	]
});
</script>

<style lang="scss" scoped>
.about {
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 4.1vw, 80px);
	overflow: hidden;
}
</style>
