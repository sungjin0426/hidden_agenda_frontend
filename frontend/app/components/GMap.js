import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";


export default function SimpleMap (props) {
  return (

      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: "500px",
              width: '500px'
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{lat: -25.363882, lng: 131.044922}}
          </GoogleMap>
        }
      />

  );
}

export default SimpleMap;
