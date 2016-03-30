# NewTunes

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

NewTunes is a web application inspired by Hype Machine built using Ruby on Rails and React.js. NewTunes allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Read tracks (Play tracks)
- [ ] Update, delete tracks on track list
- [ ] Follow artists, blogs, friends


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Tracks Model, API, and basic APIUtil (1.5 days)

**Objective:** Tracks can be created, read, edited and destroyed through
the API.

- [ ] create `Track` models
- [ ] seed the database with small amount of tracks
- [ ] CRUD API for tracks (`Api::TracksController`)
- [ ] jBuilder views for tracks
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console
- implement each track component, building out the flux loop as needed
  - [ ] `TracksIndex`
  - [ ] `TrackIndexItem`

### Phase 3: Flux Architecture and Router (1 day)

**Objective:** Tracks can be read with the user interface. Only admins or crawler can create and destroy tracks.
- [ ] create `Artist`, `Blog`, `Genre` models
- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- add each track component, building out the flux loop as needed
  - [ ] `TrackForm`
  - [ ] `GenresIndex`
  - [ ] `SearchIndex`

### Phase 4: Build TrackPlayer (1 day)

**Objective:** Playback seeded tracks. Existing pages (including singup/signin) will look good.

- [ ] create working TrackPlayer

### Phase 5: TrackLists (1 day)

**Objective:** Tracks belong to TrackLists. They can be added and viewed by TrackList.

- [ ] create `TrackList` model
- build out API, Flux loop, and components for:
  - [ ] TrackList CRUD
  - [ ] adding tracks requires a tracklist
  - [ ] moving tracks to a different tracklist
  - [ ] viewing tracks by tracklist
- Use CSS to style new views

Phase 5 adds organization to the Tracks. Tracks belong to a TrackList,
which has its own `Index` view.

### Phase 6: Genre and Artist Tags (1 day)

**Objective:** Tracks can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for tracks
  - [ ] adding tags to tracks
  - [ ] creating tags while adding to tracks
  - [ ] searching tracks by tag
- [ ] Style new elements

### Phase 7: Build Music Crawler (1.5 days)

**Objective:** Tracks searched and updated in at time intervals to database.

### Phase 8: Allow Complex Styling in Tracks (0.5 days)

**Objective:** Enable complex styling of tracks.

- [ ] integrate `react-quill` (based on Quill.js).
- [ ] use Rails helpers to sanitize HTML before rendering.
- [ ] style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**Objective:** Make the site feel more cohesive and awesome.

- [ ] get feedback on my UI from others
- [ ] refactor HTML classes & CSS rules
- [ ] Aad modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] add SideBar for artist shows
- [ ] add Time Machine for weekly archive updates

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
