import {GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLFloat, GraphQLInt} from 'graphql';
import { globalIdField } from 'graphql-relay';

const LastMonthExpensesObjectType = new GraphQLObjectType({
  name: 'LastMonthExpenses',
  fields: () => ({
    value: {
      type: GraphQLFloat,
      resolve: () => 120
    },
    relativeDiff: {
      type: GraphQLFloat,
      resolve: () => 10
    }
  })
})

const MonthlyExpensesObjectType = new GraphQLObjectType({
  name: 'MonthlyExpenses',
  fields: () => ({
    value: {
      type: GraphQLFloat,
      resolve: () => 100,
    },
    month: {
      type: GraphQLInt,
      resolve: () => 1,
    }
  })
})

const YearlyExpensesObjectType = new GraphQLObjectType({
  name: 'YearlyExpenses',
  fields: () => ({
    year: {
      type: GraphQLInt,
      resolve: () => 2019
    },
    expenses: {
      type: new GraphQLList(MonthlyExpensesObjectType),
      resolve: () => Array(12).fill({value: 10, month: 10})
    }
  })
})

const ExpensesByFlightTypeObjectType = new GraphQLObjectType({
  name: 'ExpensesByFlight',
  fields: () => ({
    year: {
      type: GraphQLInt,
      resolve: () => 2019
    },
    expenses: {
      type: new GraphQLList(GraphQLFloat),
      resolve: () => [15, 10, 8]
    }
  })

})


export default new GraphQLObjectType({
  name: 'Analytics',
  description: 'Analytics data',
  fields: () => ({
    id: globalIdField('Analytics'),
    _id: {
      type: GraphQLString,
      resolve: Analytics => Analytics._id,
    },
    totalExpenses: {
      type: GraphQLFloat,
      resolve: Analytics => 350,
    },
    lastMonthExpenses: {
      type: LastMonthExpensesObjectType,
      resolve: () => ({ value: 100, relativeDiff: 10 })
    },
    yearlyExpenses: {
      type: new GraphQLList(YearlyExpensesObjectType),
      resolve: () => new Array(3).fill({ year: 2019, expenses: []})
    },
    expensesByFlightType: {
      type: new GraphQLList(ExpensesByFlightTypeObjectType),
      resolve: () => new Array(3).fill({}),
    }
  }),
});
