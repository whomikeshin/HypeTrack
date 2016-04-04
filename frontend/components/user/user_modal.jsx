var React = require('react');
var NewUserForm = require('./user_form');
var Modal = require('react-modal');

var NewUserModal = React.createClass({

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
        <button className="signup-button" onClick={this.openModal}>Sign up</button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          <NewUserForm />
        </Modal>
      </div>
    );
  }
});

module.exports = NewUserModal;
