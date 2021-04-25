<template>
  <div id="app">
    <v-header></v-header>
    <div class="tap">
      <div class="tap-item">商品</div>
      <div class="tap-item">评价</div>
      <div class="tap-item">商家</div>
    </div>
  </div>
</template>

<script>
import header from './components/header.vue'
export default {
  name: 'App',
  components:{
    'v-header':header
  }
}
</script>

<style lang="stylus" scoped>
  .tap
    display flex
    width 100%
    font-size 14px
    line-height 40px
    height 40px
    color rgb(77,85,93)
    .tap-item
      flex 1
      text-align center
</style>

