import React from 'react';
import MapViewdirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewdirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyD3TstYfn9h6JFtXZv3zLDr9YRjUKkSEuQ"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
