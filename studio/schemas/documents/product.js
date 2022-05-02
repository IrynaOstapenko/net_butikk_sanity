export default {
	title: 'Product',
	name: 'product', 
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title'
			}
		},
		{
			title: "Description",
			name: "description",
			type: "text"
		},
		{
			title: "Color",
			name: "color",
			type: "string"
		},
        {
            title: 'Available',
            name: 'available',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            }
        },
		{
			title: 'Quantity',
			name: 'quantity',
			type: 'number'
		},
        {
			title: 'Screen Diagonal',
			name: 'screenDiagonal',
			type: 'number',
		},
        {
			title: 'Memory',
			name: 'memory',
			type: 'string',
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number',
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			fields: [
                {
                    title: 'Caption',
                    name: 'caption',
                    type: 'text'
                }
            ] 
		},
		{
			title: 'Category',
			name: 'category',
			type: 'array',
			of: [{ 
                type: 'reference',
                to: [{ type: 'category'}] 
            }]
		}
	]
}