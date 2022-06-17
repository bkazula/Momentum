
alter table "public"."topic" add column "priority" integer
 not null default '0';

ALTER TABLE "public"."topic" ALTER COLUMN "priority" TYPE int2;
