json.extract! post, :id, :track_info

json.artist_name post.track.artist.name

json.track_title post.track.title

json.blog_name post.blog.name
