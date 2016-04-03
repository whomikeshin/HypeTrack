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
  artist: kill_j,
)

track_2 = Track.create!(
  title: "Waves",
  artist: miguel,
)

track_3 = Track.create!(
  title: "Weight in Gold",
  artist: gallant,
)

track_4 = Track.create!(
  title: "Bourbon",
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
  track_info: "Highly anticipated debut Quasi EP by forward thinking Danish citizen Kill J has finally landed",
  blog_id: pitchfork.id
)

track_2_pitchfork = Post.create!(
  track_id: track_2.id,
  track_info: "Miguel dropping the remix to his single 'waves' yesterday and the whole #waves saga",
  blog_id: pitchfork.id
)

track_2_the_fader = Post.create!(
  track_id: track_2.id,
  track_info: "Miguel recruits rap wunderkind Travis $cott for the remix of “Waves” and it obviously couldn’t have come at a better time",
  blog_id: the_fader.id
)

track_3_pitchfork = Post.create!(
  track_id: track_3.id,
  track_info: "Bounce-Worthy talent Gallant has accomplished much in short amount of time and is now on the verge of releasing his",
  blog_id: pitchfork.id
)

track_3_the_fader = Post.create!(
  track_id: track_3.id,
  track_info: "This song is straight up Ginuwine, Dru Hill, Jodeci, H-Town nostalgia. A powerful voice worth it's weight in gold",
  blog_id: the_fader.id
)

track_3_stereogum = Post.create!(
  track_id: track_3.id,
  track_info: "Art lives on heartbreak. I was first introduced to Gallant, the young soaring R&B star when I saw him perform",
  blog_id: stereogum.id
)

track_4_stereogum = Post.create!(
  track_id: track_4.id,
  track_info: "With the sea of falsetto-oriented R&B cropping up on the daily, it takes a solid track to truly standout",
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
