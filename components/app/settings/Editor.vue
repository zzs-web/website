<template>
  <div class="pb-2 pl-4">
    <div class="text-button">Editor backend</div>
    <v-switch
      v-model="basic"
      :label="basic ? 'Basic' : 'Advanced'"
      :messages="basic ? 'Native HTML textarea editor' : 'Monaco Editor'"
      class="py-0 my-0"
      color="ffffffb3"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { setItem } from '~/utils/localStorage'

export default Vue.extend({
  name: 'Editor',
  computed: {
    basic: {
      get() {
        return this.$store.state.editor.basic
      },
      set(val: boolean) {
        this.$store.commit('editor:basic:update', val)
        setItem('settings:editor:basic', val)
      }
    }
  }
})
</script>
