<template>
	<div class="layout">
		<Header />
		<slot />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout {
	padding-inline: clamp(16px, 3.7vw, 70px);
	display: flex;
	flex-direction: column;
	// min-height: 100vh;
	color: $clr-charcoal-gray;
}
</style>
