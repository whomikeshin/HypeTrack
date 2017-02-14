var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PlayerConstants = require('../constants/player_constants');
var TrackStore = require('./track');
var Cache = require('../lib/cache');
var LinkedList = require('../lib/linkedlist');

var PlayerStore = new Store(AppDispatcher),
    _currentTrack = null,
    _playStatus = false,
    // _trackCache = new Cache(20),
    _trackList = new LinkedList(),
    _trackArray = [];

var push = function (tracks) {
  if (_trackList.length === 0) {
    for (var i = 0; i < tracks.length; i++) {
      _trackList.push(tracks[i]);
    }
    _listToArray();
  }
};

var _listToArray = function () {
  var trackList = _trackList,
      track = _trackList.head;
  if (track) {
    while (true) {
      _trackArray.push(track);
      track = track.next;
      if (track === null) {
        break;
      }
    }
  }
};

var remount = function (trackId, container, height, visible) {
  debugger;
  var cached = _trackCache.remove(trackId).value;

  cached.wavesurfer.remount(container, height, visible);

  _loadedTracks[trackId] = cached;
};

var unmount = function (trackId) {
  var isPlaying = false;
  if (isCurrentTrack(trackId)) {
    isPlaying = true;
  }

  var track = _loadedTracks[trackId];

  if (track) {
    track.wavesurfer.dismount(isPlaying);
    _trackCache.add(trackId, track);
    delete _loadedTracks[trackId];
  }
};

var isCurrentTrack = function (trackId) {
  return (_currentTrack && _currentTrack.id === trackId);
};

var play = function (trackId) {
  pause();

  _currentTrack = _loadedTracks[trackId];
  _currentTrack.wavesurfer.play();
};

var pause = function () {
  _currentTrack && _currentTrack.wavesurfer.pause();
};

var playPause = function () {
  _currentTrack && _currentTrack.wavesurfer.playPause();
};

var playNext = function () {
  var nextTrack = TrackStore.next(_currentTrack.trackInfo.id);
  play(nextTrack.id);
};

var playPrev = function () {
  var prevTrack = TrackStore.prev(_currentTrack.trackInfo.id);

  play(prevTrack.id);
};

var destroy = function (trackId) {
  _loadedTracks[trackId].wavesurfer.destroy();

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
  return _trackArray;
};

PlayerStore.isCurrentTrack = function (trackId) {
  return (_currentTrack && _currentTrack.trackInfo.id === parseInt(trackId));
};

PlayerStore.playStatus = function () {
  return _playStatus;
};

PlayerStore.isPlaying = function () {
  return !!_currentTrack && _currentTrack.wavesurfer.isPlaying();
};

PlayerStore.wavesurferExists = function (trackId) {
  return _trackList.includes(trackId);
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
      _playStatus = true;
      play(payload.trackId);
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.PAUSED:
      pause();
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.ADD:
      add(payload.track);
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.PROGRESS:
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.NEXT:
      playNext();
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.PREV:
      playPrev();
      break;
  }
};

module.exports = PlayerStore;
