import sanityClient from '@sanity/client';

export  default sanityClient({
	projectId: '99up76rb',
	dataset: 'production',
	apiVersion: '2022-04-27', 
	useCdn: false 
});