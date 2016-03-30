var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  mixins: [ReactRouter.history],
  render: function () {
    var track = this.props.track;
    return (
      <div className="track-index-item">
        {track.artist_id} - {track.title}
      </div>
    );
  }
});

module.exports = IndexItem;
