import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import _ from 'lodash';

class StateSelect extends Component {
    render() {
        const options = _.isNull(this.props.states) ? [] : _.map(this.props.states, x => {
            return {
                value: x.Abbreviation,
                label: x.State
            }
        })

        const valueChange = v => {
            this.props.getNewState(v)
            this.props.getData(v)
        }

        return (
            <Select
                value={this.props.stateSelected}
                options={options}
                onChange={valueChange}
            />
        )
    }
}

export default StateSelect;