import React, { Component } from 'react';
import { Map, Marker, HeatMap, GoogleApiWrapper } from 'google-maps-react';
import _ from 'lodash';

export class Maps extends Component {

    render() {
        const { univs, rests } = this.props;
        const markers = _.isNull(univs) ? [] : _.map(univs, (x, i) =>
            <Marker
                key={i}
                title={x[`school.name`]}
                position={{ lat: x['location.lat'], lng: x['location.lon'] }}
            />
        );

        const positions = _.isNull(rests) ? [] : _.map(rests, x => {
            return {
                lat: x.lat,
                lng: x.lng
            }
        });

        const gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 31, 1)',
            'rgba(255, 0, 0, 1)'
        ];

        return (
            <Map
                google={this.props.google}
            >
                {markers}
                <HeatMap
                    gradient={gradient}
                    positions={positions}
                />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAG9Ic0JYMUcE2h69XmBSbnzaWWw3vD12U"),
    version: '3',
    libraries: ['places','visualization']
})(Maps)
