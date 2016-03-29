# Phase 2: Flux Architecture and Track CRUD (1.5 days)

## Rails
### Models
* Track

### Controllers
* Api::TracksController (index, show)

### Views
* tracks/index.json.jbuilder
* tracks/show.json.jbuilder

## Flux
### Views (React Components)
* TracksIndex
  - TrackIndexItem
* Track Detail
  - TrackTags

### Stores
* Track

### Actions
* ApiActions.receiveAllTracks -> triggered by ApiUtil
* ApiActions.receiveSingleTrack
* ApiActions.deleteTrack
* NoteActions.fetchAllTracks -> triggers ApiUtil
* NoteActions.fetchSingleTrack
* NoteActions.createTrack
* NoteActions.editTrack
* NoteActions.destroyTrack

### ApiUtil
* ApiUtil.fetchAllTracks
* ApiUtil.fetchSingleTrack
* ApiUtil.createTrack
* ApiUtil.editTrack
* ApiUtil.destroyTrack

## Gems/Libraries
* Flux Dispatcher (npm)
