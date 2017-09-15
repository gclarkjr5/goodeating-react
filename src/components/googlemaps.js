import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";

class Maps extends Component {
    render() {

        const SimpleMapExampleGoogleMap = withGoogleMap(props => (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            />
        ));
        return (
            <SimpleMapExampleGoogleMap
                containerElement={
                    <div style={{ height: `100%` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
            />
        )
    }
}

export default Maps;
