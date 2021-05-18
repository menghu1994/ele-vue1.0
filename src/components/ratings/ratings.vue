<template>
    <div class="ratings" ref="ratings">
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
            <li v-for="rat in ratings">
                <i class="avatar">
                    <img :src="rat.avatar" />
                </i>
                <div class="comment">
                    <h3 class="username">{{ rat.username }}</h3>
                    <div class="star-wrapper">
                        <star :score="rat.score" :size="24" />
                    </div>
                    <span v-show="rat.deliveryTime">{{ rat.deliveryTime }}分钟送达</span>
                    <p class="text" v-show="rat.text">{{ rat.text }}</p>
                    <div v-show="rat.recommend">
                        <i :class="rat.rateType == 1 ? 'icon-thumb_down' :'icon-thumb_up'"></i>
                        <span>{{ rat.recommend }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
import BScroll from 'better-scroll'
import comment from '@/components/comments/comments'
import star from '@/components/star/star'
import split from '@/components/split/split'

export default {
    name:'ratings',
    components:{
        comment,star,split
    },
    data(){
        return {
            commentData:{
                goodComment:'满意',
                badComment:'不满意'
            },
            ratings:{},
            seller:{}
        }
    },
	computed:{
		// Isatis(){
		// 	let totalSatis = 0;
		// 	for(let i=0;i<this.rating.length;i++){
		// 		if(this.ratings.score < 4){
		// 			totalSatis += this.ratings.score
		// 		}
		// 	}
		// 	return totalSatis
		// }
	},
    created(){
        this.axios.get('/api/ratings').then( (response) => {
            if(response.data.errno == 0){
                this.ratings = response.data.data
            }
        });
        this.axios.get('/api/seller').then( (response) => {
            if(response.data.errno == 0){
                this.seller = response.data.data
            }
        });
        this._initScroll();
    },
    methods:{
        _initScroll(){
            this.ratingsScroll = new BScroll(this.$refs.ratings,{movable: true,click:true});
            this.ratingsScroll.on('scroll',(pos) => {
                this.scrollY = Math.abs(Math.round(pos.y))
            })
        }
    }
}
</script>


<style lang="stylus" scoped>

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
        .score-wrapper
            margin-bottom 8px
            .star-wrap
                display inline-block 
                vertical-align top
                margin 0 12px
                line-height 18px
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
</style>