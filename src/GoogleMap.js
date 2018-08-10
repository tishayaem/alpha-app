import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
    render() {
        //console.log(this.state);
        return (
            <div className="map">
                <Map google={this.props.google} zoom={15} initialCenter={{ lat: 51.4941255, lng: -0.0622135 }}>
                <Marker position={{ lat: 51.4941255, lng: -0.0622135 }} />
                </Map>
            </div >
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA_5elSzruHE5QEfbb9VRnBm0od0GVSiog',
})(MapContainer)

