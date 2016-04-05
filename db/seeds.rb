User.destroy_all

me = User.create!(
  email: "mike@hotmail.com",
  username: "mike",
  password: "password",
  activation_token: 1
)

yeezus = User.create!(
  email: "kanye@hotmail.com",
  username: "yeezus",
  password: "password",
  activation_token: 2
)

Artist.destroy_all

kanye = Artist.create!(
  name: "Kanye"
)

foals = Artist.create!(
  name: "Foals"
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
  title: "Fade",
  artist: kanye,
  # track_image: "https://s3.amazonaws.com/hype-train-dev/seed-images/hypem.jpg",
  # audio: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Kanye+-+Fade.mp3",
)

track_2 = Track.create!(
  title: "London Thunder",
  artist: foals,
  # track_image: "https://s3.amazonaws.com/hype-train-dev/seed-images/hypem.jpg",
  # audio: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Foals+-+London+Thunder.mp3",
)

track_3 = Track.create!(
  title: "Weight in Gold",
  artist: gallant,
  # track_image: "https://s3.amazonaws.com/hype-train-dev/seed-images/gallant.jpg",
  # audio: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Gallant+-+Weight+In+Gold.mp3"
)

track_4 = Track.create!(
  title: "Bourbon",
  artist: gallant,
  # track_image: "https://s3.amazonaws.com/hype-train-dev/seed-images/gallant.jpg",
  # audio: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Gallant+-+Bourbon.mp3"
)

Playlist.destroy_all

latest = Playlist.create!(
  name: "Latest"
)

popular = Playlist.create!(
  name: "Popular"
)

favorites = Playlist.create!(
  name: "Favorites"
)

Post.destroy_all

Post.create!(
  track: track_1,
  track_info: "Kanye West's album The Life of Pablo will finally be available to stream and purchase outside of TIDAL",
  blog_id: pitchfork.id
)

Post.create!(
  track: track_2,
  track_info: "It appears Oxford outfit Foals wanted to hit the ground running with album four",
  blog_id: pitchfork.id
)

Post.create!(
  track: track_3,
  track_info: "Bounce-Worthy talent Gallant has accomplished much in short amount of time and is now on the verge of releasing his",
  blog_id: pitchfork.id
)

Post.create!(
  track: track_3,
  track_info: "This song is straight up Ginuwine, Dru Hill, Jodeci, H-Town nostalgia. A powerful voice worth it's weight in gold",
  blog_id: the_fader.id
)

Post.create!(
  track: track_3,
  track_info: "Art lives on heartbreak. I was first introduced to Gallant, the young soaring R&B star when I saw him perform",
  blog_id: stereogum.id
)

Post.create!(
  track: track_4,
  track_info: "With the sea of falsetto-oriented R&B cropping up on the daily, it takes a solid track to truly standout",
  blog_id: the_fader.id
)

TracksPlaylist.destroy_all

TracksPlaylist.create!(
  track_id: track_1.id,
  playlist_id: latest.id
)

TracksPlaylist.create!(
  track_id: track_2.id,
  playlist_id: latest.id
)

TracksPlaylist.create!(
  track_id: track_3.id,
  playlist_id: latest.id
)

TracksPlaylist.create!(
  track_id: track_4.id,
  playlist_id: latest.id
)

Favorite.destroy_all

Favorite.create!(
  user: yeezus,
  track: track_1
)

Favorite.create!(
  user: yeezus,
  track: track_3
)

Favorite.create!(
  user: yeezus,
  track: track_4
)
