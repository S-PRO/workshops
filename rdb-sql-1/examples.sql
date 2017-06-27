SELECT * FROM movie;

SELECT distinct country FROM movie;

SELECT distinct country FROM movie ORDER BY country ASC;

SELECT distinct country FROM movie WHERE country IS NOT NULL ORDER BY country ASC;

SELECT distinct country AS c FROM movie HAVING c IS NOT NULL ORDER BY c ASC;

SELECT COUNT(DISTINCT country) FROM movie;

SELECT 
COUNT(*) as total, 
COUNT(*) - COUNT(birthdate) as birth_null, 
COUNT(birthdate) as birth_not_null 
FROM person;

SELECT * FROM movie
WHERE 1=1
AND release_year>=2000
AND release_year<=2010;

SELECT * 
FROM movie
WHERE 1=0
OR release_year=2000
OR release_year=2010;

SELECT *
FROM movie
WHERE release_year BETWEEN 2000 AND 2010
AND country = 'USA';

SELECT *
FROM movie
WHERE release_year IN (2000, 2010);

SELECT * FROM movie WHERE release_year LIKE '200_';

SELECT * FROM movie WHERE release_year LIKE '2%';

SELECT AVG(budget) FROM movie;
SELECT MAX(budget) FROM movie;
SELECT SUM(budget) FROM movie;

SELECT 
AVG(budget) as avg,
MAX(budget) as max,
SUM(budget) as sum
FROM movie;

SELECT (4 * 3);

SELECT title
FROM movie
ORDER BY release_year DESC;

SELECT birthdate, name
FROM person
ORDER BY birthdate, name;

select release_year, GROUP_CONCAT(CONCAT('{id:"', id, '", title:"',title,'"}')) as list from movie group by release_year;

SET group_concat_max_len = 1000000;

SELECT m.title, COUNT(*) as cnt
FROM role r
JOIN movie m on r.movie_id=m.id
GROUP BY m.id
HAVING cnt >= 3;