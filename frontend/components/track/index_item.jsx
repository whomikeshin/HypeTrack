var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  // mixins: [ReactRouter.history],
  render: function () {
    var track = this.props.track;
    return (
      <li className="track group">

        <section className="track-detail-container">
          <div className="track-artist">
            {track.artist_name}
          </div>

          <div className="track-name">
            {track.title}
          </div>

          <section className="track-blog">
            <div className="track-blog-count">
              Posted by {track.blog_count} blogs
            </div>

            <div className="track-blog-name">
              {track.blogs[0].name}
            </div>
            
            <p className="track-blog-description">
              {track.description.slice(0, 200).concat("...")}
            </p>
          </section>

        </section>
      </li>
    );
  }
});

module.exports = IndexItem;
