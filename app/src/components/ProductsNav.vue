<template>
    <div class="nav-container" :class="{'visible' : isOpen}">
        <RouterLink to="/iphones">iPhone</RouterLink>
        <RouterLink to="/macs">Mac</RouterLink>
        <RouterLink to="/watches">Apple Watch</RouterLink>
        <RouterLink to="/ipads">iPad</RouterLink>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false            
            }
        },

        methods: {
            //Function to open hamburger menu
            openMenu() {
                this.isOpen = true;
            },
            //Function to close hamburger menu
            closeMenu() {
                this.isOpen = false;
            }
        }
    }
    
</script>

<style>
    .nav-container {
        visibility: hidden;
        position: absolute;
        top: 100px;
        left: 0;
        height: 100vh;
        width: 100%;
        padding-top: 1em;
        display: flex;
        flex-flow: column nowrap;
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
        font-size: var(--mobile-body-style);
    }

    .visible {
        visibility: visible;
    }

    .hidden {
        visibility: hidden;
    }

    @media screen and (min-width: 800px) {
        .nav-container {
            visibility: visible;
            position: relative;
            top: 0;            
            height: 60px;
            padding-top: 0;
            flex-flow: row nowrap;
        }

        .nav-container a {
            font-size: var(--body-style);
        }
    }

</style>