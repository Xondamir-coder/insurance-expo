<template>
	<section class="insurance">
		<div class="insurance__hero">
			<HomeContent
				title="Expo Insurance 2025 is your gateway to a secure future!"
				label="Expo Insurance"
				:texts="[
					'Discover leading companies and innovative services at the international insurance exhibition. Explore the latest updates and opportunities in the insurance industry all in one place.'
				]" />
			<div class="insurance__umbrella-container">
				<div class="insurance__location">
					<div class="insurance__location-icontainer">
						<IconsLocation class="icon-location" />
					</div>
					<div class="insurance__location-content">
						<span>
							<strong class="insurance__location-out">
								{{ calculatedDeadline }}
							</strong>
						</span>
						<span>{{ city }}</span>
					</div>
				</div>
				<img
					src="~/assets/images/umbrella.png"
					alt="umbrella"
					class="insurance__umbrella" />
			</div>
		</div>
		<div class="insurance__time">
			<HomePattern class="insurance__pattern" />
			<div class="insurance__time-container">
				<span class="insurance__time-out">{{ days }}</span>
				<span class="insurance__time-label">Days</span>
			</div>
			<span class="insurance__time-divider">:</span>
			<div class="insurance__time-container">
				<span class="insurance__time-out">{{ hours }}</span>
				<span class="insurance__time-label">Hours</span>
			</div>
			<span class="insurance__time-divider">:</span>
			<div class="insurance__time-container">
				<span class="insurance__time-out">{{ minutes }}</span>
				<span class="insurance__time-label">Minutes</span>
			</div>
			<span class="insurance__time-divider">:</span>
			<div class="insurance__time-container">
				<span class="insurance__time-out">{{ seconds }}</span>
				<span class="insurance__time-label">Seconds</span>
			</div>
		</div>
		<div class="insurance__content">
			<div class="insurance__images">
				<img
					src="~/assets/images/home-section-1.jpg"
					alt="banner"
					class="insurance__image"
					v-for="i in images.length"
					:key="i"
					:class="{ active: i - 1 === currentSlide }" />
			</div>
			<div class="insurance__content-wrapper">
				<div class="insurance__box">
					<h3 class="title-charcoal-gray-20-14">
						Expo Insurance 2025: <br />
						A Space for New Opportunities
					</h3>
					<p class="text-14">
						Discover leading companies and innovative services at the international
						insurance exhibition. Explore the latest updates and opportunities in the
						insurance industry all in one place. Expo Insurance 2025 is your gateway to
						a secure future!
					</p>
				</div>
				<div class="insurance__dots">
					<button
						class="insurance__dot"
						v-for="i in images.length"
						:key="i"
						:class="{ active: i - 1 === currentSlide }"
						@click="changeSlide(i - 1)"></button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import img1 from '~/assets/images/home-section-1.jpg';
import img2 from '~/assets/images/umbrella.png';

// Reactive data
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const currentSlide = ref(0);

// images for slider
const images = [img1, img1, img1, img1];

// deadline calculation
const deadline = new Date('March 16, 2025');
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
const city = 'Tashkent';
const calculatedDeadline = ` ${deadline.getDate()} ${months[deadline.getMonth()]}
${deadline.getFullYear()}`;

const changeSlide = i => {
	currentSlide.value = i;
	clearInterval(sliderInterval);
	sliderInterval = setInterval(sliderCountdown, SLIDER_INTERVAL * 1000);
};

const sliderCountdown = () => {
	currentSlide.value = (currentSlide.value + 1) % images.length;
};
const countdown = () => {
	const now = new Date().getTime();
	const distance = deadline - now;
	days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
	hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};
countdown();

let countdownInterval, sliderInterval;
const SLIDER_INTERVAL = 3;
onMounted(() => {
	countdownInterval = setInterval(countdown, 1000);
	sliderInterval = setInterval(sliderCountdown, SLIDER_INTERVAL * 1000);
});
onUnmounted(() => {
	clearInterval(countdownInterval);
	clearInterval(sliderInterval);
});
</script>

<style lang="scss" scoped>
@property --angle {
	syntax: '<angle>';
	initial-value: 92.56deg;
	inherits: false;
}
@keyframes slide-from-left {
	from {
		transform: translateX(-20px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-from-right {
	from {
		transform: translateX(20px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-from-top {
	from {
		transform: translateY(-30px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes rotate-bg {
	from {
		--angle: 92.56deg;
	}
	to {
		--angle: -92.56deg;
	}
}
@keyframes rotate-pattern {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(90deg);
	}
}
.insurance {
	display: grid;
	grid-template-areas:
		'hero content'
		'time content';
	grid-template-columns: 1fr 1.41fr;
	grid-template-rows: 1fr max-content;
	row-gap: clamp(16px, 1.5vw, 20px);
	column-gap: clamp(20px, 2vw, 32px);
	@media only screen and (max-width: $bp-lg) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-template-areas:
			'content'
			'hero'
			'time';
	}
	&__pattern {
		animation: rotate-pattern 1.5s forwards 0.3s;
		position: absolute;
		right: -30%;
		top: 0;
		width: auto;
		height: 300%;
		transition: transform 1s;
		@media only screen and (max-width: $bp-lg) {
			display: none;
		}
	}
	&__umbrella {
		width: 100%;
		object-fit: cover;
		&-container {
			display: grid;
			align-items: flex-end;
			row-gap: 10px;

			@media only screen and (min-width: $bp-lg) {
				grid-template-columns: 1fr 1.5fr;
			}
			@media only screen and (max-width: $bp-lg) {
				padding-right: clamp(14px, 1.9vw, 36px);
			}
			& > * {
				animation: backwards 0.3s 0.4s;
				&:first-child {
					animation-name: slide-from-left;
				}
				&:last-child {
					animation-name: slide-from-right;
				}
			}
		}
		// position: absolute;
	}
	&__dots {
		display: flex;
		gap: 2px;
		padding: 2px;
		background-color: #ffffff;
		border-radius: 24px;
		height: 9px;
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 42px;
		@media only screen and (max-width: $bp-lg) {
			grid-auto-columns: 1fr;
			flex-grow: 1;
		}
	}
	&__dot {
		background-color: $clr-light-gray;
		border-radius: 8px;
		transition: background-color 0.6s;
		&.active {
			background-color: $clr-dark-teal;
		}
	}
	&__images {
		height: 100%;
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__hero {
		grid-area: hero;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: rgba($clr-light-gray, 0.3);
		border: 1px solid $clr-light-gray;
		border-radius: clamp(16px, 2.5vw, 30px);
		padding-top: clamp(14px, 2.2vw, 42px);
		padding-left: clamp(14px, 1.9vw, 36px);
	}
	&__content {
		animation: slide-from-top 0.6s 0.3s backwards;
		grid-area: content;
		display: grid;
		border-radius: clamp(16px, 1.5vw, 20px);
		overflow: hidden;
		align-items: flex-end;
		&-wrapper {
			z-index: 5;
			display: flex;
			align-items: flex-end;
			margin: clamp(10px, 1.5vw, 20px);
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 10px;
		}
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: opacity 0.6s;
		&:not(.active) {
			opacity: 0;
		}
	}
	&__box {
		@include flex-gap(clamp(10px, 1.5vw, 20px));
		background: #ffffff;
		border-radius: clamp(14px, 1.5vw, 20px);
		padding: clamp(10px, 2vw, 30px);
		@media only screen and (min-width: $bp-lg) {
			max-width: 60%;
		}
	}
	&__location {
		font-size: clamp(14px, 1vw, 16px);
		display: flex;
		gap: 12px;
		text-transform: uppercase;
		position: relative;
		padding-bottom: clamp(14px, 2.2vw, 42px);
		@media only screen and (max-width: $bp-lg) {
			order: 1;
		}

		&-content {
			display: flex;
			justify-content: space-evenly;
			flex-direction: column;
		}
		&-icontainer {
			@include flex-center;
			border-radius: clamp(10px, 1vw, 12px);
			width: clamp(40px, 3vw, 50px);
			aspect-ratio: 1;
			background: $clr-dark-teal;
			border: 1px solid #ffffff1a;
			backdrop-filter: blur(32px);
		}
	}
	&__time {
		overflow: hidden;
		position: relative;
		grid-area: time;
		border-radius: clamp(14px, 2vw, 20px);
		padding-inline: clamp(10px, 1.9vw, 36px);
		padding-block: clamp(14px, 2.2vw, 41.5px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: linear-gradient(var(--angle), #008b5f 4.36%, #044430 95.17%);
		transition: --angle 1s;
		color: #fff;
		animation: rotate-bg 1.5s forwards 0.3s;

		&-container {
			display: flex;
			flex-direction: column;
			gap: clamp(7px, 0.7vw, 12px);
			@media only screen and (max-width: $bp-lg) {
				text-align: center;
			}
		}
		&-divider {
			align-self: center;
		}
		&-out,
		&-divider {
			font-size: clamp(24px, 2.5vw, 42px);
			font-weight: 700;
			@media only screen and (min-width: 1600px) {
				font-size: clamp(24px, 3vw, 42px);
			}
		}
		&-label {
			font-size: clamp(10px, 1vw, 17px);
			color: rgba(#fff, 0.7);
		}
	}
}
</style>
