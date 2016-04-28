json.extract! @blog, :id, :name, :thumb_url, :twitter_url

json.tracks do
  json.array! @blog.tracks, partial: 'api/tracks/track', as: :track
end
