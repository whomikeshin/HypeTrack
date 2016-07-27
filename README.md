#HypeTrack

HypeTrack is a web application that aggregates new music trending on blogs. It allows users to discover songs that appeal to their specific tastes. The site was inspired by HypeMachine and was built using Ruby on Rails and React.js.

Explore and listen to new tracks. Get Hype! [hypetrack.xyz](http://www.hypetrack.xyz/)

###Profile View:
* Log in to access profile, add songs to favorites, and follow blogs access new posts in your feed!
![profile]

###Technical Details:
##User Authentication
User authentication is handled in the backend using BCrypt to encrypt passwords. Password hash values are saved to the database and rehashed to check the user's login password. 

###Features:
* Sign up & log in with email
* Explore latest and most popular tracks
* Favorite tracks
* Follow blogs, artist, users
* Custom track controls
* Navbar fixed to top of page
* Waveform visualization

###Languages, Frameworks & Libraries
* Ruby on Rails
* PostgreSQL
* React
* Flux
* jQuery
* Wavesurfer
* Gems
  * Paperclip
  * Jbuilder
  * BCrypt

###To-Do:
* [ ] Notifications
* [ ] Search
* [ ] Genre Tags
* [ ] Infinite Scroll
* [ ] Integrate Reddit API
* [ ] Track control icons

### Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[profile]: ./app/assets/images/profile.png

[views]: ./project-proposal-master/docs/views.md
[components]: ./project-proposal-master/docs/components.md
[stores]: ./project-proposal-master/docs/stores.md
[api-endpoints]: ./project-proposal-master/docs/api-endpoints.md
[schema]: ./project-proposal-master/docs/schema.md
