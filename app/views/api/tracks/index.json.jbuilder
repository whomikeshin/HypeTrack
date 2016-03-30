# json.array! @tracks, partial: 'api/tracks/track', as: :track
json.array! @tracks do |track|
  json.id track.id
  json.title track.title
  json.description track.description
  json.artist_name track.artist.name
  # figure do reference artist name
end
