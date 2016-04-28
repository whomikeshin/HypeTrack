var React = require('react');
var Modal = require('react-modal');
var LoginModal = require('./login_modal');
var UserModal = require('./user_modal');

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
    top               : '50%',
    left              : '50%',
    right             : 'auto',
    bottom            : 'auto',
    marginRight       : '-50%',
    transform         : 'translate(-50%, -50%)',
    border            : '3px solid #000'
  }
};

var accountForm = <div className="account-form">
                    <h1 className="form-header">You Need an Account</h1>

                    <form>
                      <p className="acc-p">
                        A free account lets you favorite tracks and
                        create your own music stream with your favorite
                        artists, blogs & friends.
                      </p>

                      <br/>
                      <UserModal/>
                      <br/>
                      <LoginModal/>
                    </form>
                  </div>;

var FavModal = React.createClass({

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
        <button className="fav-modal"
          onClick={this.openModal}>
          <i className="fa fa-heart"></i>
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>
            {accountForm}
        </Modal>
      </div>
    );
  },
});

module.exports = FavModal;
