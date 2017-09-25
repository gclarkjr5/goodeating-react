// import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_STATES':
      return {
        ...state,
      }

    case 'GET_STATES_SUCCESS':
      return {
        ...state,
        states: action.payload
      }

    case 'GET_STATES_ERROR':
      return {
        ...state,
        error: action.error
      }

    case 'GET_DATA':
      return {
        ...state,
      }

    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        universities: action.payload.uniData,
        restaurants: action.payload.yelpData        
      }

    case 'GET_DATA_ERROR':
      return {
        ...state,
        error: action.error
      }

    case 'GET_NEW_STATE':
      return {
        ...state,
        stateSelected: action.payload.value,
      }

    default:
      return state
  }
}