import React from 'react';
import {Link} from 'react-router';

const AgendaPage = React.createClass({

componentDidMount: function(){
  console.log("holyshit this page works")
}


getIntitialState: function(){
return {
  ajaxReturn:[],

}

},

getAgenda: function(){
  if (this.state.ajaxReturn){
    return (
      <div>
      <AgendaComponent
        savedImg={this.props.savedImg} />
        </div>
    );
  }
},

});
