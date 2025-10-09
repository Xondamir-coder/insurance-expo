<template>
	<main class="news" id="news">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<div class="news__top">
			<h1 class="title-42">News and Announcements</h1>
			<div class="news__buttons">
				<button
					class="news__button"
					v-for="type in types"
					:key="type.type"
					:class="{ active: type.type === currentType }"
					@click="changeType(type.type)">
					{{ type.label }}
				</button>
			</div>
		</div>
		<div class="news__list">
			<Card v-for="card in cards" :data="card" />
		</div>
		<Pagination
			id="news-pagination"
			class="align-self-center"
			:pages-count="12"
			:current-page="currentPage"
			@change-page="changePage" />
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
		to: '/news',
		label: 'News'
	}
];
const types = [
	{
		type: 'news',
		label: 'News'
	},
	{
		type: 'articles',
		label: 'Articles'
	},
	{
		type: 'industry insights',
		label: 'Industry Insights'
	},
	{
		type: 'breaking news',
		label: 'Breaking News'
	},
	{
		type: 'key milestones',
		label: 'Key Milestones'
	}
];
const card = {
	title: 'Insurance Expo 2025: A Space for New Opportunities',
	text: 'Discover leading companies and innovative services at the international insurance exhibition. Explore the latest updates and opportunities in the insurance industry all in one place. Insurance Expo 2025 ',
	date: '12-16 March 03:36',
	img
};
const cards = Array(12).fill(card);

const currentType = ref(types[0].type);
const currentPage = ref(1);

const changeType = type => (currentType.value = type);
const changePage = page => (currentPage.value = page);

const currentYear = new Date().getFullYear();

useHead({
	title: `News - Insurance Expo ${currentYear}`,
	titleTemplate: `%s`,
	meta: [
		{
			name: 'description',
			content: `Stay updated with the latest news and announcements from Insurance Expo ${currentYear}. Explore innovative services and updates in the insurance industry.`
		},
		{ property: 'og:title', content: `News - Insurance Expo ${currentYear}` },
		{
			property: 'og:description',
			content: `Stay updated with the latest news and announcements from Insurance Expo ${currentYear}. Explore innovative services and updates in the insurance industry.`
		},
		{ property: 'og:url', content: 'https://insurexpo.uz/news' },
		{ property: 'og:type', content: 'website' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: `News - Insurance Expo ${currentYear}` },
		{
			name: 'twitter:description',
			content: `Stay updated with the latest news and announcements from Insurance Expo ${currentYear}. Explore innovative services and updates in the insurance industry.`
		}
	],
	link: [{ rel: 'canonical', href: 'https://insurexpo.uz/news' }]
});
</script>

<style lang="scss" scoped>
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
@keyframes slide-from-bottom {
	from {
		transform: translateY(50px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
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
.news {
	display: flex;
	flex-direction: column;
	gap: 30px;
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
		gap: clamp(16px, 1.6vw, 30px);
		& > * {
			animation: slide-from-top 0.5s backwards;
			@for $i from 1 through 12 {
				&:nth-child(#{$i}) {
					animation-delay: $i * 0.1s + 0.3s;
				}
			}
		}
	}
	&__buttons {
		display: flex;
		gap: clamp(12px, 1.1vw, 20px);
		@include flex-scroll;
	}
	&__button {
		text-wrap: nowrap;
		padding-inline: 20px;
		padding-block: 11px;
		font-size: 17;
		font-weight: 500;
		background: #eaebed40;
		border: 1px solid #eaebed;
		border-radius: 61px;
		transition: background-color 0.3s, color 0.3s, border-color 0.3s;
		animation: slide-from-bottom 0.4s backwards;
		@for $i from 1 through 5 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.1s;
			}
		}
		&:not(.active):hover {
			color: $clr-dark-teal;
			border-color: $clr-dark-teal;
		}
		&.active {
			background-color: $clr-dark-teal;
			color: #fafafa;
			border-color: $clr-dark-teal;
		}
	}
	&__top {
		display: flex;
		flex-direction: column;
		gap: 20px;
		text-align: center;
		h1 {
			animation: slide-from-left 0.7s;
		}
		@media only screen and (min-width: $bp-xl) {
			align-self: center;
			max-width: 57%;
		}
	}
}
</style>
