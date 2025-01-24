<template>
	<header class="header">
		<div class="header__left">
			<button class="header__hamburger">
				<IconsMenu class="icon-menu" />
			</button>
			<NuxtLink to="/">
				<Logo class="header__logo" />
			</NuxtLink>
			<nav class="header__nav">
				<NuxtLink
					v-for="link in links"
					:key="link.to"
					:to="link.to"
					class="header__link"
					active-class="active">
					{{ link.label }}
				</NuxtLink>
			</nav>
		</div>
		<div class="header__right">
			<button class="header__lang">
				<IconsGlobe class="icon-globe" />
				<span>EN</span>
			</button>
			<NuxtLink to="/contact" class="btn-green header__button">Contact Us</NuxtLink>
		</div>
	</header>
</template>

<script setup>
const links = getLinks();
</script>

<style lang="scss" scoped>
@keyframes slide-from-top {
	from {
		transform: translateY(-5px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes slide-from-bottom {
	from {
		transform: translateY(5px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
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
.header {
	padding-block: clamp(16px, 2vw, 20px);
	display: flex;
	justify-content: space-between;
	&__hamburger {
		border-radius: 42px;
		width: 42px;
		aspect-ratio: 1;
		background: #eaebed3d;
		border: 1px solid #eaebed;
		@include flex-center;
		@media only screen and (min-width: 1260px) {
			display: none;
		}
	}
	&__lang {
		font-weight: 500;
		font-size: clamp(12px, 1vw, 17px);
		color: $clr-charcoal-gray;
		display: flex;
		align-items: center;
		gap: clamp(8px, 0.8vw, 12px);
		background: #eaebed3d;
		border: 1px solid #eaebed;
		padding-inline: 22px;
		border-radius: 42px;
		@media only screen and (max-width: 1260px) {
			display: none;
		}
	}
	&__button {
		border-radius: 40px;
		padding-inline: clamp(12px, 1.3vw, 24px);
		font-size: clamp(14px, 1vw, 17px);
		@include flex-center;
	}
	&__right {
		// align-self: stretch;
		display: flex;
		align-items: center;
		gap: clamp(10px, 1.2vw, 20px);
		& > * {
			animation: 0.5s 0.3s backwards;
			height: 50px;
			&:first-child {
				animation-name: slide-from-left;
			}
			&:last-child {
				animation-name: slide-from-right;
			}
			@media only screen and (max-width: 1260px) {
				animation-delay: 0s;
				height: auto;
			}
		}
		@media only screen and (max-width: 1260px) {
			& > * {
				padding-block: 10px;
			}
		}
	}
	&__nav {
		display: flex;
		background: #eaebed40;
		border: 1px solid #eaebed;
		gap: 5px;
		border-radius: 61px;
		padding: 6px;
		@media only screen and (max-width: 1260px) {
			display: none;
		}
	}
	&__link {
		border-radius: 34px;
		padding-block: clamp(6px, 0.7vw, 12px);
		padding-inline: clamp(10px, 1.2vw, 20px);
		color: $clr-charcoal-gray;
		font-weight: 500;
		font-size: clamp(14px, 1vw, 17px);
		transition: color 0.3s, background-color 0.3s;
		animation-duration: 0.5s;
		animation-fill-mode: backwards;
		@for $i from 1 through 5 {
			&:nth-child(#{$i}) {
				@if ($i % 2 == 0) {
					animation-name: slide-from-top;
				} @else {
					animation-name: slide-from-bottom;
				}
				animation-delay: $i * 0.1s;
			}
		}
		&:hover {
			color: $clr-dark-teal;
		}
		&.active {
			background-color: $clr-dark-teal;
			color: #fff;
		}
	}
	&__left {
		display: flex;
		align-items: center;
		gap: clamp(10px, 1.7vw, 32px);
		@media only screen and (max-width: 1260px) {
			animation: slide-from-left 0.5s;
		}
	}
	&__logo {
		width: clamp(140px, 11.4vw, 217px);
		@media only screen and (max-width: 1260px) {
			animation: none;
		}
	}
}
</style>
