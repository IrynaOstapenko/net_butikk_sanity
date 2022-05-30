<template>
    <div class="logo-bar">
		<button class="hamburger-button"><img src="/images/hamburger-button.png" alt="hamburger-button"></button>
		<button class="close-menu-button"><img src="/images/close-icon.png" alt="close-icon"></button>
		<div class="logo-bar__logo">
			<RouterLink :to="{ name: 'home' }"><img src="/images/apple-logo.png" alt="apple-logo"></RouterLink>
			<div class="logo-bar__name">Apple Pit</div>
		</div>
		<ShoppingCart :cart="cart" />
	</div>
</template>

<script>
	import ShoppingCart from '../components/ShoppingCart.vue';

	export default {
		components: {
			ShoppingCart
		},
		props: {
			cart: {
				type: Array
			}
		}	
	}
</script>

<style>	
	.logo-bar {
		width: 100%;
		height: 50px;
		background-color: var(--menu-color);
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}

	.hamburger-button {
		display: block;
        margin-left: 1.5em;
        margin-top: 0.5em;
	}

	.close-menu-button {

	}

	.logo-bar__logo {
		display: none;
	}

	@media screen and (min-width: 800px) {
		.logo-bar {
			height: 60px;
		}

		.hamburger-button {
			display: none;
		}

		.close-menu-button {
			display: none;
		}

		.logo-bar__logo {
			display: flex;
			flex-flow: row nowrap;
			margin-left: 2em;
		}

		.logo-bar__logo img {
			width: 2em;
			height: 2em;
			margin-right: 2em;
		}

		.logo-bar__name {
			font-size: var(--header-style);
		}		
	}
</style>
