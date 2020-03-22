import { getJSON } from './http'

export const getHappiestStates = () => {
  let url = 'https://housty.io/api/happiestStates'
  return getJSON(url)
}

export const getHappiestStateDetails = (id) => {
  let url = 'https://housty.io/api/happiestStates/' + id
  return getJSON(url)
}

export const getHistoricalHapiness = () => {
  let url = 'https://housty.io/api/happiestTimes'
  return getJSON(url)
}
