import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './documents/product.js'
import category from './documents/category.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product,
    category
  ]),
})
