<template>
	<section class="section">
		<HomeContent
			class="section__content"
			title="Expo Insurance 2025: Step into the Future of Insurance"
			label="Our mission"
			:texts="[
				'Expo Insurance 2025 is the international exhibition showcasing the latest innovations and opportunities in the insurance industry. Discover leading companies and cutting-edge services, and explore secure solutions for the future'
			]" />
		<div class="section__list">
			<div class="section__item big">
				<div class="section__item-content">
					<h3 class="section__title">
						Promoting Innovation and Implementing New Technologies
					</h3>
					<p class="text-white-17">
						Our mission is to identify the latest technologies and innovations in the
						insurance sector and develop new solutions based on them.
					</p>
				</div>
				<img
					src="~/assets/images/home-section-3.png"
					alt="security banner"
					class="section__image" />
			</div>
			<div class="section__item long">
				<h4 class="title-charcoal-gray-20-16">
					Fostering Collaboration and Creating New Business Opportunities
				</h4>
				<p class="text-16">
					We strive to connect the leading companies and experts in the industry to foster
					collaboration and create new business opportunities
				</p>
			</div>
			<div class="section__item small-1">
				<h4 class="title-charcoal-gray-20-16">
					Advancing the Industry Through Knowledge Sharing
				</h4>
				<p class="text-16">
					Expo Insurance 2025 enables professionals to expand their knowledge and stay
					updated on industry trends through seminars and discussions
				</p>
			</div>
			<div class="section__item small-2">
				<h4 class="title-charcoal-gray-20-16">
					Developing the Insurance Industry for a Secure Future
				</h4>
				<p class="text-16">
					We aim to promote innovative solutions that ensure stability and sustainability
					within the insurance industry, shaping a secure future through Expo Insurance
					2025
				</p>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
	display: grid;
	grid-template-areas: 'content list';
	grid-template-columns: 1fr 1.41fr;
	row-gap: clamp(16px, 1.5vw, 20px);
	column-gap: clamp(20px, 2vw, 32px);
	@media only screen and (max-width: $bp-lg) {
		grid-template-areas:
			'content'
			'list';
		grid-template-columns: 1fr;
		grid-auto-rows: max-content;
	}
	.section__content,
	.section__item {
		transition: opacity var(--section-transition-duration) var(--section-transition-delay),
			transform var(--section-transition-duration) var(--section-transition-delay);
	}
	.section__item.small-2 {
		transition-delay: calc(0.1s + var(--section-transition-delay));
	}
	&:not(.active) {
		.section__content {
			transform: translateX(-100px);
			opacity: 0;
		}
		.section__item.big {
			opacity: 0;
			transform: translateX(100px);
		}
		.section__item.long {
			opacity: 0;
			transform: translateY(100px);
		}

		.section__item.small-1,
		.section__item.small-2 {
			opacity: 0;
			transform: translateX(100px);
		}
	}
	&__content {
		grid-area: content;
		& > *:nth-child(2) {
			max-width: 100%;
		}
	}
	&__title {
		text-transform: uppercase;
		font-weight: 800;
		font-size: clamp(16px, 1.5vw, 24px);
		line-height: 1.35;
	}
	&__item {
		border-radius: 20px;
		padding: clamp(14px, 2vw, 30px);
		overflow: hidden;
		color: #fff;
		background: #fafafa;
		border: 1px solid #e9eaec;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 17px;
		&.big {
			grid-area: big;
			border-color: $clr-dark-teal;
			background: linear-gradient(90deg, #008b5e 0%, #08ad78 100%);
			display: grid;
			grid-template-columns: 1fr 300px;
			gap: 10px;
			position: relative;
			@media only screen and (max-width: $bp-lg) {
				grid-template-columns: 1fr;
			}

			.section__item-content {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 30px;
				@media only screen and (max-width: $bp-lg) {
					gap: 196px;
				}
			}
		}
		&.long {
			grid-area: long;
		}
		&.small-1 {
			grid-area: small-1;
		}
		&.small-2 {
			grid-area: small-2;
		}
	}
	&__list {
		grid-area: list;
		display: grid;
		grid-template-areas:
			'big big'
			'long small-1'
			'long small-2';
		grid-auto-rows: 1.7fr 1fr 1fr;
		grid-auto-columns: 1fr 1.25fr;
		gap: clamp(16px, 1.5vw, 20px);
		@media only screen and (max-width: $bp-lg) {
			grid-template-areas:
				'big'
				'long'
				'small-1'
				'small-2';
			grid-auto-rows: auto;
			grid-auto-columns: auto;
		}
	}
	&__image {
		width: clamp(100px, 20vw, 350px);
		object-fit: cover;
		transform: translateY(25%);
		position: absolute;
		right: 0;
		bottom: 0;

		@media only screen and (max-width: $bp-lg) {
			width: 150px;
			left: 60%;
			top: 45%;
			transform: translate(-50%, -50%);
		}
	}
}
</style>
