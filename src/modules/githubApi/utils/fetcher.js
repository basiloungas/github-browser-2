//TODO: refactor into a class?
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseResponse(response) {
  const headers = Array.from(response.headers.entries())
    .reduce((result, header) => {
      result[header[0]] = header[1];
      return result;
    }, {});

  return response
    .json()
    .then(data => ({ data, headers }));
}

export default (url, options) => {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseResponse);
};
