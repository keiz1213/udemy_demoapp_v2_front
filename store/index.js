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
    list: [
      { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 2, name: 'MyProject02', updatedAt: '2020-04-05T12:00:00+09:00' },
      { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
      { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
      { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' }
    ]
  }
})
// 算出プロパティ
export const getters = {}

// stateの値を更新する場所
export const mutations = {
  // 引数の順番は固定
  setCurrentProject (state, payload) {
    state.project.current = payload
  }
}

// メソッド
export const actions = {
  // { state, getters, commit, dispath, rootState, rootGetters } actionではこれらの引数を取得できる
  // state このfileのstate
  // getters このfileのgetters
  // commit このfileのmutations
  // dispatcj このfaileのactions
  // rootState store/index.jsのstate(他のファイルから取得するとき)
  // rootGetters store/index.jsのgetters(ほかのファイルから取得するとき)
  getCurrentProject ({ state, commit }, params) {
    const id = Number(params.id)
    const currentProject = state.project.list.find(project => project.id === id) || null
    commit('setCurrentProject', currentProject)
  }
}
