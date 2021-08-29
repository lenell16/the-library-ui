/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  timestamptz: any;
  uuid: any;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
}

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export interface groups_bool_exp {
  _and?: Maybe<Array<groups_bool_exp>>;
  _not?: Maybe<groups_bool_exp>;
  _or?: Maybe<Array<groups_bool_exp>>;
  created_at?: Maybe<timestamp_comparison_exp>;
  group_tabs?: Maybe<tab_group_bool_exp>;
  id?: Maybe<uuid_comparison_exp>;
  title?: Maybe<String_comparison_exp>;
  type?: Maybe<String_comparison_exp>;
  updated_at?: Maybe<timestamp_comparison_exp>;
}

/** unique or primary key constraints on table "groups" */
export enum groups_constraint {
  /** unique or primary key constraint */
  Groups_pkey = 'Groups_pkey',
  /** unique or primary key constraint */
  title_unique = 'title_unique',
}

/** input type for inserting data into table "groups" */
export interface groups_insert_input {
  created_at?: Maybe<Scalars['timestamp']>;
  group_tabs?: Maybe<tab_group_arr_rel_insert_input>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
}

/** input type for inserting object relation for remote table "groups" */
export interface groups_obj_rel_insert_input {
  data: groups_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<groups_on_conflict>;
}

/** on conflict condition type for table "groups" */
export interface groups_on_conflict {
  constraint: groups_constraint;
  update_columns?: Array<groups_update_column>;
  where?: Maybe<groups_bool_exp>;
}

/** Ordering options when selecting data from "groups". */
export interface groups_order_by {
  created_at?: Maybe<order_by>;
  group_tabs_aggregate?: Maybe<tab_group_aggregate_order_by>;
  id?: Maybe<order_by>;
  title?: Maybe<order_by>;
  type?: Maybe<order_by>;
  updated_at?: Maybe<order_by>;
}

/** primary key columns input for table: groups */
export interface groups_pk_columns_input {
  id: Scalars['uuid'];
}

/** select columns of table "groups" */
export enum groups_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  title = 'title',
  /** column name */
  type = 'type',
  /** column name */
  updated_at = 'updated_at',
}

/** input type for updating data in table "groups" */
export interface groups_set_input {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
}

/** update columns of table "groups" */
export enum groups_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  title = 'title',
  /** column name */
  type = 'type',
  /** column name */
  updated_at = 'updated_at',
}

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = 'asc',
  /** in ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  desc = 'desc',
  /** in descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last',
}

/** order by aggregate values of table "tab_group" */
export interface tab_group_aggregate_order_by {
  count?: Maybe<order_by>;
  max?: Maybe<tab_group_max_order_by>;
  min?: Maybe<tab_group_min_order_by>;
}

/** input type for inserting array relation for remote table "tab_group" */
export interface tab_group_arr_rel_insert_input {
  data: Array<tab_group_insert_input>;
  /** on conflict condition */
  on_conflict?: Maybe<tab_group_on_conflict>;
}

/** Boolean expression to filter rows from the table "tab_group". All fields are combined with a logical 'AND'. */
export interface tab_group_bool_exp {
  _and?: Maybe<Array<tab_group_bool_exp>>;
  _not?: Maybe<tab_group_bool_exp>;
  _or?: Maybe<Array<tab_group_bool_exp>>;
  created_at?: Maybe<timestamptz_comparison_exp>;
  group?: Maybe<groups_bool_exp>;
  group_id?: Maybe<uuid_comparison_exp>;
  id?: Maybe<uuid_comparison_exp>;
  tab?: Maybe<tabs_bool_exp>;
  tab_id?: Maybe<uuid_comparison_exp>;
  updated_at?: Maybe<timestamptz_comparison_exp>;
}

/** unique or primary key constraints on table "tab_group" */
export enum tab_group_constraint {
  /** unique or primary key constraint */
  tab_group_group_id_tab_id_key = 'tab_group_group_id_tab_id_key',
  /** unique or primary key constraint */
  tab_group_pkey = 'tab_group_pkey',
}

/** input type for inserting data into table "tab_group" */
export interface tab_group_insert_input {
  created_at?: Maybe<Scalars['timestamptz']>;
  group?: Maybe<groups_obj_rel_insert_input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tab?: Maybe<tabs_obj_rel_insert_input>;
  tab_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** order by max() on columns of table "tab_group" */
export interface tab_group_max_order_by {
  created_at?: Maybe<order_by>;
  group_id?: Maybe<order_by>;
  id?: Maybe<order_by>;
  tab_id?: Maybe<order_by>;
  updated_at?: Maybe<order_by>;
}

/** order by min() on columns of table "tab_group" */
export interface tab_group_min_order_by {
  created_at?: Maybe<order_by>;
  group_id?: Maybe<order_by>;
  id?: Maybe<order_by>;
  tab_id?: Maybe<order_by>;
  updated_at?: Maybe<order_by>;
}

/** on conflict condition type for table "tab_group" */
export interface tab_group_on_conflict {
  constraint: tab_group_constraint;
  update_columns?: Array<tab_group_update_column>;
  where?: Maybe<tab_group_bool_exp>;
}

/** Ordering options when selecting data from "tab_group". */
export interface tab_group_order_by {
  created_at?: Maybe<order_by>;
  group?: Maybe<groups_order_by>;
  group_id?: Maybe<order_by>;
  id?: Maybe<order_by>;
  tab?: Maybe<tabs_order_by>;
  tab_id?: Maybe<order_by>;
  updated_at?: Maybe<order_by>;
}

/** primary key columns input for table: tab_group */
export interface tab_group_pk_columns_input {
  id: Scalars['uuid'];
}

/** select columns of table "tab_group" */
export enum tab_group_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  group_id = 'group_id',
  /** column name */
  id = 'id',
  /** column name */
  tab_id = 'tab_id',
  /** column name */
  updated_at = 'updated_at',
}

/** input type for updating data in table "tab_group" */
export interface tab_group_set_input {
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tab_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** update columns of table "tab_group" */
export enum tab_group_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  group_id = 'group_id',
  /** column name */
  id = 'id',
  /** column name */
  tab_id = 'tab_id',
  /** column name */
  updated_at = 'updated_at',
}

/** Boolean expression to filter rows from the table "tabs". All fields are combined with a logical 'AND'. */
export interface tabs_bool_exp {
  _and?: Maybe<Array<tabs_bool_exp>>;
  _not?: Maybe<tabs_bool_exp>;
  _or?: Maybe<Array<tabs_bool_exp>>;
  created_at?: Maybe<timestamp_comparison_exp>;
  id?: Maybe<uuid_comparison_exp>;
  incognito?: Maybe<Boolean_comparison_exp>;
  tab_groups?: Maybe<tab_group_bool_exp>;
  title?: Maybe<String_comparison_exp>;
  updated_at?: Maybe<timestamp_comparison_exp>;
  url?: Maybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "tabs" */
export enum tabs_constraint {
  /** unique or primary key constraint */
  Tabs_pkey = 'Tabs_pkey',
  /** unique or primary key constraint */
  url_unique = 'url_unique',
}

/** input type for inserting data into table "tabs" */
export interface tabs_insert_input {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  incognito?: Maybe<Scalars['Boolean']>;
  tab_groups?: Maybe<tab_group_arr_rel_insert_input>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  url?: Maybe<Scalars['String']>;
}

/** input type for inserting object relation for remote table "tabs" */
export interface tabs_obj_rel_insert_input {
  data: tabs_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<tabs_on_conflict>;
}

/** on conflict condition type for table "tabs" */
export interface tabs_on_conflict {
  constraint: tabs_constraint;
  update_columns?: Array<tabs_update_column>;
  where?: Maybe<tabs_bool_exp>;
}

/** Ordering options when selecting data from "tabs". */
export interface tabs_order_by {
  created_at?: Maybe<order_by>;
  id?: Maybe<order_by>;
  incognito?: Maybe<order_by>;
  tab_groups_aggregate?: Maybe<tab_group_aggregate_order_by>;
  title?: Maybe<order_by>;
  updated_at?: Maybe<order_by>;
  url?: Maybe<order_by>;
}

/** primary key columns input for table: tabs */
export interface tabs_pk_columns_input {
  id: Scalars['uuid'];
}

/** select columns of table "tabs" */
export enum tabs_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  incognito = 'incognito',
  /** column name */
  title = 'title',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  url = 'url',
}

/** input type for updating data in table "tabs" */
export interface tabs_set_input {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  incognito?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  url?: Maybe<Scalars['String']>;
}

/** update columns of table "tabs" */
export enum tabs_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  incognito = 'incognito',
  /** column name */
  title = 'title',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  url = 'url',
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
}

export const scalarsEnumsHash: import('gqless').ScalarsEnumsHash = {
  Boolean: true,
  Int: true,
  String: true,
  groups_constraint: true,
  groups_select_column: true,
  groups_update_column: true,
  order_by: true,
  tab_group_constraint: true,
  tab_group_select_column: true,
  tab_group_update_column: true,
  tabs_constraint: true,
  tabs_select_column: true,
  tabs_update_column: true,
  timestamp: true,
  timestamptz: true,
  uuid: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: 'String!' },
    groups: {
      __type: '[groups!]!',
      __args: {
        distinct_on: '[groups_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[groups_order_by!]',
        where: 'groups_bool_exp',
      },
    },
    groups_aggregate: {
      __type: 'groups_aggregate!',
      __args: {
        distinct_on: '[groups_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[groups_order_by!]',
        where: 'groups_bool_exp',
      },
    },
    groups_by_pk: { __type: 'groups', __args: { id: 'uuid!' } },
    tab_group: {
      __type: '[tab_group!]!',
      __args: {
        distinct_on: '[tab_group_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tab_group_order_by!]',
        where: 'tab_group_bool_exp',
      },
    },
    tab_group_aggregate: {
      __type: 'tab_group_aggregate!',
      __args: {
        distinct_on: '[tab_group_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tab_group_order_by!]',
        where: 'tab_group_bool_exp',
      },
    },
    tab_group_by_pk: { __type: 'tab_group', __args: { id: 'uuid!' } },
    tabs: {
      __type: '[tabs!]!',
      __args: {
        distinct_on: '[tabs_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tabs_order_by!]',
        where: 'tabs_bool_exp',
      },
    },
    tabs_aggregate: {
      __type: 'tabs_aggregate!',
      __args: {
        distinct_on: '[tabs_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tabs_order_by!]',
        where: 'tabs_bool_exp',
      },
    },
    tabs_by_pk: { __type: 'tabs', __args: { id: 'uuid!' } },
  },
  mutation: {
    __typename: { __type: 'String!' },
    delete_groups: {
      __type: 'groups_mutation_response',
      __args: { where: 'groups_bool_exp!' },
    },
    delete_groups_by_pk: { __type: 'groups', __args: { id: 'uuid!' } },
    delete_tab_group: {
      __type: 'tab_group_mutation_response',
      __args: { where: 'tab_group_bool_exp!' },
    },
    delete_tab_group_by_pk: { __type: 'tab_group', __args: { id: 'uuid!' } },
    delete_tabs: {
      __type: 'tabs_mutation_response',
      __args: { where: 'tabs_bool_exp!' },
    },
    delete_tabs_by_pk: { __type: 'tabs', __args: { id: 'uuid!' } },
    insert_groups: {
      __type: 'groups_mutation_response',
      __args: {
        objects: '[groups_insert_input!]!',
        on_conflict: 'groups_on_conflict',
      },
    },
    insert_groups_one: {
      __type: 'groups',
      __args: {
        object: 'groups_insert_input!',
        on_conflict: 'groups_on_conflict',
      },
    },
    insert_tab_group: {
      __type: 'tab_group_mutation_response',
      __args: {
        objects: '[tab_group_insert_input!]!',
        on_conflict: 'tab_group_on_conflict',
      },
    },
    insert_tab_group_one: {
      __type: 'tab_group',
      __args: {
        object: 'tab_group_insert_input!',
        on_conflict: 'tab_group_on_conflict',
      },
    },
    insert_tabs: {
      __type: 'tabs_mutation_response',
      __args: {
        objects: '[tabs_insert_input!]!',
        on_conflict: 'tabs_on_conflict',
      },
    },
    insert_tabs_one: {
      __type: 'tabs',
      __args: { object: 'tabs_insert_input!', on_conflict: 'tabs_on_conflict' },
    },
    update_groups: {
      __type: 'groups_mutation_response',
      __args: { _set: 'groups_set_input', where: 'groups_bool_exp!' },
    },
    update_groups_by_pk: {
      __type: 'groups',
      __args: {
        _set: 'groups_set_input',
        pk_columns: 'groups_pk_columns_input!',
      },
    },
    update_tab_group: {
      __type: 'tab_group_mutation_response',
      __args: { _set: 'tab_group_set_input', where: 'tab_group_bool_exp!' },
    },
    update_tab_group_by_pk: {
      __type: 'tab_group',
      __args: {
        _set: 'tab_group_set_input',
        pk_columns: 'tab_group_pk_columns_input!',
      },
    },
    update_tabs: {
      __type: 'tabs_mutation_response',
      __args: { _set: 'tabs_set_input', where: 'tabs_bool_exp!' },
    },
    update_tabs_by_pk: {
      __type: 'tabs',
      __args: { _set: 'tabs_set_input', pk_columns: 'tabs_pk_columns_input!' },
    },
  },
  subscription: {
    __typename: { __type: 'String!' },
    groups: {
      __type: '[groups!]!',
      __args: {
        distinct_on: '[groups_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[groups_order_by!]',
        where: 'groups_bool_exp',
      },
    },
    groups_aggregate: {
      __type: 'groups_aggregate!',
      __args: {
        distinct_on: '[groups_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[groups_order_by!]',
        where: 'groups_bool_exp',
      },
    },
    groups_by_pk: { __type: 'groups', __args: { id: 'uuid!' } },
    tab_group: {
      __type: '[tab_group!]!',
      __args: {
        distinct_on: '[tab_group_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tab_group_order_by!]',
        where: 'tab_group_bool_exp',
      },
    },
    tab_group_aggregate: {
      __type: 'tab_group_aggregate!',
      __args: {
        distinct_on: '[tab_group_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tab_group_order_by!]',
        where: 'tab_group_bool_exp',
      },
    },
    tab_group_by_pk: { __type: 'tab_group', __args: { id: 'uuid!' } },
    tabs: {
      __type: '[tabs!]!',
      __args: {
        distinct_on: '[tabs_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tabs_order_by!]',
        where: 'tabs_bool_exp',
      },
    },
    tabs_aggregate: {
      __type: 'tabs_aggregate!',
      __args: {
        distinct_on: '[tabs_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tabs_order_by!]',
        where: 'tabs_bool_exp',
      },
    },
    tabs_by_pk: { __type: 'tabs', __args: { id: 'uuid!' } },
  },
  Boolean_comparison_exp: {
    _eq: { __type: 'Boolean' },
    _gt: { __type: 'Boolean' },
    _gte: { __type: 'Boolean' },
    _in: { __type: '[Boolean!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'Boolean' },
    _lte: { __type: 'Boolean' },
    _neq: { __type: 'Boolean' },
    _nin: { __type: '[Boolean!]' },
  },
  String_comparison_exp: {
    _eq: { __type: 'String' },
    _gt: { __type: 'String' },
    _gte: { __type: 'String' },
    _ilike: { __type: 'String' },
    _in: { __type: '[String!]' },
    _iregex: { __type: 'String' },
    _is_null: { __type: 'Boolean' },
    _like: { __type: 'String' },
    _lt: { __type: 'String' },
    _lte: { __type: 'String' },
    _neq: { __type: 'String' },
    _nilike: { __type: 'String' },
    _nin: { __type: '[String!]' },
    _niregex: { __type: 'String' },
    _nlike: { __type: 'String' },
    _nregex: { __type: 'String' },
    _nsimilar: { __type: 'String' },
    _regex: { __type: 'String' },
    _similar: { __type: 'String' },
  },
  groups: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamp' },
    group_tabs: {
      __type: '[tab_group!]!',
      __args: {
        distinct_on: '[tab_group_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tab_group_order_by!]',
        where: 'tab_group_bool_exp',
      },
    },
    group_tabs_aggregate: {
      __type: 'tab_group_aggregate!',
      __args: {
        distinct_on: '[tab_group_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tab_group_order_by!]',
        where: 'tab_group_bool_exp',
      },
    },
    id: { __type: 'uuid!' },
    title: { __type: 'String' },
    type: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
  },
  groups_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'groups_aggregate_fields' },
    nodes: { __type: '[groups!]!' },
  },
  groups_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[groups_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'groups_max_fields' },
    min: { __type: 'groups_min_fields' },
  },
  groups_bool_exp: {
    _and: { __type: '[groups_bool_exp!]' },
    _not: { __type: 'groups_bool_exp' },
    _or: { __type: '[groups_bool_exp!]' },
    created_at: { __type: 'timestamp_comparison_exp' },
    group_tabs: { __type: 'tab_group_bool_exp' },
    id: { __type: 'uuid_comparison_exp' },
    title: { __type: 'String_comparison_exp' },
    type: { __type: 'String_comparison_exp' },
    updated_at: { __type: 'timestamp_comparison_exp' },
  },
  groups_insert_input: {
    created_at: { __type: 'timestamp' },
    group_tabs: { __type: 'tab_group_arr_rel_insert_input' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
    type: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
  },
  groups_max_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamp' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
    type: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
  },
  groups_min_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamp' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
    type: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
  },
  groups_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[groups!]!' },
  },
  groups_obj_rel_insert_input: {
    data: { __type: 'groups_insert_input!' },
    on_conflict: { __type: 'groups_on_conflict' },
  },
  groups_on_conflict: {
    constraint: { __type: 'groups_constraint!' },
    update_columns: { __type: '[groups_update_column!]!' },
    where: { __type: 'groups_bool_exp' },
  },
  groups_order_by: {
    created_at: { __type: 'order_by' },
    group_tabs_aggregate: { __type: 'tab_group_aggregate_order_by' },
    id: { __type: 'order_by' },
    title: { __type: 'order_by' },
    type: { __type: 'order_by' },
    updated_at: { __type: 'order_by' },
  },
  groups_pk_columns_input: { id: { __type: 'uuid!' } },
  groups_set_input: {
    created_at: { __type: 'timestamp' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
    type: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
  },
  tab_group: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamptz!' },
    group: { __type: 'groups!' },
    group_id: { __type: 'uuid!' },
    id: { __type: 'uuid!' },
    tab: { __type: 'tabs!' },
    tab_id: { __type: 'uuid!' },
    updated_at: { __type: 'timestamptz!' },
  },
  tab_group_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'tab_group_aggregate_fields' },
    nodes: { __type: '[tab_group!]!' },
  },
  tab_group_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[tab_group_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'tab_group_max_fields' },
    min: { __type: 'tab_group_min_fields' },
  },
  tab_group_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'tab_group_max_order_by' },
    min: { __type: 'tab_group_min_order_by' },
  },
  tab_group_arr_rel_insert_input: {
    data: { __type: '[tab_group_insert_input!]!' },
    on_conflict: { __type: 'tab_group_on_conflict' },
  },
  tab_group_bool_exp: {
    _and: { __type: '[tab_group_bool_exp!]' },
    _not: { __type: 'tab_group_bool_exp' },
    _or: { __type: '[tab_group_bool_exp!]' },
    created_at: { __type: 'timestamptz_comparison_exp' },
    group: { __type: 'groups_bool_exp' },
    group_id: { __type: 'uuid_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    tab: { __type: 'tabs_bool_exp' },
    tab_id: { __type: 'uuid_comparison_exp' },
    updated_at: { __type: 'timestamptz_comparison_exp' },
  },
  tab_group_insert_input: {
    created_at: { __type: 'timestamptz' },
    group: { __type: 'groups_obj_rel_insert_input' },
    group_id: { __type: 'uuid' },
    id: { __type: 'uuid' },
    tab: { __type: 'tabs_obj_rel_insert_input' },
    tab_id: { __type: 'uuid' },
    updated_at: { __type: 'timestamptz' },
  },
  tab_group_max_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamptz' },
    group_id: { __type: 'uuid' },
    id: { __type: 'uuid' },
    tab_id: { __type: 'uuid' },
    updated_at: { __type: 'timestamptz' },
  },
  tab_group_max_order_by: {
    created_at: { __type: 'order_by' },
    group_id: { __type: 'order_by' },
    id: { __type: 'order_by' },
    tab_id: { __type: 'order_by' },
    updated_at: { __type: 'order_by' },
  },
  tab_group_min_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamptz' },
    group_id: { __type: 'uuid' },
    id: { __type: 'uuid' },
    tab_id: { __type: 'uuid' },
    updated_at: { __type: 'timestamptz' },
  },
  tab_group_min_order_by: {
    created_at: { __type: 'order_by' },
    group_id: { __type: 'order_by' },
    id: { __type: 'order_by' },
    tab_id: { __type: 'order_by' },
    updated_at: { __type: 'order_by' },
  },
  tab_group_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[tab_group!]!' },
  },
  tab_group_on_conflict: {
    constraint: { __type: 'tab_group_constraint!' },
    update_columns: { __type: '[tab_group_update_column!]!' },
    where: { __type: 'tab_group_bool_exp' },
  },
  tab_group_order_by: {
    created_at: { __type: 'order_by' },
    group: { __type: 'groups_order_by' },
    group_id: { __type: 'order_by' },
    id: { __type: 'order_by' },
    tab: { __type: 'tabs_order_by' },
    tab_id: { __type: 'order_by' },
    updated_at: { __type: 'order_by' },
  },
  tab_group_pk_columns_input: { id: { __type: 'uuid!' } },
  tab_group_set_input: {
    created_at: { __type: 'timestamptz' },
    group_id: { __type: 'uuid' },
    id: { __type: 'uuid' },
    tab_id: { __type: 'uuid' },
    updated_at: { __type: 'timestamptz' },
  },
  tabs: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamp' },
    id: { __type: 'uuid!' },
    incognito: { __type: 'Boolean!' },
    tab_groups: {
      __type: '[tab_group!]!',
      __args: {
        distinct_on: '[tab_group_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tab_group_order_by!]',
        where: 'tab_group_bool_exp',
      },
    },
    tab_groups_aggregate: {
      __type: 'tab_group_aggregate!',
      __args: {
        distinct_on: '[tab_group_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[tab_group_order_by!]',
        where: 'tab_group_bool_exp',
      },
    },
    title: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
    url: { __type: 'String' },
  },
  tabs_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'tabs_aggregate_fields' },
    nodes: { __type: '[tabs!]!' },
  },
  tabs_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[tabs_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'tabs_max_fields' },
    min: { __type: 'tabs_min_fields' },
  },
  tabs_bool_exp: {
    _and: { __type: '[tabs_bool_exp!]' },
    _not: { __type: 'tabs_bool_exp' },
    _or: { __type: '[tabs_bool_exp!]' },
    created_at: { __type: 'timestamp_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    incognito: { __type: 'Boolean_comparison_exp' },
    tab_groups: { __type: 'tab_group_bool_exp' },
    title: { __type: 'String_comparison_exp' },
    updated_at: { __type: 'timestamp_comparison_exp' },
    url: { __type: 'String_comparison_exp' },
  },
  tabs_insert_input: {
    created_at: { __type: 'timestamp' },
    id: { __type: 'uuid' },
    incognito: { __type: 'Boolean' },
    tab_groups: { __type: 'tab_group_arr_rel_insert_input' },
    title: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
    url: { __type: 'String' },
  },
  tabs_max_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamp' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
    url: { __type: 'String' },
  },
  tabs_min_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamp' },
    id: { __type: 'uuid' },
    title: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
    url: { __type: 'String' },
  },
  tabs_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[tabs!]!' },
  },
  tabs_obj_rel_insert_input: {
    data: { __type: 'tabs_insert_input!' },
    on_conflict: { __type: 'tabs_on_conflict' },
  },
  tabs_on_conflict: {
    constraint: { __type: 'tabs_constraint!' },
    update_columns: { __type: '[tabs_update_column!]!' },
    where: { __type: 'tabs_bool_exp' },
  },
  tabs_order_by: {
    created_at: { __type: 'order_by' },
    id: { __type: 'order_by' },
    incognito: { __type: 'order_by' },
    tab_groups_aggregate: { __type: 'tab_group_aggregate_order_by' },
    title: { __type: 'order_by' },
    updated_at: { __type: 'order_by' },
    url: { __type: 'order_by' },
  },
  tabs_pk_columns_input: { id: { __type: 'uuid!' } },
  tabs_set_input: {
    created_at: { __type: 'timestamp' },
    id: { __type: 'uuid' },
    incognito: { __type: 'Boolean' },
    title: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
    url: { __type: 'String' },
  },
  timestamp_comparison_exp: {
    _eq: { __type: 'timestamp' },
    _gt: { __type: 'timestamp' },
    _gte: { __type: 'timestamp' },
    _in: { __type: '[timestamp!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'timestamp' },
    _lte: { __type: 'timestamp' },
    _neq: { __type: 'timestamp' },
    _nin: { __type: '[timestamp!]' },
  },
  timestamptz_comparison_exp: {
    _eq: { __type: 'timestamptz' },
    _gt: { __type: 'timestamptz' },
    _gte: { __type: 'timestamptz' },
    _in: { __type: '[timestamptz!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'timestamptz' },
    _lte: { __type: 'timestamptz' },
    _neq: { __type: 'timestamptz' },
    _nin: { __type: '[timestamptz!]' },
  },
  uuid_comparison_exp: {
    _eq: { __type: 'uuid' },
    _gt: { __type: 'uuid' },
    _gte: { __type: 'uuid' },
    _in: { __type: '[uuid!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'uuid' },
    _lte: { __type: 'uuid' },
    _neq: { __type: 'uuid' },
    _nin: { __type: '[uuid!]' },
  },
} as const;

export interface Query {
  __typename: 'Query' | undefined;
  groups: (args?: {
    distinct_on?: Maybe<Array<groups_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<groups_order_by>>;
    where?: Maybe<groups_bool_exp>;
  }) => Array<groups>;
  groups_aggregate: (args?: {
    distinct_on?: Maybe<Array<groups_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<groups_order_by>>;
    where?: Maybe<groups_bool_exp>;
  }) => groups_aggregate;
  groups_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<groups>;
  tab_group: (args?: {
    distinct_on?: Maybe<Array<tab_group_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tab_group_order_by>>;
    where?: Maybe<tab_group_bool_exp>;
  }) => Array<tab_group>;
  tab_group_aggregate: (args?: {
    distinct_on?: Maybe<Array<tab_group_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tab_group_order_by>>;
    where?: Maybe<tab_group_bool_exp>;
  }) => tab_group_aggregate;
  tab_group_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<tab_group>;
  tabs: (args?: {
    distinct_on?: Maybe<Array<tabs_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tabs_order_by>>;
    where?: Maybe<tabs_bool_exp>;
  }) => Array<tabs>;
  tabs_aggregate: (args?: {
    distinct_on?: Maybe<Array<tabs_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tabs_order_by>>;
    where?: Maybe<tabs_bool_exp>;
  }) => tabs_aggregate;
  tabs_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<tabs>;
}

export interface Mutation {
  __typename: 'Mutation' | undefined;
  delete_groups: (args: {
    where: groups_bool_exp;
  }) => Maybe<groups_mutation_response>;
  delete_groups_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<groups>;
  delete_tab_group: (args: {
    where: tab_group_bool_exp;
  }) => Maybe<tab_group_mutation_response>;
  delete_tab_group_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<tab_group>;
  delete_tabs: (args: {
    where: tabs_bool_exp;
  }) => Maybe<tabs_mutation_response>;
  delete_tabs_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<tabs>;
  insert_groups: (args: {
    objects: Array<groups_insert_input>;
    on_conflict?: Maybe<groups_on_conflict>;
  }) => Maybe<groups_mutation_response>;
  insert_groups_one: (args: {
    object: groups_insert_input;
    on_conflict?: Maybe<groups_on_conflict>;
  }) => Maybe<groups>;
  insert_tab_group: (args: {
    objects: Array<tab_group_insert_input>;
    on_conflict?: Maybe<tab_group_on_conflict>;
  }) => Maybe<tab_group_mutation_response>;
  insert_tab_group_one: (args: {
    object: tab_group_insert_input;
    on_conflict?: Maybe<tab_group_on_conflict>;
  }) => Maybe<tab_group>;
  insert_tabs: (args: {
    objects: Array<tabs_insert_input>;
    on_conflict?: Maybe<tabs_on_conflict>;
  }) => Maybe<tabs_mutation_response>;
  insert_tabs_one: (args: {
    object: tabs_insert_input;
    on_conflict?: Maybe<tabs_on_conflict>;
  }) => Maybe<tabs>;
  update_groups: (args: {
    _set?: Maybe<groups_set_input>;
    where: groups_bool_exp;
  }) => Maybe<groups_mutation_response>;
  update_groups_by_pk: (args: {
    _set?: Maybe<groups_set_input>;
    pk_columns: groups_pk_columns_input;
  }) => Maybe<groups>;
  update_tab_group: (args: {
    _set?: Maybe<tab_group_set_input>;
    where: tab_group_bool_exp;
  }) => Maybe<tab_group_mutation_response>;
  update_tab_group_by_pk: (args: {
    _set?: Maybe<tab_group_set_input>;
    pk_columns: tab_group_pk_columns_input;
  }) => Maybe<tab_group>;
  update_tabs: (args: {
    _set?: Maybe<tabs_set_input>;
    where: tabs_bool_exp;
  }) => Maybe<tabs_mutation_response>;
  update_tabs_by_pk: (args: {
    _set?: Maybe<tabs_set_input>;
    pk_columns: tabs_pk_columns_input;
  }) => Maybe<tabs>;
}

export interface Subscription {
  __typename: 'Subscription' | undefined;
  groups: (args?: {
    distinct_on?: Maybe<Array<groups_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<groups_order_by>>;
    where?: Maybe<groups_bool_exp>;
  }) => Array<groups>;
  groups_aggregate: (args?: {
    distinct_on?: Maybe<Array<groups_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<groups_order_by>>;
    where?: Maybe<groups_bool_exp>;
  }) => groups_aggregate;
  groups_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<groups>;
  tab_group: (args?: {
    distinct_on?: Maybe<Array<tab_group_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tab_group_order_by>>;
    where?: Maybe<tab_group_bool_exp>;
  }) => Array<tab_group>;
  tab_group_aggregate: (args?: {
    distinct_on?: Maybe<Array<tab_group_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tab_group_order_by>>;
    where?: Maybe<tab_group_bool_exp>;
  }) => tab_group_aggregate;
  tab_group_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<tab_group>;
  tabs: (args?: {
    distinct_on?: Maybe<Array<tabs_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tabs_order_by>>;
    where?: Maybe<tabs_bool_exp>;
  }) => Array<tabs>;
  tabs_aggregate: (args?: {
    distinct_on?: Maybe<Array<tabs_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<tabs_order_by>>;
    where?: Maybe<tabs_bool_exp>;
  }) => tabs_aggregate;
  tabs_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<tabs>;
}

/**
 * columns and relationships of "groups"
 */
export interface groups {
  __typename: 'groups' | undefined;
  created_at?: Maybe<ScalarsEnums['timestamp']>;
  /**
   * An array relationship
   */
  group_tabs: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<tab_group_select_column>>
    /**
     * limit the number of rows returned
     */;
    limit?: Maybe<Scalars['Int']>
    /**
     * skip the first n rows. Use only with order_by
     */;
    offset?: Maybe<Scalars['Int']>
    /**
     * sort the rows by one or more columns
     */;
    order_by?: Maybe<Array<tab_group_order_by>>
    /**
     * filter the rows returned
     */;
    where?: Maybe<tab_group_bool_exp>;
  }) => Array<tab_group>;
  /**
   * An aggregate relationship
   */
  group_tabs_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<tab_group_select_column>>
    /**
     * limit the number of rows returned
     */;
    limit?: Maybe<Scalars['Int']>
    /**
     * skip the first n rows. Use only with order_by
     */;
    offset?: Maybe<Scalars['Int']>
    /**
     * sort the rows by one or more columns
     */;
    order_by?: Maybe<Array<tab_group_order_by>>
    /**
     * filter the rows returned
     */;
    where?: Maybe<tab_group_bool_exp>;
  }) => tab_group_aggregate;
  id: ScalarsEnums['uuid'];
  title?: Maybe<ScalarsEnums['String']>;
  type?: Maybe<ScalarsEnums['String']>;
  updated_at?: Maybe<ScalarsEnums['timestamp']>;
}

/**
 * aggregated selection of "groups"
 */
export interface groups_aggregate {
  __typename: 'groups_aggregate' | undefined;
  aggregate?: Maybe<groups_aggregate_fields>;
  nodes: Array<groups>;
}

/**
 * aggregate fields of "groups"
 */
export interface groups_aggregate_fields {
  __typename: 'groups_aggregate_fields' | undefined;
  count: (args?: {
    columns?: Maybe<Array<groups_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<groups_max_fields>;
  min?: Maybe<groups_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface groups_max_fields {
  __typename: 'groups_max_fields' | undefined;
  created_at?: Maybe<ScalarsEnums['timestamp']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  title?: Maybe<ScalarsEnums['String']>;
  type?: Maybe<ScalarsEnums['String']>;
  updated_at?: Maybe<ScalarsEnums['timestamp']>;
}

/**
 * aggregate min on columns
 */
export interface groups_min_fields {
  __typename: 'groups_min_fields' | undefined;
  created_at?: Maybe<ScalarsEnums['timestamp']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  title?: Maybe<ScalarsEnums['String']>;
  type?: Maybe<ScalarsEnums['String']>;
  updated_at?: Maybe<ScalarsEnums['timestamp']>;
}

/**
 * response of any mutation on the table "groups"
 */
export interface groups_mutation_response {
  __typename: 'groups_mutation_response' | undefined;
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<groups>;
}

/**
 * columns and relationships of "tab_group"
 */
export interface tab_group {
  __typename: 'tab_group' | undefined;
  created_at: ScalarsEnums['timestamptz'];
  /**
   * An object relationship
   */
  group: groups;
  group_id: ScalarsEnums['uuid'];
  id: ScalarsEnums['uuid'];
  /**
   * An object relationship
   */
  tab: tabs;
  tab_id: ScalarsEnums['uuid'];
  updated_at: ScalarsEnums['timestamptz'];
}

/**
 * aggregated selection of "tab_group"
 */
export interface tab_group_aggregate {
  __typename: 'tab_group_aggregate' | undefined;
  aggregate?: Maybe<tab_group_aggregate_fields>;
  nodes: Array<tab_group>;
}

/**
 * aggregate fields of "tab_group"
 */
export interface tab_group_aggregate_fields {
  __typename: 'tab_group_aggregate_fields' | undefined;
  count: (args?: {
    columns?: Maybe<Array<tab_group_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<tab_group_max_fields>;
  min?: Maybe<tab_group_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface tab_group_max_fields {
  __typename: 'tab_group_max_fields' | undefined;
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  group_id?: Maybe<ScalarsEnums['uuid']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  tab_id?: Maybe<ScalarsEnums['uuid']>;
  updated_at?: Maybe<ScalarsEnums['timestamptz']>;
}

/**
 * aggregate min on columns
 */
export interface tab_group_min_fields {
  __typename: 'tab_group_min_fields' | undefined;
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  group_id?: Maybe<ScalarsEnums['uuid']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  tab_id?: Maybe<ScalarsEnums['uuid']>;
  updated_at?: Maybe<ScalarsEnums['timestamptz']>;
}

/**
 * response of any mutation on the table "tab_group"
 */
export interface tab_group_mutation_response {
  __typename: 'tab_group_mutation_response' | undefined;
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<tab_group>;
}

/**
 * columns and relationships of "tabs"
 */
export interface tabs {
  __typename: 'tabs' | undefined;
  created_at?: Maybe<ScalarsEnums['timestamp']>;
  id: ScalarsEnums['uuid'];
  incognito: ScalarsEnums['Boolean'];
  /**
   * An array relationship
   */
  tab_groups: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<tab_group_select_column>>
    /**
     * limit the number of rows returned
     */;
    limit?: Maybe<Scalars['Int']>
    /**
     * skip the first n rows. Use only with order_by
     */;
    offset?: Maybe<Scalars['Int']>
    /**
     * sort the rows by one or more columns
     */;
    order_by?: Maybe<Array<tab_group_order_by>>
    /**
     * filter the rows returned
     */;
    where?: Maybe<tab_group_bool_exp>;
  }) => Array<tab_group>;
  /**
   * An aggregate relationship
   */
  tab_groups_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<tab_group_select_column>>
    /**
     * limit the number of rows returned
     */;
    limit?: Maybe<Scalars['Int']>
    /**
     * skip the first n rows. Use only with order_by
     */;
    offset?: Maybe<Scalars['Int']>
    /**
     * sort the rows by one or more columns
     */;
    order_by?: Maybe<Array<tab_group_order_by>>
    /**
     * filter the rows returned
     */;
    where?: Maybe<tab_group_bool_exp>;
  }) => tab_group_aggregate;
  title?: Maybe<ScalarsEnums['String']>;
  updated_at?: Maybe<ScalarsEnums['timestamp']>;
  url?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregated selection of "tabs"
 */
export interface tabs_aggregate {
  __typename: 'tabs_aggregate' | undefined;
  aggregate?: Maybe<tabs_aggregate_fields>;
  nodes: Array<tabs>;
}

/**
 * aggregate fields of "tabs"
 */
export interface tabs_aggregate_fields {
  __typename: 'tabs_aggregate_fields' | undefined;
  count: (args?: {
    columns?: Maybe<Array<tabs_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<tabs_max_fields>;
  min?: Maybe<tabs_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface tabs_max_fields {
  __typename: 'tabs_max_fields' | undefined;
  created_at?: Maybe<ScalarsEnums['timestamp']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  title?: Maybe<ScalarsEnums['String']>;
  updated_at?: Maybe<ScalarsEnums['timestamp']>;
  url?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregate min on columns
 */
export interface tabs_min_fields {
  __typename: 'tabs_min_fields' | undefined;
  created_at?: Maybe<ScalarsEnums['timestamp']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  title?: Maybe<ScalarsEnums['String']>;
  updated_at?: Maybe<ScalarsEnums['timestamp']>;
  url?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "tabs"
 */
export interface tabs_mutation_response {
  __typename: 'tabs_mutation_response' | undefined;
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<tabs>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  groups: groups;
  groups_aggregate: groups_aggregate;
  groups_aggregate_fields: groups_aggregate_fields;
  groups_max_fields: groups_max_fields;
  groups_min_fields: groups_min_fields;
  groups_mutation_response: groups_mutation_response;
  tab_group: tab_group;
  tab_group_aggregate: tab_group_aggregate;
  tab_group_aggregate_fields: tab_group_aggregate_fields;
  tab_group_max_fields: tab_group_max_fields;
  tab_group_min_fields: tab_group_min_fields;
  tab_group_mutation_response: tab_group_mutation_response;
  tabs: tabs;
  tabs_aggregate: tabs_aggregate;
  tabs_aggregate_fields: tabs_aggregate_fields;
  tabs_max_fields: tabs_max_fields;
  tabs_min_fields: tabs_min_fields;
  tabs_mutation_response: tabs_mutation_response;
}
export type SchemaObjectTypesNames =
  | 'Query'
  | 'Mutation'
  | 'Subscription'
  | 'groups'
  | 'groups_aggregate'
  | 'groups_aggregate_fields'
  | 'groups_max_fields'
  | 'groups_min_fields'
  | 'groups_mutation_response'
  | 'tab_group'
  | 'tab_group_aggregate'
  | 'tab_group_aggregate_fields'
  | 'tab_group_max_fields'
  | 'tab_group_min_fields'
  | 'tab_group_mutation_response'
  | 'tabs'
  | 'tabs_aggregate'
  | 'tabs_aggregate_fields'
  | 'tabs_max_fields'
  | 'tabs_min_fields'
  | 'tabs_mutation_response';

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  groups_constraint: groups_constraint | undefined;
  groups_select_column: groups_select_column | undefined;
  groups_update_column: groups_update_column | undefined;
  order_by: order_by | undefined;
  tab_group_constraint: tab_group_constraint | undefined;
  tab_group_select_column: tab_group_select_column | undefined;
  tab_group_update_column: tab_group_update_column | undefined;
  tabs_constraint: tabs_constraint | undefined;
  tabs_select_column: tabs_select_column | undefined;
  tabs_update_column: tabs_update_column | undefined;
}
