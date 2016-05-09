import React from 'react';
import Nav from './Nav';

const Main = React.createClass({

  render:function(){

    return (
      <div>
      <div className="main-container">
        <Nav />
        <br/>
        {this.props.children}
      </div>

      </div>
    );
  }
});

export default Main;
