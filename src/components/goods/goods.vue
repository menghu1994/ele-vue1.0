<template>
    <div class="goods">

            <ul class="menu-wrapper">
                <li v-for="item in this.goods" class="goods-list" >
                    <i class="icon" v-if="item.type > 1"></i>
                    <span class="goods-name">{{ item.name }}</span>
                </li>
            </ul>

        <div class="food-wrapper"></div>
    </div>
</template>


<script>
export default {
    name:'goods',
    props:['seller'],
    data(){
        return {
            goods:[],
            classMap:['decrease','discount','guarantee','invoice','special']
        }
    },
    created() {
        this.axios.get('/api/goods').then( (Response) => {
            if( Response.data.errno === 0){
                this.goods = Response.data.data
                console.log(this.goods)
            }
        })
    }
}
</script>


<style lang="stylus" scoped>
.goods
    display flex 
    width 100%
    overflow hidden
    position absolute 
    bottom 50px
    top 174px
    .menu-wrapper
        flex 0 0 80px
        width 80px
        background #f3f5f7
        .goods-list
            padding 12px
            .icon
                display inline-block
                vertical-align top
                width 12px
                height 12px
                background-repeat no-repeat
                background-size 12px 12px
            .goods-name
                font-size 12px
                color rgb(7,17,27)
                font-weight 200
                line-height 14px
    .food-wrapper
        flex 1
</style>