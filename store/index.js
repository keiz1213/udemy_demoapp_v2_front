// vueアプリ全体で共通する変数やメソッドなどを置くところ
const homePath = 'projects'
// 変数
export const state = () => ({
  styles: {
    homeAppBarHeight: 56
  },
  loggedIn: {
    homePath: {
      name: homePath
    }
  },
  project: {
    current: null,
    list: []
  },
  user: {
    current: null
  },
  auth: {
    token: null,
    expires: 0,
    payload: {}
  }
})
// 算出プロパティ
export const getters = {}

// stateの値を更新する場所
export const mutations = {
  setProjectList (state, payload) {
    state.project.list = payload
  },
  // 引数の順番は固定
  setCurrentProject (state, payload) {
    state.project.current = payload
  },
  setCurrentUser (state, payload) {
    state.user.current = payload
  },
  setAuthToken (state, payload) {
    state.auth.token = payload
  },
  setAuthExpires (state, payload) {
    state.auth.expires = payload
  },
  setAuthPayload (state, payload) {
    state.auth.payload = payload
  }
}

// メソッド
export const actions = {
  getProjectList ({ commit }, projects) {
    projects = projects || []
    commit('setProjectList', projects)
  },
  // { state, getters, commit, dispath, rootState, rootGetters } actionではこれらの引数を取得できる
  // state このfileのstate
  // getters このfileのgetters
  // commit このfileのmutations
  // dispatcj このfaileのactions
  // rootState store/index.jsのstate(他のファイルから取得するとき)
  // rootGetters store/index.jsのgetters(ほかのファイルから取得するとき)
  getCurrentProject ({ state, commit }, params) {
    let currentProject = null
    if (params && params.id) {
      const id = Number(params.id)
      currentProject = state.project.list.find(project => project.id === id) || null
    }
    commit('setCurrentProject', currentProject)
  },
  getCurrentUser ({ commit }, user) {
    commit('setCurrentUser', user)
  },
  getAuthToken ({ commit }, token) {
    commit('setAuthToken', token)
  },
  getAuthExpires ({ commit }, expires) {
    expires = expires || 0
    commit('setAuthExpires', expires)
  },
  getAuthPayload ({ commit }, jwtPayload) {
    jwtPayload = jwtPayload || {}
    commit('setAuthPayload', jwtPayload)
  }
}
