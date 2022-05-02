import Home from './views/Home.vue';
import ProductList from './views/ProductList.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'productList', path: '/:productList_id', component: ProductList },
];
