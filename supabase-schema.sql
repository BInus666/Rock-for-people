create table if not exists public.app_state (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;
alter table public.app_state replica identity full;

drop policy if exists "Anyone can read app state" on public.app_state;
create policy "Anyone can read app state"
on public.app_state
for select
to anon
using (id = 'main');

drop policy if exists "Anyone can insert app state" on public.app_state;
create policy "Anyone can insert app state"
on public.app_state
for insert
to anon
with check (id = 'main');

drop policy if exists "Anyone can update app state" on public.app_state;
create policy "Anyone can update app state"
on public.app_state
for update
to anon
using (id = 'main')
with check (id = 'main');

insert into public.app_state (id, data)
values (
  'main',
  '{
    "friends": [],
    "votes": {},
    "comments": {},
    "ratings": { "beer": {}, "food": {} },
    "foodReviews": {},
    "customBeers": {}
  }'::jsonb
)
on conflict (id) do nothing;

do $$
begin
  alter publication supabase_realtime add table public.app_state;
exception
  when duplicate_object then null;
end $$;
