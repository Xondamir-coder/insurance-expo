<template>
	<section class="providers" id="about-providers">
		<SectionTop
			:is-second="true"
			text="Expo Insurance 2025 is proud to showcase a diverse range of leading insurance
				providers from around the globe. Discover innovative solutions tailored to your
				personal and business needs"
			title="Meet Our Trusted Insurance Providers"
			data-stationary />
		<ul class="providers__list">
			<li class="providers__item" v-for="(item, i) in items" :key="i" ref="itemsRef">
				<h3 class="providers__item-title">
					{{ item.number }}
				</h3>
				<p class="text-20">
					{{ item.text }}
				</p>
			</li>
		</ul>
	</section>
</template>

<script setup>
const item = {
	number: '1000+',
	text: 'The event welcomes top bank representatives, business leaders, and general attendees, fostering valuable connections'
};
const items = Array(3).fill(item);

onMounted(() => {
	const parentId = '#about-providers';
	const parentContainer = `${parentId} .providers`;

	GSAPanimation(`${parentId} .top>*:first-child`, {
		animProps: { x: 50 },
		scrollTriggerOptions: { start: 'top 90%' }
	});
	GSAPanimation(`${parentId} .top>*:last-child`, {
		animProps: { x: -50 },
		scrollTriggerOptions: { start: 'top 90%' }
	});
	GSAPanimation(`${parentContainer}__item`, {
		animProps: { y: 100, stagger: 0.1 },
		scrollTriggerOptions: { trigger: `${parentContainer}__list` }
	});
});
</script>

<style lang="scss" scoped>
.providers {
	display: flex;
	flex-direction: column;
	gap: clamp(10px, 2.3vw, 45px);
	&__item {
		scroll-snap-align: start;
		background: #f8f8f8;
		border: 1px solid #0000001f;
		border-radius: 24px;
		padding: clamp(16px, 1.6vw, 30px);
		display: flex;
		flex-direction: column;
		gap: clamp(24px, 5.8vw, 112px);
		&-title {
			$fs: clamp(32px, 2.2vw, 42px);
			@include title-style($fs, 700, #140f06);
		}
	}
	&__list {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 1fr;
		gap: clamp(10px, 1.3vw, 24px);
		@media only screen and (max-width: $bp-lg) {
			@include grid-scroll(300px);
		}
	}
}
</style>
