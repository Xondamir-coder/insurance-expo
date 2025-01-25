<template>
	<div class="layout">
		<Header />
		<slot />
		<Footer v-if="$route.path !== '/'" />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	// min-height: 100vh;
	color: $clr-charcoal-gray;
	background-color: #f9f9fa;
}
</style>
