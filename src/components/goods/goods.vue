<template>
    <div class="goods">

            <ul class="menu-wrapper"  ref="menuWrapper">
                <li v-for="item in this.goods" class="goods-list border-1px" >
                    <i class="icon" v-if="item.type > 1" :class="classMap[item.type]"></i><span class="goods-name">{{ item.name }}</span>
                </li>
            </ul>


        <div class="food-wrapper" ref="foodWrapper" >
            <ul  v-for="item in goods" class="food-list">
                <li>
                    <h2 class="name">{{item.name}}</h2>
                    <ul class="detail">
                        <li v-for="food in item.foods" class="detail-item border-1px">
                            <div class="image">
                                <img :src="food.image" alt="">
                            </div>
                            <div class="food">
                                <h3 class="title">{{ food.name }}</h3>
                                <p class="description">{{ food.description }}</p>
                                <span class="count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
                                <span class="price">{{ food.price }}</span>
                                <span class="oldprice" v-if="food.oldprice">{{ food.oldprice }}</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            
        </div>
    </div>
</template>


<script>
import BScroll from 'better-scroll'

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
                this.$nextTick(() => {
                    this._initScroll()
                })
                
            }
        })
    },
    methods:{
        _initScroll(){
            this.menuScroll = new BScroll(this.$refs.menuWrapper,{movable: true});
            this.foodsScroll = new BScroll(this.$refs.foodWrapper,{movable: true});
        }
    }
}
</script>


<style lang="stylus" scoped>
@import "~common/stylus/base.styl"

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
            width 56px
            height 54px
            line-height 14px
            display table
            padding 0 12px
            .icon
                display inline-block
                vertical-align top
                width 12px
                height 12px
                margin-right 2px
                background-repeat no-repeat
                background-size 12px 12px
                &.decrease
                    bg-img("decrease_3")
                &.discount
                    bg-img("discount_3")
                &.guarantee
                    bg-img("guarantee_3")
                &.invoice
                    bg-img("invoice_3")
                &.special
                    bg-img("special_3")
            .goods-name
                display table-cell
                width 56px
                vertical-align middle
                font-size 12px
                color rgb(7,17,27)
                font-weight 200
                line-height 14px
                border-1px(rgba(7,17,27,0.1))
    .food-wrapper
        flex 1
        .food-list
            .name
                color rgb(147,153,159)
                line-height 26px
                background #f3f5f7
                font-size 12px
                width 100%
                height 26px
                padding 0 14px
                border-left 2px solid #d9dde1
            .detail
                .detail-item
                    padding 18px
                    border-1px(rgba(7,17,27,0.1))
                    .image
                        display inline-block
                        vertical-align top
                        width 60px
                        height 60px
                        img
                            width 60px
                            height 60px
                            border-radius 2px
                    .food
                        display inline-block
                        vertical-align top
                        margin-left 10px
                        font-size 10px
                        color rgb(147,153,159)
                        .title
                            font-size 14px
                            color rgb(7,17,27)
                            line-height 14px
                            margin 2px 0 8px
                        .description
                            margin-bottom 8px
                            line-height 10px
                        .rating
                            margin-left 12px
                        .price
                            display block
                            font-size 14px
                            color #f01414
                            line-height 24px
                            font-weight 700
                            margin-top 8px
                            &::before
                                content "￥"
                                font-size 10px
                        .oldprice
                            display block
                            font-weight 700
                            line-height 24px
</style>