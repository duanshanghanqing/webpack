import axios from 'axios'

export const createHttp = (config = {}) => {
  const $http = axios.create({
    baseURL: 'https://alph.laifuyun.com',
    timeout: 1000,
    headers: {},
    ...config
  })

  // Add a request interceptor
  $http.interceptors.request.use(
    function (config) {
      // 解决浏览器缓存请求
      if (config.method === 'get' && typeof config.params === 'object') {
        Object.assign(config.params, {
          '_@time': new Date() * 1
        })
      }
      // Do something before request is sent
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  $http.interceptors.response.use(
    function (response) {
      // Do something with response data
      return response
    },
    function (error) {
      // Do something with response error
      return Promise.reject(error)
    }
  )

  return $http
}
