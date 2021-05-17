<template>
    <div class="foode"  v-show="show">
        <div class="avatar">
            <img class="avat-img" :src="food.image" >
        </div>
        <div class="food-detail">
            <h3 class="title">{{ food.name }}</h3>
            <p class="description">{{ food.description }}</p>
            <div>
                <span class="count">月售{{food.sellCount}}份</span>
                <span class="rating">好评率{{ food.rating }}%</span>
            </div>
            <span class="price">{{ food.price }}</span>
            <span class="oldprice" v-if="food.oldPrice">￥{{ food.oldPrice }}</span>
        </div>
        <div class="info" v-if="food.info">
            <h2 class="info-name">商品介绍</h2>
            <p class="info-desc">
                {{ food.info }}
            </p>
        </div>
    </div>
</template>


<script>
export default {
    name:'food',
	props:{
		food:{
            type:[Object,Array]
        }
    },
    data(){
        return {
            show:false
        }
    },
    methods:{
        showFood(){
            this.show = true
        }
    }
}
</script>

<style lang="stylus">
@import "~common/stylus/base.styl"

.foode
    position fixed
    top 0
    left 0
    background white
    width 100%
    height 100%
    z-index 101
    margin-bottom 56px
    .avatar
        width 100%
        .avat-img    
            width 100%
    .food-detail
        display inline-block
        vertical-align top
        padding 18px
        font-size 10px
        word-wrap break-word
        color rgb(147,153,159)
        .title
            font-size 14px
            color rgb(7,17,27)
            line-height 14px
            margin 2px 0 8px
            font-weight 700
        .description
            margin-bottom 8px
            // line-height 12px
        .rating
            margin-left 12px
        .price
            display inline-block
            font-size 14px
            color #f01414
            line-height 24px
            font-weight 700
            margin-top 8px
            &::before
                content "￥"
                font-size 10px
        .oldprice
            display inline-block
            font-weight 700
            line-height 24px
            text-decoration line-through
    .info
        padding 18px
        .info-name
            font-weight 700
            color rgb(7,17,27)
            line-height 14px
            margin-bottom 6px
            font-size 14px
        .info-desc
            font-size 12px
            color rgb(77,85,93)
            line-height 24px
            padding 0 8px
</style>