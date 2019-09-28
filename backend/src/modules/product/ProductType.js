import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';
import { globalIdField } from 'graphql-relay';

import UserType from '../user/UserType';
import User from '../user/UserModel';

export default new GraphQLObjectType({
  name: 'Product',
  description: 'Product data',
  fields: () => ({
    id: globalIdField('Product'),
    _id: {
      type: GraphQLString,
      resolve: product => product._id,
    },
    name: {
      type: GraphQLString,
      resolve: product => product.name,
    },
    quantity: {
      type: GraphQLString,
      resolve: product => product.quantity,
    },
    price: {
      type: GraphQLString,
      resolve: product => product.price,
    },
    createdby: {
      type: UserType,
      resolve: product => User.findOne({ _id: product.createdby }),
    },
    active: {
      type: GraphQLBoolean,
      resolve: product => product.active,
    },
  }),
});
