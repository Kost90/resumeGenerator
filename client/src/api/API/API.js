class API {
    constructor(baseUrl) {
      this.baseUrl = baseUrl
    }
  
    fetch({ path = '', method = 'GET', body, signal, headers = {}, ...rest }) {
      return fetch(`${this.baseUrl}/${path}`, {
        method,
        signal,
        headers: {
            'Content-Type': 'application/json',
          ...headers,
        },
        body,
        ...rest,
      }).then((response) => response.json())
    }
  }
  
  export { API }