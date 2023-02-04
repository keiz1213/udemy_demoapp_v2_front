// vueアプリ全体で共通する変数やメソッドなどを置くところ
const redirectPath = 'projects'
// 変数
export const state = () => ({
  styles: {
    homeAppBarHeight: 56
  },
  loggedIn: {
    redirectPath: {
      name: redirectPath
    }
  }
})
// 算出プロパティ
export const getters = {}

// stateの値を更新する場所
export const mutations = {}

// メソッド
export const actions = {}
