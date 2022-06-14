
alter table "public"."session" drop constraint "session_second_speaker_id_fkey";

alter table "public"."topic" drop constraint "topic_second_speaker_id_fkey";

alter table "public"."session" drop column "second_speaker_id"

alter table "public"."session" drop column "second_speaker_id"
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."topic" add column "second_speaker_id" uuid
--  null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."session" add column "second_speaker_id" uuid
--  null;
