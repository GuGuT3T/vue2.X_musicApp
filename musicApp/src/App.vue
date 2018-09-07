<template>
  <div id="app">
    <m-header></m-header>
    <tabs></tabs>
    <router-view></router-view>
  </div>
</template>
<script>
import mHeader from 'components/m-header/m-header.vue'
import Tabs from 'components/tab/tab.vue'
export default {
  components: {
    mHeader,
    Tabs
  }
}
</script>