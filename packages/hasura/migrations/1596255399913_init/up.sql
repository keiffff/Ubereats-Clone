
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."food_categories"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "photo" text NOT NULL, PRIMARY KEY ("uuid") );

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."restaurants"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "address" text NOT NULL, PRIMARY KEY ("uuid") );

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."foods"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "photo" text NOT NULL, "category_uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "description" text NOT NULL, "price" numeric NOT NULL, "restaurant_uuid" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("uuid") , FOREIGN KEY ("category_uuid") REFERENCES "public"."food_categories"("uuid") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("restaurant_uuid") REFERENCES "public"."restaurants"("uuid") ON UPDATE restrict ON DELETE restrict);

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."food_details"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "photo" text NOT NULL, "food_uuid" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("uuid") , FOREIGN KEY ("food_uuid") REFERENCES "public"."foods"("uuid") ON UPDATE restrict ON DELETE restrict);

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."inventories"("restaurant_uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "food_uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "stock_available" boolean NOT NULL, "uuid" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("uuid") , FOREIGN KEY ("restaurant_uuid") REFERENCES "public"."restaurants"("uuid") ON UPDATE restrict ON DELETE restrict);

CREATE TABLE "public"."users"("id" text NOT NULL, "email" text NOT NULL, "first_name" text NOT NULL, "last_name" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("email"));

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."orders"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("uuid") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."order_foods"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "food_uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "order_uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "count" integer NOT NULL, PRIMARY KEY ("uuid") , FOREIGN KEY ("food_uuid") REFERENCES "public"."foods"("uuid") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("order_uuid") REFERENCES "public"."orders"("uuid") ON UPDATE restrict ON DELETE restrict);
