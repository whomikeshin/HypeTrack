# Flux Stores

### TrackStore

Holds all persisted track data.

##### Actions:
- `receiveAllTracks`
- `receiveSingleTrack`
- `removeTrack`

##### Listeners:
- `TracksIndex` (passes to `TrackIndexItem` via props)
- `TrackDetail`

### TrackFormStore

Holds un-persisted track data to send to the API.

##### Actions:
- `receiveNoteFormParams`

##### Listeners:
- `TrackForm`

### TrackListStore

Holds all persisted tracklist data.

##### Actions:
- `receiveAllTrackLists`
- `receiveSingleTrackList`

##### Listeners:
- `TrackListIndex`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`
