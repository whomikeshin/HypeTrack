# Phase 3: TrackLists and Genres (2 days)

## Rails
### Models
* Artist
* Blog
* Genre

### Controllers
* Api::TrackListsController (index, show, update)
* Api::BlogController (index, show, update)

### Views
* tracklists/index.json.jbuilder
* tracklists/show.json.jbuilder
* genres/index.json.jbuilder
* genres/show.json.jbuilder

## Flux
### Views (React Components)
* TrackListIndex
  - TrackIndexItem
* GenresIndex
  - GenreIndexItem
* TrackFrom
* SearchIndex

### Stores
* TrackList

### Actions
* ApiActions.receiveAllTrackLists -> triggered by ApiUtil
* ApiActions.receiveSingleTrackList
* TrackListActions.fetchAllTrackLists -> triggers ApiUtil
* TrackListActions.fetchSingleTrackList
* TrackListActions.editTrackList
* ApiActions.receiveAllGenres -> triggered by ApiUtil
* ApiActions.receiveSingleGenre
* GenreActions.fetchAllGenres -> triggers ApiUtil
* GenreActions.fetchSingleGenre
* GenreActions.editGenre

### ApiUtil
* ApiUtil.fetchAllTrackLists
* ApiUtil.fetchTrackList
* ApiUtil.createTrackList
* ApiUtil.editTrackList
* ApiUtil.fetchAllGenres
* ApiUtil.fetchGenre
* ApiUtil.createGenre

## Gems/Libraries
