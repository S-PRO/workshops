-- 1/ Select movie and roles count
SELECT title, 
(SELECT COUNT(*) FROM role WHERE role.movie_id=movie.id GROUP BY role.movie_id) as rcount 
FROM movie;

ALTER TABLE role ADD KEY (movie_id);

-- 2/ The same but with join
SELECT title, COUNT(*) as rcount FROM movie LEFT JOIN role ON movie.id=role.movie_id GROUP BY movie.id;

-- 3/ Movie with highest fb likes
select * from movie where id = (select movie_id from review order by facebook_likes desc limit 1);

-- 4/ Find duplcates
select * from movie m1 where (select count(*) from movie m2 where m2.title = m1.title) >= 2;

-- 5/ Find moview without error
select * from movie m where (select count(*) from role r where r.movie_id=m.id)=0;
insert into movie set title="xxx";
select * from movie m where (select count(*) from role r where r.movie_id=m.id)=0;
alter table role add key (movie_id);

-- 6/ nother way
select * from movie m where not exists (select * from review r where r.movie_id=m.id);

-- 7/ average roles amount
select avr(sumcol) from (SELECT count(*) as sumcol from role group by movie_id) as role_count;

-- 1/ Inner
select m.*, r.* from movie m INNER JOIN review r ON m.id = r.movie_id ORDER BY m.id;

-- 2/ Left
select m.*, r.* from movie m LEFT JOIN review r ON m.id = r.movie_id ORDER BY m.id;

select m.*, r.* from movie m LEFT JOIN review r ON m.id = r.movie_id WHERE r.id IS NULL ORDER BY m.id;

-- 3/ Full Outer

SELECT * FROM movie
LEFT JOIN review ON movie.id = review.movie_id
UNION
SELECT * FROM movie
RIGHT JOIN review ON movie.id = review.movie_id;


-- 4/ Multiple

CREATE TABLE  `products` (
  `id` int(11),
  `title` varchar(255),
  `created_at` datetime
);
 
CREATE TABLE `product_options` (
  `id` int(11),
  `name` varchar(255)
);
 
CREATE TABLE `product2options` (
  `product_id` int(11),
  `option_id` int(11),
  `value` int(11)
);

INSERT INTO `products` (`id`, `title`, `created_at`) VALUES
        (1, 'Cup', '2016-12-17 20:00:00'),
        (2, 'Spoon', '2017-01-18 20:00:00'),
        (3, 'Plate', '2017-01-19 20:00:00');
 
INSERT INTO `product_options` (`id`, `name`) VALUES
        (11, 'Weight'),
        (12, 'Capacity');
 
INSERT INTO `product2options` (`product_id`, `option_id`, `value`) VALUES
        (1, 11, 200),
        (1, 12, 250),
        (2, 11, 35),
        (2, 12, 15),
        (3, 11, 310),
        (3, 12, 300),
        (2, 11, 45),
        (2, 12, 25);

select distinct p.*, po.*, p2o.* from products p INNER JOIN product2options p2o ON p.id=p2o.product_id JOIN product_options po ON p2o.option_id=po.id where created_at > '2017-01-01' and name='Weight' and value='310';



-- 1/ Add date field and fill it in with data 
ALTER TABLE review ADD column created_at DATETIME NULL;
UPDATE review SET created_at = FROM_UNIXTIME(UNIX_TIMESTAMP('2015-01-01 00:00:00') + FLOOR(0 + (RAND() * 63072000)));

-- 2/ SELECT, we cannot use index for rdate
SELECT DATE(created_at) AS rdate, COUNT(*) AS rcount FROM review GROUP BY rdate;

-- 3/ ADD virtuall column and index
ALTER TABLE review ADD COLUMN created_at_date DATE GENERATED ALWAYS AS (DATE(created_at)) VIRTUAL;
ALTER TABLE review ADD KEY (created_at_date);

-- 4/ Now index is used
SELECT created_at_date, COUNT(*) AS rcount FROM review GROUP BY created_at_date;

-- 5/ Which one
ALTER TABLE review ADD KEY date_movie (created_at_date, movie_id);
ALTER TABLE review ADD KEY movie_date (movie_id, created_at_date);
