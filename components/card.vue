<template>
	<div class="card">
		<div class="card__top">
			<img :src="data.img" alt="banner" class="card__image" />
			<div class="card__date">
				<IconsCalendar />
				<span>{{ data.date }}</span>
			</div>
		</div>
		<div class="card__content">
			<h3 class="title-charcoal-gray-20-16">
				{{ data.title }}
			</h3>
			<p class="text-dark-slate-blue-14">
				{{ data.text }}
			</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	data: Object
});
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	flex-direction: column;
	gap: clamp(10px, 0.8vw, 12px);
	&:hover &__content {
		border-color: #006646;
	}
	&:hover &__top {
		box-shadow: 0px 49px 60px -20px #03ab3233;
	}
	&__date {
		background: #ffffff;
		border: 1px solid #0000001a;
		align-self: flex-end;
		justify-self: flex-start;
		font-size: 14px;
		border-radius: 8px;
		padding-block: 8px;
		padding-inline: 10px;
		display: flex;
		align-items: center;
		font-weight: 500;
		gap: 8px;
		margin: 16px;
	}
	&__content {
		@include flex-gap(12px);
		border-radius: clamp(16px, 1.2vw, 20px);
		padding: clamp(14px, 1.2vw, 20px);
		padding-bottom: clamp(46px, 2.8vw, 54px);
		background: #fafafa;
		border: 1px solid #e9eaec;
		border-bottom: 6px solid #e9eaec;
		transition: border-color 0.3s;
	}
	&__top {
		display: grid;
		border-radius: clamp(16px, 1.2vw, 20px);
		overflow: hidden;
		transition: box-shadow 0.3s;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__image {
		width: 100%;
		object-fit: cover;
	}
}
</style>
