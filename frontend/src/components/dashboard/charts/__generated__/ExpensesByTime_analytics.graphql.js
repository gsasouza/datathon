/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExpensesByTime_analytics$ref: FragmentReference;
declare export opaque type ExpensesByTime_analytics$fragmentType: ExpensesByTime_analytics$ref;
export type ExpensesByTime_analytics = {|
  +yearlyExpenses: ?$ReadOnlyArray<?{|
    +year: ?number,
    +expenses: ?$ReadOnlyArray<?{|
      +value: ?number,
      +month: ?number,
    |}>,
  |}>,
  +$refType: ExpensesByTime_analytics$ref,
|};
export type ExpensesByTime_analytics$data = ExpensesByTime_analytics;
export type ExpensesByTime_analytics$key = {
  +$data?: ExpensesByTime_analytics$data,
  +$fragmentRefs: ExpensesByTime_analytics$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ExpensesByTime_analytics",
  "type": "Analytics",
  "metadata": null,
  "argumentDefinitions": [],
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "year",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "expenses",
          "storageKey": null,
          "args": null,
          "concreteType": "MonthlyExpenses",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "value",
              "args": null,
              "storageKey": null
            },
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '26930189f4b0bb36a629f022102d6350';
module.exports = node;
