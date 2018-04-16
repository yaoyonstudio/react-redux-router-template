import axios from 'axios'
import { isEmptyObject } from '../Helper'

export default function (url, method, params, fn, errFn) {
  let reqUrl = url
  if (method && method.toUpperCase() === 'GET') {
    if (params && !isEmptyObject(params)) {
      let paramsStringArr = []
      let paramsString = '?'
      for (let key in params) {
        paramsStringArr.push(key + '=' + params[key])
      }
      paramsString += paramsStringArr.join('&')
      reqUrl = url + paramsString
    } else {
      reqUrl = url
      params = null
    }
  }
  return axios({
    url: reqUrl,
    method: method,
    data: params
  }).then((res) => {
    if (res.status) {
      fn(res.data)
    } else {
      if (errFn) {
        errFn(res)
      } else {
        console.log(res)
      }
    }
  }, (error) => {
    if (errFn) {
      errFn(error)
    } else {
      console.log(error)
    }
  })
}
