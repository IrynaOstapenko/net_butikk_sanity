<template>
    <div class="logo-bar">
		<button class="hamburger-button" @click="openMenu()" :class="{'hidden' : isOpen}"><img src="/images/hamburger-button.png" alt="hamburger-button"></button>
		<button class="close-menu-button" @click="closeMenu()" :class="{'visible' : isOpen}"><img src="/images/close-icon.png" alt="close-icon"></button>			
		<div class="logo-bar__logo">
			<RouterLink :to="{ name: 'home' }"><img src="/images/apple-logo.png" alt="apple-logo"></RouterLink>
			<div class="logo-bar__name">Apple Pit</div>
		</div>
		<ShoppingCart :cart="cart" />
	</div>
	<ProductsNav :class="{'visible' : isOpen}" />
</template>

<script>
	import ShoppingCart from '../components/ShoppingCart.vue';
	import ProductsNav from '../components/ProductsNav.vue';

	export default {
		components: {
			ShoppingCart,
			ProductsNav
		},
		data() {
            return {
                isOpen: false            
            }
        },
		// Using double props to get data from parent component
		props: {
			cart: {
				type: Array
			}
		},
		// Functions to open and close the navigation in mobile screen size
		methods: {
			openMenu() {
				this.isOpen = true;
			},
			closeMenu() {
				this.isOpen = false;
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
		visibility: hidden;
		position: absolute;
		left: 0;
		margin-left: 1.5em;
		height: 20px;
		width: 20px;
	}

	 .visible {
        visibility: visible;
    }

    .hidden {
        visibility: hidden;
    }

	.logo-bar__logo {
		display: none;
	}

	products-nav {
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
		
		products-nav {
			display: block;
		}
	}
</style>
