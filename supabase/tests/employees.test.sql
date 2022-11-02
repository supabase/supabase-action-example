begin;
select plan(1); -- only one statement to run

SELECT has_column(
    'public',
    'employees',
    'name',
    'name should exist'
);

select * from finish();
rollback;
