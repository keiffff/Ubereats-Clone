CREATE OR REPLACE FUNCTION public.search_foods(searchtext text)
 RETURNS SETOF foods
 LANGUAGE sql
 STABLE
AS $function$
SELECT *
FROM foods
WHERE
      name
ilike
('%' || searchText || '%')
$function$;
