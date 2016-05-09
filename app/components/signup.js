import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute, withRouter} from 'react-router';
import auth from './auth';
import ajaxHelpersAuth from '../utils/ajaxHelpersAuth';
import Nav from './Nav';
import {Navbar, Navitem, Input, Row, Button} from 'react-materialize';

const Signup = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: false,
      successMsg: ''
    };
  },

  // all auth fxns take a cb fxn that specify what to do after the ajax call
  handleSignup() {
    var callbackAfterSignup = function(success) {
      if (!success) {
        console.log('There was an error');
        return this.setState({ error: true });
      } else {
        // successfully signed up
        this.props.history.push('/');
      }
    }.bind(this);

    auth.signup(this.state.email, this.state.password, this.state.passwordConfirmation, callbackAfterSignup);
  },

  handleLogout() {
    var callbackAfterLogout = function(success) {
      if (success) {
        this.setState({successMsg: 'You have successfully logged out'});
      }
    }.bind(this);

    auth.logout(callbackAfterLogout);
  },

  render: function(){
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
          <Nav />
        </div>
      )
    }

    return (
      <div className='signupform'>
        <input placeholder='email' type='email' name='email' onChange={ e => this.setState({email: e.target.value})}/>
        <input placeholder='password' type='password' name='password' onChange={e => this.setState({password: e.target.value})} />
        <input placeholder='password confirmation' type='password' name='passwordConfirm' onChange={ e => this.setState({passwordConfirmation: e.target.value})} />
        <Button onClick={ () => this.handleSignup() }>Submit</Button>
        <p>Already have an account?</p>
        <Link to={'/'}>Home</Link>
        <p>{this.state.successMsg}</p>
      </div>
    );
  }
})

export default Signup;
