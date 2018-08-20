import * as types from './mutationsType'
let STATUS = {
  SUCCESS: 'success',
  FAIL: 'fail'
}
export default {
  getAllArticle ({commit}) {
    (async function (commit) {
      try {
        let response = await fetch('/api/article/all')
        let data = await response.json()
        if (data.code === STATUS.SUCCESS) {
          commit(types.SET_CLIENT_ARTICLE, data.data)
          return Promise.resolve(data.data)
        } else {
          return Promise.resolve(new Error(data.msg))
        }
      } catch (err) {
        console.error(err)
        return Promise.reject(err)
      }
    })(commit)
  },
  refresh ({dispatch}, id) {
    (async function (dispatch, id) {
      try {
        let catagoryList = await dispatch('getCatagorylist')
        if (catagoryList && catagoryList.length) {
          if (id) {
            await dispatch('setCurrentCatagory', id)
          } else {
            await dispatch('setCurrentCatagory', catagoryList[0]._id)
          }
        } else {
          await dispatch('setCurrentCatagory', null)
        }
      } catch (err) {
        console.error(err)
        return Promise.reject(err)
      }
    })(dispatch, id)
  },
  refreshArticle ({dispatch, state}, id) {
    (async function (dispatch, state, id) {
      try {
        let currentCatagory = state.server.currentCatagory
        if (!currentCatagory) {
          return new Error('使用错误')
        }
        let articleList = await dispatch('getArticleList', currentCatagory._id)
        if (articleList && articleList.length) {
          if (id) {
            await dispatch('setCurrentArticle', id)
          } else {
            await dispatch('setCurrentArticle', articleList[0]._id)
          }
        } else {
          await dispatch('setCurrentArticle', null)
        }
      } catch (err) {
        console.error(err)
        return Promise.reject(err)
      }
    })(dispatch, state, id)
  },
  getCatagorylist ({commit}) {
    return (async function (commit) {
      try {
        let response = await fetch('/api/catagory/all', {
          credentials: 'include'
        })
        let data = await response.json()
        if (data.code === STATUS.SUCCESS) {
          commit(types.SET_CATAGORY_LIST, data.data)
          return Promise.resolve(data.data)
        } else {
          return Promise.resolve(new Error(data.msg))
        }
      } catch (err) {
        console.error(err)
        return Promise.reject(err)
      }
    })(commit)
  },
  setCurrentCatagory ({state, commit, dispatch}, id) {
    return (async function (state, commit, id) {
      try {
        let list = state.server.catagoryList
        let current = state.server.currentCatagory
        if (!id) {
          commit(types.SET_CURRENT_CATAGORY, null)
          commit(types.SET_ARTICLE_LIST, [])
          dispatch('setCurrentArticle')
          return
        }
        if (current && current._id === id) {
          return
        }
        for (let item of list) {
          if (item._id === id) {
            commit(types.SET_CURRENT_CATAGORY, item)
            let articleList = await dispatch('getArticleList', id)
            if (articleList && articleList.length) {
              await dispatch('setCurrentArticle', articleList[0]._id)
            } else {
              await dispatch('setCurrentArticle')
            }
          }
        }
      } catch (err) {
        console.error(err)
        return Promise.reject(err)
      }
    })(state, commit, id)
  },
  getArticleList ({state, commit}, id) {
    return (async function (state, commit, id) {
      try {
        let response = await fetch(`/api/article/findByCatagory?id=${id}`, {
          method: 'get',
          // data: `id=${id}`,
          credentials: 'include'
        })
        let data = await response.json()
        if (data.code === STATUS.SUCCESS) {
          commit(types.SET_ARTICLE_LIST, data.data)
          return Promise.resolve(data.data)
        } else {
          return Promise.resolve(new Error(data.msg))
        }
      } catch (err) {
        console.error(err)
        return Promise.reject(err)
      }
    })(state, commit, id)
  },
  setCurrentArticle ({state, commit}, id) {
    let list = state.server.articleList
    let current = state.server.currentArticle
    if (!id) {
      return commit(types.SET_CURRENT_ARTICLE, null)
    }
    if (current && current._id === id) {
      return
    }
    for (let item of list) {
      if (item._id === id) {
        commit(types.SET_CURRENT_ARTICLE, item)
      }
    }
  }
}
