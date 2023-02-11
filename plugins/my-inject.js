class MyInject {
  // nuxtのcontextをクラス内で使用するにはconstructor内で初期化する
  constructor (ctx) {
    // this.appにnuxtのcontextであるappが渡される。この中にi18nが入っている
    this.app = ctx.app
    this.error = ctx.error
  }

  pageTitle (routeName) {
    // routeName => 'account-settings'
    // jsonPath => 'pages.acount.settings'
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    // this.app はnuxtのcontext.app
    const title = this.app.i18n.t(jsonPath)
    return title
  }

  // 日付のフォーマット変換
  dateFormat (dateStr) {
    const dateTimeFormat = new Intl.DateTimeFormat(
      'ja', { dateStyle: 'medium', timeStyle: 'short' }
    )
    return dateTimeFormat.format(new Date(dateStr))
  }

  // プロジェクトリンク
  projectLinkTo (id, name = 'project-id-dashboard') {
    return { name, params: { id } }
  }

  apiErrorHandler (response) {
    // ネットワークエラーの場合はresponseが存在しないので500を代入
    const statusCode = (response) ? response.status : 500
    const message = (response) ? response.statusText : 'Network Error'
    return this.error({ statusCode, message })
  }
}
// inject => オリジナルクラスをnuxtに追加する事ができる。アプリ全体で使いたいメソッドなどを定義する
// export default (context, inject) => 第一引数でnuxt.jsが用意しているcontext、第二引数でinjectが取得できる
export default ({ app, error }, inject) => {
  // 第一引数を呼び出し名  $my
  // 第二引数にクラスのインスタンス
  inject('my', new MyInject({ app, error }))
}
