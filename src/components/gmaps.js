import React, { Component } from 'react';
import { Map, Marker, HeatMap, GoogleApiWrapper } from 'google-maps-react';
import _ from 'lodash';

export class Maps extends Component {
    render() {
        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
        const { univs, rests } = this.props;
        const markers = _.isNull(univs) ? [] : _.map(univs, (x, i) =>
            <Marker
                key={i}
                title={x[`school.name`]}
                position={{ lat: x['location.lat'], lng: x['location.lon'] }}
            />
        );
        const pos = _.isNull(rests) ?
            <Map
                google={this.props.google}
                zoom={5}
            >
                {markers}
            </Map>
            :
            <Map
                google={this.props.google}
                zoom={5}
            >
                <HeatMap
                    positions={rests}
                />
                {markers}
            </Map>

        return (
            <div>
                {pos}
            </div>
        )




        // if (pos.length > 0) {
        //     return (
        //         <Map
        //             google={this.props.google}
        //             zoom={5}
        //         >
        //             <HeatMap
        //                 positions={pos}
        //             />
        //             {markers}

        //         </Map>
        //     )
        // }
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAG9Ic0JYMUcE2h69XmBSbnzaWWw3vD12U"),
    version: '3',
    libraries: ['places', 'visualization']
})(Maps)
