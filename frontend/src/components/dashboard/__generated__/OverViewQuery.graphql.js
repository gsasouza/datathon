/**
 * @flow
 * @relayHash a5bbdc5605aba025c0267c4e19adb0ad
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OverView_query$ref = any;
export type OverViewQueryVariables = {||};
export type OverViewQueryResponse = {|
  +$fragmentRefs: OverView_query$ref
|};
export type OverViewQuery = {|
  variables: OverViewQueryVariables,
  response: OverViewQueryResponse,
|};
*/


/*
query OverViewQuery {
  ...OverView_query
}

fragment OverView_query on Query {
  analytics {
    ...ExpensesByTime_analytics
    ...ExpensesLastMonth_analytics
    ...ExpensesUntilToday_analytics
    ...UserClass_analytics
    id
  }
}

fragment ExpensesByTime_analytics on Analytics {
  yearlyExpenses {
    year
    expenses {
      value
      month
    }
  }
}

fragment ExpensesLastMonth_analytics on Analytics {
  lastMonthExpenses {
    value
    relativeDiff
  }
}

fragment ExpensesUntilToday_analytics on Analytics {
  totalExpenses
}

fragment UserClass_analytics on Analytics {
  expensesByFlightType {
    year
    expenses
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "year",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OverViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "OverView_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OverViewQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "analytics",
        "storageKey": null,
        "args": null,
        "concreteType": "Analytics",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "yearlyExpenses",
            "storageKey": null,
            "args": null,
            "concreteType": "YearlyExpenses",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "expenses",
                "storageKey": null,
                "args": null,
                "concreteType": "MonthlyExpenses",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "month",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lastMonthExpenses",
            "storageKey": null,
            "args": null,
            "concreteType": "LastMonthExpenses",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "relativeDiff",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalExpenses",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "expensesByFlightType",
            "storageKey": null,
            "args": null,
            "concreteType": "ExpensesByFlight",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "expenses",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OverViewQuery",
    "id": null,
    "text": "query OverViewQuery {\n  ...OverView_query\n}\n\nfragment OverView_query on Query {\n  analytics {\n    ...ExpensesByTime_analytics\n    ...ExpensesLastMonth_analytics\n    ...ExpensesUntilToday_analytics\n    ...UserClass_analytics\n    id\n  }\n}\n\nfragment ExpensesByTime_analytics on Analytics {\n  yearlyExpenses {\n    year\n    expenses {\n      value\n      month\n    }\n  }\n}\n\nfragment ExpensesLastMonth_analytics on Analytics {\n  lastMonthExpenses {\n    value\n    relativeDiff\n  }\n}\n\nfragment ExpensesUntilToday_analytics on Analytics {\n  totalExpenses\n}\n\nfragment UserClass_analytics on Analytics {\n  expensesByFlightType {\n    year\n    expenses\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3b3441cf5b2e7f3262194845da3bb6c6';
module.exports = node;
