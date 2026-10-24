import { getJSON } from './http'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export const getHappiestStates = () => {
  let url = `${API_BASE_URL}/api/happiestStates`
  return getJSON(url)
}

export const getHappiestStateDetails = (id) => {
  let url = `${API_BASE_URL}/api/happiestStates/${id}`
  return getJSON(url)
}

export const getHistoricalHapiness = () => {
  let url = `${API_BASE_URL}/api/happiestTimes`
  return getJSON(url)
}
