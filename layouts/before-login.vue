<template>
  <v-app>
    <before-login-app-bar />
    <v-main>
      <app-toaster />
      <Nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
export default {
  middleware: ['logged-in-redirect']
}
</script>
