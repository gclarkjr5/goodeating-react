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
            schools: null,
            univs: null,
            rests: null
        }
        this.getNewState = this.getNewState.bind(this)
        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
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
        this.getData(this.state.initialState);
    }

    getData = val => {
        const st = _.isObject(val) ? val.value : val
        axios.post(`/api/yelp`, { selected: st })
            .then(res => {
                this.setState(
                    {
                        univs: res.data.uniData,
                        rests: res.data.yelpData
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


