<template>
    <div class="logo-bar__shopping-bag">
		<button @click="openCart()"><img src="/images/shopping-bag.png" alt="shopping-bag"></button>
		<div class="cart-count">({{ cart.length }})</div>
	</div>
    <div class="shopping-cart" :class="{'visible': isActive}">
		<div class="shopping-cart__dimmed"></div>

		<div class="shopping-cart__part">
			<div class="shopping-cart__header">
				<div class="shopping-cart__logo">
					<img src="/images/shopping-bag.png" alt="shopping-bag">
					<div>Shopping bag</div>
				</div>
				<button @click="closeCart()"><img src="/images/close-icon.png" alt="close-icon" class="close-icon-image"></button>
			</div>

			<!-- Create array of chosen products -->
			<div class="chosen-items" v-for="(item, index) in cart" :key="index">
        		<div class="chosen-items__item">
					<img :src="item.image.asset.url" class="chosen-item__image">
					<div>{{ item.title }}</div>
					<div class="chosen-item__price">{{ item.price }} NOK</div>
					<button @click="deleteItem(index)"><img src="/images/delete-icon.png" alt="delete-icon"></button>
				</div>							
			</div>

			<div class="total-amount">Total amount: {{ total }} NOK</div>
		</div>	
    </div>
</template>

<script>
    export default {
		// Using double props to get data from parent component
        props: {
            cart: {
				type: Array
			}
    	},
		data() {
			return {
				isActive: false,
			}
		},
		// Calculating total price of the chosen products
		computed: {
			total() {
				return this.cart.reduce((accumulator, item) => {
  					return accumulator + item.price;
				}, 0);
			}
		},
		methods: {
			openCart() {
				this.isActive = true;
			},
			closeCart() {
				this.isActive = false;
			},
			deleteItem(index) {
				this.cart.splice(index, 1)
			}
		}
	}
</script>


<style>
	.logo-bar__shopping-bag {
		margin-right: 1.5em;
	}

	.logo-bar__shopping-bag img {
		height: 40px;
		width: 40px;
	}

	.cart-count {
		display: inline;
		padding-bottom: 1em;
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
		z-index: 101;
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
		flex-flow: column nowrap;
		justify-content: flex-start;
		padding: 1em 2em 1em 1em;
		font-size: var(--mobile-body-style);
	}

	.shopping-cart__header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
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

	.close-icon-image {
		height: 15px;
		width: 15px;
	}

	.chosen-items {
		padding-top: 1em;
		display: flex;
		flex-flow: column nowrap;
	}

	.chosen-items__item {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		font-size: var(--mobile-body-style);
	}

	.chosen-item__image {
		height: 50px;
		width: 50px;
	}

	.chosen-item__price {
		color: rgb(49, 101, 173);
	}

	.total-amount {
		margin-top: 1em;
	}

    @media screen and (min-width: 800px) {
        .logo-bar__shopping-bag {
			margin-right: 2em;
		}

		.logo-bar__shopping-bag img {
			height: 50px;
			width: 50px;
		}	
		
		.shopping-cart__part {
			font-size: var(--body-style);
		}

		.close-icon-image {
			height: 20px;
			width: 20px;
		}

		.chosen-items__item {
			font-size: var(--body-style);
		}
    }

</style>

