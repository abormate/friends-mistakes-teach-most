SELECT * FROM users
LIMIT 3;

SELECT * FROM posts
LIMIT 3;

SELECT * FROM subreddits
LIMIT 3;

SELECT COUNT(*)
FROM subreddits;

SELECT MAX(score) as 'high_score from posts', user_id
FROM posts;

SELECT MAX(score) as 'high_score_users', username
FROM users;

SELECT subscriber_count, name
FROM subreddits
ORDER BY subscriber_count DESC
LIMIT 5;

SELECT users.username, COUNT(posts.title)
FROM users
JOIN posts
  ON users.id = posts.user_id
GROUP BY users.id
ORDER BY 2 DESC;

SELECT users.id, posts.title
FROM posts
JOIN users
  ON posts.user_id = users.id;

WITH popular_posts AS (
  SELECT *
  FROM posts
  WHERE score >= 5000
)
SELECT subreddits.name, popular_posts.title, popular_posts.score
FROM subreddits
INNER JOIN popular_posts
  ON subreddits.id = popular_posts.subreddit_id
ORDER BY popular_posts.score DESC;

SELECT MAX(score) AS 'highest_scoring_post', posts.title, subreddits.name
FROM posts
INNER JOIN subreddits
  ON posts.subreddit_id = subreddits.id
GROUP BY subreddits.id;

SELECT ROUND(AVG(posts.score),2) AS 'avg_score_post', subreddits.name
FROM subreddits
JOIN posts
  ON subreddits.id = posts.subreddit_id
GROUP BY subreddits.name
ORDER BY 1 DESC;
