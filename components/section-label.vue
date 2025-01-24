<template>
	<div class="label">
		<IconsHash class="icon-hash" />
		<h4 class="title-charcoal-gray-17-14">{{ label }}</h4>
	</div>
</template>

<script setup>
defineProps({
	label: String
});
</script>
<style scoped lang="scss">
.label {
	display: flex;
	align-items: center;
	gap: 10px;
	text-align: left;
}
</style>
