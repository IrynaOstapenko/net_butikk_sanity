<template>
    <Navbar />
	<Logobar :cart="cart"/>
	<ProductsNav />

    <div class="list-container">
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
		<div class="best-offer-container" >
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
import ProductsNav from '../components/ProductsNav.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

import sanityClient from '@sanity/client';

	const sanity = sanityClient({
		projectId: '99up76rb',
		dataset: 'production',
		apiVersion: '2022-04-27', 
		useCdn: false 
	});

export default {
	components: {
		Navbar,
		Logobar,
		ProductsNav,
		ShoppingCart
	},
	data() {
		return {
			loading: true,
			result: null,
			products: [],
			cart: [],
			path: this.$route.params.productList_id ? this.$route.params.productList_id :  false,
			bestOffers: []
		}
	},

	async created() {
		// const query = `*[_type == $type]`
		// const params = { type: 'product' };

		// this.result = await sanity.fetch(query, params);
		// this.loading = false;

		// console.log(this.result);
		// this.products = this.result;
		// console.log(this.products[0].category);


		const sanity_query_url = 'https://99up76rb.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%24type%5D%20%7B%0A%20%20_id%2C%0A%20%20title%2C%0A%20%20memory%2C%20%0A%20%20price%2C%0A%20%20available%2C%0A%20%20category%5B%5D-%3E%7Btitle%7D%2C%0A%20%20description%2C%0A%20%20image%20%7B%0A%20%20asset-%3E%7B%0A%20%20url%0A%7D%0A%7D%0A%7D&%24type=%22product%22'

		const sanity_response = await fetch(sanity_query_url);
		const { result } = await sanity_response.json();

		this.products = result;

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
			
		//Finding products with lowest prices in all categories
		const phones = this.products.filter(product => product.category[0].title === 'iPhone');
		const macs = this.products.filter(product => product.category[0].title === 'Mac');
		const watches = this.products.filter(product => product.category[0].title === 'Apple Watch');
		const ipads = this.products.filter(product => product.category[0].title === 'iPad');

		const bestPhone = phones.find(product => product.price === Math.min(...phones.map(product => product.price)));
		const bestMac = macs.find(product => product.price === Math.min(...macs.map(product => product.price)));
		const bestWatch = watches.find(product => product.price === Math.min(...watches.map(product => product.price)));
		const bestIPad = ipads.find(product => product.price === Math.min(...ipads.map(product => product.price)));
		console.log(bestPhone);

		this.bestOffers.push(bestPhone, bestMac, bestWatch, bestIPad);
		console.log(this.bestOffers);
		this.products = []
		}
       
        
	},
	methods: {
		addToCart(product) {
			this.cart.push(product);
		}
	}
}
</script>

<style>
    .list-container {
		margin: 1em auto 1em auto;
        display: flex;
        flex-flow: row wrap;
		justify-content: space-evenly;
    }

    .list-container__item {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
		gap: 0.5em;
    }

    .item__image {
        height: 200px;
        width: 200px;
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
	}

	.best-offer__image {
		height: 200px;
        width: 200px;
	}

	.best-offer__price {
		color: rgb(49, 101, 173);
	}

</style>
