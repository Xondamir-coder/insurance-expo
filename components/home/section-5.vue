<template>
	<section class="section">
		<HomeContent
			class="section__content"
			title="United for the Advancement of the Insurance Industry"
			label="Partners & Sponsors"
			:texts="[
				'Expo Insurance 2025 is proudly supported by leading partners and trusted sponsors. Their contributions play a vital role in showcasing the latest innovations and creating new opportunities in the insurance industry. Together, we are driving progress and success. Join us and become a part of this transformative platform!'
			]" />
		<div class="section__list">
			<div class="section__item" v-for="bank in banks" :key="bank">
				<component :is="bank" class="section__bank" />
			</div>
		</div>
	</section>
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

const banks = [
	BanksAgro,
	BanksAsaka,
	BanksDavr,
	BanksHamkor,
	BanksIpak,
	BanksKapital,
	BanksMarkaziy,
	BanksQqb,
	BanksSqb,
	BanksTbc,
	BanksTrast,
	BanksAgro
];
</script>

<style lang="scss" scoped>
.section {
	display: grid;
	grid-template-columns: 1fr 1.41fr;
	align-items: flex-start;
	row-gap: clamp(16px, 1.5vw, 20px);
	column-gap: clamp(20px, 2vw, 32px);
	@media only screen and (max-width: $bp-lg) {
		grid-template-columns: 1fr;
		align-self: flex-start;
	}
	&:not(.active) {
		.section__content {
			transform: translateX(-100px);
			opacity: 0;
		}
		.section__item {
			transform: scale(0);
			opacity: 0;
		}
	}

	&__item {
		background: #f8f8f8;
		border: 1px solid #2c3a471a;
		border-radius: 20px;
		aspect-ratio: 1;
		transition-property: opacity, transform;
		transition-duration: var(--section-transition-duration);
		transition-delay: var(--section-transition-delay);
		@include flex-center;
		@for $index from 1 through 30 {
			&:nth-child(#{$index}) {
				transition-delay: calc(0.1s * #{$index} + var(--section-transition-delay));
			}
		}
	}
	&__bank {
		width: 80%;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(11vw, 1fr));
		gap: clamp(10px, 1.6vw, 23px);

		@media only screen and (min-width: 1600px) {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}
		@media only screen and (max-width: $bp-lg) {
			@include grid-scroll(239px);
		}
	}
}
</style>
