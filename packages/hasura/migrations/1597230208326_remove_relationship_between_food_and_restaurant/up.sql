
alter table "public"."foods" drop constraint "foods_restaurant_uuid_fkey";

ALTER TABLE "public"."foods" DROP COLUMN "restaurant_uuid" CASCADE;

alter table "public"."inventories"
           add constraint "inventories_food_uuid_fkey"
           foreign key ("food_uuid")
           references "public"."foods"
           ("uuid") on update restrict on delete restrict;
