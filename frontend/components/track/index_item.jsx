var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  mixins: [ReactRouter.history],
  render: function () {
    var track = this.props.track;
    return (
      <li className="track-group">

        <section className="track-container">

          <div className="track-details">
            <div className="track-artist">
              {track.artist_name}
            </div>

            <div className="track-name">
              {track.title}
            </div>

            <div className="track-description">
              {track.description}
            </div>
          </div>
          <br/>

        </section>
      </li>
    );
  }
});

module.exports = IndexItem;
