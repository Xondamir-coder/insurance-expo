<template>
	<section class="section">
		<div class="section__box">
			<HomeContent
				title="Discover the future of Insurance technology in one place!"
				label="Contacts" />
			<button class="btn-green section__button">
				<span>Get started</span>
				<IconsArrowUpRight class="icon-arrow" />
			</button>
		</div>
		<div class="section__wrapper">
			<div class="section__details">
				<div class="section__detail" v-for="item in linkRows" :key="item.label">
					<h4 class="section__label">{{ item.label }}</h4>
					<div class="section__links">
						<NuxtLink
							v-for="link in item.links"
							:key="link.to"
							:to="link.to"
							class="section__link">
							{{ link.label }}
						</NuxtLink>
					</div>
				</div>
				<div class="section__detail">
					<h4 class="section__label">Contacts</h4>
					<div class="section__links">
						<a class="section__cta" href="tel:+777 123 88 71">
							<IconsTel class="section__icon" />
							<span>+777 123 88 71</span>
						</a>
						<a class="section__cta" href="mailto:Example@gmail.com">
							<IconsMail class="section__icon" />
							<span>Example@gmail.com</span>
						</a>
					</div>
				</div>
			</div>
			<div class="section__social">
				<a class="section__social-icon" href="#" target="_blank" rel="noopener noreferrer">
					<IconsInsta class="section__icon" />
				</a>
				<a class="section__social-icon" href="#" target="_blank" rel="noopener noreferrer">
					<IconsTelegram class="section__icon" />
				</a>
			</div>
			<div class="section__bottom">
				<p class="footer__copyright">
					© {{ new Date().getFullYear() }} Expo - All rights reserved
				</p>
				<div class="section__bottom-links">
					<NuxtLink to="/terms" class="section__bottom-link">
						<span>Terms of service</span>
					</NuxtLink>
					<NuxtLink to="/policy" class="section__bottom-link">
						<span>Privacy policy</span>
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="section__right">
			<img src="~/assets/images/map.png" alt="map" class="section__image" />
		</div>
	</section>
</template>

<script setup>
const links = getLinks();
const services = Array(6).fill({
	to: '/service',
	label: 'Service name'
});
const linkRows = [
	{
		label: 'Link',
		links: links
	},
	{
		label: 'Services',
		links: services
	}
];
</script>

<style lang="scss" scoped>
.section {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	row-gap: clamp(16px, 1.5vw, 20px);
	column-gap: clamp(20px, 2vw, 32px);
	padding-bottom: 40px;
	grid-template-areas:
		'content map'
		'links map';
	@media only screen and (max-width: $bp-lg) {
		grid-template-columns: 1fr;
		grid-template-areas:
			'content'
			'map'
			'links';
		grid-auto-rows: max-content;
	}
	&__box,
	&__wrapper,
	&__right {
		transition-duration: var(--section-transition-duration);
		transition-delay: var(--section-transition-delay);
		transition-property: transform, opacity;
	}
	&:not(.active) {
		.section__box {
			transform: translateX(-50px);
			opacity: 0;
		}
		.section__wrapper {
			transform: translateY(50px);
			opacity: 0;
		}
		.section__right {
			transform: translateY(-50px);
			opacity: 0;
		}
	}
	&__bottom {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		justify-content: space-between;
		font-size: 14px;
		padding-block: clamp(16px, 2vw, 30px);
		border-top: 1px solid #e9eaec;
		@media only screen and (max-width: $bp-sm) {
			justify-content: center;
		}
		&-links {
			display: flex;
			align-items: center;
		}
		&-link {
			padding-inline: 12px;
			position: relative;
			transition: color 0.3s;
			&:hover {
				color: $clr-dark-teal;
			}
			&:not(:last-child)::after {
				content: '';
				position: absolute;
				right: -2px;
				top: 50%;
				transform: translateY(-50%);
				width: 4px;
				height: 4px;
				border-radius: 50%;
				background: rgba(#000000, 0.6);
			}
		}
	}
	&__social {
		display: flex;
		align-items: center;
		gap: 12px;
		justify-content: flex-end;
		&-icon {
			background: #ffffff14;
			border: 1px solid #eaebed;
			backdrop-filter: blur(12px);
			width: 48px;
			aspect-ratio: 1;
			border-radius: 12px;
			@include flex-center;
		}
	}
	&__link {
		transition: color 0.3s;
		&:hover {
			color: $clr-dark-teal;
		}
	}
	&__right {
		border-radius: 12px;
		overflow: hidden;
		grid-area: map;
	}
	&__detail {
		display: flex;
		flex-direction: column;
		gap: 12px;
		font-size: 18px;
		font-weight: 400;
	}
	&__links {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: flex-start;
	}
	&__cta {
		margin-top: 4px;
		display: flex;
		align-items: center;
		gap: 8px;
		transition: color 0.3s;
		&:hover {
			color: $clr-dark-teal;
			svg {
				fill: $clr-dark-teal;
			}
		}
	}
	&__label {
		font-size: 18px;
		font-weight: 700;
	}
	&__details {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		color: rgba(#000, 0.8);
	}
	&__icon {
		width: clamp(20px, 1.8vw, 24px);
		fill: #000;
		transition: fill 0.3s;
	}
	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__wrapper {
		grid-area: links;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: $bp-lg) {
			gap: 16px;
		}
	}
	&__box {
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 1.7vw, 24px);
		align-items: flex-start;
		grid-area: content;
		@media only screen and (min-width: $bp-xl) {
			& > *:first-child > * {
				max-width: 65%;
			}
		}
	}
	&__button {
		display: flex;
		align-items: center;
		gap: 10px;
		padding-inline: 30px;
		padding-block: 15px;
		border-radius: 58px;
		&:hover {
			.icon-arrow {
				fill: $clr-dark-teal;
			}
		}
		.icon-arrow {
			fill: #fff;
		}
	}
}
</style>
