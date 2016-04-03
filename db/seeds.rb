User.destroy_all

me = User.create!(
  email: "mikekshin@hotmail.com",
  username: "mike",
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

Blog.destroy_all

pitchfork = Blog.create!(
  name: "Pitchfork",
  url: "http://pitchfork.com/"
)

the_fader = Blog.create!(
  name: "The Fader",
  url: "http://www.thefader.com/"
)

stereogum = Blog.create!(
  name: "Stererog",
  url: "http://www.stereogum.com/"
)

Track.destroy_all

track_1 = Track.create!(
  title: "You're Good But I'm Better",
  description: "Highly anticipated debut Quasi EP by forward thinking Danish citizen Kill J has finally landed",
  artist: kill_j,
)

track_2 = Track.create!(
  title: "Waves",
  description: "Miguel dropping the remix to his single 'waves' yesterday and the whole #waves saga",
  artist: miguel,
)

track_3 = Track.create!(
  title: "Weight in Gold",
  description: "I’m super freaking stoked that Gallant has been garnering so much attention lately – his music is so damn good",
  artist: gallant,
)

track_4 = Track.create!(
  title: "Bourbon",
  description: "Bounce-Worthy talent Gallant has accomplished much in short amount of time and is now on the verge of releasing his",
  artist: gallant,
)

Playlist.destroy_all

latest = Playlist.create!(
  name: "Latest"
)

popular = Playlist.create!(
  name: "Popular"
)

Post.destroy_all

track_1_pitchfork = Post.create!(
  track_id: track_1.id,
  blog_id: pitchfork.id
)

track_2_pitchfork = Post.create!(
  track_id: track_2.id,
  blog_id: pitchfork.id
)

track_2_the_fader = Post.create!(
  track_id: track_2.id,
  blog_id: the_fader.id
)

track_3_pitchfork = Post.create!(
  track_id: track_3.id,
  blog_id: pitchfork.id
)

track_3_the_fader = Post.create!(
  track_id: track_3.id,
  blog_id: the_fader.id
)

track_3_stereogum = Post.create!(
  track_id: track_3.id,
  blog_id: stereogum.id
)

track_4_stereogum = Post.create!(
  track_id: track_4.id,
  blog_id: the_fader.id
)

TracksPlaylist.destroy_all

track_1_latest = TracksPlaylist.create!(
  track_id: track_1.id,
  playlist_id: latest.id
)

track_2_latest = TracksPlaylist.create!(
  track_id: track_2.id,
  playlist_id: latest.id
)

track_3_latest = TracksPlaylist.create!(
  track_id: track_3.id,
  playlist_id: latest.id
)

track_4_latest = TracksPlaylist.create!(
  track_id: track_4.id,
  playlist_id: latest.id
)
