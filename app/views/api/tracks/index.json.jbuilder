json.array! @tracks, partial: 'api/tracks/track', as: :track
# json.array! @tracks do |track|
#   json.id track.id
#   json.title track.title
#   json.description track.description
#   json.artist_name track.artist.name
# end

json.array! @track_sources do |track_source|
  json.blog_name track_source.blog.name
end
