import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConf: '',
      isApplicant: null
    };
  }


  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var signupData = {...this.state}; // *** 1st = make a COPY of 'state'
    signupData.isApplicant = signupData.isApplicant === 'true'; // *** 2nd = if isApplicant is STRING 'true' (which is how react handles it) > this makes it an ACTUAL True boolean!
    userService.signup(signupData) // replaced (this.state) > (signupData) since we copied it
      // successfully signed up - show 'home page'
      .then(() => {
        this.props.handleSignupOrLogin(); // ADDED THIS!!!!! for #7
        this.props.history.push('/home') 
      })
      // invalid user data
      .catch(err => this.props.updateMessage(err.message));
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf && (this.state.isApplicant === 'true' || this.state.isApplicant === 'false'));
  }

  render() {
    return (
      <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          </div>

          <select className="form-control dropdown" value={this.state.isApplicant} name="isApplicant" onChange={this.handleChange}>
            <option>Choose one:</option>
            <option value={true}>Medical School Applicant</option>
            <option value={false}>Medical Student</option>
          </select>

          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SignupForm;
