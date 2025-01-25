<template>
	<main class="events">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<SectionTop
			title="Events"
			text="Uniting the Insurance Industry to Build a Secure and Sustainable Future" />
		<div class="events__list">
			<Card v-for="card in cards" :data="card" />
		</div>
	</main>
</template>

<script setup>
import img from '~/assets/images/home-section-4.jpg';
const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/events',
		label: 'Events'
	}
];
const card = {
	title: 'Expo Insurance 2025: A Space for New Opportunities',
	text: 'Discover leading companies and innovative services at the international insurance exhibition. Explore the latest updates and opportunities in the insurance industry all in one place. Expo Insurance 2025 ',
	date: '12-16 March 03:36',
	img
};
const cards = Array(12).fill(card);

const currentYear = new Date().getFullYear();

useHead({
	title: `Events - Expo Insurance ${currentYear}`,
	meta: [
		{
			name: 'description',
			content:
				'Join Expo Insurance events to connect with industry leaders, discover innovations, and shape the future of the insurance industry.'
		},
		{ property: 'og:title', content: `Events - Expo Insurance ${currentYear}` },
		{
			property: 'og:description',
			content:
				'Join Expo Insurance events to connect with industry leaders, discover innovations, and shape the future of the insurance industry.'
		},
		{ property: 'og:url', content: 'https://insurexpo.uz/events' },
		{ property: 'og:type', content: 'website' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: `Events - Expo Insurance ${currentYear}` },
		{
			name: 'twitter:description',
			content:
				'Join Expo Insurance events to connect with industry leaders, discover innovations, and shape the future of the insurance industry.'
		}
	],
	link: [{ rel: 'canonical', href: 'https://insurexpo.uz/events' }]
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-top {
	from {
		transform: translateY(-50px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
.events {
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 3.1vw, 60px);
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
		gap: clamp(16px, 1.6vw, 30px);
		& > * {
			animation: slide-from-top 0.5s backwards;
			@for $i from 1 through 12 {
				&:nth-child(#{$i}) {
					animation-delay: $i * 0.1s + 0.15s;
				}
			}
		}
	}
}
</style>
