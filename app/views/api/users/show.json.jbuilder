json.extract! @user, :id, :username, :thumb_url, :favorite_tracks, :created_at

json.favorite_tracks do
  json.array! @user.favorite_tracks, partial: 'api/tracks/track', as: :track
end
