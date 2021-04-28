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
			<div v-if="seller.supports" class="support-count" @click="showDetail">
				<span class="count">{{ seller.supports.length }}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper"  @click="showDetail">
			<span class="bulletin-title"></span><span class="bulletin-text">{{ seller.bulletin }}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<!-- 背景图 -->
		<div class="bg">
			<img height="100%" width="100%" :src="seller.avatar" alt="">
		</div>
		<!-- 公告细节面板 -->
		<div class="detail" v-show="detail">
			<div class="detail-wrapper clearfix">
				<div class="detail-main">
					<h1 class="name">{{ seller.name }}</h1>
					<star :score="seller.score" :size="seller.ratingCount"></star>
					<p v-if="seller.supports">优惠信息</P>
				</div>
			</div>
			<!-- 关闭公告面板按钮 -->
			<div class="detail-close">
				<i class="icon-close" @click="hideDetail"></i>
			</div>
		</div>
	</div>
</template>

<script>
import star from '@/components/star/star'

export default {
	name:'head',
	// props:['seller']
	props:{
		seller:{
			default:''
		}
	},
	components:{
		star
	},
	data(){
		return {
			detail:false
		}
	},
	methods:{
		showDetail(){
			this.detail = true
		},
		hideDetail(){
			this.detail = false
		}
	}
}
</script>

<style lang="stylus">
// @import "../../common/stylus/base.styl"
@import "~common/stylus/base.styl"

.header
	background rgba(7,17,27,0.5)
	color #fff
	position relative
	overflow hidden
	.content-wrapper
		position relative
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
					bg-img('decrease_1')
					background-size 16px 16px
					vertical-align top
					width 16px
					height 16px
					margin 0 4px
		.support-count
			position absolute
			right 12px
			bottom 14px
			height 24px 
			line-height 24px
			padding 0 8px 0 7px
			text-align center
			border-radius 7px
			background rgba(0,0,0,0.2)
			.count 
				font-size 10px
				vertical-align top
			.icon-keyboard_arrow_right
				font-size 10px
				vertical-align top
				line-height 24px
				margin-left 2px

	.bulletin-wrapper
		position relative
		height 28px
		line-height 28px
		padding 0 22px 0 12px
		background rgba(7,17,27,0.2)
		overflow hidden
		white-space nowrap
		text-overflow ellipsis
		.bulletin-title
			display inline-block
			vertical-align top
			width 22px
			height 12px
			bg-img('bulletin')
			background-repeat no-repeat
			background-size 100% 100%
			margin-top 8px
		.bulletin-text
			vertical-align top
			margin 0 4px
			font-size 10px
		.icon-keyboard_arrow_right
			position absolute
			right 12px
			top 8px
	.bg
		position absolute
		left 0
		top 0
		width 100%
		height 100%
		z-index -1
		filter blur(10px)
	.detail
		position fixed
		top 0
		left 0
		width 100%
		height 100%
		background rgba(7,17,27,0.8)
		z-index 111
		overflow auto
		.detail-wrapper
			min-height 100%
			width 100%
			text-align center
			.detail-main
				padding 64px 36px 64px
		.detail-close
			// position relative
			height 32px 
			width 32px
			margin -64px auto 0
			font-size 32px
			color rgba(255,255,255,0.5)
			.icon-close
				width 32px
				height 32px


</style>