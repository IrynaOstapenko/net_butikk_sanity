<template>
    <div class="logo-bar">
		<div class="logo-bar__logo">
			<RouterLink :to="{ name: 'home' }"><img src="images/apple-logo.png" alt="apple-logo"></RouterLink>
			<div class="logo-bar__name">Apple Pit</div>
		</div>
		<div class="logo-bar__shopping-bag">
			<button @click="openCart()"><img src="images/shopping-bag.png" alt="shopping-bag"></button>
		</div>
		<div class="shopping-cart" :class="{'visible': isActive}">
			<div class="shopping-cart__dimmed"></div>
			<div class="shopping-cart__part">
				<div class="shopping-cart__logo">
					<img src="images/shopping-bag.png" alt="shopping-bag">
					<div>Shopping bag</div>
				</div>
				<div><button @click="closeCart()">X</button></div>				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive: false,
			}
		},
		methods: {
			openCart() {
				this.isActive = true;
				console.log('click');
			},
			closeCart() {
				this.isActive = false;
			}
		}
	}
</script>

<style>
    .logo-bar {
		width: 100%;
		height: 60px;
		background-color: var(--menu-color);
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
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

	.logo-bar__shopping-bag {
		margin-right: 2em;
	}

	.shopping-cart {
		visibility: hidden;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		width: 100vw;
		z-index: 2;
		display: flex;
		flex-flow: row nowrap;
		background-color: rgba(0, 0, 0, 0.3)
	}

	.visible {
		visibility: visible;
	}

	.shopping-cart__dimmed {
		flex-grow: 1.5;
	}

	.shopping-cart__part {
		flex-grow: 1;
		background-color: white;
		opacity: 1;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		padding: 1em 2em 1em 1em;
	}

	.shopping-cart__logo {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
	}

	.shopping-cart__logo img {
		width: 1.5em;
		height: 1.5em;
		margin-right: 0.5em;
	}


</style>
