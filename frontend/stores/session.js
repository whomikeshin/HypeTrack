var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var SessionStore = new Store(AppDispatcher);

var _currentUser;
var _currentUserHasBeenFetched = false;

SessionStore.currentUser = function () {
  return _currentUser;
}

module.exports = SessionStore;
