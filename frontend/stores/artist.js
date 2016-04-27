var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ArtistConstants = require('../constants/artist_constants');

var _artists = [];
var ArtistStore = new Store(AppDispatcher);

var resetArtists = function(artists) {
  _artists = artists.slice();
};

ArtistStore.all = function () {
  return _artists.slice();
};

ArtistStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ArtistConstants.ARTISTS_RECEIVED:
      resetArtists(payload.artists);
      ArtistStore.__emitChange();
      break;
  }
};

ArtistStore.find = function (artist_id) {
  return _artists.find(function (artist) {
    return artist.id === parseInt(artist_id);
  });
};


module.exports = ArtistStore;
