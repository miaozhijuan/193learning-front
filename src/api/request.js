// import axios from 'axios'
//
// axios.defaults.baseURL = 'http://localhost:8080'
// // axios.defaults.baseURL = process.env.API_HOST
// // axios.defaults.headers.common['Authorization']
// var token = 'aaa111222'
//
// axios.defaults.headers.common['token'] = token
// axios.defaults.headers = {
//   'access-control-allow-headers': 'Origin,Accept,Xrequestedwith,Contenttype',
//   'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE',
//   'access-control-allow-origin': '*',
//   'access-control-expose-headers': 'Authorization',
//   'Cache-Control': 'no-cache'
// }
//
// axios.interceptors.response.use(function (config) {
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })
//
// export default axios
import axios from 'axios'

const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  // easy-mock服务挂了，暂时不使用了
  // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject()
  }
)

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      Promise.reject()
    }
  },
  error => {
    console.log(error)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject()
  }
)

export default service
