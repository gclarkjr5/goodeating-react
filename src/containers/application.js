import React, { Component } from 'react';
import StateSelect from '../components/stateSelect';
import Maps from '../components/gmaps';
import axios from 'axios';
import { GoogleApiWrapper } from 'google-maps-react';

export class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: null,
            newState: null
        }
        this.getNewState = this.getNewState.bind(this)
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
    }

    getNewState = val => {
        this.setState(
            {
                newState: val
            }
        )
    }

    render() {
        const { states, newState } = this.state

        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div>
                <StateSelect
                    states={states}
                    getNewState={this.getNewState}
                    newState={newState}
                />
                <div style={style}>
                    <Maps
                        google={this.props.google}
                    />
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAG9Ic0JYMUcE2h69XmBSbnzaWWw3vD12U"),
    version: '3'
})(Container)

