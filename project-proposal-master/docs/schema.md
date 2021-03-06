# Schema Information

## tracks
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
artist_id     | integer   | not null, foreign key (references artists), indexed
body          | text      | not null
tracklist_id  | integer   | not null, foreign key (references tracklists), indexed
blog_id       | integer   | not null, foreign key (references blogs),
indexed
post_date     | datetime  | not null
genre_id      | integer   | not null, foreign key (references genres),
indexed
remix         | string    |
remix_id      | integer   |
favorite      | boolean   | not null, default: false
type          | string    |

## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## tracklists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## blogs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
url         | string    |

## genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## remixes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null  

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
