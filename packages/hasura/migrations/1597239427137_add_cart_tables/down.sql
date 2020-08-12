
alter table "public"."carts" drop constraint "carts_user_id_fkey";

ALTER TABLE "public"."carts" DROP COLUMN "user_id";

DROP TABLE "public"."cart_foods";

DROP TABLE "public"."carts";
