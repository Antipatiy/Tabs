<template lang="pug">
  nav
    a.link(@click="goToFirstTab") {{ tabs[0].title }}
    a.link(@click="goToSecondTab") {{ tabs[1].title }}
    a.link(@click="goToThirdTab") {{ tabs[2].title }}
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
    goToFirstTab () {
      router.push('/' + this.tabs[0].id)
    },
    goToSecondTab () {
      router.push('/' + this.tabs[1].id)
    },
    goToThirdTab () {
      router.push('/' + this.tabs[2].id)
    }
  }
}
</script>
