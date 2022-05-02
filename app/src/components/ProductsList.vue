<template>
    <div class="products-list-bar">
        <RouterLink :to="{ name: 'productList', params: { productList_id: 'iphones' } }" class="products-list-bar_link">iPhone</RouterLink>
        <RouterLink :to="{ name: 'productList', params: { productList_id: 'macs' } }" class="products-list-bar_link">Mac</RouterLink>
        <RouterLink :to="{ name: 'productList', params: { productList_id: 'watches' } }" class="products-list-bar_link">Apple Watch</RouterLink>
        <RouterLink :to="{ name: 'productList', params: { productList_id: 'ipads' } }" class="products-list-bar_link">iPad</RouterLink>
    </div>
</template>

<script>

</script>

<style>
    .products-list-bar {
        width: 100%;
		height: 60px;
		background-color: var(--menu-color);
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;
    }

    .products-list-bar_link {
        margin: auto 1.5em auto 1.5em;
        color: black;
        text-decoration: none;
    }

</style>
