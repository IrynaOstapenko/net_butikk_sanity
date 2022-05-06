<template>
    <div class="nav-container">
        <RouterLink to="/iphones">iPhone</RouterLink>
        <RouterLink to="/macs">Mac</RouterLink>
        <RouterLink to="/watches">Apple Watch</RouterLink>
        <RouterLink to="/ipads">iPad</RouterLink>
    </div>
    
</template>

<style scoped>
    .nav-container {
        height: 60px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 2em;
        background: var(--menu-color);
    }

    .nav-container a {
        text-decoration: none;
        color: var(--foreground);
        margin-left: 1em;
        margin-right: 1em;
    }

</style>