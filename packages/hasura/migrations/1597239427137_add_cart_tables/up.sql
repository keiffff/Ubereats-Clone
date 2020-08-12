
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."carts"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("uuid") );

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."cart_foods"("uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "cart_uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "food_uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "count" integer NOT NULL, PRIMARY KEY ("uuid") , FOREIGN KEY ("food_uuid") REFERENCES "public"."foods"("uuid") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("cart_uuid") REFERENCES "public"."carts"("uuid") ON UPDATE restrict ON DELETE restrict);

ALTER TABLE "public"."carts" ADD COLUMN "user_id" text NOT NULL;

alter table "public"."carts"
           add constraint "carts_user_id_fkey"
           foreign key ("user_id")
           references "public"."users"
           ("id") on update restrict on delete restrict;
