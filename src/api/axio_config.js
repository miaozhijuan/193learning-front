import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'
// axios.defaults.baseURL = process.env.API_HOST
// axios.defaults.headers.common['Authorization']
var token = 'aaa111222'

axios.defaults.headers.common['token'] = token
axios.defaults.headers = {
  'access-control-allow-headers': 'Origin,Accept,Xrequestedwith,Contenttype',
  'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE',
  'access-control-allow-origin': '*',
  'access-control-expose-headers': 'Authorization',
  'Cache-Control': 'no-cache'
}

axios.interceptors.response.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
