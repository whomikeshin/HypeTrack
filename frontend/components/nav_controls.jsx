var React = require('react');
var PlayerStore = require('../stores/player');


// function _isPlaying () {
//   return PlayerStore.playStatus();
// }

var NavControls = React.createClass({
  // getInitialState: function () {
  //   return {
  //     playStatus: _isPlaying()
  //   };
  // },
  //
  // componentDidMount: function () {
  //   this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
  // },
  //
  // componentWillUnmount: function () {
  //   this.onPlayerChangeToken.remove();
  // },

  render: function () {
    return (
      <ul className="nav-controls">
        <li>&#124;&#9668;&#9668;</li>
        <li>&#9654;</li>
        <li>&#9829;</li>
        <li>&#9658;&#9658;&#124;</li>
      </ul>
    );
  },

  // _onPlayerChange: function () {
  //   debugger
  //   audio = document.getElementsByTagName('audio');
  //   this.setState({
  //     playStatus: _isPlaying()
  //   });
  //
  //   if (this.state.playStatus) {
  //     audio[0].play();
  //   }
  // }
});


module.exports = NavControls;
