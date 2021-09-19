/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Link_bool_exp = {
    _CategoryToLinks?: _CategoryToLink_bool_exp | null;
    _and?: Array<Link_bool_exp> | null;
    _not?: Link_bool_exp | null;
    _or?: Array<Link_bool_exp> | null;
    createdAt?: timestamptz_comparison_exp | null;
    id?: Int_comparison_exp | null;
    incognito?: Boolean_comparison_exp | null;
    title?: String_comparison_exp | null;
    updatedAt?: timestamptz_comparison_exp | null;
    url?: String_comparison_exp | null;
};
export type _CategoryToLink_bool_exp = {
    A?: Int_comparison_exp | null;
    B?: Int_comparison_exp | null;
    Category?: Category_bool_exp | null;
    Link?: Link_bool_exp | null;
    _and?: Array<_CategoryToLink_bool_exp> | null;
    _not?: _CategoryToLink_bool_exp | null;
    _or?: Array<_CategoryToLink_bool_exp> | null;
};
export type Int_comparison_exp = {
    _eq?: number | null;
    _gt?: number | null;
    _gte?: number | null;
    _in?: Array<number> | null;
    _is_null?: boolean | null;
    _lt?: number | null;
    _lte?: number | null;
    _neq?: number | null;
    _nin?: Array<number> | null;
};
export type Category_bool_exp = {
    _CategoryToLinks?: _CategoryToLink_bool_exp | null;
    _and?: Array<Category_bool_exp> | null;
    _not?: Category_bool_exp | null;
    _or?: Array<Category_bool_exp> | null;
    createdAt?: timestamptz_comparison_exp | null;
    id?: Int_comparison_exp | null;
    title?: String_comparison_exp | null;
    type?: String_comparison_exp | null;
    updatedAt?: timestamptz_comparison_exp | null;
};
export type timestamptz_comparison_exp = {
    _eq?: unknown | null;
    _gt?: unknown | null;
    _gte?: unknown | null;
    _in?: Array<unknown> | null;
    _is_null?: boolean | null;
    _lt?: unknown | null;
    _lte?: unknown | null;
    _neq?: unknown | null;
    _nin?: Array<unknown> | null;
};
export type String_comparison_exp = {
    _eq?: string | null;
    _gt?: string | null;
    _gte?: string | null;
    _ilike?: string | null;
    _in?: Array<string> | null;
    _iregex?: string | null;
    _is_null?: boolean | null;
    _like?: string | null;
    _lt?: string | null;
    _lte?: string | null;
    _neq?: string | null;
    _nilike?: string | null;
    _nin?: Array<string> | null;
    _niregex?: string | null;
    _nlike?: string | null;
    _nregex?: string | null;
    _nsimilar?: string | null;
    _regex?: string | null;
    _similar?: string | null;
};
export type Boolean_comparison_exp = {
    _eq?: boolean | null;
    _gt?: boolean | null;
    _gte?: boolean | null;
    _in?: Array<boolean> | null;
    _is_null?: boolean | null;
    _lt?: boolean | null;
    _lte?: boolean | null;
    _neq?: boolean | null;
    _nin?: Array<boolean> | null;
};
export type AllTabsListQueryVariables = {
    filter?: Link_bool_exp | null;
};
export type AllTabsListQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"AllTabs_links">;
};
export type AllTabsListQuery = {
    readonly response: AllTabsListQueryResponse;
    readonly variables: AllTabsListQueryVariables;
};



/*
query AllTabsListQuery(
  $filter: Link_bool_exp
) {
  ...AllTabs_links
}

fragment AllTabs_links on query_root {
  Link_connection(first: 2, order_by: {createdAt: desc}, where: $filter) {
    edges {
      node {
        id
        incognito
        title
        updatedAt
        url
        createdAt
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2
  },
  {
    "kind": "Literal",
    "name": "order_by",
    "value": {
      "createdAt": "desc"
    }
  },
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "filter"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AllTabsListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AllTabs_links"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AllTabsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LinkConnection",
        "kind": "LinkedField",
        "name": "Link_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Link",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "incognito",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "updatedAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "order_by",
          "where"
        ],
        "handle": "connection",
        "key": "allTabs_Link_connection",
        "kind": "LinkedHandle",
        "name": "Link_connection"
      }
    ]
  },
  "params": {
    "cacheID": "62564f83c6d6d9026e39960c2a5bea92",
    "id": null,
    "metadata": {},
    "name": "AllTabsListQuery",
    "operationKind": "query",
    "text": "query AllTabsListQuery(\n  $filter: Link_bool_exp\n) {\n  ...AllTabs_links\n}\n\nfragment AllTabs_links on query_root {\n  Link_connection(first: 2, order_by: {createdAt: desc}, where: $filter) {\n    edges {\n      node {\n        id\n        incognito\n        title\n        updatedAt\n        url\n        createdAt\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1c5bff9888e188f156931197097e2f6b';
export default node;
