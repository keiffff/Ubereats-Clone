alter table "public"."inventories"
           add constraint "inventories_food_uuid_fkey"
           foreign key ("food_uuid")
           references "public"."foods"
           ("uuid") on update restrict on delete restrict;
