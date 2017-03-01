#HypeTrack

HypeTrack is a web application that aggregates new music posted on blogs. It allows users to discover songs that appeal to their specific tastes. The site was inspired by HypeMachine and was built using Ruby on Rails and React.js.

Explore and listen to new tracks! [hypetrack.xyz](http://www.hypetrack.xyz/)

###Profile View:
Log in to access your profile, add songs to favorites, and follow blogs to fetch new posts in your feed!
![profile]

##Technical Details:
###User Authentication
User authentication is handled in the backend using BCrypt to encrypt passwords. Password hash values are saved to the database and rehashed to check the user's login password.

##Features:
* Sign up & log in with email
* Explore latest and most popular tracks
* Favorite tracks
* Follow blogs, artists
* Custom nav track controls
* Waveform visualization

##Languages, Frameworks & Libraries
* Ruby on Rails
* PostgreSQL
* Heroku
* [React][React]
* [Flux][Flux]
* [jQuery][jQuery]
* [Wavesurfer][Wavesurfer]
* Gems
  * Paperclip
  * Jbuilder
  * BCrypt

##To-Do:
* [ ] Notifications
* [ ] Search
* [ ] Genre Tags
* [ ] Upload background image
* [ ] Web crawler

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[profile]: ./app/assets/images/profile.png

[React]:https://facebook.github.io/react/
[Flux]:https://facebook.github.io/flux/
[jQuery]:https://github.com/jquery/jquery
[Wavesurfer]:https://github.com/katspaugh/wavesurfer.js

[views]: ./project-proposal-master/docs/views.md
[components]: ./project-proposal-master/docs/components.md
[stores]: ./project-proposal-master/docs/stores.md
[api-endpoints]: ./project-proposal-master/docs/api-endpoints.md
[schema]: ./project-proposal-master/docs/schema.md
