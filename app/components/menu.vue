<template>
	<div class="menu">
		<nav class="nav">
			<NuxtLink
				v-for="link in links"
				:key="link.to"
				:to="link.to"
				class="nav__link"
				:title="`Link to ${link.label} page`"
				@click="$emit('close')">
				{{ link.label }}
			</NuxtLink>
		</nav>
		<div class="menu__content">
			<div class="menu__details">
				<h3 class="menu__title">Contacts</h3>
				<div class="menu__cta">
					<a class="menu__social" href="tel:+777 123 88 71">
						<IconsTel class="icon menu__social-icon" />
						<span>+777 123 88 71</span>
					</a>
					<a class="menu__social" href="mailto:Example@gmail.com">
						<IconsMail class="icon menu__social-icon" />
						<span>Example@gmail.com</span>
					</a>
				</div>
			</div>
			<div class="menu__links">
				<a
					class="menu__link"
					href="https://instagram.com"
					target="_blank"
					aria-label="Instagram link">
					<IconsInsta class="icon menu__icon" />
				</a>
				<a
					class="menu__link"
					href="https://telegram.org"
					target="_blank"
					aria-label="Telegram link">
					<IconsTelegram class="icon menu__icon" />
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
const links = getLinks();
</script>

<style lang="scss" scoped>
.icon {
	min-width: 24px;
}
.nav {
	display: flex;
	flex-direction: column;
	gap: 10px;
	background: #eaebed40;
	border: 1px solid #eaebed;
	padding: 6px;
	border-radius: 16px;
	&__link {
		transition: transform 0.5s, opacity 0.5s;
		color: #1f2937;
		font-weight: 500;
		font-size: 17px;
		padding-block: 12px;
		padding-inline: 20px;
		opacity: 0;
		@for $i from 1 through 5 {
			&:nth-child(#{$i}) {
				transition-delay: $i * 0.1s;
				@if ($i % 2 == 0) {
					transform: translateX(-15px);
				} @else {
					transform: translateX(15px);
				}
			}
		}
	}
}
.menu {
	background-color: #ffffff;
	position: fixed;
	inset: 0;
	top: 82px;
	z-index: 200;
	display: flex;
	flex-direction: column;
	padding-top: 20px;
	padding-inline: 16px;
	gap: 30px;
	transition: opacity 0.3s;
	opacity: 0;
	pointer-events: none;
	transition-delay: 0.15s;

	&.active {
		opacity: 1;
		transition-delay: 0s;
		pointer-events: all;
		.nav__link,
		.menu__details {
			opacity: 1;
			transform: translateX(0);
		}
		.menu__link {
			transform: scale(1);
		}
	}
	&__cta {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__links {
		display: flex;
		gap: 12px;
	}
	&__link {
		@include flex-center;
		border: 1px solid #009969;
		backdrop-filter: blur(12px);
		width: 48px;
		aspect-ratio: 1;
		border-radius: 12px;
		transform: scale(0);
		transition: transform 0.3s;
		@for $i from 1 through 2 {
			&:nth-child(#{$i}) {
				transition-delay: $i * 0.1s + 0.6s;
			}
		}
		.icon {
			width: 22px;
		}
	}
	&__social {
		display: flex;
		align-items: center;
		gap: 9px;
		font-size: 18px;
		color: rgba(#003323, 0.8);
		span {
			opacity: 0.8;
		}
		&-icon {
			fill: #003323;
		}
	}
	&__title {
		font-weight: 700;
		font-size: 18px;
		color: rgba(#003323, 0.8);
	}
	&__details {
		display: flex;
		flex-direction: column;
		gap: 16px;
		opacity: 0;
		transform: translateX(-50px);
		transition: opacity 0.5s, transform 0.5s;
		transition-delay: 0.5s;
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&__icon {
		fill: #003323;
	}
}
</style>
