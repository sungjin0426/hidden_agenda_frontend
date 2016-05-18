import React from 'react';
import {Button, Card, Row, Col} from 'react-materialize';


const SearchName = React.createClass({
  render: function(){
    const inputstyle = {
      fontSize: '30px'
    }
    
    return(
      <div className='searchbyname'>
        <h3>Search by Name:</h3>
        <input style={inputstyle} onChange={this.props.onChangeName} value={this.props.markerCityName} type='text' placeholder='search by name' />
        <Button waves='light' className="Submit" onClick={this.props.onSubmit} type='button'>Submit!</Button>


    </div>
    );
  }
});

export default SearchName;
