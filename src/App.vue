<template>
  <div id="app">
    <v-head :seller="seller"></v-head>
    <div class="tap border-1px">
      <div class="tap-item"><router-link to="/goods">商品</router-link></div>
      <div class="tap-item"><router-link to="/ratings">评价</router-link></div>
      <div class="tap-item"><router-link to="/seller">商家</router-link></div>
    </div>
      <transition :name="names">
        <keep-alive>
          <router-view :seller="this.seller"></router-view>
        </keep-alive>
      </transition>
  </div>
</template>

<script>
import header from '@/components/header/header'
export default {
  name: 'App',
  data(){
    return {
      seller:[],
      names:""
    }
  },
  components:{
    'v-head':header
  },
  created() {
    this.axios.get('/api/seller').then((Response)=>{
      if(Response.data.errno === 0){
       this.seller = Response.data.data;
      }
    })
  },
  watch:{
    $route(to,from){
      if(to.meta.index > from.meta.index){
        this.names="right"
      }else{
        this.names="left"
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "./common/stylus/base.styl"

.right-enter-active,.right-leave-active
  transition all .4s ease
.right-enter
  transform: translateX(100%)
.right-enter-to 
  transform: translateX(0)
.right-leave
  transform: translateX(0)
.right-leave-to
  transform: translateX(-100%)

.left-enter-active,.left-leave-active
  transition all .4s ease
.left-enter
  transform: translateX(-100%)
.left-enter-to 
  transform: translateX(0)
.left-leave
  transform: translateX(0)
.left-leave-to
  transform: translateX(100%)

.tap
    display flex
    width 100%
    font-size 14px
    line-height 40px
    height 40px
    color rgb(77,85,93)
    border-1px(rgba(7,17,27,0.1))
    z-index 100
    .tap-item
      flex 1
      text-align center
      & > a
        display block
        &.active
          color rgb(240,20,20)
  
</style>

