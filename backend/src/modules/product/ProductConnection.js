import { GraphQLInt } from 'graphql';

import { connectionDefinitions } from 'graphql-relay';

import ProductType from './ProductType';

export default connectionDefinitions({
  name: 'Product',
  nodeType: ProductType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});
