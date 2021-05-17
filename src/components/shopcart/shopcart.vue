<template>
	<div class="shopcart">
		<div class="content">
			<div class="cart-left" @click="fold=!fold">
				<div class="cart" :class="{'highLight': totalCount>0}">
					<i class="icon-shopping_cart"></i>
					<div class="number" v-show="totalCount>0">{{ totalCount }}</div>
				</div>
				<div class="price" :class="{'highLight': totalCount>0}">￥{{totalPrice}}</div>
				<div class="desc">另需配送费{{deliveryPrice}}元</div>
			</div>
			<div class="cart-right" :class="pay">{{payDesc}}</div>
		</div>
		<!-- 购物车小球 -->
		<transition name="cot-ani">
			<div class="cot" v-show="totalPrice > 0"></div>
		</transition>
		<!-- 购物车详情页 -->
		<div class="cart-detail" v-show="!fold">
			<div class="detail-header border-1px">
				<h2 class="title">购物车</h2>
				<span class="empty" @click="clearCart">清空</span>
			</div>
			<div class="detail-content">
				<ul>
					<li v-for="foods in selectFoods" class="food-list border-1px">
						<div class="left">
							<h3 class="name">{{foods.name}}</h3>
						</div>
						<div class="right">
							<span class="price">{{foods.price * foods.number}}</span>
							<div class="cartcontrolWrpper">
								<cartcontrol :food="foods" />
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import cartcontrol from '@/components/cartcontrol/cartcontrol'

export default {
	name:'shopcart',
	props:{
		selectFoods:{
			type:Array,
			default(){
				return [
					{name:'lianzi',
						count:1,
						price:10}
				]
			}
		},
		minPrice:{
			type:Number,
			default:20
		},
		deliveryPrice:{
			type:Number,
			default:0
		}
	},
	data(){
		return{	
			fold:true
		}
	},
	components:{
		cartcontrol
	},
	computed:{
		totalPrice(){
			let total=0;
			this.selectFoods.forEach((food) => {
				total += food.price * food.number
			});
			return total
		},
		totalCount(){
			let total=0;
			this.selectFoods.forEach((food) => {
				total += food.number
			});
			return total
		},
		payDesc(){
			let diff = this.minPrice - this.totalPrice 
			if(this.totalPrice == 0){
				return `${this.minPrice}起送`
			}else if(this.totalPrice >= this.minPrice){
				return "结算"
			}else if(diff>0){
				return `还差${diff}元起送`
			}
		},
		pay(){
			if(this.totalPrice >= this.minPrice){
				return 'pay'
			}
		},
		showCart(){
			if(this.selectFoods.length > 0){
				this.fold = true
				return this.fold
			}
			this.fold = false
			return this.fold
		}
	},
	methods:{
		clearCart(){
			this.selectFoods.forEach( (food) => {
				food.number = ''
			})
			// console.log(this.selectFoods)
			this.selectFoods.length = 0
			this.fold = true
		}
	}
}
</script>

<style lang="stylus">
@import "~common/stylus/base.styl"

.shopcart
	position fixed
	left 0
	bottom 0
	width 100%
	height 48px
	background-color #141d27
	.content
		display flex
		color rgba(255,255,255,0.4)
		.cart-left
			flex 1
			font-size 0
			.cart
				display inline-block
				vertical-align top
				position relative
				top -10px
				width 44px
				height 44px
				border 6px solid #141d27
				border-radius 50%
				margin 0 12px
				text-align center
				background-color rgb(43,52,66)
				z-index 66
				&.highLight
					background rgb(0,160,220)
					color white
				.icon-shopping_cart
					line-height 48px
					font-size 24px
				.number
					position absolute
					top -4px
					right -4px
					width 24px
					height 16px
					line-height 16px
					border-radius 16px
					text-align center
					color white
					font-size 9px
					background-color rgb(240,20,20)
					box-shadow 0 4px 8px rgba(0,0,0,0.4)
			.price
				display inline-block
				vertical-align top
				font-size 16px
				margin-top 12px
				padding-right 12px
				line-height 24px
				box-sizing border-box
				border-right 1px solid rgba(255,255,255,0.1)
				font-weight 700
				&.highLight
					color white
			.desc
				display inline-block
				vertical-align top
				font-size 12px
				font-weight 700
				line-height 48px
				margin-left 12px
		.cart-right
				flex 0 0 105px
				font-size 14px
				font-weight 700
				line-height 48px
				text-align center 
				background-color rgb(43,51,59)
				&.pay
					background #00b43c
					color #fff
	.cot
		width 12px
		height 12px
		border-radius 50%
		background rgb(147,153,159)
	.cart-detail
		position absolute
		bottom 48px
		left 0
		width 100%
		font-size 14px
		max-height 258px
		color rgb(7,17,27)
		overflow auto
		.detail-header
			display flex
			justify-content space-between
			// position sticky 
			top 0
			height 40px
			line-height 40px
			padding 0 18px
			background-color #f3f5f7
			border-1px(rgba(7,17,27,0.1))
			z-index 20
			.title
				font-size 14px
				font-weight normal
			.empty
				color rgb(0,160,220)
	.detail-content
		background-color #fff
		padding 0 16px
		.food-list
			height 48px
			line-height 48px
			display flex
			justify-content space-between
			width 100%
			border-1px(rgba(7,17,27,0.1))
			.left
				font-size 14px
				line-height 48px
				font-weight 400
				color rgb(7,17,27)
				padding 0 12px
			.right
				.price
					font-weight 700
					color rgb(240,20,20)
					line-height 24px
					&::before
						content '￥'
						font-size 10px
				.cartcontrolWrpper
					display inline-block
					vertical-align top
</style>