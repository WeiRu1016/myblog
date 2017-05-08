export default {
  getCatagoryList (state) {
    return state.server.catagoryList
  },
  getCurrentCatagory (state) {
    return state.server.currentCatagory
  },
  getArticleList (state) {
    let currentCatagory = state.server.currentCatagory
    let articleList = state.server.articleList
    let result = []
    for (let item of articleList) {
      if (item.catagory === currentCatagory._id) {
        result.push(item)
      }
    }
    return result
  },
  getCurrentArticle (state) {
    return state.server.currentArticle
  }
}
