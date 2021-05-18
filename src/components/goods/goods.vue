<template>
    <div class="goods">
        <!-- 商品左侧菜单栏 -->
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="item,index in this.goods" class="goods-list border-1px" :class="{current: curIndex===index}" @click="curPos(index)">
                    
                     <span class="goods-name"><i class="icon" v-if="item.type > 0" :class="classMap[item.type]"></i>{{ item.name }}</span>
                    
                </li>
            </ul>
        </div>
        <!-- 商品右侧食物列表 -->
        <div class="food-wrapper" ref="foodWrapper" >
               <ul>
                   <li v-for="item in goods" class="food-list food-list-hook">
                       <h2 class="name">{{item.name}}</h2>
                       <ul class="detail">
                           <li v-for="food in item.foods" class="detail-item border-1px" @click="showFoods(food)">
                               <div class="image">
                                   <img :src="food.image" alt="">
                               </div>
                               <div class="food-d">
                                   <h3 class="title">{{ food.name }}</h3>
                                   <p class="description">{{ food.description }}</p>
                                   <div>
                                   <span class="count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span></div>
                                   <span class="price">{{ food.price }}</span>
                                   <span class="oldprice" v-if="food.oldPrice">￥{{ food.oldPrice }}</span>
                               </div>
                               <!-- 购买数量组件 -->
                               <div class="cartcontrol">
                                   <cartcontrol :food="food" ></cartcontrol>
                               </div>
                           </li>
                       </ul>
                   </li>
                </ul>
        </div>
        <!-- 购物车结算组件 -->
        <shopcart :select-foods="selectFoods" :minPrice="seller.minPrice" :deliveryPrice="seller.deliveryPrice"></shopcart>
        <!-- 商品详细信息 -->
        <transition name="food-detail">
            <food ref="foodDetail" :food="selectedFood" />
        </transition>
    </div>
</template>


<script>
import BScroll from 'better-scroll'
import shopcart from "@/components/shopcart/shopcart"
import cartcontrol from "@/components/cartcontrol/cartcontrol"
import food from "@/components/food/food"

export default {
    name:'goods',
    props:['seller'],
    data(){
        return {
            goods:[],
            classMap:['decrease','discount','guarantee','invoice','special'],
            heightList:[],
            scrollY:0,
            selectedFood:[]
        }
    },
    components:{
        shopcart,cartcontrol,food
    },
    created() {
        this.axios.get('/api/goods').then( (Response) => {
            if( Response.data.errno === 0){
                this.goods = Response.data.data
                this.$nextTick(() => {
                    this._initScroll();
                    this._calculateHeight();
                })
                
            }
        })
    },
    computed:{
        curIndex(){
            // console.log(this.heightList)
            for(let i=0;i<this.heightList.length;i++){
                let height1 = this.heightList[i];
                let height2 = this.heightList[i+1];
                if(!height2 ||(this.scrollY>=height1 && this.scrollY < height2)){
                    return i
                }
            }
            // console.log('test')
            return 0
        },
        selectFoods(){
            let foods = [];
            this.goods.forEach( (good) => {
                good.foods.forEach( (food) => {
                    if(food.number){
                        foods.push(food)
                    }
                } )
            })
            // console.log(12)
            return foods
        }
    },
    methods:{
        _initScroll(){
            this.menuScroll = new BScroll(this.$refs.menuWrapper,{movable: true,click:true});
            this.foodsScroll = new BScroll(this.$refs.foodWrapper,{movable: true,click:true,probeType:3});
            this.foodsScroll.on('scroll',(pos) => {
                this.scrollY = Math.abs(Math.round(pos.y))
            })
        },
        _calculateHeight(){
            let curFood = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
            let height = 0;
            this.heightList.push(height)
            for(let i=0;i<curFood.length;i++){
                height += curFood[i].clientHeight;
                this.heightList.push(height)
            }
        },
        curPos(i){
            // this.scrollY = this.heightList[i];
            let el = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')[i];
            this.foodsScroll.scrollToElement(el,300);
        },
        showFoods(food){
            this.selectedFood = food
            this.$refs.foodDetail.showFood()
            // console.log(this.selectFoods)
        }
    }
}
</script>


<style lang="stylus" scoped>
@import "~common/stylus/base.styl"

.food-detail-enter, .food-detail-leave-to
    transform translateY(100%)
    opacity 0.3
.food-detail-enter-to, .food-detail-leave
    
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
            &.current
                background white
                position relative
                margin-top -1px
                z-index 22
                .goods-name
                    font-weight 700
                    border-none()
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
                    .food-d
                        display inline-block
                        vertical-align top
                        margin-left 10px
                        font-size 10px
                        width 70%
                        word-wrap break-word
                        color rgb(147,153,159)
                        .title
                            font-size 14px
                            color rgb(7,17,27)
                            line-height 14px
                            margin 2px 0 8px
                        .description
                            margin-bottom 8px
                            line-height 12px
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
                    .cartcontrol
                        position absolute 
                        right 18px
                        bottom 10px
</style>