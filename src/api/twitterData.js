import { getJSON } from './http';

export const getHappiestStates = () => {
  let url = 'http://housty.io/api/happiestStates';
  return getJSON(url);
};
