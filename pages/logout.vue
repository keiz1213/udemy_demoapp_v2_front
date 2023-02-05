<script>
export default {
  // ページレンダリング前に実行される
  // nuxtServerInit後
  // asyncData前
  middleware ({ redirect }) {
    return redirect('/')
  }
}
</script>
