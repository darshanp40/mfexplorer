/* function: common service constructor
 * parameter: oConfig - request configuration containing:
 * url: API endpoint
 * method: GET/POST
 * credentials: 'include' in case of maintaining the session, 'omit' in normal case
 * headers: request header
 * body: request body
 */
export function RequestBuilder(oConfig) {
    this.url = oConfig.url;
    this.method = oConfig.method;
    this.credentials = oConfig.credentials ? oConfig.credentials : "include";
    this.headers = {};
    Object.assign(this.headers, oConfig.headers ? oConfig.headers : {
      "Content-Type": "application/json;charset=utf-8"
    });
    this.body = JSON.stringify(oConfig.body);
  };
  /* function: makes actual API call using fetch APIs
   * returns a promise that resolves in status
   */
  RequestBuilder.prototype.buildRequest = function () {
    return fetch(this.url, {
      method: this.method, // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: this.headers,
      credentials: this.credentials,
      body: this.body // body data type must match "Content-Type" header
    });
  }
