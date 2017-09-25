import axios from 'axios';
import _ from 'lodash';

export const getStates = () => dispatch => {
  dispatch({ type: `GET_STATES`, payload: {} })
  axios.get(`/api/states`)
    .then(res => {
      dispatch({ type: `GET_STATES_SUCCESS`, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: `GET_STATES_ERROR`, error: err })
    })
}

export const getData = val => dispatch => {
  const st = _.isObject(val) ? val.value : val
  dispatch({ type: `GET_DATA`, payload: { st } })

  axios.post(`/api/yelp`, { selected: st })
    .then(res => {
      dispatch({type: `GET_DATA_SUCCESS`, payload: res.data})
    })
    .catch(err => {
      dispatch({type: `GET_DATA_ERROR`, error: err})
    })
}

export const getNewState = val => {
  return {
    type: 'GET_NEW_STATE',
    payload: val
  }
}