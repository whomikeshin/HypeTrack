# json.array! @tracks, partial: 'api/tracks/track', as: :track
json.array! @tracks do |track|
  json.title track.title
  json.description track.description
  json.artist_id track.artist_id
  # figure do reference artist name
end
