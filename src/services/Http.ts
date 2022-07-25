import axios, { AxiosInstance, AxiosResponse } from 'axios'

export default class Http {
  private baseUrl : string
  private instance : AxiosInstance

  constructor () {
    this.baseUrl = 'http://localhost:5000'
    this.instance = axios.create()
  }

  public post (endPoint : string, params : object) : Promise<AxiosResponse> {
    return this.instance.post(`${this.baseUrl}${endPoint}`, params)
  }

  public get (endPoint : string, configs : object = {}) : Promise<AxiosResponse> {
    const result = this.instance.get(`${this.baseUrl}${endPoint}`, configs)
    return result
  }
}
