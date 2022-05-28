export default class Api {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res){
    if (res.ok){
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getAllLamp(){
    return fetch(`${this._baseUrl}`,{
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse)
  }
}
