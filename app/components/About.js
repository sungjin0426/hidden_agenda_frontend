import React from 'react';
import {Link} from 'react-router';
const About = React.createClass({
  render: function(){
    return(
      <div className= "aboutus">
      <h1> <img src="app/images/team.jpg"/></h1>
        <p>We wanted to make an app for people to save incredible photos from amazing places! Just click to save! </p>
        <p>Just search by country, city or state and save places to visit later! </p>
  <Link to={'/'}>Back to Home</Link>
    <div className='teams'>
      <h1>Oh... we talking teams?</h1>
      <h2><img src="app/images/teams.jpg"/></h2>
    </div>
  </div>
    );
  }
});
export default About;
