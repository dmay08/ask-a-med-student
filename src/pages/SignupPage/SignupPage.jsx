import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
          {/* ...this.props = ALREADY PASSING EvErYtHiNg down!!!!!! */}
            {/* don't have to pass 'handleSignup' down here */}
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default SignupPage;