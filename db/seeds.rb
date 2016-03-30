User.destroy_all

me = User.create!(
  email: "mikekshin@hotmail.com",
  username: "OG",
  password: "password",
  activation_token: 1
)

kanye = User.create!(
  email: "yeezy@hotmail.com",
  username: "yeezy",
  password: "password",
  activation_token: 2
)

Track.destroy_all

track_1 = Track.create!(
  title: "You're Good But I'm Better",
  description: "Posted by 5 blogs",
  artist_id: 1
)

track_2 = Track.create!(
  title: "Waves",
  description: "Posted by 2 blogs",
  artist_id: 2
)

track_3 = Track.create!(
  title: "Weight in Gold",
  description: "Posted by 49 blogs",
  artist_id: 3
)

track_4 = Track.create!(
  title: "Bourbon",
  description: "Posted by 34 blogs",
  artist_id: 3
)

Artist.destroy_all

artist_1 = Artist.create!(
  name: "Kill J"
)

artist_2 = Artist.create!(
  name: "Miguel"
)

artist_3 = Artist.create!(
  name: "Gallant"
)
