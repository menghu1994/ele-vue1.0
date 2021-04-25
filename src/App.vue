<template>
  <div id="app">
    <v-header></v-header>
    <div class="tap">
      <div class="tap-item"><router-link to="/goods">商品</router-link></div>
      <div class="tap-item"><router-link to="/review">评价</router-link></div>
      <div class="tap-item"><router-link to="/sell">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'
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

