<template>
	<main class="providers" id="insurance-providers">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<SectionTop
			title="Meet Our Trusted Insurance Providers"
			text="Expo Insurance 2025 is proud to showcase a diverse range of leading insurance providers from around the globe. Discover innovative solutions tailored to your personal and business needs" />
		<div class="providers__wrapper">
			<div class="providers__list">
				<ProvidersBank v-for="(bank, i) in banks" :bank :key="i" />
			</div>
			<Pagination
				:pages-count="12"
				:current-page="currentPage"
				@change-page="changePage"
				id="providers-pagination" />
		</div>
	</main>
</template>

<script setup>
const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/insurance-providers',
		label: 'Insurance Providers'
	}
];
const bank = {
	name: 'Kapital sug’urta',
	branchNetwork: '200+',
	experience: '20+',
	specify: 'Life insurance'
};
const banks = Array(12).fill(bank);

const currentPage = ref(1);
const changePage = newPage => {
	currentPage.value = newPage;
	console.log('getting new banks ...');
};

onMounted(() => {
	const parentId = '#insurance-providers';

	if (window.innerWidth < 768) {
		document.querySelectorAll(`${parentId} .bank`).forEach((item, i) => {
			GSAPanimation(item, {
				method: 'to',
				animProps: { y: 0, opacity: 1 }
			});
		});
	} else {
		GSAPanimation(`${parentId} .bank`, {
			animProps: { scale: 1, opacity: 1, stagger: 0.1 },
			scrollTriggerOptions: { scrub: false },
			method: 'to'
		});
	}
});

const currentYear = new Date().getFullYear();

useHead({
	title: `Trusted Insurance Providers - Expo Insurance ${currentYear}`,
	meta: [
		{
			name: 'description',
			content: `Discover leading insurance companies and innovative services at Expo Insurance ${currentYear}. Explore trusted providers with 20+ years of experience and 200+ branch networks tailored to your needs.`
		},
		{
			name: 'keywords',
			content: `insurance providers, trusted insurance companies, Expo Insurance ${currentYear}, life insurance, branch network, financial services, insurance solutions`
		},
		{
			name: 'author',
			content: 'Expo Insurance Team'
		},
		{
			property: 'og:title',
			content: `Trusted Insurance Providers - Expo Insurance ${currentYear}`
		},
		{
			property: 'og:description',
			content: `Discover trusted insurance providers at Expo Insurance ${currentYear}, offering 20+ years of experience and tailored solutions for individuals and businesses.`
		},
		{
			property: 'og:url',
			content: 'https://insurexpo.uz/insurance-providers'
		},
		{
			property: 'og:type',
			content: 'website'
		},
		{
			name: 'twitter:card',
			content: 'summary'
		},
		{
			name: 'twitter:title',
			content: `Trusted Insurance Providers - Expo Insurance ${currentYear}`
		},
		{
			name: 'twitter:description',
			content: `Explore trusted insurance companies and innovative services at Expo Insurance ${currentYear}. Tailored solutions for all your needs.`
		}
	],
	link: [
		{
			rel: 'canonical',
			href: 'https://insurexpo.uz/insurance-providers'
		}
	]
});
</script>

<style lang="scss" scoped>
.providers {
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 3.1vw, 60px);
	&__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(16px, 1.6vw, 30px);
	}
	&__list {
		align-self: stretch;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(clamp(328px, 25vw, 450px), 1fr));
		column-gap: clamp(20px, 1.8vw, 32px);
		row-gap: clamp(16px, 1.6vw, 30px);
	}
}
</style>
