import 'whatwg-fetch';

function addJSONHeaders(headers) {
  return Object.assign({}, headers, {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });
}

function parseJSON(response) {
  // if response is empty response.json() fails
  // https://github.com/github/fetch/issues/268
  return response.text().then(text => {
    return text ? JSON.parse(text) : {};
  });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.statusText || response.message);
}

function getJSON(url, customOptions = {}) {

  const options = Object.assign({
    method: 'GET',
    headers: addJSONHeaders()
  }, customOptions);


  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}


function postJSON(url, payload) {
  const options = {
    method: 'POST',
    headers: addJSONHeaders(),
    body: JSON.stringify(payload)
  };

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

function putJSON(url, payload) {
  const options = {
    method: 'PUT',
    headers: addJSONHeaders(),
    body: JSON.stringify(payload)
  };

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

function deleteAction(url) {
  const options = {
    method: 'DELETE',
    headers: addJSONHeaders()
  };

  return fetch(url, options)
    .then(checkStatus);
}

export {
  getJSON,
  postJSON,
  putJSON,
  deleteAction
};
