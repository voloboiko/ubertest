class HttpRequester {
  getJSON(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      url = this.constructGetUrl(url, params);
      fetch(url)
        .then(
          (response) => {

            return response.json();
          }).then((jsonResult) => {
            resolve(jsonResult)
        }
      )
        .catch(error => {
          // we can make logger somewhere here
          reject(error);
        })

    });
  }

  constructGetUrl(url, params = {}) {
    return url + (url.indexOf('?') === -1 ? '?' : '&') + this.queryParams(params);
  }

  queryParams(params) {
    return Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
  }
}

export default new HttpRequester();
