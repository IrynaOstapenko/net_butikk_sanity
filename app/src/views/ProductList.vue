<template>
	<IPhoneList v-if="$route.params.productList_id == 'iphones'" />
    <MacList v-if="$route.params.productList_id == 'macs'" />
    <AppleWatchList v-if="$route.params.productList_id == 'watches'" />
    <IPadList v-if="$route.params.productList_id == 'ipads'" />
</template>

<script>
	import IPhoneList from '../components/IPhoneList.vue';
    import MacList from '../components/MacList.vue';
    import AppleWatchList from '../components/AppleWatchList.vue';
    import IPadList from '../components/IPadList.vue';

	export default {
		components: {
			IPhoneList,
            MacList,
            AppleWatchList,
            IPadList
		},
		
		data() {
			return {};
		}
	};
</script>

<style></style>
