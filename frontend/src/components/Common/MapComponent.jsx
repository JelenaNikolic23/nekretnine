import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapComponent extends Component {
  render() {
    const { lat, lng } = this.props;

    const mapStyles = {
      width: '50%',
      height: '200px',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat, lng }}
      >
        <Marker position={{ lat, lng }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDoGQK7zDUtE-Wv1dyrt7CQ1bUycdh9FV4',
})(MapComponent);
