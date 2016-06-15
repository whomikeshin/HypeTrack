json.extract! @user, :id, :username, :thumb_url, :favorite_tracks, :created_at

json.favorite_tracks do
  json.array! @user.favorite_tracks, partial: 'api/tracks/track', as: :track
end

json.blog_follows do
  json.array! @user.blog_follows, partial: 'api/blogs/blog', as: :blog
end
