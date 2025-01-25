<template>
	<section class="team" id="about-team">
		<SectionTop
			title="Our management team"
			text="Epo Bank unites participants from over"
			data-stationary />
		<ul class="team__list">
			<li class="team__item" v-for="(mate, i) in mates" :key="i">
				<img :src="mate.img" :alt="mate.name" class="team__image" />
				<div class="team__details">
					<h3 class="team__name">
						{{ mate.name }}
					</h3>
					<p class="text-17">
						{{ mate.job }}
					</p>
				</div>
			</li>
		</ul>
	</section>
</template>

<script setup>
import img from '~/assets/images/girl.jpg';
const matesCount = 6;
const mate = {
	img,
	name: 'Ahmadjon Rahmatjonov',
	job: 'Founder and CEO'
};
const mates = Array(matesCount).fill(mate);

onMounted(() => {
	const parentId = '#about-team';
	const parentContainer = `${parentId} .team`;

	GSAPanimation(`${parentId} .top>*:first-child`, {
		animProps: { x: 50 },
		scrollTriggerOptions: { start: 'top 90%' }
	});
	GSAPanimation(`${parentId} .top>*:last-child`, {
		animProps: { x: -50 },
		scrollTriggerOptions: { start: 'top 90%' }
	});
	document.querySelectorAll(`${parentContainer}__item`).forEach((item, i) => {
		GSAPanimation(item, {
			animProps: { y: 100 }
		});
	});
});
</script>

<style lang="scss" scoped>
.team {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 2.4vw, 45px);
	&__image {
		aspect-ratio: 270/302;
	}
	&__details {
		display: flex;
		flex-direction: column;
		gap: clamp(10px, 0.7vw, 12px);
	}
	&__name {
		$fs: clamp(20px, 1.3vw, 24px);
		@include title-style($fs, 700, $clr-dark-charcoal, initial);
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: clamp(16px, 1.7vw, 32px);
		@media only screen and (max-width: $bp-lg) {
			@include grid-scroll(250px);
		}
	}
	&__item {
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 1.1vw, 20px);
	}
	&__image {
		border-radius: 20px;
	}
}
</style>
