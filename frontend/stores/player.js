var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PlayerConstants = require('../constants/player_constants');
var TrackStore = require('./track');

var PlayerStore = new Store(AppDispatcher),
    _currentTrack = null,
    _playStatus = false,
    _trackHash = {};

var add = function (track) {
  // add a min and max key tracker
  _trackHash[track.trackData.id] = track;
  if (!_currentTrack) {
    _currentTrack = _trackHash[track.trackData.id];
  }
};

var remount = function (trackId, container, height, visible) {
  // why remove from cache
  var track = _trackHash[trackId];

  track.wavesurfer.remount(container, height, visible);
};

var unmount = function (trackId) {
  var isPlaying = false;
  if (isCurrentTrack(trackId)) {
    isPlaying = true;
  }

  var track = _trackHash[trackId];

  if (track) {
    track.wavesurfer.dismount(isPlaying);
    _trackCache.add(trackId, track);
    delete _trackHash[trackId];
  }
};

var isCurrentTrack = function (trackId) {
  return (_currentTrack && _currentTrack.trackData.id === trackId);
};

var play = function (trackId) {
  if (_playStatus) { pause(); }
  _playStatus = true;
  _currentTrack = _trackHash[trackId];
  _currentTrack.wavesurfer.play();
};

var pause = function () {
  _currentTrack && _currentTrack.wavesurfer.pause();
};

var next = function () {
  currentTrackId = _currentTrack.trackData.id;
  play(currentTrackId + 1);
};

var prev = function () {
  currentTrackId = _currentTrack.trackData.id;
  play(currentTrackId - 1);
};

var destroy = function (trackId) {
  _trackHash[trackId].wavesurfer.destroy();

  if (isCurrentTrack(trackId)) {
    _currentTrack = null;
  }
};

var reset = function () {
  if (_currentTrack) {
    pause();
    _currentTrack = null;
  }
};

PlayerStore.currentTrack = function () {
  return _currentTrack;
};

PlayerStore.all = function () {
  return _trackHash;
};

PlayerStore.isCurrentTrack = function (trackId) {
  return (_currentTrack && _currentTrack.trackData.id === parseInt(trackId));
};

PlayerStore.playStatus = function () {
  return _playStatus;
};

PlayerStore.isPlaying = function () {
  return !!_currentTrack && _currentTrack.wavesurfer.isPlaying();
};

PlayerStore.wavesurferExists = function (trackId) {
  return _trackHash[trackId];
};

PlayerStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PlayerConstants.TRACKS_RECEIVED:
      push(payload.tracks);
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.WAVE_RECEIVED:
      add(payload.track);
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.WAVE_REMOUNTED:
      remount(
        payload.trackId,
        payload.container,
        payload.height,
        payload.visible
      );
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.WAVE_UNMOUNTED:
      unmount(payload.trackId);
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.PLAYED:
      play(payload.trackId);
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.PAUSED:
      pause();
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.NEXT:
      next();
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.PREV:
      prev();
      PlayerStore.__emitChange();
      break;
  }
};

module.exports = PlayerStore;
