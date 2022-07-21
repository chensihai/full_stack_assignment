import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import axios from 'axios';

const containerStyle = {
  width: '1200px',
  height: '800px'
};

const center = {
  lat: 23.8103,
  lng: 90.4125
};

function MyComponent() {
  const people = sessionStorage.getItem('people');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GMAP_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }

        <Marker position={{lat:23.8105, lng:90.4126}} title='Simon'  label = {{text: 'Simon',  color: "#000", fontSize: "16px", fontWeight: "bold" }}/>
        <Marker position={{lat:23.8107, lng:90.4123}} title='Jenny'/>
        <Marker position={{lat:23.8102, lng:90.4124}} title='Josh'/>
        <Marker position={{lat:23.8106, lng:90.4122}} title='Kiki'/>
        <Marker position={{lat:23.8103, lng:90.4128}} title='Snowy'/>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)