json.extract! blog, :id, :name, :url, :thumb_url, :twitter_url

json.tracks do
  json.array! blog.tracks, partial: 'api/tracks/track', as: :track
end

json.follower_count blog.followers.length
json.track_count blog.tracks.length

json.follower_ids do
  json.array! blog.followers.map { |follower| follower.id }
end
