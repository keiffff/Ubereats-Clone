
DROP TABLE "public"."inventories";

alter table "public"."foods" drop constraint "foods_restaurant_uuid_fkey";

DROP TABLE "public"."restaurants";

DROP TABLE "public"."order_foods";

DROP TABLE "public"."orders";

DROP TABLE "public"."users";

DROP TABLE "public"."food_details";

DROP TABLE "public"."foods";

DROP TABLE "public"."food_categories";
