import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import Map from './Map';


// import axios from 'axios';
// import DisplayResults from './DisplayResults';
// import SearchName from './Search';
// require('../utilities/Main.css');

// var flickurl = 'https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.search&api_key=021e9c0509d04ce2b687da4affd991d6&sort=interestingness-desc&group_id=41425956%40N00&tags=barcelona/';

const Home = React.createClass({


render: function(){
  return(
    <div>
      <Map />
    </div>
    )
  }
});

export default Home;
