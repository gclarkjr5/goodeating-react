import { combineReducers } from 'redux'
import appData from './appReducers';
// import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    appData
})

export default rootReducer;