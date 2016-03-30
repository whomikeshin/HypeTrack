var React = require('react');
var TrackStore = require('../../stores/track');
var ApiUtil = require('../../util/api_util');
var TrackIndexItem = require('./index_item');

function _getAllTracks () {
  return TrackStore.all();
}

var Index = React.createClass({
  getInitialState: function () {
    return { tracks: _getAllTracks() };
  },

  componentDidMount: function () {
    this.onChangeToken = TrackStore.addListener(this._onChange);
    ApiUtil.fetchTracks();
  },

  componentWillUnmount: function () {
    this.onChangeToken.remove();
  },

  _onChange: function () {
    var tracks = _getAllTracks();
    this.setState({ tracks: tracks });
  },

  render: function () {
    var tracks = this.state.tracks;

    return (
      <div>
        <h2 className="tracks-title">Tracks</h2>
        <ul className="tracks-list">
          {tracks.map(function (track) {
            <li>{track.title}</li>;
            return <TrackIndexItem key={track.id} track={track} />;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Index;
