DROP TRIGGER IF EXISTS "set_public_orders_updated_at" ON "public"."orders";
ALTER TABLE "public"."orders" DROP COLUMN "updated_at";
