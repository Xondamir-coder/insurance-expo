<template>
	<main class="partners">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<div class="partners__wrapper">
			<SectionTop
				title="Partners & Sponsors"
				text="At Expo Insurance 2025, we are proud to collaborate with industry leaders and innovators who share our vision of advancing the insurance sector." />
			<div class="partners__list">
				<div class="partners__item" v-for="(bank, i) in banks" :key="i">
					<component :is="bank" class="partners__bank" />
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import BanksAgro from '~/components/banks/agro.vue';
import BanksAsaka from '~/components/banks/asaka.vue';
import BanksDavr from '~/components/banks/davr.vue';
import BanksHamkor from '~/components/banks/hamkor.vue';
import BanksIpak from '~/components/banks/ipak.vue';
import BanksKapital from '~/components/banks/kapital.vue';
import BanksMarkaziy from '~/components/banks/markaziy.vue';
import BanksQqb from '~/components/banks/qqb.vue';
import BanksSqb from '~/components/banks/sqb.vue';
import BanksTbc from '~/components/banks/tbc.vue';
import BanksTrast from '~/components/banks/trast.vue';
import BanksVisa from '~/components/banks/visa.vue';
import BanksMastercard from '~/components/banks/mastercard.vue';

const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/partners-sponsors',
		label: 'Partners & Sponsors'
	}
];
const banks = [
	BanksAgro,
	BanksAsaka,
	BanksDavr,
	BanksHamkor,
	BanksIpak,
	BanksKapital,
	BanksVisa,
	BanksMarkaziy,
	BanksQqb,
	BanksSqb,
	BanksTbc,
	BanksTrast,
	BanksMastercard,
	BanksAgro,
	BanksAsaka,
	BanksDavr,
	BanksHamkor,
	BanksIpak,
	BanksKapital,
	BanksVisa
];

const currentYear = new Date().getFullYear();

useHead({
	title: `Partners & Sponsors - Expo Insurance ${currentYear}`,
	meta: [
		{
			name: 'description',
			content:
				'Explore the partners and sponsors of Expo Insurance 2025. Collaborating with industry leaders and innovators to advance the insurance sector.'
		},
		{ property: 'og:title', content: `Partners & Sponsors - Expo Insurance ${currentYear}` },
		{
			property: 'og:description',
			content:
				'Explore the partners and sponsors of Expo Insurance 2025. Collaborating with industry leaders and innovators to advance the insurance sector.'
		},
		{ property: 'og:url', content: 'https://insurexpo.uz/partners-sponsors' },
		{ property: 'og:type', content: 'website' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: `Partners & Sponsors - Expo Insurance ${currentYear}` },
		{
			name: 'twitter:description',
			content:
				'Explore the partners and sponsors of Expo Insurance 2025. Collaborating with industry leaders and innovators to advance the insurance sector.'
		}
	],
	link: [{ rel: 'canonical', href: 'https://insurexpo.uz/partners-sponsors' }]
});
</script>

<style lang="scss" scoped>
@keyframes scale-up {
	from {
		opacity: 0;
		transform: scale(0);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
.partners {
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 3.2vw, 60px);
	&__list {
		display: grid;
		gap: clamp(8px, 1.7vw, 32px);
		grid-template-columns: repeat(auto-fill, minmax(clamp(160px, 13.5vw, 270px), 1fr));
	}
	&__item {
		background: #ffffff;
		border: 1px solid #2c3a471a;
		aspect-ratio: 1;
		border-radius: clamp(16px, 1.2vw, 20px);
		animation: scale-up 0.7s backwards;
		@include flex-center;
		@for $i from 1 through 20 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.1s;
			}
		}
	}
	&__bank {
		width: 55.5%;
		min-width: 120px;
	}
	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
}
</style>
