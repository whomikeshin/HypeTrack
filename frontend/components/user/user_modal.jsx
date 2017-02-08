var React = require('react');
var NewUserForm = require('./user_form');
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
    position          : 'absolute',
    top               : '60%',
    left              : '50%',
    right             : 'auto',
    bottom            : 'auto',
    marginRight       : '-50%',
    transform         : 'translate(-50%, -50%)',
    border            : '3px solid #000',
    zIndex            : '9998'
  }
};

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
        <button className="player-button" id="create-button"
          onClick={this.openModal}>Create account</button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>
          <NewUserForm/>
        </Modal>
      </div>
    );
  }
});

module.exports = NewUserModal;
