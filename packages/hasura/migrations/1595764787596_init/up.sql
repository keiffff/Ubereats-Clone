
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."food_categories"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "photo" text NOT NULL, PRIMARY KEY ("uuid") );

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."foods"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "photo" text NOT NULL, "category_uuid" uuid NOT NULL, "description" text NOT NULL, "price" Integer NOT NULL, "restaurant_uuid" uuid NOT NULL, PRIMARY KEY ("uuid") , FOREIGN KEY ("category_uuid") REFERENCES "public"."food_categories"("uuid") ON UPDATE restrict ON DELETE restrict);

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."food_details"("food_uuid" uuid NOT NULL, "photo" text NOT NULL, "uuid" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("uuid") , FOREIGN KEY ("food_uuid") REFERENCES "public"."foods"("uuid") ON UPDATE restrict ON DELETE restrict);

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."users"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "email" text NOT NULL, "first_name" text NOT NULL, "last_name" text NOT NULL, PRIMARY KEY ("uuid") );

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."orders"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "user_uuid" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("uuid") , FOREIGN KEY ("user_uuid") REFERENCES "public"."users"("uuid") ON UPDATE restrict ON DELETE restrict);

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."order_foods"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "food_uuid" uuid NOT NULL, "order_uuid" uuid NOT NULL, PRIMARY KEY ("uuid") , FOREIGN KEY ("food_uuid") REFERENCES "public"."foods"("uuid") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("order_uuid") REFERENCES "public"."orders"("uuid") ON UPDATE restrict ON DELETE restrict);

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."restaurants"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "address" text NOT NULL, PRIMARY KEY ("uuid") );

alter table "public"."foods"
           add constraint "foods_restaurant_uuid_fkey"
           foreign key ("restaurant_uuid")
           references "public"."restaurants"
           ("uuid") on update restrict on delete restrict;

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."inventories"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "restaurant_uuid" uuid NOT NULL, "food_uuid" uuid NOT NULL, PRIMARY KEY ("uuid") , FOREIGN KEY ("restaurant_uuid") REFERENCES "public"."restaurants"("uuid") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("food_uuid") REFERENCES "public"."foods"("uuid") ON UPDATE restrict ON DELETE restrict);
