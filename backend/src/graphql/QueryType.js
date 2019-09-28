import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInputObjectType
} from 'graphql';
import { connectionArgs, fromGlobalId } from 'graphql-relay';

import AnalyticsType from '../modules/analytics/AnalyticsType';

const FilterType = new GraphQLInputObjectType({
  name: 'Filter',
  fields: () => ({
    date: {
      type: new GraphQLInputObjectType({
        name: 'DateFilter',
        fields: () => ({
          start: {
            type: GraphQLString,
          },
          end: {
            type: GraphQLString,
          }
        })
      })
    }
  })
})

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: () => ({
    analytics: {
      type: AnalyticsType,
      args: {
        filter: {
          type: FilterType,
        }
      },
      resolve: () => ({})
    },
  }),
});
