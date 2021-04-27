<template>
  <div id="app">
    <v-header></v-header>
    <div class="tap border-1px">
      <div class="tap-item"><router-link to="/goods">商品</router-link></div>
      <div class="tap-item"><router-link to="/seller">商家</router-link></div>
      <div class="tap-item"><router-link to="/ratings">评价</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import head from '@/components/head/head'
export default {
  name: 'App',
  components:{
    'v-header':head
  }
}
</script>

<style lang="stylus" scoped>
// @import "./common/stylus/base.styl"
  .tap
    display flex
    width 100%
    font-size 14px
    line-height 40px
    height 40px
    color rgb(77,85,93)
    border-1px(rgba(7,17,27,0.8))
    .tap-item
      flex 1
      text-align center
      & > a
        display block
        &.active
          color rgb(240,20,20)
  
</style>

