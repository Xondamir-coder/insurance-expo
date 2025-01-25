<template>
	<main class="home">
		<div class="home__container">
			<component
				v-for="(section, i) in sections"
				:key="i"
				:is="section"
				:class="{
					active: i === currentSection,
					before: i < currentSection,
					after: i > currentSection
				}" />
		</div>
		<HomeNav :current-section="currentSection" @change="changeSection" />
	</main>
</template>

<script setup>
import bannerImg from '~/assets/images/home-section-1.jpg';
import HomeSection1 from '~/components/home/section-1.vue';
import HomeSection2 from '~/components/home/section-2.vue';
import HomeSection3 from '~/components/home/section-3.vue';
import HomeSection4 from '~/components/home/section-4.vue';
import HomeSection5 from '~/components/home/section-5.vue';
import HomeSection6 from '~/components/home/section-6.vue';

const sections = [
	HomeSection1,
	HomeSection2,
	HomeSection3,
	HomeSection4,
	HomeSection5,
	HomeSection6
];

const currentSection = ref(0);
const changeSection = section => (currentSection.value = section);

onMounted(() => {
	document.addEventListener('keyup', e => {
		if (e.key === 'ArrowLeft' && currentSection.value > 0)
			changeSection(currentSection.value - 1);
		if (e.key === 'ArrowRight' && currentSection.value < sections.length - 1)
			changeSection(currentSection.value + 1);
	});
});

useHead({
	meta: [
		{ property: 'og:image', content: 'https://insurexpo.uz/images/home.jpg' }, // Replace with the actual OG image URL
		{ name: 'twitter:image', content: 'https://insurexpo.uz/images/home.jpg' } // Replace with the actual image URL
	]
});
</script>

<style lang="scss" scoped>
.home {
	--section-transition-delay: 0.35s;
	--section-transition-duration: 0.6s;
	color: $clr-charcoal-gray;
	padding-top: min(1vw, 12px);
	padding-bottom: clamp(16px, 2vw, 32px);
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 1.7vw, 32px);
	@media only screen and (max-width: $bp-lg) {
		padding-bottom: 90px;
	}
	&__container {
		flex: 1;
		overflow: hidden;
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
			transition-property: transform, opacity;
			transition-duration: 0.6s;
			&.before {
				opacity: 0;
				transform: translateX(-105vw);
			}
			&.after {
				opacity: 0;
				transform: translateX(105vw);
			}
		}
	}
}
</style>
