var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var UserConstants = require ('../constants/user_constants');
var _users = [];

var UserStore = new Store(AppDispatcher);

var resetUsers = function(users) {
  _users = users.slice(0);
};

// Use for a test //
UserStore.all = function () {
  return _users.slice(0);
};

UserStore.__onDispatch = function (payload) {
  switch (payload.ActionType) {
    case UserConstants.USERS_RECEIVED:
      var result = resetUsers(payload.users);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
