import React, { Component } from 'react';
import { Map, Marker, HeatMap, GoogleApiWrapper } from 'google-maps-react';
import _ from 'lodash';

export class Maps extends Component {
    render() {
        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
        const { universities, restaurants } = this.props;

        if (universities && restaurants) {
            const markers = _.map(universities, (x, i) =>
                <Marker
                    key={i}
                    title={x[`school.name`]}
                    position={{ lat: x['location.lat'], lng: x['location.lon'] }}
                />)
            return (<Map
                google={this.props.google}
                zoom={5}
            >
                <HeatMap
                    positions={restaurants}
                />
                {markers}
            </Map>
            )
        } else {
            return <div>Still Loading...</div>
        }
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAG9Ic0JYMUcE2h69XmBSbnzaWWw3vD12U"),
    version: '3',
    libraries: ['visualization']
})(Maps)
