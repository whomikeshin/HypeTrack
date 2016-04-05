var React = require('react');
var LoginForm = require('./login_form');
var Modal = require('react-modal');
var style = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
  },
  content : {
    top               : '50%',
    left              : '50%',
    right             : 'auto',
    bottom            : 'auto',
    marginRight       : '-50%',
    transform         : 'translate(-50%, -50%)',
  }
};

var LoginModal = React.createClass({

  getInitialState: function() {
    return({ modalOpen: false });
  },

  closeModal: function() {
    this.setState({ modalOpen: false });
  },

  openModal: function() {
    this.setState({ modalOpen: true });
  },

  render: function() {
    return(
      <div>
        <button className="login-button" onClick={this.openModal}>Log in</button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>
            <LoginForm />
        </Modal>
      </div>
    );
  },
});

module.exports = LoginModal;
