json.extract! track, :id, :title, :blogs, :playlists, :posts

json.artist_name track.artist.name

json.blog_count track.blogs.length
