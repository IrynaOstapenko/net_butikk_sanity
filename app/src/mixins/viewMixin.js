import sanity from '../sanity.js';

export default {
    data() {
		return {
			loading: true,
			result: null
		}
	},

    methods: {
        async sanityFetch(query, params) {
			this.result = await sanity.fetch(query, params);
			this.loading = false;
		},
    }
}