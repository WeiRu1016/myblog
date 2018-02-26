import * as types from './mutationsType'

export default {
  // 设置state里的catagoryList
  [types.SET_CATAGORY_LIST] (state, payload) {
    state.server.catagoryList = payload
  },
  // 设置state里的currentCategory
  [types.SET_CURRENT_CATAGORY] (state, payload) {
    state.server.currentCatagory = payload
  },
  // 设置state里面的articleList
  [types.SET_ARTICLE_LIST] (state, payload) {
    state.server.articleList = payload
  },
  // 设置state里的currentArticle
  [types.SET_CURRENT_ARTICLE] (state, payload) {
    state.server.currentArticle = payload
  },
  [types.SET_CLIENT_ARTICLE] (state, payload) {
    console.log(payload)
    state.client.articleList = payload
  }
}
