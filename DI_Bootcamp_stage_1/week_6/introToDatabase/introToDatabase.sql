-- create table actors (
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	last_name VARCHAR (100) NOT NULL,
-- 	agae DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL
-- )
-- select * from actors

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Branda','Fazie', '01/02/1979', 15)

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Cliffy','Mauray', '03/10/1991', 4), ('Janiqua', 'Mars', '13/09/1999', '7')

-- SELECT * FROM actors 
-- ORDER BY last_name DESC 
-- LIMIT 4 ;
-- SELECT * FROM actors 
-- WHERE first_name LIKE '%a%';
SELECT * FROM actors
