import React, { Component } from 'react';
import StateSelect from '../components/stateSelect';
import Maps from '../components/gmaps';
import axios from 'axios';
import _ from 'lodash';

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialState: 'CA',
            states: null,
            newState: null,
            newData: null,
            schools: null,
            univs: null,
            rests: null
        }
        this.getStates = this.getStates.bind(this)
        this.getNewState = this.getNewState.bind(this)
        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
        this.getStates();
        this.getData(this.state.initialState);
    }

    getStates = () => {
        axios.get(`/api/states`)
            .then(res => {
                this.setState(
                    {
                        states: res.data
                    }
                )
            })
            .catch(err => {
                console.log(err)
            })
    }

    getData = val => {
        const st = _.isObject(val) ? val.value : val
        axios.post(`/api/yelp`, { selected: st })
            .then(res => {
                const pos = _.map(res.data.yelpData, x => {
                    return {
                        lat: _.round(x.lat, 6),
                        lng: _.round(x.lng, 6)
                    }
                });
                this.setState(
                    {
                        univs: res.data.uniData,
                        rests: pos
                    }
                )
            })
            .catch(err => {
                console.log(err)
            })
    }

    getNewState = val => {
        this.setState(
            {
                newState: val
            }
        )
    }

    render() {
        const { states, newState, initialState, univs, rests } = this.state
        const style = {
            width: '100vw',
            height: '100vh',
            position: 'relative'
        }
        return (
            <div>
                <StateSelect
                    states={states}
                    initialState={initialState}
                    getData={this.getData}
                    getNewState={this.getNewState}
                    newState={newState}
                />
                <Maps
                    rests={rests}
                    univs={univs}
                    style={style}
                />
            </div>
        )
    }
}

export default Container;


