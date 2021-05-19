<template>
    <div class="foode" v-show="show" ref="foode">
        <div>
            <div class="avatar">
                <img class="avat-img" :src="food.image" >
                <i class="icon-arrow_lift" @click="hideFood"></i>
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
                <div class="addToCart" v-show="food.number === 0 || !food.number" @click="addFirst">加入购物车</div>
                <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food" />
                </div>
            </div>
            <split />
            <div class="info" v-if="food.info">
                <h2 class="info-name">商品介绍</h2>
                <p class="info-desc">
                    {{ food.info }}
                </p>
            </div>
            <split v-if="food.info" />
            <comment :rating="commentData" />
        </div>
    </div>
</template>


<script>
import split from '@/components/split/split'
import vue from 'vue'
import cartcontrol from '@/components/cartcontrol/cartcontrol'
import comment from '@/components/comments/comments'
import BScroll from 'better-scroll'


export default {
    name:'food',
	props:{
		food:{
			type:[Object,Array]
		}
	},
    data(){
        return {
            show:false,
            showCart:false,
            commentData:{
                goodComment:'推荐',
                badComment:'吐槽'
            }
        }
    },
    components:{
        split,cartcontrol,comment
    },
    methods:{
        showFood(){
            this.show = true;
            this.$nextTick( () => {
                if(!this.foodScroll){
                this.foodScroll = new BScroll(this.$refs.foode,{movable: true,click:true});
                }
            })
        },
        hideFood(){
            this.show = false
        },
        addFirst(){
            vue.set(this.food,'number',1)
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
    bottom 48px
    background white
    width 100%
    height 100%
    z-index 101
    margin-bottom 56px
    overflow hidden
    .avatar
        position relative
        width 100%
        .avat-img    
            width 100%
        .icon-arrow_lift
            position absolute
            top 12px
            left 0
            font-size 14px
            color white
            padding 12px
    .food-detail
        padding 18px
        font-size 10px
        word-wrap break-word
        color rgb(147,153,159)
        position relative
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
        .addToCart
            position absolute
            bottom 18px
            right 18px
            height 24px
            line-height 24px
            font-size 12px
            color white
            box-sizing border-box
            background-color rgb(0,160,220)
            border-radius 12px
            padding 0 12px
            text-align center
            z-index 10
        .shopcart-wrapper
            position absolute
            right 18px
            bottom 18px
        .cartcontrol-wrapper
            position absolute
            right 18px
            bottom 12px
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