<template>
    <div class="ratings" ref="ratings">
        <div class="content">
            <div class="ratings-detail">
                <div class="detail-left">
                    <h1 class="score">{{ seller.score }}</h1>
                    <p class="compScore">综合评分</p>
                    <p class="rankRate">高于周边商家{{seller.rankRate}}%</p>
                </div>
                <div class="silde"></div>
                <div class="detail-right">
                    <div class="score-wrapper">
                        <span class="service-score">服务态度</span>
                        <div class="star-wrap">
                        <star :size="36" :score="seller.serviceScore" />
                        </div>
                        <span class="score-detail">{{ seller.serviceScore }}</span>
                    </div>
                    <div class="score-wrapper">
                        <span class="service-score">食物评分</span>
                        <div class="star-wrap">
                        <star :size="36" :score="seller.foodScore" />
                        </div>
                        <span class="score-detail">{{ seller.foodScore }}</span>
                    </div>
                    <div class="score-wrapper">
                        <span class="service-score">送达时间</span>
                        <span class="delivery-time">{{ seller.deliveryTime }}分钟</span>
                    </div>
                </div>
            </div>

            <split />

            <comment :rating="commentData" />

            <ul class="rat-content">
                <li v-for="rat in ratings" class="rat-list border-1px">
                    <i class="avatar">
                        <img :src="rat.avatar" />
                    </i>
                    <div class="comment">
                        <h3 class="username">{{ rat.username }}</h3>
                        <div class="star-wrapper">
                            <star :score="rat.score" :size="24" />
                        </div>
                        <span v-show="rat.deliveryTime" class="delivery-time">{{ rat.deliveryTime }}分钟送达</span>
                        <p class="text" v-show="rat.text">{{ rat.text }}</p>
                        <div v-show="rat.recommend.length > 0" class="access">
                            <i :class="rat.rateType == 1 ? 'icon-thumb_down' :'icon-thumb_up'"></i>
                            <span v-for="item in rat.recommend" class="access-food">{{ item }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import comment from '@/components/comments/comments'
import star from '@/components/star/star'
import split from '@/components/split/split'
import BScroll from 'better-scroll'

export default {
    name:'ratings',
    props:{
        seller:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        comment,star,split
    },
    data(){
        return {
            commentData:{
                goodComment:'满意',
                badComment:'不满意',
                onlyComment:false
            },
            ratings:{}
        }
    },
    created(){
        this.axios.get('/api/ratings').then( (response) => {
            if(response.data.errno == 0){
                this.ratings = response.data.data
                this.$nextTick( () => {
                    if(!this.scroll){
                        this.scroll = new BScroll(this.$refs.ratings,{click:true})
                    }
                })
            }
        });
    }
}
</script>


<style lang="stylus" scoped>
@import "~common/stylus/base.styl"

.ratings
    overflow hidden
    position absolute 
    top 174px
    left 0
    width 100%
    .ratings-detail
        display flex
        justify-content space-around
        padding 18px 0
    .detail-left
        display flex
        flex-direction column
        justify-content center
        text-align center
        margin 0 auto
        .score
            font-size 24px
            color rgb(255,153,0)
            line-height 28px
        .compScore
            font-size 12px
            color rgb(7,17,27)
            line-height 12px
            margin-top 6px
        .rankRate
            font-size 10px
            color rgb(147,153,159)
            margin 8px 0 6px 0            
    .silde
        width 1px
        border-right 1px solid rgba(7,17,27,0.1)
    .detail-right
        padding 0 24px
        @media only screen and (max-width:320px) {
            padding 0 6px
        }
        .score-wrapper
            margin-bottom 8px
            .star-wrap
                display inline-block 
                vertical-align top
                margin 0 12px
                line-height 18px
                @media only screen and (max-width:320px) {
                    margin 0 2px
                }
            .score-detail
                font-size 12px 
                color rgb(255,153,0)
                line-height 18px
            .service-score
                font-size 12px
                color rgb(7,17,27)
                line-height 18px
            .delivery-time
                margin-left 12px
                color rgb(147,153,159)
    .rat-content
    .rat-list
        margin 0 18px
        padding 18px 0
        border-1px(rgba(7,17,27,0.1))
        .avatar
            display inline-block
            vertical-align top
            width 28px
            height 28px
            border-radius 50%
            margin-right 12px
            img 
                width 28px
                height 28px
                border-radius 50%
        .comment
            display inline-block
            vertical-align top
            max-width 85%
            .username
                font-size 10px
                color rgb(7,17,27)
                line-height 24px
            .star-wrapper
                display inline-block
            .delivery-time
                display inline-block
                color rgb(147,153,159)
                line-height 12px
                margin 4px 6px 6px 0
            .text
                font-size 12px 
                color rgb(7,17,27)
                line-height 18px
                font-weight 400
                margin-bottom 8px
            .access
                font-size 0
                .access-food
                    display inline-block
                    vertical-align top
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    max-width 50px
                    color rgb(7,17,27)
                    border 1px solid rgba(7,17,27,0.1)
                    padding 0 6px
                    line-height 16px
                    border-radius 2px
                    margin-right 8px
                    margin-bottom 4px
                    font-size 12px
                .icon-thumb_down
                    color rgb(183,187,191)
                    line-height 32px
                    font-size 12px
                    margin-right 8px
                    display inline-block
                    vertical-align top
                .icon-thumb_up
                    color rgb(0,160,220)
                    line-height 16px
                    font-size 12px
                    margin-right 8px
                    display inline-block
                    vertical-align top
</style>