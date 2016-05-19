import React from 'react';
import {Button, Card, Row, Col} from 'react-materialize';


const SearchName = React.createClass({
  render: function(){
    const inputstyle = {
      fontSize: '30px'
    }
    const h3Style = {
        textAlign: 'left'
    }

    return(
      <div className='searchbyname'>
        <h3 style={h3Style}>Search by Name:</h3>
        <input id="searchBoxCity" style={inputstyle} onChange={this.props.onChangeName} type='text' placeholder='search by name' />
        <Button waves='light' className="Submit" onClick={this.props.onSubmit} type='button'>Submit!</Button>


    </div>
    );
  }
});

export default SearchName;
