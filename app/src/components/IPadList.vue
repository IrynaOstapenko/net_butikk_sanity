<template>
    <Navbar />
	<Logobar />
	<ProductsList />
    <div class="list-container">
        <div class="list-container__item" v-for="ipad in ipads">
            <img :src="ipad.image.asset.url" class="item__image">
            <div class="item__title">{{ ipad.title }}</div>
            <div v-if="ipad.available === true" class="item__available--true">Available</div>
            <div v-else class="item__available--false">Sold out</div>
		    <div class="item__price">{{ ipad.price }} NOK</div>
            <button class="add-bag-button">Add to bag</button>
        </div>
    </div>
    
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Logobar from '../components/Logobar.vue';
import ProductsList from '../components/ProductsList.vue';

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
		ProductsList
	},
	data() {
		return {
			loading: true,
			result: null,
			products: [],
            ipads: []
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
		console.log(this.products);

        console.log(this.products[0].category[0].title);

        this.ipads = this.products.filter(product => product.category[0].title === 'iPad');
        console.log(this.ipads);

		

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
	

</style>
