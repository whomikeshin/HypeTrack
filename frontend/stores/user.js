var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var UserConstants = require ('../constants/user_constants');

var _users = [];
var UserStore = new Store(AppDispatcher);

var resetUsers = function(users) {
  _users = users.slice();
};

UserStore.all = function () {
  return _users.slice();
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      UserStore.__emitChange();
      break;
  }
};

UserStore.find = function (user_id) {
  return _users.find(function (user) {
    return user.id === parseInt(user_id);
  });
};


module.exports = UserStore;
