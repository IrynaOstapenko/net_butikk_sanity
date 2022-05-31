<template>
    <Navbar />
	<Logobar :cart="cart"/>

    <div class="list-container">
		<!-- Looping through array of products fetched from sanity -->
        <div class="list-container__item" v-for="product in products">
            <img :src="product.image.asset.url" class="item__image">
            <div class="item__title">{{ product.title }}</div>
            <div v-if="product.available === true" class="item__available--true">Available</div>
            <div v-else class="item__available--false">Sold out</div>
		    <div class="item__price">{{ product.price }} NOK</div>
            <button class="add-bag-button" @click="addToCart(product)" :disabled="product.available === false">Add to bag</button>
        </div>
    </div>

	<section v-if="!$route.params.productList_id">
		<h2>Our best offers</h2>
		<div class="best-offer-container">
			<!-- Looping through array of products with best prices in each category -->
			<div v-for="product in bestOffers" class="best-offer__item">
				<img :src="product.image.asset.url" class="best-offer__image">
				<div>{{ product.title }}</div>
				<div  class="best-offer__price">{{ product.price }} NOK</div>
			</div>
		</div>
	</section>
    
</template>

<script>
	import Navbar from '../components/Navbar.vue';
	import Logobar from '../components/Logobar.vue';
	import ShoppingCart from '../components/ShoppingCart.vue';

	import query from '../groq/products.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],
		components: {
			Navbar,
			Logobar,
			ShoppingCart
		},
		data() {
			return {
				products: [],
				cart: [],
				path: this.$route.params.productList_id ? this.$route.params.productList_id :  false,
				bestOffers: []
			}
		},

		async created() {
			await this.sanityFetch(query, {
				type: 'product'
			});

			this.products = this.result;

			// Creating categories of products based on products' id
			let fillterParams = ''

			if(this.$route.params.productList_id === 'iphones') {
				fillterParams = 'iPhone'
			}

			if(this.$route.params.productList_id === 'macs') {
				fillterParams = 'Mac'
			}

			if(this.$route.params.productList_id === 'watches') {
				fillterParams = 'Apple Watch'
			}

			if(this.$route.params.productList_id === 'ipads') {
				fillterParams = 'iPad'
			}

			if(fillterParams) {
				this.products = this.products.filter(product => product.category[0].title === fillterParams);
			}

			if(!fillterParams) {
				//Finding products with lowest prices in all categories to be shown on home page
				const phones = this.products.filter(product => product.category[0].title === 'iPhone');
				const macs = this.products.filter(product => product.category[0].title === 'Mac');
				const watches = this.products.filter(product => product.category[0].title === 'Apple Watch');
				const ipads = this.products.filter(product => product.category[0].title === 'iPad');

				const bestPhone = phones.find(product => product.price === Math.min(...phones.map(product => product.price)));
				const bestMac = macs.find(product => product.price === Math.min(...macs.map(product => product.price)));
				const bestWatch = watches.find(product => product.price === Math.min(...watches.map(product => product.price)));
				const bestIPad = ipads.find(product => product.price === Math.min(...ipads.map(product => product.price)));

				this.bestOffers.push(bestPhone, bestMac, bestWatch, bestIPad);
				this.products = []
			}        
		},
		methods: {
			// Function that adds the chosen product to the shopping cart
			addToCart(product) {
				this.cart.push(product);
			}
		}
	}
</script>

<style>
    .list-container {
		margin: 1em 2em 1em 2em;
        display: flex;
        flex-flow: row wrap;
		justify-content: space-evenly;
		font-size: var(--mobile-body-style);
    }

    .list-container__item {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
		gap: 0.5em;
		margin-bottom: 1em;
    }

    .item__image {
        height: 100px;
        width: 100px;
    }

	.item__available--true {
		font-size: 0.8em;
		color: green;
	}

	.item__available--false {
		font-size: 0.8em;
		color: red;
	}

	.item__price {
		color: rgb(49, 101, 173);
	}

	.add-bag-button {
		background: white;
		border: 1px solid var(--nav-color);
		padding: 0.2em;
		border-radius: 10px;
	}

	.add-bag-button:hover {
		background: var(--nav-color);
		color: white;
	}

	h2 {
		text-align: center;
		margin: 1em;
	}

	.best-offer-container {
		margin: 1em auto 1em auto;
        display: flex;
        flex-flow: row wrap;
		justify-content: space-evenly;
	}

	.best-offer__item {
		display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
		gap: 0.5em;
		margin-bottom: 1em;
		font-size: var(--mobile-body-style);
	}

	.best-offer__image {
		height: 100px;
        width: 100px;
	}

	.best-offer__price {
		color: rgb(49, 101, 173);
	}

	@media screen and (min-width: 800px) {
		.list-container {
			font-size: var(--body-style);
		}

		.item__image {
			height: 200px;
			width: 200px;
		}

		.best-offer__item {
			font-size: var(--body-style);
		}

		.best-offer__image {
			height: 200px;
			width: 200px;
		}
	}

</style>
