<template>
	<header class="header">
		<div class="header__left">
			<button class="header__hamburger" aria-label="Toggle menu" @click="toggleMenu">
				<IconsMenu class="icon-menu" :class="{ active: !isMenuActive }" />
				<IconsCross class="icon-menu" :class="{ active: isMenuActive }" />
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
			<div class="header__lang-container">
				<button
					class="header__lang"
					title="Change language"
					@click="toggleDropdown"
					:class="{ active: isLangDropdownActive }">
					<IconsGlobe class="icon-globe" />
					<span>{{ activeLangCode.toUpperCase() }}</span>
				</button>
				<div class="header__dropdown" :class="{ active: isLangDropdownActive }">
					<button
						class="header__item"
						v-for="lang in iconLangs"
						:key="lang.code"
						:title="`Change interface language to ${lang.label}`"
						:class="{ active: lang.code === activeLangCode }"
						@click="changeLang(lang.code)">
						<component :is="lang.icon" class="header__item-icon" />
						<span>{{ lang.label }}</span>
					</button>
				</div>
			</div>
			<NuxtLink to="/contact" class="btn-green header__button">Contact Us</NuxtLink>
		</div>
	</header>
	<Menu :class="{ active: isMenuActive }" @close="toggleMenu" />
</template>

<script setup>
import IconsUzb from '~/components/icons/uzb.vue';
import IconsUsa from '~/components/icons/usa.vue';
import IconsRus from '~/components/icons/rus.vue';

const links = getLinks();
const langs = getLangs();
const isLangDropdownActive = ref(false);
const activeLangCode = ref('en');
const isMenuActive = ref(false);

const iconLangs = langs.map(lang => {
	const icon = lang.code === 'en' ? IconsUsa : lang.code === 'uz' ? IconsUzb : IconsRus;
	return {
		...lang,
		icon
	};
});

const toggleMenu = () => {
	isMenuActive.value = !isMenuActive.value;
};
const toggleDropdown = () => {
	isLangDropdownActive.value = !isLangDropdownActive.value;
};
const changeLang = code => {
	activeLangCode.value = code;
	localStorage.setItem('lang', code);
	toggleDropdown();
};
onMounted(() => {
	activeLangCode.value = localStorage.getItem('lang') || 'en';
	document.addEventListener('click', e => {
		if (e.target.closest('.header__lang-container')) return;
		isLangDropdownActive.value = false;
	});
});
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
	padding-inline: $padding-inline;
	position: sticky;
	top: 0;
	background-color: #fff;
	z-index: 50;
	&__hamburger {
		border-radius: 42px;
		width: 42px;
		aspect-ratio: 1;
		background: #eaebed3d;
		border: 1px solid #eaebed;
		display: grid;
		place-items: center;
		& > * {
			grid-area: 1/1/2/2;
			transition: transform 0.3s;
			&:not(.active) {
				transform: scale(0);
			}
		}
		@media only screen and (min-width: 1260px) {
			display: none;
		}
	}
	&__item {
		display: flex;
		align-items: center;
		gap: 6px;
		color: #334155;
		font-size: 14px;
		font-weight: 500;
		padding-block: 6px;
		padding-inline: 8px;
		border-radius: 5px;
		transition: background-color 0.3s, color 0.3s;
		&.active {
			background: #f1f2f4;
			color: #003323;
		}
	}
	&__dropdown {
		padding: 6px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		position: absolute;
		top: calc(100% + 16px);
		right: 0;
		width: 196px;
		border-radius: 10px;
		background: #ffffff;
		border: 1px solid #f1f2f4;
		box-shadow: 0px 10px 80px -3px #0000001a;
		z-index: 10;
		transition: transform 0.3s, opacity 0.3s;
		&:not(.active) {
			transform: translateY(10px);
			pointer-events: none;
			opacity: 0;
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
		transition: background-color 0.3s, color 0.3s, border-color 0.3s;
		&.active {
			background: #008b5f;
			border-color: #008b5f;
			color: #fff;
			.icon-globe {
				fill: #fff;
			}
		}
		@media only screen and (max-width: 1260px) {
			display: none;
		}
		&-container {
			display: flex;
			position: relative;
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
