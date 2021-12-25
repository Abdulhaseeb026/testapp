import axios, { AxiosRequestConfig } from 'axios'
import Async from '@Async'

const api = axios.create()

api.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    let token = await Async.getItem(Async.Item.Token)

    let hasToken = token && token.token && token.expiry

    if (hasToken && config && config.headers) {
      config.headers.Authorization = 'token ' + token.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export default api
