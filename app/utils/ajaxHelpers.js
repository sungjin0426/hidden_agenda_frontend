import axios from 'axios';

const ajaxHelpers = {
  getResults: function(cityName){
    return axios.get('https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&method=flickr.photos.search&api_key=021e9c0509d04ce2b687da4affd991d6&sort=interestingness-desc&group_id=41425956%40N00&tags=' + cityName + '/');
  },

  getUserAgenda: function(){
    return axios.get('https://hidden-agenda-rails-backend.herokuapp.com/photos')
  },

  getMapResults: function(lat, lng){
      return axios.get('https://api.flickr.com/services/rest/?method=flickr.places.findByLatLon&api_key=021e9c0509d04ce2b687da4affd991d6&lat=' + lat + '&lon=' + lng + '&format=json&nojsoncallback=1');
  },

  addAgenda: function(photo_rails){
    return axios.post('https://hidden-agenda-rails-backend.herokuapp.com/photos', photo_rails);
  },

}

export default ajaxHelpers;
