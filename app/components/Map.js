import React from 'react';
import APIk from '../utils/key';
import ajaxHelpers from '../utils/ajaxHelpers';

const MapGS = React.createClass({

  getInitialState:function(){
    return {
      ajaxReturnMap: [],
      lat: '',
      lng: ''
    }
  },

  handleMapDisplay(){
    navigator.geolocation.getCurrentPosition(function(position) {
    console.log("user latitude" + position.coords.latitude);
    console.log("user longitude" + position.coords.longitude);
    let userLat = position.coords.latitude;
    let userLong = position.coords.longitude;
    L.mapbox.accessToken = APIk.mapBox;
    Window.map = L.mapbox.map('map', 'mapbox.streets',{
      zoomControl: true
    }).setView(([userLat, userLong]||[40.7527, -73.9772]), 13);
    let marker = L.marker([userLat, userLong], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#fa0',
        'marker-size': 'large'
      }),
      draggable: true
    }).addTo(Window.map);
    marker.on('dragend', ondragend);
    Window.map.scrollWheelZoom.disable();


    // Set the initial marker coordinate on load.
    ondragend()


    function ondragend() {
      var m = marker.getLatLng();
      console.log('marker location: ', m.lat, m.lng)
      let lat = m.lat;
      let lng = m.lng;
      ajaxHelpers.getMapResults(lat, lng)
      .then(function(response){
        console.log("this is the response", response);
        let cityName = response.data.places.place[0].woe_name;
        console.log("this is cityname", cityName)
        ajaxHelpers.getResults(cityName)
        .then(function(res){
          console.log("this is photo by cityname", res);
          this.setState({
            ajaxReturnMap: response.data.photos.photo
          });
        }.bind(this));
     });
    }
  })
 },

    render: function() {

    const mapStyle = {
      width: '100%',
      height: '300px',
      // zIndex: '-4000',
      // position: 'fixed',
      border: "0",
      padding: "0",
    }

    return(
      <div>
        <div id='map' className='map' style={mapStyle}>
          {this.handleMapDisplay()}
        </div>
        <pre id='coordinates'></pre>
      </div>
    )
  }
})

export default MapGS;
