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

Artist.destroy_all

kill_j = Artist.create!(
name: "Kill J"
)

miguel = Artist.create!(
name: "Miguel"
)

gallant = Artist.create!(
name: "Gallant"
)

Track.destroy_all

track_1 = Track.create!(
  title: "You're Good But I'm Better",
  description: "Posted by 5 blogs",
  artist: kill_j
)

track_2 = Track.create!(
  title: "Waves",
  description: "Posted by 2 blogs",
  artist: miguel
)

track_3 = Track.create!(
  title: "Weight in Gold",
  description: "Posted by 49 blogs",
  artist: gallant
)

track_4 = Track.create!(
  title: "Bourbon",
  description: "Posted by 34 blogs",
  artist: gallant
)
