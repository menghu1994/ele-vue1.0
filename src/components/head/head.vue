<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img height="64" width="64" :src="seller.avatar" alt="">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{ seller.name }}</span>
				</div>
				<div class="description">{{ seller.description }}/ {{ seller.deliveryTime }}分钟送达</div>
				<div class="support" v-if="seller.supports">
					<span class="logo"></span>
					<span>{{ seller.supports[0].description }}</span>
				</div>
			</div>
		</div>
		<div class="bulletin-wrapper"></div>
	</div>
</template>

<script>
export default {
	name:'head',
	// props:['seller']
	props:{
		seller:{
			default:''
		}
	}
}
</script>

<style lang="stylus">
// @import "../../common/stylus/base.styl"

.header
	background-color #000
	color #fff
	.content-wrapper
		padding 24px 16px 18px 24px
		font-size 0
		.avatar
			display inline-block
			vertical-align top
			img 
				border-radius 2px
		.content
			display inline-block
			font-size 10px
			margin-left 16px
			.title
				font-size 10px
				margin-bottom 8px
				.brand
					display inline-block
					bg-img('brand')
					background url('brand@2x.png')
					background-size 30px 18px
					vertical-align top
					width 30px
					height 18px
					margin 2px 6px 0 0
				.name 
					font-size 16px
					font-weight bold
					line-height 18px
			.description 
				font-size 12px
				line-height 12px
				margin-bottom 10px
			.support
				.logo
					display inline-block
					background-image url('decrease_1@2x.png')
					background-size 16px 16px
					vertical-align top
					width 16px
					height 16px
					margin 0 4px




</style>