import axios from 'axios'
import {BASE_URL, TIMEOUT} from './config'

class HYRequest {
  constructor(baseURL, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 响应拦截器
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, (err) => {
      return Promise.reject(err)
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({...config, method: 'GET'})
  }

  post(config) {
    return this.request({...config, method: 'POST'})
  }

}

const hyRequest = new HYRequest(BASE_URL, TIMEOUT)


export default hyRequest