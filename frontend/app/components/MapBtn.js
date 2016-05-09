import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

const MapBtn = React.createClass({

  render:function(){
    return(
      <button onClick={this.props.onSubmitMap}>Search by Map</button>
    )
  }
})

export default MapBtn;
