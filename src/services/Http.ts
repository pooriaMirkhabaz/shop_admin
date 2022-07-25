import axios from 'axios'

export default class Http {
  private baseUrl : string

  constructor () {
    this.baseUrl = 'localhost:3000'
  }

  public post (endPoint : string, data : any, config : object = {}) {
    return axios.post(this.baseUrl + endPoint, data, config)
  }
}
