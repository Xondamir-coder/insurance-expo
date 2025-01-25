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
	title: `Expo Insurance ${currentYear} - Your Gateway to a Secure Future!`,
	meta: [
		{
			name: 'description',
			content: `Discover leading companies and innovative services at Expo Insurance ${currentYear}. This transformative event connects leaders in the insurance industry to explore trends, innovations, and solutions for a secure future.`
		},
		{
			name: 'keywords',
			content: `Expo Insurance, Insurance ${currentYear}, insurance event, fintech, insurance innovations, secure future, digital transformation`
		},
		{
			name: 'author',
			content: 'Spacelabs | https://spacelabs.studio'
		},
		{
			property: 'og:title',
			content: `Expo Insurance ${currentYear} - Your Gateway to a Secure Future!`
		},
		{
			property: 'og:description',
			content: `Join Expo Insurance ${currentYear} to discover groundbreaking trends and connect with top leaders from the insurance and fintech industries.`
		},
		// {
		// 	property: 'og:image',
		// 	content: 'https://insurexpo.uz/images/og-image.jpg' // Replace with the correct URL for the featured image
		// },
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
			content: `Expo Insurance ${currentYear} - Your Gateway to a Secure Future!`
		},
		{
			name: 'twitter:description',
			content: `Discover leading companies and innovative services at Expo Insurance ${currentYear}. Explore insurance trends, solutions, and innovations.`
		}
		// {
		// 	name: 'twitter:image',
		// 	content: 'https://insurexpo.uz/images/twitter-image.jpg' // Replace with the correct URL for the image
		// }
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
