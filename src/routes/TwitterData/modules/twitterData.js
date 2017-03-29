import * as api from '../../../api/twitterData';

// ------------------------------------
// Constants
// ------------------------------------
export const GET_HAPPIEST_STATE_SUCCESS = 'GET_HAPPIEST_STATE_SUCCESS'
export const HANDLE_DATE_SELECT = 'HANDLE_DATE_SELECT'
export const GET_TWIT_DATA_SUCCESS = 'GET_TWIT_DATA_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function getHappiestStates () {
  // async dispatch
  return (dispatch, getState) => {

    // TEMP canned data
    let cannedStateData = [{
      _id: "58cc8c77c3b9882d45671238",
      parseDate: "2017-03-17T21:25:07.004Z",
      fileName: "tweets_output.json"
    },
    {
      _id: "58cff45bc3b9882c0514dcdf",
      parseDate: "2017-03-20T11:25:08.771Z",
      fileName: "tweets_output.json"
    },
    {
      _id: "58d5c6f8c3b988660b26be77",
      parseDate: "2017-03-24T21:25:07.445Z",
      fileName: "tweets_output.json"
    }];

    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : GET_HAPPIEST_STATE_SUCCESS,
          payload : cannedStateData
        })
        // Auto select latest data
        dispatch({
          type    : HANDLE_DATE_SELECT,
          payload : cannedStateData.length-1
        })
        resolve()
      }, 100)
    })

    // CORs Issues... just return sample daata for now
    // return api.getHappiestStates().then(data => {
    //   dispatch({
    //     type    : GET_HAPPIEST_STATE_SUCCESS,
    //     payload : data
    //   })
    // })

  }
}

export function handleDateSelection (index) {
  return (dispatch, getState) => {

    dispatch({
      type    : HANDLE_DATE_SELECT,
      payload : index
    })

    let cannedDetailedData = {
      "_id": "58d5c6f8c3b988660b26be77",
      "VA": {
        "score": 8,
        "rank": 4,
        "fillKey": "HIGH"
      },
      "TX": {
        "score": 9,
        "rank": 2,
        "fillKey": "HIGH"
      },
      "DC": {
        "score": 0,
        "rank": 15,
        "fillKey": "MEDIUM"
      },
      "hashtags": [
        {
          "hashtag": "mmkmaymay",
          "count": 58
        },
        {
          "hashtag": "revealedwithbolaray",
          "count": 51
        },
        {
          "hashtag": "askcarter",
          "count": 47
        },
        {
          "hashtag": "mashup",
          "count": 46
        },
        {
          "hashtag": "camilacabello",
          "count": 44
        },
        {
          "hashtag": "mgk",
          "count": 44
        },
        {
          "hashtag": "porardidoyo",
          "count": 42
        },
        {
          "hashtag": "elite8",
          "count": 41
        },
        {
          "hashtag": "aldubkssaus",
          "count": 40
        },
        {
          "hashtag": "ultra2017",
          "count": 37
        }
      ]
    }

    // we also need to kick off an async api call for detailed data
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : GET_TWIT_DATA_SUCCESS,
          payload : cannedDetailedData
        })
        resolve()
      }, 100)
    })

  }
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  happiestStates: [],
  detailedData: {}
}

export default function twitterDataReducer (state = initialState, action) {

  switch (action.type) {
    case GET_HAPPIEST_STATE_SUCCESS:
      return Object.assign({}, state, {
        happiestStates: action.payload
      })
    case HANDLE_DATE_SELECT:
      return Object.assign({}, state, {
        selectedIndex: action.payload
      })
    case GET_TWIT_DATA_SUCCESS:
      return Object.assign({}, state, {
        detailedData: action.payload
      })
    default:
      return state
  }

}
