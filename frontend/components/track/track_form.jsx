var React = require('react');
var ApiUtil = require ('../../util/api_util');

var TrackForm = React.createClass({

  getInitialState: function () {
    return {
      title: "",
      imageFile: null,
      imageUrl: null
    };
  },

  updateTitle: function (e) {
    this.setState({ title: e.currentTarget.value });
  },

  updateFile: function (e) {
    var file = e.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      var result = reader.result;
      this.setState({ imageFile: file, imageUrl: result });
    }.bind(this);

    reader.readAsDataURL(file);
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("post[image]", this.state.imageFile);

    ApiUtil.createTrack(formData);
  },

  render: function () {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input onChange={this.updateTitle} type="text" value={this.state.title}/>
          <br/>
          <label>Image</label>
          <input onChnage={this.updateFile} type="file"></input>

          <button>Save Track</button>
        </form>
      </div>
    );
  }
});

module.exports = TrackForm;
