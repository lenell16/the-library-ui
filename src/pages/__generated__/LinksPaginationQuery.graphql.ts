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
export type LinksPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    filter?: Link_bool_exp | null;
};
export type LinksPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"AllTabs_links">;
};
export type LinksPaginationQuery = {
    readonly response: LinksPaginationQueryResponse;
    readonly variables: LinksPaginationQueryVariables;
};



/*
query LinksPaginationQuery(
  $count: Int = 2
  $cursor: String
  $filter: Link_bool_exp
) {
  ...AllTabs_links_1G22uz
}

fragment AllTabs_links_1G22uz on query_root {
  Link_connection(after: $cursor, first: $count, order_by: {createdAt: desc}, where: $filter) {
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
    "defaultValue": 2,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
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
    "name": "LinksPaginationQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          }
        ],
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
    "name": "LinksPaginationQuery",
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
    "cacheID": "23416e8a330689f366372672e976e0be",
    "id": null,
    "metadata": {},
    "name": "LinksPaginationQuery",
    "operationKind": "query",
    "text": "query LinksPaginationQuery(\n  $count: Int = 2\n  $cursor: String\n  $filter: Link_bool_exp\n) {\n  ...AllTabs_links_1G22uz\n}\n\nfragment AllTabs_links_1G22uz on query_root {\n  Link_connection(after: $cursor, first: $count, order_by: {createdAt: desc}, where: $filter) {\n    edges {\n      node {\n        id\n        incognito\n        title\n        updatedAt\n        url\n        createdAt\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c4fd2573563b4046b42a5cacff6e0219';
export default node;
