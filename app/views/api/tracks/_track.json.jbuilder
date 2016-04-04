json.extract! track, :id, :title, :blogs, :playlists, :posts

json.artist_name track.artist.name

json.blog_count track.blogs.length

json.favorite_count track.user_favorites.length

# json.image_url asset_path(track.track_image.url)
# json.audio_url asset_path(track.audio.url)
