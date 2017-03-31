import { getJSON } from './http';

export const getHappiestStates = () => {
  let url = 'http://housty.io/api/happiestStates';
  return getJSON(url);
};

export const getHappiestStateDetails = (id) => {
  let url = 'http://housty.io/api/happiestStates/'+id
  return getJSON(url);
}

export const getHistoricalHapiness = () => {
  let url = 'http://housty.io/api/happiestTimes'
  return getJSON(url);
}
