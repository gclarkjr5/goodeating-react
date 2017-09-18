import React, { Component } from 'react';
import StateSelect from '../components/stateSelect';
import Maps from '../components/gmaps';
import axios from 'axios';
import _ from 'lodash';

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialState: 'FL',
            states: null,
            newState: null,
            schools: null,
            univs: null
        }
        this.getNewState = this.getNewState.bind(this)
        this.getUnivs = this.getUnivs.bind(this)
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
        this.getUnivs(this.state.initialState);
    }

    getUnivs = val => {
        const st = _.isObject(val) ? val.value : val
        axios.post(`/api/univ`, { selected: st })
            .then(res => {
                this.setState(
                    {
                        univs: res.data
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
        const { states, newState, initialState, univs } = this.state
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div>
                <StateSelect
                    states={states}
                    initialState={initialState}
                    getUnivs={this.getUnivs}
                    getNewState={this.getNewState}
                    newState={newState}
                />
                <Maps
                    univs={univs}
                    style={style}
                />
            </div>
        )
    }
}

export default Container;


