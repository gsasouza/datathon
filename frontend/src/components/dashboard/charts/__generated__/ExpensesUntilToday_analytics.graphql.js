/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExpensesUntilToday_analytics$ref: FragmentReference;
declare export opaque type ExpensesUntilToday_analytics$fragmentType: ExpensesUntilToday_analytics$ref;
export type ExpensesUntilToday_analytics = {|
  +totalExpenses: ?number,
  +$refType: ExpensesUntilToday_analytics$ref,
|};
export type ExpensesUntilToday_analytics$data = ExpensesUntilToday_analytics;
export type ExpensesUntilToday_analytics$key = {
  +$data?: ExpensesUntilToday_analytics$data,
  +$fragmentRefs: ExpensesUntilToday_analytics$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ExpensesUntilToday_analytics",
  "type": "Analytics",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalExpenses",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '741a1c3205b713ff3813f11ccb779232';
module.exports = node;
