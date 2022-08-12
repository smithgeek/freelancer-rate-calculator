import { fetchRequester } from "../FetchRequester";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "subscriptions" */
  delete_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** delete single row from the table: "subscriptions" */
  delete_subscriptions_by_pk?: Maybe<Subscriptions>;
  /** delete data from the table: "user_roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** delete single row from the table: "user_roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "subscriptions" */
  insert_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** insert a single row into the table: "subscriptions" */
  insert_subscriptions_one?: Maybe<Subscriptions>;
  /** insert data into the table: "user_roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user_roles" */
  insert_user_roles_one?: Maybe<User_Roles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "subscriptions" */
  update_subscriptions?: Maybe<Subscriptions_Mutation_Response>;
  /** update single row of the table: "subscriptions" */
  update_subscriptions_by_pk?: Maybe<Subscriptions>;
  /** update data of the table: "user_roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** update single row of the table: "user_roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_SubscriptionsArgs = {
  where: Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscriptions_By_PkArgs = {
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  roleId: Scalars['Int'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_SubscriptionsArgs = {
  objects: Array<Subscriptions_Insert_Input>;
  on_conflict?: InputMaybe<Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscriptions_OneArgs = {
  object: Subscriptions_Insert_Input;
  on_conflict?: InputMaybe<Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_SubscriptionsArgs = {
  _inc?: InputMaybe<Subscriptions_Inc_Input>;
  _set?: InputMaybe<Subscriptions_Set_Input>;
  where: Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscriptions_By_PkArgs = {
  _inc?: InputMaybe<Subscriptions_Inc_Input>;
  _set?: InputMaybe<Subscriptions_Set_Input>;
  pk_columns: Subscriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_RolesArgs = {
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  _set?: InputMaybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  _set?: InputMaybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "subscriptions" */
  subscriptions: Array<Subscriptions>;
  /** fetch aggregated fields from the table: "subscriptions" */
  subscriptions_aggregate: Subscriptions_Aggregate;
  /** fetch data from the table: "subscriptions" using primary key columns */
  subscriptions_by_pk?: Maybe<Subscriptions>;
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Query_RootSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Query_RootSubscriptions_By_PkArgs = {
  userId: Scalars['uuid'];
};


export type Query_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_By_PkArgs = {
  roleId: Scalars['Int'];
  userId: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "subscriptions" */
  subscriptions: Array<Subscriptions>;
  /** fetch aggregated fields from the table: "subscriptions" */
  subscriptions_aggregate: Subscriptions_Aggregate;
  /** fetch data from the table: "subscriptions" using primary key columns */
  subscriptions_by_pk?: Maybe<Subscriptions>;
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Subscription_RootSubscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Subscription_RootSubscriptions_By_PkArgs = {
  userId: Scalars['uuid'];
};


export type Subscription_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_By_PkArgs = {
  roleId: Scalars['Int'];
  userId: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "subscriptions" */
export type Subscriptions = {
  __typename?: 'subscriptions';
  status: Scalars['Int'];
  stripeId: Scalars['String'];
  userId: Scalars['uuid'];
};

/** aggregated selection of "subscriptions" */
export type Subscriptions_Aggregate = {
  __typename?: 'subscriptions_aggregate';
  aggregate?: Maybe<Subscriptions_Aggregate_Fields>;
  nodes: Array<Subscriptions>;
};

/** aggregate fields of "subscriptions" */
export type Subscriptions_Aggregate_Fields = {
  __typename?: 'subscriptions_aggregate_fields';
  avg?: Maybe<Subscriptions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Subscriptions_Max_Fields>;
  min?: Maybe<Subscriptions_Min_Fields>;
  stddev?: Maybe<Subscriptions_Stddev_Fields>;
  stddev_pop?: Maybe<Subscriptions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subscriptions_Stddev_Samp_Fields>;
  sum?: Maybe<Subscriptions_Sum_Fields>;
  var_pop?: Maybe<Subscriptions_Var_Pop_Fields>;
  var_samp?: Maybe<Subscriptions_Var_Samp_Fields>;
  variance?: Maybe<Subscriptions_Variance_Fields>;
};


/** aggregate fields of "subscriptions" */
export type Subscriptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Subscriptions_Avg_Fields = {
  __typename?: 'subscriptions_avg_fields';
  status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "subscriptions". All fields are combined with a logical 'AND'. */
export type Subscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Subscriptions_Bool_Exp>>;
  _not?: InputMaybe<Subscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Subscriptions_Bool_Exp>>;
  status?: InputMaybe<Int_Comparison_Exp>;
  stripeId?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscriptions" */
export enum Subscriptions_Constraint {
  /** unique or primary key constraint on columns "userId" */
  SubscriptionsPkey = 'subscriptions_pkey'
}

/** input type for incrementing numeric columns in table "subscriptions" */
export type Subscriptions_Inc_Input = {
  status?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "subscriptions" */
export type Subscriptions_Insert_Input = {
  status?: InputMaybe<Scalars['Int']>;
  stripeId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Subscriptions_Max_Fields = {
  __typename?: 'subscriptions_max_fields';
  status?: Maybe<Scalars['Int']>;
  stripeId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Subscriptions_Min_Fields = {
  __typename?: 'subscriptions_min_fields';
  status?: Maybe<Scalars['Int']>;
  stripeId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "subscriptions" */
export type Subscriptions_Mutation_Response = {
  __typename?: 'subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscriptions>;
};

/** input type for inserting object relation for remote table "subscriptions" */
export type Subscriptions_Obj_Rel_Insert_Input = {
  data: Subscriptions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscriptions_On_Conflict>;
};

/** on_conflict condition type for table "subscriptions" */
export type Subscriptions_On_Conflict = {
  constraint: Subscriptions_Constraint;
  update_columns?: Array<Subscriptions_Update_Column>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};

/** Ordering options when selecting data from "subscriptions". */
export type Subscriptions_Order_By = {
  status?: InputMaybe<Order_By>;
  stripeId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscriptions */
export type Subscriptions_Pk_Columns_Input = {
  userId: Scalars['uuid'];
};

/** select columns of table "subscriptions" */
export enum Subscriptions_Select_Column {
  /** column name */
  Status = 'status',
  /** column name */
  StripeId = 'stripeId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "subscriptions" */
export type Subscriptions_Set_Input = {
  status?: InputMaybe<Scalars['Int']>;
  stripeId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Subscriptions_Stddev_Fields = {
  __typename?: 'subscriptions_stddev_fields';
  status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Subscriptions_Stddev_Pop_Fields = {
  __typename?: 'subscriptions_stddev_pop_fields';
  status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Subscriptions_Stddev_Samp_Fields = {
  __typename?: 'subscriptions_stddev_samp_fields';
  status?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Subscriptions_Sum_Fields = {
  __typename?: 'subscriptions_sum_fields';
  status?: Maybe<Scalars['Int']>;
};

/** update columns of table "subscriptions" */
export enum Subscriptions_Update_Column {
  /** column name */
  Status = 'status',
  /** column name */
  StripeId = 'stripeId',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Subscriptions_Var_Pop_Fields = {
  __typename?: 'subscriptions_var_pop_fields';
  status?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Subscriptions_Var_Samp_Fields = {
  __typename?: 'subscriptions_var_samp_fields';
  status?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Subscriptions_Variance_Fields = {
  __typename?: 'subscriptions_variance_fields';
  status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_roles" */
export type User_Roles = {
  __typename?: 'user_roles';
  roleId: Scalars['Int'];
  userId: Scalars['uuid'];
};

/** aggregated selection of "user_roles" */
export type User_Roles_Aggregate = {
  __typename?: 'user_roles_aggregate';
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_Fields = {
  __typename?: 'user_roles_aggregate_fields';
  avg?: Maybe<User_Roles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
  stddev?: Maybe<User_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<User_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<User_Roles_Sum_Fields>;
  var_pop?: Maybe<User_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<User_Roles_Var_Samp_Fields>;
  variance?: Maybe<User_Roles_Variance_Fields>;
};


/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_roles" */
export type User_Roles_Aggregate_Order_By = {
  avg?: InputMaybe<User_Roles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Roles_Max_Order_By>;
  min?: InputMaybe<User_Roles_Min_Order_By>;
  stddev?: InputMaybe<User_Roles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Roles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Roles_Sum_Order_By>;
  var_pop?: InputMaybe<User_Roles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Roles_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_roles" */
export type User_Roles_Arr_Rel_Insert_Input = {
  data: Array<User_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Roles_Avg_Fields = {
  __typename?: 'user_roles_avg_fields';
  roleId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_roles" */
export type User_Roles_Avg_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  _not?: InputMaybe<User_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  roleId?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export enum User_Roles_Constraint {
  /** unique or primary key constraint on columns "roleId", "userId" */
  UserRolesPkey = 'user_roles_pkey'
}

/** input type for incrementing numeric columns in table "user_roles" */
export type User_Roles_Inc_Input = {
  roleId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  roleId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  __typename?: 'user_roles_max_fields';
  roleId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_roles" */
export type User_Roles_Max_Order_By = {
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  __typename?: 'user_roles_min_fields';
  roleId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_roles" */
export type User_Roles_Min_Order_By = {
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_roles" */
export type User_Roles_Mutation_Response = {
  __typename?: 'user_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Roles>;
};

/** on_conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns?: Array<User_Roles_Update_Column>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "user_roles". */
export type User_Roles_Order_By = {
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  roleId: Scalars['Int'];
  userId: Scalars['uuid'];
};

/** select columns of table "user_roles" */
export enum User_Roles_Select_Column {
  /** column name */
  RoleId = 'roleId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  roleId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Roles_Stddev_Fields = {
  __typename?: 'user_roles_stddev_fields';
  roleId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_roles" */
export type User_Roles_Stddev_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Roles_Stddev_Pop_Fields = {
  __typename?: 'user_roles_stddev_pop_fields';
  roleId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_roles" */
export type User_Roles_Stddev_Pop_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Roles_Stddev_Samp_Fields = {
  __typename?: 'user_roles_stddev_samp_fields';
  roleId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_roles" */
export type User_Roles_Stddev_Samp_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Roles_Sum_Fields = {
  __typename?: 'user_roles_sum_fields';
  roleId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_roles" */
export type User_Roles_Sum_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** update columns of table "user_roles" */
export enum User_Roles_Update_Column {
  /** column name */
  RoleId = 'roleId',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type User_Roles_Var_Pop_Fields = {
  __typename?: 'user_roles_var_pop_fields';
  roleId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_roles" */
export type User_Roles_Var_Pop_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Roles_Var_Samp_Fields = {
  __typename?: 'user_roles_var_samp_fields';
  roleId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_roles" */
export type User_Roles_Var_Samp_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Roles_Variance_Fields = {
  __typename?: 'user_roles_variance_fields';
  roleId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_roles" */
export type User_Roles_Variance_Order_By = {
  roleId?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  providerUid: Scalars['String'];
  /** An array relationship */
  roles: Array<User_Roles>;
  /** An aggregate relationship */
  roles_aggregate: User_Roles_Aggregate;
  /** An object relationship */
  subscription?: Maybe<Subscriptions>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  providerUid?: InputMaybe<String_Comparison_Exp>;
  roles?: InputMaybe<User_Roles_Bool_Exp>;
  subscription?: InputMaybe<Subscriptions_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "providerUid" */
  UsersProviderUidKey = 'users_providerUid_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  providerUid?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<User_Roles_Arr_Rel_Insert_Input>;
  subscription?: InputMaybe<Subscriptions_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  providerUid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  providerUid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  providerUid?: InputMaybe<Order_By>;
  roles_aggregate?: InputMaybe<User_Roles_Aggregate_Order_By>;
  subscription?: InputMaybe<Subscriptions_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProviderUid = 'providerUid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  providerUid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProviderUid = 'providerUid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type Admin_GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type Admin_GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name?: string | null, email?: string | null, subscription?: { __typename?: 'subscriptions', status: number } | null }> };


 const Admin_GetUsersDocument = `
    query Admin_GetUsers {
  users {
    id
    name
    email
    subscription {
      status
    }
  }
}
    `;
export type Requester<C= {}> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    Admin_GetUsers(variables?: Admin_GetUsersQueryVariables, options?: C): Promise<Admin_GetUsersQuery> {
      return requester<Admin_GetUsersQuery, Admin_GetUsersQueryVariables>(Admin_GetUsersDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export const adminSdk = getSdk(fetchRequester('admin'));