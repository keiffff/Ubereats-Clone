alter table "public"."foods" add foreign key ("restaurant_uuid") references "public"."restaurants"("uuid") on update restrict on delete restrict;
