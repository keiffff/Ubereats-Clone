alter table "public"."cart_foods" drop constraint "cart_foods_cart_uuid_fkey",
             add constraint "cart_foods_cart_uuid_fkey"
             foreign key ("cart_uuid")
             references "public"."carts"
             ("uuid") on update restrict on delete cascade;
