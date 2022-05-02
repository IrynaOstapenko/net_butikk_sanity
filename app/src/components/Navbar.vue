<template>
    <div class="navbar">
		<nav>
			<a href="#">Contacts</a>
			<a href="#">Payment and Delivery</a>
			<a href="#">Guarantee</a>
		</nav>
		<div class="navbar__social-media">
			<a href="#"><img src="images/instagram-vector.png" alt="instagram-icon"></a>
			<a href="#"><img src="images/facebook-vector.png" alt="facebook-icon"></a>
		</div>
		<div class="navbar__search-icon">
			<a href="#"><img src="images/search-vector.png" alt="search-icon"></a>
		</div>
	</div>
</template>

<script>

</script>


<style>
    .navbar {
		width: 100%;
		height: 50px;
		background-color: var(--nav-color);
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}

	nav a {
		color: white;
		text-decoration: none;
		margin-left: 1em;
	}

	.navbar__social-media {
		display: flex;
		flex-flow: row nowrap;
	}

	.navbar__social-media a {
		margin-left: 1em;
	}

	.navbar__search-icon {
		margin-right: 2em;
	}

</style>