create table public.employees (
    id integer primary key generated always as identity,
    name text
);
