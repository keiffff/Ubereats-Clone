import { DocumentNode } from 'graphql';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "food_categories" */
export type FoodCategories = {
  __typename?: 'food_categories';
  /** An array relationship */
  foods: Array<Foods>;
  /** An aggregated array relationship */
  foods_aggregate: FoodsAggregate;
  name: Scalars['String'];
  photo: Scalars['String'];
  uuid: Scalars['uuid'];
};


/** columns and relationships of "food_categories" */
export type FoodCategoriesFoodsArgs = {
  distinct_on?: Maybe<Array<FoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodsOrderBy>>;
  where?: Maybe<FoodsBoolExp>;
};


/** columns and relationships of "food_categories" */
export type FoodCategoriesFoodsAggregateArgs = {
  distinct_on?: Maybe<Array<FoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodsOrderBy>>;
  where?: Maybe<FoodsBoolExp>;
};

/** aggregated selection of "food_categories" */
export type FoodCategoriesAggregate = {
  __typename?: 'food_categories_aggregate';
  aggregate?: Maybe<FoodCategoriesAggregateFields>;
  nodes: Array<FoodCategories>;
};

/** aggregate fields of "food_categories" */
export type FoodCategoriesAggregateFields = {
  __typename?: 'food_categories_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<FoodCategoriesMaxFields>;
  min?: Maybe<FoodCategoriesMinFields>;
};


/** aggregate fields of "food_categories" */
export type FoodCategoriesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<FoodCategoriesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "food_categories" */
export type FoodCategoriesAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<FoodCategoriesMaxOrderBy>;
  min?: Maybe<FoodCategoriesMinOrderBy>;
};

/** input type for inserting array relation for remote table "food_categories" */
export type FoodCategoriesArrRelInsertInput = {
  data: Array<FoodCategoriesInsertInput>;
  on_conflict?: Maybe<FoodCategoriesOnConflict>;
};

/** Boolean expression to filter rows from the table "food_categories". All fields are combined with a logical 'AND'. */
export type FoodCategoriesBoolExp = {
  _and?: Maybe<Array<Maybe<FoodCategoriesBoolExp>>>;
  _not?: Maybe<FoodCategoriesBoolExp>;
  _or?: Maybe<Array<Maybe<FoodCategoriesBoolExp>>>;
  foods?: Maybe<FoodsBoolExp>;
  name?: Maybe<StringComparisonExp>;
  photo?: Maybe<StringComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "food_categories" */
export enum FoodCategoriesConstraint {
  /** unique or primary key constraint */
  FoodCategoriesPkey = 'food_categories_pkey'
}

/** input type for inserting data into table "food_categories" */
export type FoodCategoriesInsertInput = {
  foods?: Maybe<FoodsArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FoodCategoriesMaxFields = {
  __typename?: 'food_categories_max_fields';
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "food_categories" */
export type FoodCategoriesMaxOrderBy = {
  name?: Maybe<OrderBy>;
  photo?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type FoodCategoriesMinFields = {
  __typename?: 'food_categories_min_fields';
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "food_categories" */
export type FoodCategoriesMinOrderBy = {
  name?: Maybe<OrderBy>;
  photo?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** response of any mutation on the table "food_categories" */
export type FoodCategoriesMutationResponse = {
  __typename?: 'food_categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<FoodCategories>;
};

/** input type for inserting object relation for remote table "food_categories" */
export type FoodCategoriesObjRelInsertInput = {
  data: FoodCategoriesInsertInput;
  on_conflict?: Maybe<FoodCategoriesOnConflict>;
};

/** on conflict condition type for table "food_categories" */
export type FoodCategoriesOnConflict = {
  constraint: FoodCategoriesConstraint;
  update_columns: Array<FoodCategoriesUpdateColumn>;
  where?: Maybe<FoodCategoriesBoolExp>;
};

/** ordering options when selecting data from "food_categories" */
export type FoodCategoriesOrderBy = {
  foods_aggregate?: Maybe<FoodsAggregateOrderBy>;
  name?: Maybe<OrderBy>;
  photo?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** primary key columns input for table: "food_categories" */
export type FoodCategoriesPkColumnsInput = {
  uuid: Scalars['uuid'];
};

/** select columns of table "food_categories" */
export enum FoodCategoriesSelectColumn {
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "food_categories" */
export type FoodCategoriesSetInput = {
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "food_categories" */
export enum FoodCategoriesUpdateColumn {
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  Uuid = 'uuid'
}

/** columns and relationships of "food_details" */
export type FoodDetails = {
  __typename?: 'food_details';
  /** An object relationship */
  food: Foods;
  food_uuid: Scalars['uuid'];
  photo: Scalars['String'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "food_details" */
export type FoodDetailsAggregate = {
  __typename?: 'food_details_aggregate';
  aggregate?: Maybe<FoodDetailsAggregateFields>;
  nodes: Array<FoodDetails>;
};

/** aggregate fields of "food_details" */
export type FoodDetailsAggregateFields = {
  __typename?: 'food_details_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<FoodDetailsMaxFields>;
  min?: Maybe<FoodDetailsMinFields>;
};


/** aggregate fields of "food_details" */
export type FoodDetailsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<FoodDetailsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "food_details" */
export type FoodDetailsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<FoodDetailsMaxOrderBy>;
  min?: Maybe<FoodDetailsMinOrderBy>;
};

/** input type for inserting array relation for remote table "food_details" */
export type FoodDetailsArrRelInsertInput = {
  data: Array<FoodDetailsInsertInput>;
  on_conflict?: Maybe<FoodDetailsOnConflict>;
};

/** Boolean expression to filter rows from the table "food_details". All fields are combined with a logical 'AND'. */
export type FoodDetailsBoolExp = {
  _and?: Maybe<Array<Maybe<FoodDetailsBoolExp>>>;
  _not?: Maybe<FoodDetailsBoolExp>;
  _or?: Maybe<Array<Maybe<FoodDetailsBoolExp>>>;
  food?: Maybe<FoodsBoolExp>;
  food_uuid?: Maybe<UuidComparisonExp>;
  photo?: Maybe<StringComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "food_details" */
export enum FoodDetailsConstraint {
  /** unique or primary key constraint */
  FoodDetailsPkey = 'food_details_pkey'
}

/** input type for inserting data into table "food_details" */
export type FoodDetailsInsertInput = {
  food?: Maybe<FoodsObjRelInsertInput>;
  food_uuid?: Maybe<Scalars['uuid']>;
  photo?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FoodDetailsMaxFields = {
  __typename?: 'food_details_max_fields';
  food_uuid?: Maybe<Scalars['uuid']>;
  photo?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "food_details" */
export type FoodDetailsMaxOrderBy = {
  food_uuid?: Maybe<OrderBy>;
  photo?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type FoodDetailsMinFields = {
  __typename?: 'food_details_min_fields';
  food_uuid?: Maybe<Scalars['uuid']>;
  photo?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "food_details" */
export type FoodDetailsMinOrderBy = {
  food_uuid?: Maybe<OrderBy>;
  photo?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** response of any mutation on the table "food_details" */
export type FoodDetailsMutationResponse = {
  __typename?: 'food_details_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<FoodDetails>;
};

/** input type for inserting object relation for remote table "food_details" */
export type FoodDetailsObjRelInsertInput = {
  data: FoodDetailsInsertInput;
  on_conflict?: Maybe<FoodDetailsOnConflict>;
};

/** on conflict condition type for table "food_details" */
export type FoodDetailsOnConflict = {
  constraint: FoodDetailsConstraint;
  update_columns: Array<FoodDetailsUpdateColumn>;
  where?: Maybe<FoodDetailsBoolExp>;
};

/** ordering options when selecting data from "food_details" */
export type FoodDetailsOrderBy = {
  food?: Maybe<FoodsOrderBy>;
  food_uuid?: Maybe<OrderBy>;
  photo?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** primary key columns input for table: "food_details" */
export type FoodDetailsPkColumnsInput = {
  uuid: Scalars['uuid'];
};

/** select columns of table "food_details" */
export enum FoodDetailsSelectColumn {
  /** column name */
  FoodUuid = 'food_uuid',
  /** column name */
  Photo = 'photo',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "food_details" */
export type FoodDetailsSetInput = {
  food_uuid?: Maybe<Scalars['uuid']>;
  photo?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "food_details" */
export enum FoodDetailsUpdateColumn {
  /** column name */
  FoodUuid = 'food_uuid',
  /** column name */
  Photo = 'photo',
  /** column name */
  Uuid = 'uuid'
}

/** columns and relationships of "foods" */
export type Foods = {
  __typename?: 'foods';
  category_uuid: Scalars['uuid'];
  description: Scalars['String'];
  /** An object relationship */
  food_category: FoodCategories;
  /** An array relationship */
  food_details: Array<FoodDetails>;
  /** An aggregated array relationship */
  food_details_aggregate: FoodDetailsAggregate;
  name: Scalars['String'];
  /** An array relationship */
  order_foods: Array<OrderFoods>;
  /** An aggregated array relationship */
  order_foods_aggregate: OrderFoodsAggregate;
  photo: Scalars['String'];
  price: Scalars['numeric'];
  /** An object relationship */
  restaurant: Restaurants;
  restaurant_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};


/** columns and relationships of "foods" */
export type FoodsFoodDetailsArgs = {
  distinct_on?: Maybe<Array<FoodDetailsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodDetailsOrderBy>>;
  where?: Maybe<FoodDetailsBoolExp>;
};


/** columns and relationships of "foods" */
export type FoodsFoodDetailsAggregateArgs = {
  distinct_on?: Maybe<Array<FoodDetailsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodDetailsOrderBy>>;
  where?: Maybe<FoodDetailsBoolExp>;
};


/** columns and relationships of "foods" */
export type FoodsOrderFoodsArgs = {
  distinct_on?: Maybe<Array<OrderFoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderFoodsOrderBy>>;
  where?: Maybe<OrderFoodsBoolExp>;
};


/** columns and relationships of "foods" */
export type FoodsOrderFoodsAggregateArgs = {
  distinct_on?: Maybe<Array<OrderFoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderFoodsOrderBy>>;
  where?: Maybe<OrderFoodsBoolExp>;
};

/** aggregated selection of "foods" */
export type FoodsAggregate = {
  __typename?: 'foods_aggregate';
  aggregate?: Maybe<FoodsAggregateFields>;
  nodes: Array<Foods>;
};

/** aggregate fields of "foods" */
export type FoodsAggregateFields = {
  __typename?: 'foods_aggregate_fields';
  avg?: Maybe<FoodsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<FoodsMaxFields>;
  min?: Maybe<FoodsMinFields>;
  stddev?: Maybe<FoodsStddevFields>;
  stddev_pop?: Maybe<FoodsStddevPopFields>;
  stddev_samp?: Maybe<FoodsStddevSampFields>;
  sum?: Maybe<FoodsSumFields>;
  var_pop?: Maybe<FoodsVarPopFields>;
  var_samp?: Maybe<FoodsVarSampFields>;
  variance?: Maybe<FoodsVarianceFields>;
};


/** aggregate fields of "foods" */
export type FoodsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<FoodsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "foods" */
export type FoodsAggregateOrderBy = {
  avg?: Maybe<FoodsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<FoodsMaxOrderBy>;
  min?: Maybe<FoodsMinOrderBy>;
  stddev?: Maybe<FoodsStddevOrderBy>;
  stddev_pop?: Maybe<FoodsStddevPopOrderBy>;
  stddev_samp?: Maybe<FoodsStddevSampOrderBy>;
  sum?: Maybe<FoodsSumOrderBy>;
  var_pop?: Maybe<FoodsVarPopOrderBy>;
  var_samp?: Maybe<FoodsVarSampOrderBy>;
  variance?: Maybe<FoodsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "foods" */
export type FoodsArrRelInsertInput = {
  data: Array<FoodsInsertInput>;
  on_conflict?: Maybe<FoodsOnConflict>;
};

/** aggregate avg on columns */
export type FoodsAvgFields = {
  __typename?: 'foods_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "foods" */
export type FoodsAvgOrderBy = {
  price?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "foods". All fields are combined with a logical 'AND'. */
export type FoodsBoolExp = {
  _and?: Maybe<Array<Maybe<FoodsBoolExp>>>;
  _not?: Maybe<FoodsBoolExp>;
  _or?: Maybe<Array<Maybe<FoodsBoolExp>>>;
  category_uuid?: Maybe<UuidComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  food_category?: Maybe<FoodCategoriesBoolExp>;
  food_details?: Maybe<FoodDetailsBoolExp>;
  name?: Maybe<StringComparisonExp>;
  order_foods?: Maybe<OrderFoodsBoolExp>;
  photo?: Maybe<StringComparisonExp>;
  price?: Maybe<NumericComparisonExp>;
  restaurant?: Maybe<RestaurantsBoolExp>;
  restaurant_uuid?: Maybe<UuidComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "foods" */
export enum FoodsConstraint {
  /** unique or primary key constraint */
  FoodsPkey = 'foods_pkey'
}

/** input type for incrementing integer column in table "foods" */
export type FoodsIncInput = {
  price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "foods" */
export type FoodsInsertInput = {
  category_uuid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  food_category?: Maybe<FoodCategoriesObjRelInsertInput>;
  food_details?: Maybe<FoodDetailsArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  order_foods?: Maybe<OrderFoodsArrRelInsertInput>;
  photo?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  restaurant?: Maybe<RestaurantsObjRelInsertInput>;
  restaurant_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FoodsMaxFields = {
  __typename?: 'foods_max_fields';
  category_uuid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  restaurant_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "foods" */
export type FoodsMaxOrderBy = {
  category_uuid?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  photo?: Maybe<OrderBy>;
  price?: Maybe<OrderBy>;
  restaurant_uuid?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type FoodsMinFields = {
  __typename?: 'foods_min_fields';
  category_uuid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  restaurant_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "foods" */
export type FoodsMinOrderBy = {
  category_uuid?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  photo?: Maybe<OrderBy>;
  price?: Maybe<OrderBy>;
  restaurant_uuid?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** response of any mutation on the table "foods" */
export type FoodsMutationResponse = {
  __typename?: 'foods_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Foods>;
};

/** input type for inserting object relation for remote table "foods" */
export type FoodsObjRelInsertInput = {
  data: FoodsInsertInput;
  on_conflict?: Maybe<FoodsOnConflict>;
};

/** on conflict condition type for table "foods" */
export type FoodsOnConflict = {
  constraint: FoodsConstraint;
  update_columns: Array<FoodsUpdateColumn>;
  where?: Maybe<FoodsBoolExp>;
};

/** ordering options when selecting data from "foods" */
export type FoodsOrderBy = {
  category_uuid?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  food_category?: Maybe<FoodCategoriesOrderBy>;
  food_details_aggregate?: Maybe<FoodDetailsAggregateOrderBy>;
  name?: Maybe<OrderBy>;
  order_foods_aggregate?: Maybe<OrderFoodsAggregateOrderBy>;
  photo?: Maybe<OrderBy>;
  price?: Maybe<OrderBy>;
  restaurant?: Maybe<RestaurantsOrderBy>;
  restaurant_uuid?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** primary key columns input for table: "foods" */
export type FoodsPkColumnsInput = {
  uuid: Scalars['uuid'];
};

/** select columns of table "foods" */
export enum FoodsSelectColumn {
  /** column name */
  CategoryUuid = 'category_uuid',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  Price = 'price',
  /** column name */
  RestaurantUuid = 'restaurant_uuid',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "foods" */
export type FoodsSetInput = {
  category_uuid?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  restaurant_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type FoodsStddevFields = {
  __typename?: 'foods_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "foods" */
export type FoodsStddevOrderBy = {
  price?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type FoodsStddevPopFields = {
  __typename?: 'foods_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "foods" */
export type FoodsStddevPopOrderBy = {
  price?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type FoodsStddevSampFields = {
  __typename?: 'foods_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "foods" */
export type FoodsStddevSampOrderBy = {
  price?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type FoodsSumFields = {
  __typename?: 'foods_sum_fields';
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "foods" */
export type FoodsSumOrderBy = {
  price?: Maybe<OrderBy>;
};

/** update columns of table "foods" */
export enum FoodsUpdateColumn {
  /** column name */
  CategoryUuid = 'category_uuid',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  Price = 'price',
  /** column name */
  RestaurantUuid = 'restaurant_uuid',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type FoodsVarPopFields = {
  __typename?: 'foods_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "foods" */
export type FoodsVarPopOrderBy = {
  price?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type FoodsVarSampFields = {
  __typename?: 'foods_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "foods" */
export type FoodsVarSampOrderBy = {
  price?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type FoodsVarianceFields = {
  __typename?: 'foods_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "foods" */
export type FoodsVarianceOrderBy = {
  price?: Maybe<OrderBy>;
};

/** columns and relationships of "inventories" */
export type Inventories = {
  __typename?: 'inventories';
  food_uuid: Scalars['uuid'];
  /** An object relationship */
  restaurant: Restaurants;
  restaurant_uuid: Scalars['uuid'];
  stock_available: Scalars['Boolean'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "inventories" */
export type InventoriesAggregate = {
  __typename?: 'inventories_aggregate';
  aggregate?: Maybe<InventoriesAggregateFields>;
  nodes: Array<Inventories>;
};

/** aggregate fields of "inventories" */
export type InventoriesAggregateFields = {
  __typename?: 'inventories_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<InventoriesMaxFields>;
  min?: Maybe<InventoriesMinFields>;
};


/** aggregate fields of "inventories" */
export type InventoriesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<InventoriesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "inventories" */
export type InventoriesAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<InventoriesMaxOrderBy>;
  min?: Maybe<InventoriesMinOrderBy>;
};

/** input type for inserting array relation for remote table "inventories" */
export type InventoriesArrRelInsertInput = {
  data: Array<InventoriesInsertInput>;
  on_conflict?: Maybe<InventoriesOnConflict>;
};

/** Boolean expression to filter rows from the table "inventories". All fields are combined with a logical 'AND'. */
export type InventoriesBoolExp = {
  _and?: Maybe<Array<Maybe<InventoriesBoolExp>>>;
  _not?: Maybe<InventoriesBoolExp>;
  _or?: Maybe<Array<Maybe<InventoriesBoolExp>>>;
  food_uuid?: Maybe<UuidComparisonExp>;
  restaurant?: Maybe<RestaurantsBoolExp>;
  restaurant_uuid?: Maybe<UuidComparisonExp>;
  stock_available?: Maybe<BooleanComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "inventories" */
export enum InventoriesConstraint {
  /** unique or primary key constraint */
  InventoriesPkey = 'inventories_pkey'
}

/** input type for inserting data into table "inventories" */
export type InventoriesInsertInput = {
  food_uuid?: Maybe<Scalars['uuid']>;
  restaurant?: Maybe<RestaurantsObjRelInsertInput>;
  restaurant_uuid?: Maybe<Scalars['uuid']>;
  stock_available?: Maybe<Scalars['Boolean']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type InventoriesMaxFields = {
  __typename?: 'inventories_max_fields';
  food_uuid?: Maybe<Scalars['uuid']>;
  restaurant_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "inventories" */
export type InventoriesMaxOrderBy = {
  food_uuid?: Maybe<OrderBy>;
  restaurant_uuid?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type InventoriesMinFields = {
  __typename?: 'inventories_min_fields';
  food_uuid?: Maybe<Scalars['uuid']>;
  restaurant_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "inventories" */
export type InventoriesMinOrderBy = {
  food_uuid?: Maybe<OrderBy>;
  restaurant_uuid?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** response of any mutation on the table "inventories" */
export type InventoriesMutationResponse = {
  __typename?: 'inventories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Inventories>;
};

/** input type for inserting object relation for remote table "inventories" */
export type InventoriesObjRelInsertInput = {
  data: InventoriesInsertInput;
  on_conflict?: Maybe<InventoriesOnConflict>;
};

/** on conflict condition type for table "inventories" */
export type InventoriesOnConflict = {
  constraint: InventoriesConstraint;
  update_columns: Array<InventoriesUpdateColumn>;
  where?: Maybe<InventoriesBoolExp>;
};

/** ordering options when selecting data from "inventories" */
export type InventoriesOrderBy = {
  food_uuid?: Maybe<OrderBy>;
  restaurant?: Maybe<RestaurantsOrderBy>;
  restaurant_uuid?: Maybe<OrderBy>;
  stock_available?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** primary key columns input for table: "inventories" */
export type InventoriesPkColumnsInput = {
  uuid: Scalars['uuid'];
};

/** select columns of table "inventories" */
export enum InventoriesSelectColumn {
  /** column name */
  FoodUuid = 'food_uuid',
  /** column name */
  RestaurantUuid = 'restaurant_uuid',
  /** column name */
  StockAvailable = 'stock_available',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "inventories" */
export type InventoriesSetInput = {
  food_uuid?: Maybe<Scalars['uuid']>;
  restaurant_uuid?: Maybe<Scalars['uuid']>;
  stock_available?: Maybe<Scalars['Boolean']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "inventories" */
export enum InventoriesUpdateColumn {
  /** column name */
  FoodUuid = 'food_uuid',
  /** column name */
  RestaurantUuid = 'restaurant_uuid',
  /** column name */
  StockAvailable = 'stock_available',
  /** column name */
  Uuid = 'uuid'
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "food_categories" */
  delete_food_categories?: Maybe<FoodCategoriesMutationResponse>;
  /** delete single row from the table: "food_categories" */
  delete_food_categories_by_pk?: Maybe<FoodCategories>;
  /** delete data from the table: "food_details" */
  delete_food_details?: Maybe<FoodDetailsMutationResponse>;
  /** delete single row from the table: "food_details" */
  delete_food_details_by_pk?: Maybe<FoodDetails>;
  /** delete data from the table: "foods" */
  delete_foods?: Maybe<FoodsMutationResponse>;
  /** delete single row from the table: "foods" */
  delete_foods_by_pk?: Maybe<Foods>;
  /** delete data from the table: "inventories" */
  delete_inventories?: Maybe<InventoriesMutationResponse>;
  /** delete single row from the table: "inventories" */
  delete_inventories_by_pk?: Maybe<Inventories>;
  /** delete data from the table: "order_foods" */
  delete_order_foods?: Maybe<OrderFoodsMutationResponse>;
  /** delete single row from the table: "order_foods" */
  delete_order_foods_by_pk?: Maybe<OrderFoods>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<OrdersMutationResponse>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "restaurants" */
  delete_restaurants?: Maybe<RestaurantsMutationResponse>;
  /** delete single row from the table: "restaurants" */
  delete_restaurants_by_pk?: Maybe<Restaurants>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "food_categories" */
  insert_food_categories?: Maybe<FoodCategoriesMutationResponse>;
  /** insert a single row into the table: "food_categories" */
  insert_food_categories_one?: Maybe<FoodCategories>;
  /** insert data into the table: "food_details" */
  insert_food_details?: Maybe<FoodDetailsMutationResponse>;
  /** insert a single row into the table: "food_details" */
  insert_food_details_one?: Maybe<FoodDetails>;
  /** insert data into the table: "foods" */
  insert_foods?: Maybe<FoodsMutationResponse>;
  /** insert a single row into the table: "foods" */
  insert_foods_one?: Maybe<Foods>;
  /** insert data into the table: "inventories" */
  insert_inventories?: Maybe<InventoriesMutationResponse>;
  /** insert a single row into the table: "inventories" */
  insert_inventories_one?: Maybe<Inventories>;
  /** insert data into the table: "order_foods" */
  insert_order_foods?: Maybe<OrderFoodsMutationResponse>;
  /** insert a single row into the table: "order_foods" */
  insert_order_foods_one?: Maybe<OrderFoods>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<OrdersMutationResponse>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "restaurants" */
  insert_restaurants?: Maybe<RestaurantsMutationResponse>;
  /** insert a single row into the table: "restaurants" */
  insert_restaurants_one?: Maybe<Restaurants>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "food_categories" */
  update_food_categories?: Maybe<FoodCategoriesMutationResponse>;
  /** update single row of the table: "food_categories" */
  update_food_categories_by_pk?: Maybe<FoodCategories>;
  /** update data of the table: "food_details" */
  update_food_details?: Maybe<FoodDetailsMutationResponse>;
  /** update single row of the table: "food_details" */
  update_food_details_by_pk?: Maybe<FoodDetails>;
  /** update data of the table: "foods" */
  update_foods?: Maybe<FoodsMutationResponse>;
  /** update single row of the table: "foods" */
  update_foods_by_pk?: Maybe<Foods>;
  /** update data of the table: "inventories" */
  update_inventories?: Maybe<InventoriesMutationResponse>;
  /** update single row of the table: "inventories" */
  update_inventories_by_pk?: Maybe<Inventories>;
  /** update data of the table: "order_foods" */
  update_order_foods?: Maybe<OrderFoodsMutationResponse>;
  /** update single row of the table: "order_foods" */
  update_order_foods_by_pk?: Maybe<OrderFoods>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<OrdersMutationResponse>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "restaurants" */
  update_restaurants?: Maybe<RestaurantsMutationResponse>;
  /** update single row of the table: "restaurants" */
  update_restaurants_by_pk?: Maybe<Restaurants>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type MutationRootDeleteFoodCategoriesArgs = {
  where: FoodCategoriesBoolExp;
};


/** mutation root */
export type MutationRootDeleteFoodCategoriesByPkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteFoodDetailsArgs = {
  where: FoodDetailsBoolExp;
};


/** mutation root */
export type MutationRootDeleteFoodDetailsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteFoodsArgs = {
  where: FoodsBoolExp;
};


/** mutation root */
export type MutationRootDeleteFoodsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteInventoriesArgs = {
  where: InventoriesBoolExp;
};


/** mutation root */
export type MutationRootDeleteInventoriesByPkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteOrderFoodsArgs = {
  where: OrderFoodsBoolExp;
};


/** mutation root */
export type MutationRootDeleteOrderFoodsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteOrdersArgs = {
  where: OrdersBoolExp;
};


/** mutation root */
export type MutationRootDeleteOrdersByPkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteRestaurantsArgs = {
  where: RestaurantsBoolExp;
};


/** mutation root */
export type MutationRootDeleteRestaurantsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootInsertFoodCategoriesArgs = {
  objects: Array<FoodCategoriesInsertInput>;
  on_conflict?: Maybe<FoodCategoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertFoodCategoriesOneArgs = {
  object: FoodCategoriesInsertInput;
  on_conflict?: Maybe<FoodCategoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertFoodDetailsArgs = {
  objects: Array<FoodDetailsInsertInput>;
  on_conflict?: Maybe<FoodDetailsOnConflict>;
};


/** mutation root */
export type MutationRootInsertFoodDetailsOneArgs = {
  object: FoodDetailsInsertInput;
  on_conflict?: Maybe<FoodDetailsOnConflict>;
};


/** mutation root */
export type MutationRootInsertFoodsArgs = {
  objects: Array<FoodsInsertInput>;
  on_conflict?: Maybe<FoodsOnConflict>;
};


/** mutation root */
export type MutationRootInsertFoodsOneArgs = {
  object: FoodsInsertInput;
  on_conflict?: Maybe<FoodsOnConflict>;
};


/** mutation root */
export type MutationRootInsertInventoriesArgs = {
  objects: Array<InventoriesInsertInput>;
  on_conflict?: Maybe<InventoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertInventoriesOneArgs = {
  object: InventoriesInsertInput;
  on_conflict?: Maybe<InventoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrderFoodsArgs = {
  objects: Array<OrderFoodsInsertInput>;
  on_conflict?: Maybe<OrderFoodsOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrderFoodsOneArgs = {
  object: OrderFoodsInsertInput;
  on_conflict?: Maybe<OrderFoodsOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrdersArgs = {
  objects: Array<OrdersInsertInput>;
  on_conflict?: Maybe<OrdersOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrdersOneArgs = {
  object: OrdersInsertInput;
  on_conflict?: Maybe<OrdersOnConflict>;
};


/** mutation root */
export type MutationRootInsertRestaurantsArgs = {
  objects: Array<RestaurantsInsertInput>;
  on_conflict?: Maybe<RestaurantsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRestaurantsOneArgs = {
  object: RestaurantsInsertInput;
  on_conflict?: Maybe<RestaurantsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateFoodCategoriesArgs = {
  _set?: Maybe<FoodCategoriesSetInput>;
  where: FoodCategoriesBoolExp;
};


/** mutation root */
export type MutationRootUpdateFoodCategoriesByPkArgs = {
  _set?: Maybe<FoodCategoriesSetInput>;
  pk_columns: FoodCategoriesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateFoodDetailsArgs = {
  _set?: Maybe<FoodDetailsSetInput>;
  where: FoodDetailsBoolExp;
};


/** mutation root */
export type MutationRootUpdateFoodDetailsByPkArgs = {
  _set?: Maybe<FoodDetailsSetInput>;
  pk_columns: FoodDetailsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateFoodsArgs = {
  _inc?: Maybe<FoodsIncInput>;
  _set?: Maybe<FoodsSetInput>;
  where: FoodsBoolExp;
};


/** mutation root */
export type MutationRootUpdateFoodsByPkArgs = {
  _inc?: Maybe<FoodsIncInput>;
  _set?: Maybe<FoodsSetInput>;
  pk_columns: FoodsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateInventoriesArgs = {
  _set?: Maybe<InventoriesSetInput>;
  where: InventoriesBoolExp;
};


/** mutation root */
export type MutationRootUpdateInventoriesByPkArgs = {
  _set?: Maybe<InventoriesSetInput>;
  pk_columns: InventoriesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOrderFoodsArgs = {
  _inc?: Maybe<OrderFoodsIncInput>;
  _set?: Maybe<OrderFoodsSetInput>;
  where: OrderFoodsBoolExp;
};


/** mutation root */
export type MutationRootUpdateOrderFoodsByPkArgs = {
  _inc?: Maybe<OrderFoodsIncInput>;
  _set?: Maybe<OrderFoodsSetInput>;
  pk_columns: OrderFoodsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOrdersArgs = {
  _set?: Maybe<OrdersSetInput>;
  where: OrdersBoolExp;
};


/** mutation root */
export type MutationRootUpdateOrdersByPkArgs = {
  _set?: Maybe<OrdersSetInput>;
  pk_columns: OrdersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRestaurantsArgs = {
  _set?: Maybe<RestaurantsSetInput>;
  where: RestaurantsBoolExp;
};


/** mutation root */
export type MutationRootUpdateRestaurantsByPkArgs = {
  _set?: Maybe<RestaurantsSetInput>;
  pk_columns: RestaurantsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set?: Maybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _set?: Maybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_foods" */
export type OrderFoods = {
  __typename?: 'order_foods';
  count: Scalars['Int'];
  /** An object relationship */
  food: Foods;
  food_uuid: Scalars['uuid'];
  /** An object relationship */
  order: Orders;
  order_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "order_foods" */
export type OrderFoodsAggregate = {
  __typename?: 'order_foods_aggregate';
  aggregate?: Maybe<OrderFoodsAggregateFields>;
  nodes: Array<OrderFoods>;
};

/** aggregate fields of "order_foods" */
export type OrderFoodsAggregateFields = {
  __typename?: 'order_foods_aggregate_fields';
  avg?: Maybe<OrderFoodsAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<OrderFoodsMaxFields>;
  min?: Maybe<OrderFoodsMinFields>;
  stddev?: Maybe<OrderFoodsStddevFields>;
  stddev_pop?: Maybe<OrderFoodsStddevPopFields>;
  stddev_samp?: Maybe<OrderFoodsStddevSampFields>;
  sum?: Maybe<OrderFoodsSumFields>;
  var_pop?: Maybe<OrderFoodsVarPopFields>;
  var_samp?: Maybe<OrderFoodsVarSampFields>;
  variance?: Maybe<OrderFoodsVarianceFields>;
};


/** aggregate fields of "order_foods" */
export type OrderFoodsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<OrderFoodsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_foods" */
export type OrderFoodsAggregateOrderBy = {
  avg?: Maybe<OrderFoodsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<OrderFoodsMaxOrderBy>;
  min?: Maybe<OrderFoodsMinOrderBy>;
  stddev?: Maybe<OrderFoodsStddevOrderBy>;
  stddev_pop?: Maybe<OrderFoodsStddevPopOrderBy>;
  stddev_samp?: Maybe<OrderFoodsStddevSampOrderBy>;
  sum?: Maybe<OrderFoodsSumOrderBy>;
  var_pop?: Maybe<OrderFoodsVarPopOrderBy>;
  var_samp?: Maybe<OrderFoodsVarSampOrderBy>;
  variance?: Maybe<OrderFoodsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "order_foods" */
export type OrderFoodsArrRelInsertInput = {
  data: Array<OrderFoodsInsertInput>;
  on_conflict?: Maybe<OrderFoodsOnConflict>;
};

/** aggregate avg on columns */
export type OrderFoodsAvgFields = {
  __typename?: 'order_foods_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_foods" */
export type OrderFoodsAvgOrderBy = {
  count?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "order_foods". All fields are combined with a logical 'AND'. */
export type OrderFoodsBoolExp = {
  _and?: Maybe<Array<Maybe<OrderFoodsBoolExp>>>;
  _not?: Maybe<OrderFoodsBoolExp>;
  _or?: Maybe<Array<Maybe<OrderFoodsBoolExp>>>;
  count?: Maybe<IntComparisonExp>;
  food?: Maybe<FoodsBoolExp>;
  food_uuid?: Maybe<UuidComparisonExp>;
  order?: Maybe<OrdersBoolExp>;
  order_uuid?: Maybe<UuidComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "order_foods" */
export enum OrderFoodsConstraint {
  /** unique or primary key constraint */
  OrderFoodsPkey = 'order_foods_pkey'
}

/** input type for incrementing integer column in table "order_foods" */
export type OrderFoodsIncInput = {
  count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_foods" */
export type OrderFoodsInsertInput = {
  count?: Maybe<Scalars['Int']>;
  food?: Maybe<FoodsObjRelInsertInput>;
  food_uuid?: Maybe<Scalars['uuid']>;
  order?: Maybe<OrdersObjRelInsertInput>;
  order_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type OrderFoodsMaxFields = {
  __typename?: 'order_foods_max_fields';
  count?: Maybe<Scalars['Int']>;
  food_uuid?: Maybe<Scalars['uuid']>;
  order_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "order_foods" */
export type OrderFoodsMaxOrderBy = {
  count?: Maybe<OrderBy>;
  food_uuid?: Maybe<OrderBy>;
  order_uuid?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type OrderFoodsMinFields = {
  __typename?: 'order_foods_min_fields';
  count?: Maybe<Scalars['Int']>;
  food_uuid?: Maybe<Scalars['uuid']>;
  order_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "order_foods" */
export type OrderFoodsMinOrderBy = {
  count?: Maybe<OrderBy>;
  food_uuid?: Maybe<OrderBy>;
  order_uuid?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** response of any mutation on the table "order_foods" */
export type OrderFoodsMutationResponse = {
  __typename?: 'order_foods_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<OrderFoods>;
};

/** input type for inserting object relation for remote table "order_foods" */
export type OrderFoodsObjRelInsertInput = {
  data: OrderFoodsInsertInput;
  on_conflict?: Maybe<OrderFoodsOnConflict>;
};

/** on conflict condition type for table "order_foods" */
export type OrderFoodsOnConflict = {
  constraint: OrderFoodsConstraint;
  update_columns: Array<OrderFoodsUpdateColumn>;
  where?: Maybe<OrderFoodsBoolExp>;
};

/** ordering options when selecting data from "order_foods" */
export type OrderFoodsOrderBy = {
  count?: Maybe<OrderBy>;
  food?: Maybe<FoodsOrderBy>;
  food_uuid?: Maybe<OrderBy>;
  order?: Maybe<OrdersOrderBy>;
  order_uuid?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** primary key columns input for table: "order_foods" */
export type OrderFoodsPkColumnsInput = {
  uuid: Scalars['uuid'];
};

/** select columns of table "order_foods" */
export enum OrderFoodsSelectColumn {
  /** column name */
  Count = 'count',
  /** column name */
  FoodUuid = 'food_uuid',
  /** column name */
  OrderUuid = 'order_uuid',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "order_foods" */
export type OrderFoodsSetInput = {
  count?: Maybe<Scalars['Int']>;
  food_uuid?: Maybe<Scalars['uuid']>;
  order_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type OrderFoodsStddevFields = {
  __typename?: 'order_foods_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_foods" */
export type OrderFoodsStddevOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type OrderFoodsStddevPopFields = {
  __typename?: 'order_foods_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_foods" */
export type OrderFoodsStddevPopOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type OrderFoodsStddevSampFields = {
  __typename?: 'order_foods_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_foods" */
export type OrderFoodsStddevSampOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type OrderFoodsSumFields = {
  __typename?: 'order_foods_sum_fields';
  count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_foods" */
export type OrderFoodsSumOrderBy = {
  count?: Maybe<OrderBy>;
};

/** update columns of table "order_foods" */
export enum OrderFoodsUpdateColumn {
  /** column name */
  Count = 'count',
  /** column name */
  FoodUuid = 'food_uuid',
  /** column name */
  OrderUuid = 'order_uuid',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type OrderFoodsVarPopFields = {
  __typename?: 'order_foods_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_foods" */
export type OrderFoodsVarPopOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type OrderFoodsVarSampFields = {
  __typename?: 'order_foods_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_foods" */
export type OrderFoodsVarSampOrderBy = {
  count?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type OrderFoodsVarianceFields = {
  __typename?: 'order_foods_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_foods" */
export type OrderFoodsVarianceOrderBy = {
  count?: Maybe<OrderBy>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  order_foods: Array<OrderFoods>;
  /** An aggregated array relationship */
  order_foods_aggregate: OrderFoodsAggregate;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
  uuid: Scalars['uuid'];
};


/** columns and relationships of "orders" */
export type OrdersOrderFoodsArgs = {
  distinct_on?: Maybe<Array<OrderFoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderFoodsOrderBy>>;
  where?: Maybe<OrderFoodsBoolExp>;
};


/** columns and relationships of "orders" */
export type OrdersOrderFoodsAggregateArgs = {
  distinct_on?: Maybe<Array<OrderFoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderFoodsOrderBy>>;
  where?: Maybe<OrderFoodsBoolExp>;
};

/** aggregated selection of "orders" */
export type OrdersAggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<OrdersAggregateFields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type OrdersAggregateFields = {
  __typename?: 'orders_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<OrdersMaxFields>;
  min?: Maybe<OrdersMinFields>;
};


/** aggregate fields of "orders" */
export type OrdersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<OrdersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type OrdersAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<OrdersMaxOrderBy>;
  min?: Maybe<OrdersMinOrderBy>;
};

/** input type for inserting array relation for remote table "orders" */
export type OrdersArrRelInsertInput = {
  data: Array<OrdersInsertInput>;
  on_conflict?: Maybe<OrdersOnConflict>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type OrdersBoolExp = {
  _and?: Maybe<Array<Maybe<OrdersBoolExp>>>;
  _not?: Maybe<OrdersBoolExp>;
  _or?: Maybe<Array<Maybe<OrdersBoolExp>>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  order_foods?: Maybe<OrderFoodsBoolExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "orders" */
export enum OrdersConstraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for inserting data into table "orders" */
export type OrdersInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  order_foods?: Maybe<OrderFoodsArrRelInsertInput>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type OrdersMaxFields = {
  __typename?: 'orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "orders" */
export type OrdersMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type OrdersMinFields = {
  __typename?: 'orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "orders" */
export type OrdersMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** response of any mutation on the table "orders" */
export type OrdersMutationResponse = {
  __typename?: 'orders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type OrdersObjRelInsertInput = {
  data: OrdersInsertInput;
  on_conflict?: Maybe<OrdersOnConflict>;
};

/** on conflict condition type for table "orders" */
export type OrdersOnConflict = {
  constraint: OrdersConstraint;
  update_columns: Array<OrdersUpdateColumn>;
  where?: Maybe<OrdersBoolExp>;
};

/** ordering options when selecting data from "orders" */
export type OrdersOrderBy = {
  created_at?: Maybe<OrderBy>;
  order_foods_aggregate?: Maybe<OrderFoodsAggregateOrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** primary key columns input for table: "orders" */
export type OrdersPkColumnsInput = {
  uuid: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum OrdersSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "orders" */
export type OrdersSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "orders" */
export enum OrdersUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** query root */
export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "food_categories" */
  food_categories: Array<FoodCategories>;
  /** fetch aggregated fields from the table: "food_categories" */
  food_categories_aggregate: FoodCategoriesAggregate;
  /** fetch data from the table: "food_categories" using primary key columns */
  food_categories_by_pk?: Maybe<FoodCategories>;
  /** fetch data from the table: "food_details" */
  food_details: Array<FoodDetails>;
  /** fetch aggregated fields from the table: "food_details" */
  food_details_aggregate: FoodDetailsAggregate;
  /** fetch data from the table: "food_details" using primary key columns */
  food_details_by_pk?: Maybe<FoodDetails>;
  /** fetch data from the table: "foods" */
  foods: Array<Foods>;
  /** fetch aggregated fields from the table: "foods" */
  foods_aggregate: FoodsAggregate;
  /** fetch data from the table: "foods" using primary key columns */
  foods_by_pk?: Maybe<Foods>;
  /** fetch data from the table: "inventories" */
  inventories: Array<Inventories>;
  /** fetch aggregated fields from the table: "inventories" */
  inventories_aggregate: InventoriesAggregate;
  /** fetch data from the table: "inventories" using primary key columns */
  inventories_by_pk?: Maybe<Inventories>;
  /** fetch data from the table: "order_foods" */
  order_foods: Array<OrderFoods>;
  /** fetch aggregated fields from the table: "order_foods" */
  order_foods_aggregate: OrderFoodsAggregate;
  /** fetch data from the table: "order_foods" using primary key columns */
  order_foods_by_pk?: Maybe<OrderFoods>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: OrdersAggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "restaurants" */
  restaurants: Array<Restaurants>;
  /** fetch aggregated fields from the table: "restaurants" */
  restaurants_aggregate: RestaurantsAggregate;
  /** fetch data from the table: "restaurants" using primary key columns */
  restaurants_by_pk?: Maybe<Restaurants>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type QueryRootFoodCategoriesArgs = {
  distinct_on?: Maybe<Array<FoodCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodCategoriesOrderBy>>;
  where?: Maybe<FoodCategoriesBoolExp>;
};


/** query root */
export type QueryRootFoodCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<FoodCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodCategoriesOrderBy>>;
  where?: Maybe<FoodCategoriesBoolExp>;
};


/** query root */
export type QueryRootFoodCategoriesByPkArgs = {
  uuid: Scalars['uuid'];
};


/** query root */
export type QueryRootFoodDetailsArgs = {
  distinct_on?: Maybe<Array<FoodDetailsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodDetailsOrderBy>>;
  where?: Maybe<FoodDetailsBoolExp>;
};


/** query root */
export type QueryRootFoodDetailsAggregateArgs = {
  distinct_on?: Maybe<Array<FoodDetailsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodDetailsOrderBy>>;
  where?: Maybe<FoodDetailsBoolExp>;
};


/** query root */
export type QueryRootFoodDetailsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** query root */
export type QueryRootFoodsArgs = {
  distinct_on?: Maybe<Array<FoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodsOrderBy>>;
  where?: Maybe<FoodsBoolExp>;
};


/** query root */
export type QueryRootFoodsAggregateArgs = {
  distinct_on?: Maybe<Array<FoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodsOrderBy>>;
  where?: Maybe<FoodsBoolExp>;
};


/** query root */
export type QueryRootFoodsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** query root */
export type QueryRootInventoriesArgs = {
  distinct_on?: Maybe<Array<InventoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<InventoriesOrderBy>>;
  where?: Maybe<InventoriesBoolExp>;
};


/** query root */
export type QueryRootInventoriesAggregateArgs = {
  distinct_on?: Maybe<Array<InventoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<InventoriesOrderBy>>;
  where?: Maybe<InventoriesBoolExp>;
};


/** query root */
export type QueryRootInventoriesByPkArgs = {
  uuid: Scalars['uuid'];
};


/** query root */
export type QueryRootOrderFoodsArgs = {
  distinct_on?: Maybe<Array<OrderFoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderFoodsOrderBy>>;
  where?: Maybe<OrderFoodsBoolExp>;
};


/** query root */
export type QueryRootOrderFoodsAggregateArgs = {
  distinct_on?: Maybe<Array<OrderFoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderFoodsOrderBy>>;
  where?: Maybe<OrderFoodsBoolExp>;
};


/** query root */
export type QueryRootOrderFoodsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** query root */
export type QueryRootOrdersArgs = {
  distinct_on?: Maybe<Array<OrdersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrdersOrderBy>>;
  where?: Maybe<OrdersBoolExp>;
};


/** query root */
export type QueryRootOrdersAggregateArgs = {
  distinct_on?: Maybe<Array<OrdersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrdersOrderBy>>;
  where?: Maybe<OrdersBoolExp>;
};


/** query root */
export type QueryRootOrdersByPkArgs = {
  uuid: Scalars['uuid'];
};


/** query root */
export type QueryRootRestaurantsArgs = {
  distinct_on?: Maybe<Array<RestaurantsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RestaurantsOrderBy>>;
  where?: Maybe<RestaurantsBoolExp>;
};


/** query root */
export type QueryRootRestaurantsAggregateArgs = {
  distinct_on?: Maybe<Array<RestaurantsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RestaurantsOrderBy>>;
  where?: Maybe<RestaurantsBoolExp>;
};


/** query root */
export type QueryRootRestaurantsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** query root */
export type QueryRootUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


/** query root */
export type QueryRootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


/** query root */
export type QueryRootUsersByPkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "restaurants" */
export type Restaurants = {
  __typename?: 'restaurants';
  address: Scalars['String'];
  /** An array relationship */
  foods: Array<Foods>;
  /** An aggregated array relationship */
  foods_aggregate: FoodsAggregate;
  /** An array relationship */
  inventories: Array<Inventories>;
  /** An aggregated array relationship */
  inventories_aggregate: InventoriesAggregate;
  name: Scalars['String'];
  uuid: Scalars['uuid'];
};


/** columns and relationships of "restaurants" */
export type RestaurantsFoodsArgs = {
  distinct_on?: Maybe<Array<FoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodsOrderBy>>;
  where?: Maybe<FoodsBoolExp>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsFoodsAggregateArgs = {
  distinct_on?: Maybe<Array<FoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodsOrderBy>>;
  where?: Maybe<FoodsBoolExp>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsInventoriesArgs = {
  distinct_on?: Maybe<Array<InventoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<InventoriesOrderBy>>;
  where?: Maybe<InventoriesBoolExp>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsInventoriesAggregateArgs = {
  distinct_on?: Maybe<Array<InventoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<InventoriesOrderBy>>;
  where?: Maybe<InventoriesBoolExp>;
};

/** aggregated selection of "restaurants" */
export type RestaurantsAggregate = {
  __typename?: 'restaurants_aggregate';
  aggregate?: Maybe<RestaurantsAggregateFields>;
  nodes: Array<Restaurants>;
};

/** aggregate fields of "restaurants" */
export type RestaurantsAggregateFields = {
  __typename?: 'restaurants_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<RestaurantsMaxFields>;
  min?: Maybe<RestaurantsMinFields>;
};


/** aggregate fields of "restaurants" */
export type RestaurantsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RestaurantsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "restaurants" */
export type RestaurantsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<RestaurantsMaxOrderBy>;
  min?: Maybe<RestaurantsMinOrderBy>;
};

/** input type for inserting array relation for remote table "restaurants" */
export type RestaurantsArrRelInsertInput = {
  data: Array<RestaurantsInsertInput>;
  on_conflict?: Maybe<RestaurantsOnConflict>;
};

/** Boolean expression to filter rows from the table "restaurants". All fields are combined with a logical 'AND'. */
export type RestaurantsBoolExp = {
  _and?: Maybe<Array<Maybe<RestaurantsBoolExp>>>;
  _not?: Maybe<RestaurantsBoolExp>;
  _or?: Maybe<Array<Maybe<RestaurantsBoolExp>>>;
  address?: Maybe<StringComparisonExp>;
  foods?: Maybe<FoodsBoolExp>;
  inventories?: Maybe<InventoriesBoolExp>;
  name?: Maybe<StringComparisonExp>;
  uuid?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "restaurants" */
export enum RestaurantsConstraint {
  /** unique or primary key constraint */
  RestaurantsPkey = 'restaurants_pkey'
}

/** input type for inserting data into table "restaurants" */
export type RestaurantsInsertInput = {
  address?: Maybe<Scalars['String']>;
  foods?: Maybe<FoodsArrRelInsertInput>;
  inventories?: Maybe<InventoriesArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type RestaurantsMaxFields = {
  __typename?: 'restaurants_max_fields';
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "restaurants" */
export type RestaurantsMaxOrderBy = {
  address?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RestaurantsMinFields = {
  __typename?: 'restaurants_min_fields';
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "restaurants" */
export type RestaurantsMinOrderBy = {
  address?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** response of any mutation on the table "restaurants" */
export type RestaurantsMutationResponse = {
  __typename?: 'restaurants_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Restaurants>;
};

/** input type for inserting object relation for remote table "restaurants" */
export type RestaurantsObjRelInsertInput = {
  data: RestaurantsInsertInput;
  on_conflict?: Maybe<RestaurantsOnConflict>;
};

/** on conflict condition type for table "restaurants" */
export type RestaurantsOnConflict = {
  constraint: RestaurantsConstraint;
  update_columns: Array<RestaurantsUpdateColumn>;
  where?: Maybe<RestaurantsBoolExp>;
};

/** ordering options when selecting data from "restaurants" */
export type RestaurantsOrderBy = {
  address?: Maybe<OrderBy>;
  foods_aggregate?: Maybe<FoodsAggregateOrderBy>;
  inventories_aggregate?: Maybe<InventoriesAggregateOrderBy>;
  name?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

/** primary key columns input for table: "restaurants" */
export type RestaurantsPkColumnsInput = {
  uuid: Scalars['uuid'];
};

/** select columns of table "restaurants" */
export enum RestaurantsSelectColumn {
  /** column name */
  Address = 'address',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "restaurants" */
export type RestaurantsSetInput = {
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "restaurants" */
export enum RestaurantsUpdateColumn {
  /** column name */
  Address = 'address',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** subscription root */
export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "food_categories" */
  food_categories: Array<FoodCategories>;
  /** fetch aggregated fields from the table: "food_categories" */
  food_categories_aggregate: FoodCategoriesAggregate;
  /** fetch data from the table: "food_categories" using primary key columns */
  food_categories_by_pk?: Maybe<FoodCategories>;
  /** fetch data from the table: "food_details" */
  food_details: Array<FoodDetails>;
  /** fetch aggregated fields from the table: "food_details" */
  food_details_aggregate: FoodDetailsAggregate;
  /** fetch data from the table: "food_details" using primary key columns */
  food_details_by_pk?: Maybe<FoodDetails>;
  /** fetch data from the table: "foods" */
  foods: Array<Foods>;
  /** fetch aggregated fields from the table: "foods" */
  foods_aggregate: FoodsAggregate;
  /** fetch data from the table: "foods" using primary key columns */
  foods_by_pk?: Maybe<Foods>;
  /** fetch data from the table: "inventories" */
  inventories: Array<Inventories>;
  /** fetch aggregated fields from the table: "inventories" */
  inventories_aggregate: InventoriesAggregate;
  /** fetch data from the table: "inventories" using primary key columns */
  inventories_by_pk?: Maybe<Inventories>;
  /** fetch data from the table: "order_foods" */
  order_foods: Array<OrderFoods>;
  /** fetch aggregated fields from the table: "order_foods" */
  order_foods_aggregate: OrderFoodsAggregate;
  /** fetch data from the table: "order_foods" using primary key columns */
  order_foods_by_pk?: Maybe<OrderFoods>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: OrdersAggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "restaurants" */
  restaurants: Array<Restaurants>;
  /** fetch aggregated fields from the table: "restaurants" */
  restaurants_aggregate: RestaurantsAggregate;
  /** fetch data from the table: "restaurants" using primary key columns */
  restaurants_by_pk?: Maybe<Restaurants>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type SubscriptionRootFoodCategoriesArgs = {
  distinct_on?: Maybe<Array<FoodCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodCategoriesOrderBy>>;
  where?: Maybe<FoodCategoriesBoolExp>;
};


/** subscription root */
export type SubscriptionRootFoodCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<FoodCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodCategoriesOrderBy>>;
  where?: Maybe<FoodCategoriesBoolExp>;
};


/** subscription root */
export type SubscriptionRootFoodCategoriesByPkArgs = {
  uuid: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootFoodDetailsArgs = {
  distinct_on?: Maybe<Array<FoodDetailsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodDetailsOrderBy>>;
  where?: Maybe<FoodDetailsBoolExp>;
};


/** subscription root */
export type SubscriptionRootFoodDetailsAggregateArgs = {
  distinct_on?: Maybe<Array<FoodDetailsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodDetailsOrderBy>>;
  where?: Maybe<FoodDetailsBoolExp>;
};


/** subscription root */
export type SubscriptionRootFoodDetailsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootFoodsArgs = {
  distinct_on?: Maybe<Array<FoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodsOrderBy>>;
  where?: Maybe<FoodsBoolExp>;
};


/** subscription root */
export type SubscriptionRootFoodsAggregateArgs = {
  distinct_on?: Maybe<Array<FoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FoodsOrderBy>>;
  where?: Maybe<FoodsBoolExp>;
};


/** subscription root */
export type SubscriptionRootFoodsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootInventoriesArgs = {
  distinct_on?: Maybe<Array<InventoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<InventoriesOrderBy>>;
  where?: Maybe<InventoriesBoolExp>;
};


/** subscription root */
export type SubscriptionRootInventoriesAggregateArgs = {
  distinct_on?: Maybe<Array<InventoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<InventoriesOrderBy>>;
  where?: Maybe<InventoriesBoolExp>;
};


/** subscription root */
export type SubscriptionRootInventoriesByPkArgs = {
  uuid: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootOrderFoodsArgs = {
  distinct_on?: Maybe<Array<OrderFoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderFoodsOrderBy>>;
  where?: Maybe<OrderFoodsBoolExp>;
};


/** subscription root */
export type SubscriptionRootOrderFoodsAggregateArgs = {
  distinct_on?: Maybe<Array<OrderFoodsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrderFoodsOrderBy>>;
  where?: Maybe<OrderFoodsBoolExp>;
};


/** subscription root */
export type SubscriptionRootOrderFoodsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootOrdersArgs = {
  distinct_on?: Maybe<Array<OrdersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrdersOrderBy>>;
  where?: Maybe<OrdersBoolExp>;
};


/** subscription root */
export type SubscriptionRootOrdersAggregateArgs = {
  distinct_on?: Maybe<Array<OrdersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrdersOrderBy>>;
  where?: Maybe<OrdersBoolExp>;
};


/** subscription root */
export type SubscriptionRootOrdersByPkArgs = {
  uuid: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootRestaurantsArgs = {
  distinct_on?: Maybe<Array<RestaurantsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RestaurantsOrderBy>>;
  where?: Maybe<RestaurantsBoolExp>;
};


/** subscription root */
export type SubscriptionRootRestaurantsAggregateArgs = {
  distinct_on?: Maybe<Array<RestaurantsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<RestaurantsOrderBy>>;
  where?: Maybe<RestaurantsBoolExp>;
};


/** subscription root */
export type SubscriptionRootRestaurantsByPkArgs = {
  uuid: Scalars['uuid'];
};


/** subscription root */
export type SubscriptionRootUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


/** subscription root */
export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


/** subscription root */
export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['String'];
  last_name: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregated array relationship */
  orders_aggregate: OrdersAggregate;
};


/** columns and relationships of "users" */
export type UsersOrdersArgs = {
  distinct_on?: Maybe<Array<OrdersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrdersOrderBy>>;
  where?: Maybe<OrdersBoolExp>;
};


/** columns and relationships of "users" */
export type UsersOrdersAggregateArgs = {
  distinct_on?: Maybe<Array<OrdersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OrdersOrderBy>>;
  where?: Maybe<OrdersBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UsersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type UsersAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<UsersMaxOrderBy>;
  min?: Maybe<UsersMinOrderBy>;
};

/** input type for inserting array relation for remote table "users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: Maybe<Array<Maybe<UsersBoolExp>>>;
  _not?: Maybe<UsersBoolExp>;
  _or?: Maybe<Array<Maybe<UsersBoolExp>>>;
  email?: Maybe<StringComparisonExp>;
  first_name?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
  last_name?: Maybe<StringComparisonExp>;
  orders?: Maybe<OrdersBoolExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrdersArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type UsersMaxOrderBy = {
  email?: Maybe<OrderBy>;
  first_name?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  last_name?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type UsersMinOrderBy = {
  email?: Maybe<OrderBy>;
  first_name?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  last_name?: Maybe<OrderBy>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
};

/** on conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns: Array<UsersUpdateColumn>;
  where?: Maybe<UsersBoolExp>;
};

/** ordering options when selecting data from "users" */
export type UsersOrderBy = {
  email?: Maybe<OrderBy>;
  first_name?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  last_name?: Maybe<OrderBy>;
  orders_aggregate?: Maybe<OrdersAggregateOrderBy>;
};

/** primary key columns input for table: "users" */
export type UsersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'email' | 'first_name' | 'last_name'>
  )> }
);


export const GetUserByIdDocument: TypedDocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"first_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"last_name"},"arguments":[],"directives":[]}]}}]}}]};