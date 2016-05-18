import React from 'react';
import APIk from '../utils/key';
import ajaxHelpers from '../utils/ajaxHelpers';
import SearchName from './Search';
import DisplayResults from './DisplayResults';

const MapGS = React.createClass({

  getInitialState:function(){
    return {
      ajaxReturn: [],
      lat: '',
      lng: '',
      cityName: '',
      markerCityName: ''
    }
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

  handleMapDisplay: function(){
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
        let markerCityName = response.data.places.place[0].woe_name;
        console.log("this is marker cityname", markerCityName)
        ajaxHelpers.getResults(markerCityName)
        .then(function(res){
          console.log("this is photo by marker cityname result", res);
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
        <SearchName onChangeName={this.onChangeName}
                    onSubmit={this.handleSubmit}
          />
        <DisplayResults photos={this.state.ajaxReturn} />
      </div>
    )
  }
})

export default MapGS;
