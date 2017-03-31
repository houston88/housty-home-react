import * as api from '../../../api/twitterData';

// ------------------------------------
// Constants
// ------------------------------------
export const GET_HAPPIEST_STATE_SUCCESS = 'GET_HAPPIEST_STATE_SUCCESS'
export const HANDLE_DATE_SELECT = 'HANDLE_DATE_SELECT'
export const GET_TWIT_DATA_SUCCESS = 'GET_TWIT_DATA_SUCCESS'
export const GET_HISTORICAL_HAPINESS_SUCCESS = 'GET_HISTORICAL_HAPINESS_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function getHappiestStates () {
  return (dispatch, getState) => {
    // TODO: Handle error
    return api.getHappiestStates().then(data => {
      dispatch({
        type    : GET_HAPPIEST_STATE_SUCCESS,
        payload : data
      })
    })
  }
}

export function handleDateSelection (index) {
  return (dispatch, getState) => {
    dispatch({
      type    : HANDLE_DATE_SELECT,
      payload : index
    })
    // TODO: Handle error
    let id = getState().twitterData.happiestStates[index]._id;
    return api.getHappiestStateDetails(id).then(data => {
      dispatch({
        type    : GET_TWIT_DATA_SUCCESS,
        payload : data[0]
      })
    })
  }
}

export function getHistoricalHappiness () {
  return (dispatch, getState) => {
    // TODO: Handle error
    return api.getHistoricalHapiness().then(data => {
      dispatch({
        type    : GET_HISTORICAL_HAPINESS_SUCCESS,
        payload : data
      })
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  selectedIndex: 0,
  happiestStates: [],
  detailedData: {},
  historicalHapiness: []
}

export default function twitterDataReducer (state = initialState, action) {

  switch (action.type) {
    case GET_HAPPIEST_STATE_SUCCESS:
      return Object.assign({}, state, {
        happiestStates: action.payload,
      })
    case HANDLE_DATE_SELECT:
      return Object.assign({}, state, {
        selectedIndex: action.payload
      })
    case GET_TWIT_DATA_SUCCESS:
      return Object.assign({}, state, {
        detailedData: action.payload
      })
    case GET_HISTORICAL_HAPINESS_SUCCESS:
      return Object.assign({}, state, {
        historicalHapiness: action.payload
      })
    default:
      return state
  }

}
