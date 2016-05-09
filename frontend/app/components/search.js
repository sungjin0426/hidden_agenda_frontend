import React from 'react';
import {Button, Card, Row, Col} from 'react-materialize';


const SearchName = React.createClass({

  render: function(){
    return(
      <div className='searchbyname'>
        <h3>Search by Name:</h3>
        <input onChange={this.props.onChangeName} type='text' placeholder='search by name' />
        <Button waves='light' className="Submit" onClick={this.props.onSubmit} type='button'>Submit!</Button>


    </div>
    );
  }
});

export default SearchName;
