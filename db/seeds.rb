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
