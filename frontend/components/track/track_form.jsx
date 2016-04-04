var React = require('react');
var ApiUtil = require ('../../util/api_util');

var TrackForm = React.createClass({

  getInitialState: function () {
    return {
      title: ""
    };
  },

  updateTitle: function (e) {
    this.setState({ title: e.currentTarget.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("track[title]", this.state.title);
    ApiUtil.createTrack(formData);
  },

  render: function () {
    return(
      <div>
        <h2>New Track</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input onChange={this.updateTitle} type="text" value={this.state.title}/>

          <button>Save Track</button>
        </form>
      </div>
    );
  }
});

module.exports = TrackForm;
