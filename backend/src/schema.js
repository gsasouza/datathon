import { GraphQLSchema } from 'graphql';

import QueryType from './graphql/QueryType';
import MutationType from './graphql/MutationType';

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

export default schema;
