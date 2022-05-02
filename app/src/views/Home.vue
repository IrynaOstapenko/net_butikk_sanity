<template>
	<Navbar />
	<Logobar />
	<ProductsList />
	<div v-for="product in products">
		<img :src="product.image.asset.url">
		<div>{{ product.description }}</div>
		<div>{{ product.category[0].title }}</div>
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
			products: []
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

		

	}
}
</script>

<style>
	

</style>
