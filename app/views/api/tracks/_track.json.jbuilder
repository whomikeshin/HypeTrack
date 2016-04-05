json.extract! track, :id, :title, :blogs, :playlists, :posts

json.artist_name track.artist.name

json.post_count track.posts.length

json.favorite_count track.lovers.length
json.favorite_ids do
  json.array! track.lovers.map { |favorite| favorite.id }
end

# json.image_url asset_path(track.track_image.url)
# json.audio_url asset_path(track.audio.url)
