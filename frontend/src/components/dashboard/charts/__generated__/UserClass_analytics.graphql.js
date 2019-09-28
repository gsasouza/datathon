/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserClass_analytics$ref: FragmentReference;
declare export opaque type UserClass_analytics$fragmentType: UserClass_analytics$ref;
export type UserClass_analytics = {|
  +expensesByFlightType: ?{|
    +year: ?number,
    +expenses: ?$ReadOnlyArray<?number>,
  |},
  +$refType: UserClass_analytics$ref,
|};
export type UserClass_analytics$data = UserClass_analytics;
export type UserClass_analytics$key = {
  +$data?: UserClass_analytics$data,
  +$fragmentRefs: UserClass_analytics$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "UserClass_analytics",
  "type": "Analytics",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "expensesByFlightType",
      "storageKey": null,
      "args": null,
      "concreteType": "ExpensesByFlight",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "year",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "expenses",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '25ab4fd32139246c42f3e81c28b7c557';
module.exports = node;
