<template>
  <v-app-bar
    app
    dark
  >
    <app-logo />
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>
    <v-spacer />

    <v-toolbar-items class="ml-2">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  // dataの引数にはcontextなどのvue.jsが用意した引数を取ることができる
  // data (context: { $config: { appName: "Bizplanner" } })
  data ({ $config: { appName } }) {
    return {
      // 本来は appName: appName javascriptではキーとバリューが同じ場合省略気泡が使える
      appName
    }
  }
}
</script>
