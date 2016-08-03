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

broods = Artist.create!(
  name: "Broods"
)

miike_snow = Artist.create!(
  name: "Miike Snow"
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

london_thunder = Track.create!(
  title: "London Thunder",
  artist: foals,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Foals+-+London+Thunder.mp3"
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

i_love_kanye = Track.create!(
  title: "I Love Kanye",
  artist: kanye,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/09+I+Love+Kanye.mp3"
)

bridges_astr_remix = Track.create!(
  title: "Bridges ASTR Remix",
  artist: broods,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Broods+-+Bridges+(ASTR+Remix).mp3",
)

we_had_everything = Track.create!(
  title: "We Had Everything",
  artist: broods,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/02.+We+Had+Everything.mp3"
)

heartlines = Track.create!(
  title: "Heartlines",
  artist: broods,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/04.+Heartlines.mp3"
)

my_trigger = Track.create!(
  title: "My Trigger",
  artist: miike_snow,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/01+-+My+Trigger.mp3"
)

genghis_kahn_louis_remix = Track.create!(
  title: "Genghis Khan Louis The Child Remix",
  artist: miike_snow,
  audio_file_name: "https://s3.amazonaws.com/hype-train-dev/seed-audio/Miike+Snow+-+Genghis+Khan+(Louis+The+Child+Remix)+(Mp3FB.com).mp3"
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
  track: mountain_at_my_gates,
  track_info: "Foals are making me sososo happy lately. Just a few weeks ago they have released 'What Went Down', the title",
  blog_id: dancing_astronaut.id,
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
  track: bridges_astr_remix,
  track_info: "“FADER PREMIERE NYC’s ASTR remixed “Bridges,” from New Zealand’s brother-sister duo Broods, giving the original growler a sort of Swedes-doing-tropic",
  blog_id: the_fader.id,
  post_date: Time.now,
  post_url: "http://www.thefader.com/2014/04/23/stream-broods-bridges-astr-remix/",
  thumb_url: "https://upload.wikimedia.org/wikipedia/en/2/21/Broods_%E2%80%93_Broods.jpg"
)

Post.create!(
  track: we_had_everything,
  track_info: "You are in your car, a light blue classic convertible with brilliant leather seats, driving down the California coastline in",
  blog_id: stereofox.id,
  post_date: Time.now,
  post_url: "http://survivingthegoldenage.com/broods-conscious/",
  thumb_url: "https://images.genius.com/a0fceafe6191a0a461a8eac9c459199b.1000x1000x1.jpg"
)

Post.create!(
  track: heartlines,
  track_info: "Welcome to your Monday serving of new music cocktails, where this week’s focus is on powerful female vocalists",
  blog_id: stereofox.id,
  post_date: Time.now,
  post_url: "http://therevue.ca/2016/06/13/melodic-tonic-16-vol-23/",
  thumb_url: "https://images.genius.com/a0fceafe6191a0a461a8eac9c459199b.1000x1000x1.jpg"
)

Post.create!(
  track: i_love_kanye,
  track_info: "Finally, after a protracted and often chaotic roll-out, the new Kanye West album is here. All hail Mr.West",
  blog_id: pitchfork.id,
  post_date: Time.now,
  post_url: "http://pitchfork.com/reviews/albums/21542-the-life-of-pablo/",
  thumb_url: "http://cdn4.pitchfork.com/albums/22851/homepage_large.1192269b.jpg"
)

Post.create!(
  track: london_thunder,
  track_info: "It appears Oxford outfit Foals wanted to hit the ground running with album four. After a triumphant headlining slot.",
  blog_id: dancing_astronaut.id,
  post_date: Time.now,
  post_url: "http://www.northerntransmissions.com/album-review/went-foals/",
  thumb_url: "http://www.stereofox.com/images/25491/resized/24672.jpg"
)

Post.create!(
  track: my_trigger,
  track_info: "Swedish electo-pop trio put out the first single from their upcoming Happy To You, “Devil’s Work,” out in December",
  blog_id: stereogum.id,
  post_date: Time.now,
  post_url: "http://www.stereogum.com/928922/miike-snow-paddling-out/mp3s/",
  thumb_url: "https://upload.wikimedia.org/wikipedia/en/1/1b/Iii_-_Miike_Snow_%28Front_Cover%29.png"
)

Post.create!(
  track: genghis_kahn_louis_remix,
  track_info: "Swedish electo-pop trio put out the first single from their upcoming Happy To You, “Devil’s Work,” out in December",
  blog_id: musicgeeks.id,
  post_date: Time.now,
  post_url: "http://beautifulbuzzz.com/home/2016/1/12/miike-snow-genghis-kahn-louis-the-child-remix",
  thumb_url: "https://upload.wikimedia.org/wikipedia/en/1/1b/Iii_-_Miike_Snow_%28Front_Cover%29.png"
)

Favorite.destroy_all

Favorite.create!(
  user: yeezus,
  track: i_love_kanye
)

Favorite.create!(
  user: guest,
  track: weight_in_gold
)

Favorite.create!(
  user: guest1,
  track: weight_in_gold
)

Favorite.create!(
  user: guest2,
  track: weight_in_gold
)

Favorite.create!(
  user: me,
  track: weight_in_gold
)

Favorite.create!(
  user: guest1,
  track: bridges_astr_remix
)

Favorite.create!(
  user: guest2,
  track: bridges_astr_remix
)

Follow.destroy_all

Follow.create!(
  user: me,
  blog: stereofox
)

Follow.create!(
  user: yeezus,
  blog: musicgeeks
)

Genre.destroy_all

dance = Genre.create!(
  name: "Dance"
)

dubstep = Genre.create!(
  name: "Dubstep"
)

electronic = Genre.create!(
  name: "Electronic"
)

funk = Genre.create!(
  name: 'Funk'
)

hip_hop = Genre.create!(
  name: 'Hip Hop'
)

house = Genre.create!(
  name: 'House'
)

instrumental = Genre.create!(
  name: 'Instrumental'
)

pop = Genre.create!(
  name: 'Pop'
)

rock = Genre.create!(
  name: 'Rock'
)

Tag.destroy_all

Tag.create!(
  track_id: i_love_kanye.id,
  genre_id: hip_hop.id
)

Tag.create!(
  track_id: weight_in_gold.id,
  genre_id: hip_hop.id
)

Tag.create!(
  track_id: bourbon.id,
  genre_id: hip_hop.id
)
