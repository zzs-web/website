<template>
  <v-navigation-drawer
    id="settings-drawer"
    v-model="settingsDrawer"
    right
    disable-route-watcher
    fixed
    hide-overlay
    temporary
  >
    <v-toolbar flat color="transparent">
      <div class="text-button">Settings</div>
      <v-spacer />
      <v-btn icon @click="settingsDrawer = !settingsDrawer">
        <v-icon>{{ mdiClose }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider />
    <template v-if="settingsDrawer">
      <theme />
      <v-divider />
      <editor />
      <v-divider />
      <storage />
      <v-divider />
      <version />
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiClose } from '@mdi/js'
import Theme from '~/components/app/settings/Theme.vue'
import Editor from '~/components/app/settings/Editor.vue'
import Storage from '~/components/app/settings/Storage.vue'
import Version from '~/components/app/settings/Version.vue'

export default Vue.extend({
  name: 'AppSettingsDrawer',
  components: { Theme, Editor, Storage, Version },
  data() {
    return {
      mdiClose
    }
  },
  computed: {
    settingsDrawer: {
      get() {
        return this.$store.state.settingsDrawer
      },
      set(val) {
        this.$store.commit('settingsDrawer:update', val)
      }
    }
  }
})
</script>