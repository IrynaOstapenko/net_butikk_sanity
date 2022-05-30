<template>
    <div class="navbar">
		<div class="apple-logo-white"><RouterLink :to="{ name: 'home' }"><img src="/images/apple-logo-white.png" alt="apple-logo"></RouterLink></div>
		<nav>
			<div class="nav-link"><a href="#">Contacts</a></div>
			<div class="nav-link hidden-link"><a href="#">Payment and Delivery</a></div>
			<div class="nav-link hidden-link"><a href="#">Guarantee</a></div>
		</nav>
		<div class="navbar__social-media">
			<a href="#"><img src="/images/instagram-vector.png" alt="instagram-icon"></a>
			<a href="#"><img src="/images/facebook-vector.png" alt="facebook-icon"></a>
		</div>
		<div class="navbar__search-icon">
			<a href="#"><img src="/images/search-vector.png" alt="search-icon"></a>
		</div>
	</div>
</template>

<script>

</script>


<style>
/* Mobile */
    .navbar {
		width: 100%;
		height: 50px;
		background-color: var(--nav-color);
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		align-items: center;
	}

	nav {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		gap: 1em;
	}

	.nav-link a {
		color: white;
		text-decoration: none;
		font-size: var(--mobile-body-style);
	}

	.hidden-link {
		display: none;
	}

	.navbar__social-media {
		display: flex;
		flex-flow: row nowrap;
	}

	.navbar__social-media a {
		margin-left: 0.5em;
	}

	.navbar__social-media a img {
		height: 20px;
		width: 20px;
	} 

	.navbar__search-icon {
		margin-right: 2em;
		height: 20px;
		width: 20px;
	}

	@media screen and (min-width: 800px) {
		.apple-logo-white {
			display: none;
		}
		.nav-link a {
			font-size: var(--body-style);
		}

		.hidden-link {
			display: block;
		}

		.navbar__social-media a img {
			height: 30px;
			width: 30px;
		} 

		.navbar__search-icon {
			margin-right: 2em;
			height: 30px;
			width: 30px;
		}
	}

</style>