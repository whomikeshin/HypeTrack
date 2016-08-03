json.extract! genre, :name

json.tracks do
  json.array! genre.tracks, partial: 'api/tracks/track', as: :track
end
