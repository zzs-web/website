<template>
  <v-app :class="{ acrylic: $store.state.acrylic }">
    <app-bar v-model="drawer" />
    <client-only>
      <v-navigation-drawer v-model="drawer" app>
        <app-nav />
      </v-navigation-drawer>
      <app-settings-drawer />
    </client-only>
    <v-main>
      <nuxt />
    </v-main>
    <app-footer />
    <app-bg />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppBar from '~/components/app/AppBar.vue'
import AppFooter from '~/components/app/AppFooter.vue'
import AppBg from '~/components/app/AppBg.vue'
import AppNav from '~/components/app/AppNav.vue'
import AppSettingsDrawer from '~/components/app/AppSettingsDrawer.vue'

export default Vue.extend({
  name: 'App',
  components: { AppBg, AppBar, AppFooter, AppNav, AppSettingsDrawer },
  data() {
    return {
      drawer: null
    }
  },
  watch: {
    '$store.state.theme': {
      immediate: true,
      handler(val) {
        if (val === 'light') {
          this.$vuetify.theme.dark = false
        } else if (val === 'dark') {
          this.$vuetify.theme.dark = true
        } else if (process.client) {
          const darkMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
          )
          this.$vuetify.theme.dark = darkMediaQuery.matches
        }
      }
    }
  }
})
</script>
