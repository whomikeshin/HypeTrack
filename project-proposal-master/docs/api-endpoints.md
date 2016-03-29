# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Tracks

- `GET /api/tracks`
  - Tracks index/search
  - accepts `artis_name` query param to list tracks by artist
- `GET /api/tracks/:id`

### Tracklists

- `GET /api/tracklists/:id`
- `PATCH /api/tracklists/:id`
- `GET /api/tracklists/:id/tracks`
  - index of all tracks for a tracklist

### Artist

- A track's artist will be included in the track show template
- `GET /api/artist`
  - includes query param for typeahead suggestions

### Genre

- A track's genre will be included in the track show template
- `GET /api/genre`
  - includes query param for typeahead suggestions

### Blog

- A track's blog source will be included in the track show template
- `GET /api/blog`
