import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLBoolean } from 'graphql';
import { connectionArgs, fromGlobalId } from 'graphql-relay';

import UserType from '../modules/user/UserType';
import UserConnection from '../modules/user/UserConnection';
import * as UserLoader from '../modules/user/UserLoader';

import ProductType from '../modules/product/ProductType';
import ProductConnection from '../modules/product/ProductConnection';
import * as ProductLoader from '../modules/product/ProductLoader';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: () => ({
    me: {
      type: UserType,
      resolve: (root, args, context) => (context.user ? UserLoader.load(context, context.user._id) : null),
    },

    product: {
      type: ProductType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return ProductLoader.load(context, id);
      },
    },

    products: {
      type: ProductConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString,
        },
        isOwner: {
          type: GraphQLBoolean,
        }
      },
      resolve: (obj, args, context) => ProductLoader.loadProducts(context, args),
    },


    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return UserLoader.load(context, id);
      },
    },
    users: {
      type: UserConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args, context) => UserLoader.loadUsers(context, args),
    },
  }),
});
