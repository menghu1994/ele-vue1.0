<template>
    <div class="seller"  ref="seller">
        <div>

            <!-- 商家信息 -->
            <div class="desc">
                <div class="title border-1px">
                    <div class="descName">
                        <h2>{{seller.name}}</h2>
                        <star :size="36" :score="seller.score"></star>
                        <span class="ratings">({{ seller.ratingCount }})</span>
                        <span class="selling">月售{{seller.sellCount}}单</span>
                    </div>
                    <div class="descFav" @click="isFav">
                        <i class="icon-favorite" :class="{red:fav}"></i>
                        <p class="fav">{{fav?'已收藏':'收藏'}}</p>
                    </div>
                </div>
                <div class="detail">
                    <ul>
                        <li class="minPrice">
                            <p>起送价</p>
                            <span>{{seller.minPrice}}</span>
                        </li>
                        <li></li>
                        <li class="deliveryPrice">
                            <p>商家配送</p>
                            <span>{{seller.deliveryPrice}}</span>
                        </li>
                        <li></li>
                        <li class="deliveryTime">
                            <p>平均配送时间</p>
                            <span class="deliveryTime">{{seller.deliveryTime}}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <hr/>

            <!-- 商家活动 -->
            <div class="activity">
                <h2>公告与活动</h2>
                <p class="bulletin">{{ seller.bulletin }}</p>
                <ul>
                    <li v-for="item in seller.supports" class="disc">
                        <i class="icon" :class="classMap[item.type]"></i>
                        <span class="description">{{item.description}}</span>
                    </li>
                </ul>
            </div>

            <hr/>

            <!-- 商家实景 -->
            <div class="pics">
                <h2>商家实景</h2>
                <ul class="pics-content">
                    <li v-for="item in seller.pics" class="pic-item">
                        <img :src="item">
                    </li>
                </ul>
            </div>

            <hr/>

            <!-- 商家信息 -->
            <div class="detail">
                <h2>商家信息</h2>
                <ul>
                    <li v-for="item in seller.infos" class="detail-infos">
                        <p>{{item}}</p>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>


<script>
import star from '@/components/star/star'
import BScroll from 'better-scroll'

export default {
    name:'shopcart',
    props:{
        seller:{
            type:Object,
            default:{}
        }
    },
	data(){
		return{
            fav:true,
            classMap:['decrease','discount','guarantee','invoice','special']
		}
    },
    components:{
        star
    },
    created(){
    },
    mounted(){
        this.$nextTick( () => {
            this.sellerScroll = new BScroll(this.$refs.seller,{movable: true,click:true})
        } )
    },
    methods:{
        isFav(){
            this.fav = !this.fav
        }
    }
}
</script>


<style lang="stylus" scoped>
@import "~common/stylus/base.styl"

h2
   font-weight 700
   font-size 14px
   line-height 14px
   color rgb(7,17,27)
   margin-bottom 8px
.seller
    font-size 12px
    .desc
        padding 18px
        .title
            display flex
            justify-content space-between
            padding-bottom 18px
            border-1px(rgba(7,17,27,0.1))
            .descName
                .star
                    display inline-block
                    vertical-align top
                .ratings
                    margin 0 12px 0 8px
                .selling 
                    color rgb(77,85,93)
                    line-height 18px
            .descFav
                width 36px
                text-align center
                .icon-favorite
                    color rgb(212,214,217)
                    font-size 24px
                    line-height 24px
                    margin-bottom 4px
                    &.red
                        color rgb(240,20,20)
                .fav
                    font-size 10px
                    line-height 10px
                    color rgb(77,85,93)
        .detail
            ul
                display flex
                justify-content space-around
                li  
                    text-align center
                    margin 18px auto 0
                    &:last-child
                        padding 0
                    &:nth-child(even)
                        border-right 1px solid
                        color rgba(7,17,27,0.1)
                    p
                        color rgb(147,153,159)
                        margin-bottom 4px
                    span
                        font-size 24px
                        &::after
                            content '元'
                            font-size 10px
                        &.deliveryTime
                            &::after
                                content '分钟'
    
    
    hr
        width 100%
        height 18px
        background-color rgb(243,245,247)
        border-top 1px solid rgb(230,231,232)
        border-bottom 1px solid rgb(230,231,232)
        border-left none
    .activity
        padding 18px 18px 0 18px
        .bulletin
            color rgb(240,20,20)
            line-height 24px
            padding-bottom 16px
        .disc
            padding 16px 12px
            border-top 1px solid rgba(7,17,27,0.1)
            color rgb(7,17,27)
            line-height 16px
            .icon
                display inline-block
                vertical-align middle
                width 16px
                height 16px
                background-size 16px 16px
                background-repeat no-repeat
                // margin-top 
                &.decrease
                    bg-img("decrease_4")
                &.discount
                    bg-img("discount_4")
                &.guarantee
                    bg-img("guarantee_4")
                &.invoice
                    bg-img("invoice_4")
                &.special
                    bg-img("special_4")
            .description
                vertical-align middle
                margin-left 6px
                line-height 16px
    .pics
        padding 18px
        .pics-content 
            white-space nowrap
            overflow-x scroll
            overflow-y hidden
            .pic-item
               display inline-block
               margin 12px 6px 0 0
               width 120px
               height 90px
               background-size 120px 90px
               background-repeat no-repeat
               img 
                   width 120px
                   height 90px
    .detail
        padding 18px
        .detail-infos
            padding 16px 12px
            border-top 1px solid rgba(7,17,27,0.1)
            color rgb(7,17,27)
            line-height 16pxpx
</style>