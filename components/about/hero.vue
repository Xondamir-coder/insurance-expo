<template>
	<section class="hero">
		<div class="hero__top">
			<SectionLabel label="Discover leading companies and innovative services at" />
			<h1 class="title-48">Insurance Expo 2025 is your gateway to a secure future!</h1>
		</div>
		<swiper-container :init="false" ref="listRef" class="hero__slider">
			<swiper-slide v-for="image in images" :key="image" class="hero__slide">
				<img :src="image" alt="banner" class="hero__image" />
			</swiper-slide>
		</swiper-container>
		<div class="text-20 hero__texts">
			<p>
				The Insurance Expo 2025 is not just an event—it’s a transformative experience that
				connects people, ideas, and innovations to redefine the future of the insurance
				industry. This global platform brings together leaders from the insurance sector,
				emerging fintech innovators, and everyday individuals who are eager to learn how
				insurance can provide them with stability and peace of mind in an ever-changing
				world.
			</p>
			<p>
				The insurance industry is undergoing rapid evolution, driven by digital
				transformation, emerging risks, and changing consumer needs. Insurance Expo 2025 is
				designed to address these shifts, offering a space where knowledge meets innovation.
				It serves as the ultimate destination for discovering new trends, exploring
				groundbreaking products, and building connections with key players in the insurance
				ecosystem.
			</p>
		</div>
	</section>
</template>

<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '~/assets/images/cap-boy.jpg';
const images = Array(10).fill(img);

const listRef = ref();
useSwiper(listRef, {
	grabCursor: true,
	slidesPerView: 'auto',
	breakpoints: {
		0: {
			spaceBetween: 10
		},
		425: {
			spaceBetween: 20
		},
		768: {
			spaceBetween: 30
		}
	}
});

setTimeout(() => {
	ScrollTrigger.refresh();
}, 50);
</script>

<style scoped lang="scss">
@keyframes slide-from-left {
	from {
		transform: translateX(-100px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-from-right {
	from {
		transform: translateX(100px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-from-bottom {
	from {
		transform: translateY(100px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
.hero {
	// to get closer to breadcrumbs
	background: #eaebed4d;
	border: 1px solid #eaebed;
	border-radius: clamp(16px, 1.5vw, 30px);
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 2.5vw, 45px);
	padding-block: clamp(14px, 3.2vw, 60px);
	@media only screen and (max-width: $bp-md) {
		padding-inline: clamp(14px, 3.2vw, 60px);
	}
	.hero__texts,
	.hero__top {
		padding-inline: clamp(14px, 3.2vw, 60px);
		@media only screen and (max-width: $bp-md) {
			padding-inline: 0;
		}
	}
	&__texts {
		display: flex;
		flex-direction: column;
		gap: clamp(12px, 1.2vw, 22px);
		p {
			animation: slide-from-left 0.6s backwards;
			@for $i from 1 through 3 {
				&:nth-child(#{$i}) {
					animation-delay: $i * 0.1s + 0.7s;
				}
			}
		}
	}
	&__top {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(12px, 0.9vw, 16px);
		align-self: center;
		max-width: 100ch;
		@media only screen and (min-width: $bp-md) {
			text-align: center;
		}
		& > * {
			&:first-child {
				animation: slide-from-left 0.6s backwards;
			}
			&:last-child {
				animation: slide-from-right 0.6s backwards;
			}
		}
	}
	&__slide {
		overflow: hidden;
		display: flex;
		border-radius: clamp(14px, 1vw, 16px);
		max-width: 500px;
		min-width: 283px;
		animation: slide-from-bottom 0.6s backwards;
		@for $i from 1 through 10 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.1s + 0.1s;
			}
		}
		@media only screen and (max-width: $bp-md) {
			max-width: 283px;
		}
	}
	&__image {
		width: 100%;
		max-width: 500px;
	}
}
</style>
