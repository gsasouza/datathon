/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExpensesLastMonth_analytics$ref: FragmentReference;
declare export opaque type ExpensesLastMonth_analytics$fragmentType: ExpensesLastMonth_analytics$ref;
export type ExpensesLastMonth_analytics = {|
  +lastMonthExpenses: ?{|
    +value: ?number,
    +relativeDiff: ?number,
  |},
  +$refType: ExpensesLastMonth_analytics$ref,
|};
export type ExpensesLastMonth_analytics$data = ExpensesLastMonth_analytics;
export type ExpensesLastMonth_analytics$key = {
  +$data?: ExpensesLastMonth_analytics$data,
  +$fragmentRefs: ExpensesLastMonth_analytics$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ExpensesLastMonth_analytics",
  "type": "Analytics",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "lastMonthExpenses",
      "storageKey": null,
      "args": null,
      "concreteType": "LastMonthExpenses",
      "plural": false,
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
          "name": "relativeDiff",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e173cc0d8cfecfb19c46b597e4f12ce9';
module.exports = node;
