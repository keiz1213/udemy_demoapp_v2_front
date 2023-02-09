<script>
export default {
  // ページレンダリング前に実行される
  // nuxtServerInit後
  // asyncData前
  async middleware ({ $auth, redirect }) {
    await $auth.logout()
    return redirect('/')
  }
}
</script>
