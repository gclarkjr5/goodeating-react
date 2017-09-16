import React, { Component } from 'react';
import StateSelect from '../components/stateSelect';
import Maps from '../components/googlemaps';
import axios from 'axios';

class Application extends Component {
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
        return (
            <div>
                <StateSelect
                    states={states}
                    getNewState={this.getNewState}
                    newState={newState}
                />
                <Maps />
            </div>
        )
    }
}

export default Application;