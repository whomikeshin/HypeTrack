var React = require('react');
var NewUserForm = require('./user_form');
var LoginForm = require('./login_form');
var Modal = require('react-modal');

var UserMenu = React.createClass({

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
        <button onClick={this.openModal}>Sign up</button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
            <NewUserForm />
        </Modal>

        <button onClick={this.openModal}>Log in</button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
            <LoginForm />
        </Modal>
      </div>
    );
  }
});

module.exports = UserMenu;
