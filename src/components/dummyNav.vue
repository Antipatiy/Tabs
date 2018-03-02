<template lang="pug">
  nav
    a.link(v-for="tab in tabs" v-bind:key="tab.id" v-on:click="goToTab(tab.id)") {{ tab.title }}
</template>

<script>
import sortedTabs from '../js/sortedTabs'
import router from '.././router'

export default {
  name: 'dummyList',
  data () {
    return {
      tabs: sortedTabs()
    }
  },
  methods: {
    goToTab (id) {
      router.push('/' + id)
    }
  }
}
</script>
