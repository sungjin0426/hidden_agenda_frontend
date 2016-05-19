import React from 'react';
import {Link} from 'react-router';
const About = React.createClass({
  render: function(){
      const ulStyle = {
        listStyleType: 'none'
      }

    return(
      <div className= "aboutus">
      <br/><br/><br/>
        <p>We wanted to make an application that will allow users to save their favorite travel destination photos and locations. The user has the option to manually enter a city, or they can "explore" the map and drag the marker which will populate the input box with the city.</p>
        <p>Instagram and twitter are great ways of finding new places but not a great way of saving information. So by using the flickr api and mapbox api, we were able to append photos by search and then by using ruby on rails we were able to save it on our backend and reappend it to the saved page. We also incorporated user authorization so users can have their own account on the app and go back to their saved travel photos.
        </p>
        <h4>Created by</h4>
        <ul style={ulStyle}>
          <li><a href="https://www.linkedin.com/in/sumitb87">Sumit Bhasin</a></li>
          <li><a href="https://www.linkedin.com/in/stephenbreuhaus">Stephen Breuhaus</a></li>
          <li><a href="https://www.linkedin.com/in/sungjlee87">Sung Jin Lee</a></li>
        </ul>
        <h4>Source Code</h4>
        <ul style={ulStyle}>
          <li><a href="https://github.com/sungjin0426/hidden_agenda_frontend">GitHub - Frontend</a></li>
          <li><a href="https://github.com/sungjin0426/hidden_agenda_backend">GitHub - Backend</a></li>
        </ul>
      </div>
    );
  }
});
export default About;
