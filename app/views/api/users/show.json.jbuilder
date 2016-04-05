json.extract! @user, :id, :username

json.favorite_tracks do
  json.array! @user.favorites.map { |favorite| favorite.track }
end
