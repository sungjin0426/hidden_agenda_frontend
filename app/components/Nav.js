import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute, withRouter} from 'react-router';
import auth from './auth';
import ajaxHelpersAuth from '../utils/ajaxHelpersAuth';
import {Navbar, NavItem, Input, Row, Button} from 'react-materialize';

const Nav = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      error: false,
      successMsg: ''
    };
  },

  handleLogin() {
    var callbackAfterLogin = function(success) {
      if (!success) {
        console.log('There was an error');
        return this.setState({ error: true });
      } else {
        //successfully logged in
        this.setState({successMsg: 'Successfully logged in'});

        const location = this.props.location;
        if (location.state && location.state.nextPathname) {
          this.props.history.push(location.state.nextPathname);
        } else {
          this.props.history.push('/');
        }
      }
    }.bind(this);

    auth.login(this.state.email, this.state.password, callbackAfterLogin);
  },

  handleLogout() {
    var callbackAfterLogout = function(success) {
      if (success) {
        this.setState({successMsg: 'You have successfully logged out'});
      }
    }.bind(this);

    auth.logout(callbackAfterLogout);
  },

  render: function() {
    const isLoggedIn = auth.loggedIn();
    const logoutbtn = {
          color: '#FFFFFF',
          backgroundColor: 'transparent',
          border: '0',
          textDecoration: 'none',
          display: 'block',
          padding: '7px 27px',
          fontFamily: 'Open Sans, sans-serif',
          fontWeight: '700',
          textTransform: 'uppercase',
          fontSize: '14px',
          position: 'relative',
          margin: '0 10px 0 10px'
    }

    if (isLoggedIn) {
      return (
        <div className='cssmenu'>
          <div className='menu'>
            <ul>
             <li><Link to='/'><span>Home</span></Link></li>
             <li><Link to="/About"><span>About</span></Link></li>
             <li className='last'><a href='mailto:hiddenagendawdi@yahoo.com'><span>Contact us</span></a></li>
             <li><Link to="/AgendaComponent"><span>My Agenda</span></Link></li>
             <li>
                 <button style={logoutbtn} onClick={ () => this.handleLogout() }>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )
    }

    return(
      <div className='cssmenu'>
        <div className='menu'>
        <ul>
         <li><Link to='/'><span>Home</span></Link></li>
         <li><Link to="/About"><span>About</span></Link></li>
         <li className='last'><a href='mailto:hiddenagendawdi@yahoo.com'><span>Contact us</span></a></li>
         <li><Link to="/Signup"><span>Signup</span></Link></li>
        </ul>
        <div className='useridinput'>
          <Row>
            <Input placeholder='email' name='email' onChange={ e => this.setState({email: e.target.value})}/>
            <Input placeholder='password' type='password' name='password' onChange={ e => this.setState({password: e.target.value})}/>
          </Row>
            <div className='loginbutton'>
              <Button onClick={ () => this.handleLogin() }>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

export default Nav;
