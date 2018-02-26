export default {
  getCatagoryList (state) {
    return state.server.catagoryList
  },
  getCurrentCatagory (state) {
    return state.server.currentCatagory
  },
  getArticleList (state) {
    return state.server.articleList
  },
  getclientPublishedArticleList (state) {
    let articleList = state.client.articleList
    let result = []
    for (let item of articleList) {
      if (item.status === 'published') {
        result.push(item)
      }
    }
    return result
  },
  getCurrentArticle (state) {
    return state.server.currentArticle
  }
}
