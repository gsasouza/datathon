/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ExpensesByTime_analytics$ref = any;
type ExpensesLastMonth_analytics$ref = any;
type ExpensesUntilToday_analytics$ref = any;
type UserClass_analytics$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type OverView_query$ref: FragmentReference;
declare export opaque type OverView_query$fragmentType: OverView_query$ref;
export type OverView_query = {|
  +analytics: ?{|
    +$fragmentRefs: ExpensesByTime_analytics$ref & ExpensesLastMonth_analytics$ref & ExpensesUntilToday_analytics$ref & UserClass_analytics$ref
  |},
  +$refType: OverView_query$ref,
|};
export type OverView_query$data = OverView_query;
export type OverView_query$key = {
  +$data?: OverView_query$data,
  +$fragmentRefs: OverView_query$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "OverView_query",
  "type": "Query",
  "metadata": null,
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
          "kind": "FragmentSpread",
          "name": "ExpensesByTime_analytics",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ExpensesLastMonth_analytics",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ExpensesUntilToday_analytics",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "UserClass_analytics",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'becda00e43f82c40d5d781b9d195ba89';
module.exports = node;
