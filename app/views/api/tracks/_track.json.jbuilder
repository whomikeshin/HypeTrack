json.extract! track, :id, :title, :description, :blogs, :playlists

json.artist_name track.artist.name

json.blog_count track.blogs.count
