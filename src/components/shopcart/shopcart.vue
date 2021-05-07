<template>
	<div class="shopcart">
		<div class="content">
			<div class="cart-left">
				<div class="cart">
					<i class="icon-shopping_cart"></i>
				</div>
				<div class="price">￥0</div>
				<div class="desc">另需配送费 元</div>
			</div>
			<div class="cart-right">起送</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'shopcart',
	props:['goods'],
	data(){
		return{

		}
	}
}
</script>

<style lang="stylus">

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
				.icon-shopping_cart
					line-height 48px
					font-size 24px
			.price
				display inline-block
				vertical-align top
				font-size 16px
				margin-top 12px
				padding-right 12px
				line-height 24px
				box-sizing border-box
				border-right 1px solid rgba(255,255,255,0.1)
			.desc
				display inline-block
				vertical-align top
				font-size 12px
				font-weight 700
				line-height 48px
				margin-left 12px
		.cart-right
				flex 0 0 105px
				font-size 16px
				font-weight 700
				line-height 48px
				text-align center 
				background-color rgb(43,51,59)
</style>