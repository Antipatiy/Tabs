<template lang="pug">
  .app
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .tab {
    .link {
      margin: 20px;
      cursor: pointer;
      text-decoration: underline;
    }
    h1 {
      color: #2462ff;
    }
  }
}
</style>
