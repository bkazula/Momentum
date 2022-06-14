
alter table "public"."session" add column "second_speaker_id" uuid
 null;

alter table "public"."topic" add column "second_speaker_id" uuid
 null;

alter table "public"."topic"
  add constraint "topic_second_speaker_id_fkey"
  foreign key ("second_speaker_id")
  references "public"."speaker"
  ("id") on update set null on delete set null;

alter table "public"."session"
  add constraint "session_second_speaker_id_fkey"
  foreign key ("second_speaker_id")
  references "public"."speaker"
  ("id") on update set null on delete set null;
