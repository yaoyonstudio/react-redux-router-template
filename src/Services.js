import { Ajax } from './libs/keact'
const apiUrl = 'https://www.thatyou.cn/wp-json/wp/v2'

export const postService = {
  getPosts (params, fn) {
    Ajax.call(this, apiUrl + '/posts', 'get', params, fn)
  }
}
