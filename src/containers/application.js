import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
import StateSelect from '../components/stateSelect';
import Maps from '../components/gmaps';
import * as appActions from '../actions'


class Container extends Component {
    constructor(props) {
        super(props)
        this.getStates = this.getStates.bind(this)
        this.getNewState = this.getNewState.bind(this)
        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
        this.getStates();
        this.getData(this.props.data.appData.stateSelected);
    }

    getStates = () => {
        this.props.action.getStates();
    }

    getData = val => {
        this.props.action.getData(val);
    }

    getNewState = val => {
        this.props.action.getNewState(val);
    }

    render() {
        const { states, universities, restaurants } = this.props.data.appData
        const style = {
            width: '100vw',
            height: '100vh',
            position: 'relative'
        }

        return (
            <div>
                <StateSelect
                    states={states}
                    stateSelected={this.props.data.appData.stateSelected}
                    getData={this.getData}
                    getNewState={this.getNewState}
                />
                <Maps
                    restaurants={restaurants}
                    universities={universities}
                    style={style}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators(appActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);

