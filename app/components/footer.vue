<template>
	<footer class="footer" id="footer">
		<Logo class="footer__logo" />
		<div class="footer__middle">
			<div class="footer__middle-cta">
				<h2 class="footer__title">
					Discover the future <br />
					of banking technology in one place!
				</h2>
				<button to="/contact" class="footer__button">
					Get started
					<IconsCircleNoArrow class="footer__arrow" />
				</button>
			</div>
			<div class="footer__cols">
				<div class="footer__col">
					<h4 class="footer__col-label">Link</h4>
					<div class="footer__links">
						<NuxtLink
							class="footer__link"
							v-for="link in links"
							:key="link.to"
							:to="link.to">
							{{ link.label }}
						</NuxtLink>
					</div>
				</div>
				<div class="footer__col">
					<h4 class="footer__col-label">Services</h4>
					<div class="footer__links">
						<NuxtLink
							class="footer__link"
							v-for="service in services"
							:key="service.to"
							:to="service.to">
							{{ service.label }}
						</NuxtLink>
					</div>
				</div>
				<div class="footer__col">
					<h4 class="footer__col-label">Contacts</h4>
					<div class="footer__contacts">
						<a class="footer__contact" href="mailto:Example@gmail.com">
							<IconsMail class="footer__icon" />
							Example@gmail.com
						</a>
						<a class="footer__contact" href="tel:+777 123 88 71">
							<IconsTel class="footer__icon" />
							+777 123 88 71
						</a>
					</div>
					<div class="footer__social">
						<a
							class="footer__social-item"
							href="#"
							target="_blank"
							rel="noopener noreferrer">
							<IconsInsta class="footer__social-icon" />
						</a>
						<a
							class="footer__social-item"
							href="#"
							target="_blank"
							rel="noopener noreferrer">
							<IconsTelegram class="footer__social-icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="footer__bottom">
			<p class="footer__copyright">
				&copy; {{ new Date().getFullYear() }} Expo - All rights reserved
			</p>
			<div class="footer__bottom-links">
				<NuxtLink to="/terms-of-service" class="footer__bottom-link">
					<span>Terms of service</span>
				</NuxtLink>
				<NuxtLink to="/privacy-policy" class="footer__bottom-link">
					<span>Privacy policy</span>
				</NuxtLink>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { IconsInsta } from '#components';

const links = getLinks();
const services = Array(6).fill({
	to: '/service',
	label: 'Service name'
});

onMounted(() => {
	GSAPanimation('.footer', {
		animProps: { y: 100 },
		scrollTriggerOptions: { end: '20% bottom' }
	});
});
</script>

<style lang="scss" scoped>
@mixin button-style {
	background-color: $clr-dark-teal;
	font-weight: 400;
	border-radius: 40px;
	padding-block: 14px;
	padding-inline: 24px;
	transition: background-color 0.3s, color 0.3s;
	&:hover {
		background-color: #fff;
		color: $clr-dark-teal;
		svg {
			fill: $clr-dark-teal;
		}
	}
}
.footer {
	flex: 1;
	background-color: $clr-deep-slate;
	z-index: 3;
	padding-block: clamp(16px, 3vw, 30px);
	display: flex;
	position: relative;
	flex-direction: column;
	gap: clamp(16px, 2vw, 30px);
	color: #ffffff;
	padding-inline: $padding-inline;
	&__arrow {
		width: clamp(20px, 1.3vw, 24px);
	}
	&__title {
		line-height: 1.34;
		font-size: clamp(20px, 1.6vw, 26px);
		font-weight: 700;
		text-transform: uppercase;
		@media only screen and (min-width: $bp-md) {
			max-width: 23ch;
		}
		@media only screen and (max-width: $bp-md) {
			line-height: 1.5;
		}
	}
	&__contacts {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__contact {
		display: grid;
		grid-template-columns: clamp(20px, 1.3vw, 24px) 1fr;
		align-items: center;
		gap: 8px;
		transition: color 0.3s;
		svg {
			transition: fill 0.3s;
			fill: #fff;
		}
		&:hover {
			color: $clr-dark-teal;
			svg {
				fill: $clr-dark-teal;
			}
		}
	}
	&__button {
		@include button-style();
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 17px;

		svg {
			transition: fill 0.3s;
			fill: #fff;
		}
	}
	&__links {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}
	&__link {
		transition: color 0.2s;
		&:hover {
			color: $clr-dark-teal;
		}
	}
	&__col {
		opacity: 0.8;
		font-size: 18px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		&-label {
			font-weight: 700;
		}
	}
	&__cols {
		flex: 1;
		display: flex;
		gap: 15%;
		flex-wrap: wrap;
		@media only screen and (max-width: $bp-xxl) {
			gap: 7%;
		}
		@media only screen and (max-width: $bp-lg) {
			column-gap: 20px;
			row-gap: 16px;
			justify-content: space-between;
			padding-right: 10px;
		}
	}
	&__copyright {
		opacity: 0.8;
	}
	&__bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		flex-wrap: wrap;
		gap: 10px;
		@media only screen and (max-width: $bp-sm) {
			justify-content: center;
		}
		&-links {
			display: flex;
		}
		&-link {
			padding-inline: 12px;
			position: relative;
			transition: color 0.3s;
			&:first-child::after {
				content: '';
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: -2px;
				width: 4px;
				height: 4px;
				border-radius: 50%;
				background-color: #fff;
			}
			&:hover {
				color: $clr-dark-teal;
			}
		}
	}
	&__middle {
		padding-bottom: clamp(16px, 4vw, 60px);
		border-bottom: 1px solid #ffffff1f;
		display: flex;
		gap: 10%;
		@media only screen and (max-width: $bp-xxl) {
			gap: 3%;
		}
		@media only screen and (max-width: $bp-lg) {
			flex-direction: column;
			gap: 16px;
			flex-wrap: wrap;
		}
		&-cta {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: clamp(16px, 3vw, 30px);

			@media only screen and (max-width: $bp-md) {
				gap: 16px;
			}
		}
	}
	&__social {
		margin-top: 10px;
		display: flex;
		gap: 12px;
		&-item {
			width: clamp(42px, 2.5vw, 48px);
			aspect-ratio: 1;
			border: 1px solid #ffffff1f;
			backdrop-filter: blur(12px);
			border-radius: 10px;
			transition: background-color 0.3s;
			@include flex-center;
			&:hover {
				background-color: #fff;
				svg {
					fill: $clr-dark-teal;
				}
			}
		}
		&-icon {
			fill: #fff;
			width: clamp(20px, 1.3vw, 24px);
			height: clamp(20px, 1.3vw, 24px);
			transition: transform 0.3s, fill 0.3s;
		}
	}
	&__divider {
		width: 1px;
		background-color: #ffffff;
		opacity: 0.12;
		align-self: stretch;
		transform: scaleY(0.5);
		margin-inline: -20px;
		@media only screen and (max-width: $bp-lg) {
			display: none;
		}
	}
	&__logo {
		width: 195px;
		@media only screen and (max-width: $bp-md) {
			margin-inline: auto;
		}
	}
}
</style>
