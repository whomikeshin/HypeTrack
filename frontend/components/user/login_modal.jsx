var React = require('react');
var LoginForm = require('./login_form');
var Modal = require('react-modal');

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
          onRequestClose={this.closeModal}>
            <LoginForm />
        </Modal>
      </div>
    );
  }
});

module.exports = LoginModal;
