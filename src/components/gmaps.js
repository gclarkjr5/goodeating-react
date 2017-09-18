import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Maps extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            console.log("Did Update")
            // this.loadMap();
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let { initialCenter, zoom } = this.props;
            const { lat, lng } = initialCenter;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
        }
        // ...
    }

    render() {
        return (
            <div ref='map' style={{ width: '100%', height: '100%' }}>
                Loading map...
          </div>
            // <Map google={this.props.google}
            //     style={{ width: '100%', height: '10%', position: 'relative' }}
            //     className={'map'}
            //     zoom={14}
            //     containerStyle={{}}
            //     centerAroundCurrentLocation={true}
            //     onClick={this.onMapClicked}
            //     onDragend={this.onMapMoved} />
        )
    }
}

Maps.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object
}
Maps.defaultProps = {
    zoom: 13,
    // San Francisco, by default
    initialCenter: {
        lat: 37.774929,
        lng: -122.419416
    }
}

export default Maps;
