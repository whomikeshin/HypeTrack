var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  // mixins: [ReactRouter.history],
  render: function () {
    var track = this.props.track;
    return (
      <section className="track-container">
        <div className="track-artist">
          {track.artist_name}
        </div>

        <div className="track-name">
          {track.title}
        </div>

        <div className="track-description">
          {track.description.slice(0, 100).concat("...")}
        </div>

        <div className="track-blog">
          {track.blogs[0].name}
        </div>

        <div className="track-blog-count">
          {track.blog_count}
        </div>
      </section>
    );
  }
});

module.exports = IndexItem;
