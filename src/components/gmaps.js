import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import _ from 'lodash';

export class Maps extends Component {

    render() {
        const { univs } = this.props;
        let markers = _.isNull(univs) ? [] : _.map(univs, (x, i) =>
            <Marker
                key={i}
                title={x[`school.name`]}
                position={{ lat: x['location.lat'], lng: x['location.lon'] }}
            />
        );

        return (
            <Map
                google={this.props.google}
            >
                {markers}
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAG9Ic0JYMUcE2h69XmBSbnzaWWw3vD12U"),
    version: '3'
})(Maps)
