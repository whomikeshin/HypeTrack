json.extract! @artist, :id, :name

json.tracks do
  json.array! @artist.tracks, partial: 'api/tracks/track', as: :track
end
