import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import Map from './Map';
// import SearchName from './SearchName';

// import Filters from './Filters';

import axios from 'axios';
import DisplayResults from './DisplayResults';
import SearchName from './Search';
// require('../utilities/Main.css');

// var flickurl = 'https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.search&api_key=021e9c0509d04ce2b687da4affd991d6&sort=interestingness-desc&group_id=41425956%40N00&tags=barcelona/';

const Home = React.createClass({


  clickConfirm: function(){
    console.log('this worked!')
  },

  getInitialState: function() {
    return{
      ajaxReturn: [],
      cityName: ''
    };
  },

  onChangeName: function(e) {
    console.log('Searching!');
    this.setState({
      cityName: e.target.value
    })
  },


handleSubmit: function() {
  console.log("HANDLESUBMIT");
  let cityName = this.state.cityName;
  ajaxHelpers.getResults(cityName)
  .then(function(response){
    console.log(response);
    this.setState({
      ajaxReturn: response.data.photos.photo
    });
  }.bind(this));
},

render: function(){
  return(
    <div>
      <Map />
      <SearchName onChangeName={this.onChangeName}
                  onSubmit={this.handleSubmit}
        />

      <DisplayResults photos={this.state.ajaxReturn} />
    </div>
    )
  }
});

export default Home;
