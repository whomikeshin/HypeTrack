User.destroy_all

me = User.create!(
  email: "mike@hotmail.com",
  username: "mike",
  password: "password",
  activation_token: 1,
  thumb_url: "https://s3.amazonaws.com/hype-train-dev/seed-images/hypem.jpg"
)

guest = User.create!(
  email: "guest@hotmail.com",
  username: "guest",
  password: "password",
  activation_token: 2,
  thumb_url: "https://s3.amazonaws.com/hype-train-dev/seed-images/hypem.jpg"
)

yeezus = User.create!(
  email: "kanye@hotmail.com",
  username: "yeezus",
  password: "password",
  activation_token: 3,
  thumb_url: "http://static03.mediaite.com/rr/up/2016/01/giphy.gif"
)

guest1 = User.create!(
  email: "guest1@hotmail.com",
  username: "guest1",
  password: "password",
  activation_token: 4,
  thumb_url: "https://s3.amazonaws.com/hype-train-dev/seed-images/hypem.jpg"
)

guest2 = User.create!(
  email: "guest2@hotmail.com",
  username: "guest2",
  password: "password",
  activation_token: 5,
  thumb_url: "https://s3.amazonaws.com/hype-train-dev/seed-images/hypem.jpg"
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

pretty_sister = Artist.create!(
  name: "Pretty Sister"
)

vallis_alps = Artist.create!(
  name: "Vallis Alps"
)


Blog.destroy_all

pitchfork = Blog.create!(
  name: "Pitchfork",
  url: "http://pitchfork.com/",
  thumb_url: "http://logonoid.com/images/pitchfork-logo.png",
  twitter_url: "https://twitter.com/pitchfork"
)

the_fader = Blog.create!(
  name: "The Fader",
  url: "http://www.thefader.com/",
  thumb_url: "http://cdn.shopify.com/s/files/1/0949/8758/t/2/assets/logo.png?10484645586965365266",
  twitter_url: "https://twitter.com/thefader"
)

stereogum = Blog.create!(
  name: "Stereogum",
  url: "http://www.stereogum.com/",
  thumb_url: "http://lillyhiatt.com/wp-content/uploads/2015/03/logo.png",
  twitter_url: "https://twitter.com/stereogum"
)

musicgeeks = Blog.create!(
  name: "Musicgeeks",
  url: "https://www.musicgeeks.co/",
  thumb_url: "http://newbornstartups.com/wp-content/uploads/2015/04/MGlogo500.png",
  twitter_url: "https://twitter.com/dshan",
)

stereofox = Blog.create!(
  name: "Stereofox",
  url: "http://www.stereofox.com/",
  thumb_url: "http://himynameisivo.com/wp-content/uploads/2014/08/Stereofox-Ivo-Dimchev-project-370x241.jpg",
  twitter_url: "https://twitter.com/wearestereofox"
)

dancing_astronaut = Blog.create!(
  name: "Dancing Astronaut",
  url: "http://www.dancingastronaut.com/",
  thumb_url: "http://www.cr2records.com/img/blogs/image/original/da-head-logo-102.jpg",
  twitter_url: "https://twitter.com/dancingastro"
)

Track.destroy_all

mountain_at_my_gates = Track.create!(
  title: "Mountain At My Gates",
  artist: foals,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/02-foals-mountain_at_my_gates.mp3"
)

weight_in_gold = Track.create!(
  title: "Weight in Gold",
  artist: gallant,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Gallant+-+Weight+In+Gold.mp3"
)

bourbon = Track.create!(
  title: "Bourbon",
  artist: gallant,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Gallant+-+Bourbon.mp3"
)

come_to_la = Track.create!(
  title: "Come To LA",
  artist: pretty_sister,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Kanye+-+Fade.mp3"
)

young = Track.create!(
  title: "Young",
  artist: vallis_alps,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Foals+-+London+Thunder.mp3"
)

i_love_kanye = Track.create!(
  title: "I Love Kanye",
  artist: kanye,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/09+I+Love+Kanye.mp3"
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
  track: mountain_at_my_gates,
  track_info: "Foals are making me sososo happy lately. Just a few weeks ago they have released 'What Went Down', the title",
  blog_id: stereofox.id,
  post_date: Time.now,
  post_url: "http://www.stereofox.com/foals-mountain-at-my-gates",
  thumb_url: "http://www.stereofox.com/images/25491/resized/24672.jpg"
)

Post.create!(
  track: weight_in_gold,
  track_info: "Bounce-Worthy talent Gallant has accomplished much in short amount of time and is now on the verge of releasing his",
  blog_id: dancing_astronaut.id,
  post_date: Time.now,
  post_url: "http://www.dancingastronaut.com/2015/06/gallants-weight-gold-zane-lowes-first-ever-beats-1-premiere/",
  thumb_url: "https://s3.amazonaws.com/hype-train-dev/seed-images/gallant.jpg"
)

Post.create!(
  track: weight_in_gold,
  track_info: "Gallant’s “Weight In Gold” inhabits a rarefied space somewhere between Leon Bridges’ sweet nostalgia and Miguel’s heavy, riff-soaked take on R&B",
  blog_id: the_fader.id,
  post_date: Time.now,
  post_url: "http://www.thefader.com/2015/06/30/gallant-weight-in-gold",
  thumb_url: "https://s3.amazonaws.com/hype-train-dev/seed-images/gallant.jpg"
)

Post.create!(
  track: weight_in_gold,
  track_info: "LOVE This is sexy, heartfelt R&B that reminds of the Ginuwine and Jodeci days. Which totally dates me, I know",
  blog_id: musicgeeks.id,
  post_date: Time.now,
  post_url: "https://www.musicgeeks.co/gallant/",
  thumb_url: "https://s3.amazonaws.com/hype-train-dev/seed-images/gallant.jpg"

)

Post.create!(
  track: bourbon,
  track_info: "LA R&B singer and Sufjan Stevens pal Gallant has announced his new album Ology due later this spring",
  blog_id: stereogum.id,
  post_date: Time.now,
  post_url: "http://www.stereogum.com/1863203/gallant-bourbon/mp3s/",
  thumb_url: "https://s3.amazonaws.com/hype-train-dev/seed-images/gallant.jpg"
)

Post.create!(
  track: come_to_la,
  track_info: "LOVE Huge bouncing bass and razor sharp guitar funk take me straight back to 90's West Coast hip hop",
  blog_id: musicgeeks.id,
  post_date: Time.now,
  post_url: "https://www.musicgeeks.co/pretty-sister/",
  thumb_url: "http://www.chansamusic.com/wp-content/uploads/2016/03/Pretty-Sister-Come-to-LA.jpg"
)

Post.create!(
  track: young,
  track_info: "We somehow missed this awesome song when it first got published in the beginning of 2015... but, oh well",
  blog_id: stereofox.id,
  post_date: Time.now,
  post_url: "http://www.stereofox.com/vallis-alps-young/",
  thumb_url: "http://www.stereofox.com/images/22848/resized/22863.jpg"
)

Post.create!(
  track: i_love_kanye,
  track_info: "Finally, after a protracted and often chaotic roll-out, the new Kanye West album is here.",
  blog_id: pitchfork.id,
  post_date: Time.now,
  post_url: "http://pitchfork.com/reviews/albums/21542-the-life-of-pablo/",
  thumb_url: "http://cdn4.pitchfork.com/albums/22851/homepage_large.1192269b.jpg"
)

TracksPlaylist.destroy_all

TracksPlaylist.create!(
  track_id: mountain_at_my_gates.id,
  playlist_id: latest.id
)

TracksPlaylist.create!(
  track_id: weight_in_gold.id,
  playlist_id: latest.id
)

TracksPlaylist.create!(
  track_id: bourbon.id,
  playlist_id: latest.id
)

Favorite.destroy_all

Favorite.create!(
  user: yeezus,
  track: i_love_kanye
)

Follow.destroy_all

Follow.create!(
  user: me,
  blog: stereofox
)
