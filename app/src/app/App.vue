<template>
	<!-- Method that fixed a problem where paths did not work on click and had to be typed manually  -->
	<RouterView :key="$route.fullPath"/>
</template>

<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';
</style>
