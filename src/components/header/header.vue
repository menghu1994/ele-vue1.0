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
		<transition name="fade">
			<div class="detail" v-show="detail">
				<div class="detail-wrapper clearfix">
					<div class="detail-main">
						<!-- 标题 -->
						<h1 class="name">{{ seller.name }}</h1>
						<!-- 评星 -->
						<star :score="seller.score" :size="48"></star>
						<!-- 优惠信息 -->
						<div class="support-wrapper">
							<div class="line"></div>
							<h2 class="text">优惠信息</h2>
							<div class="line"></div>
						</div>
						<ul v-if="seller.supports" class="supports">
							<li v-for="item in seller.supports">
								<i class="icon" :class="classMap[item.type]"></i>
								<span class="description">{{ item.description }}</span>
							</li>
						</ul>
						<!-- 商家公告 -->
						<div class="support-wrapper">
							<div class="line"></div>
							<h2 class="text" v-if="seller.supports">商家公告</h2>
							<div class="line"></div>
						</div>
						<p class="bulletin">{{ seller.bulletin }}</p>
					</div>
				</div>
				<!-- 关闭公告面板按钮 -->
				<div class="detail-close">
					<i class="icon-close" @click="hideDetail"></i>
				</div>
			</div>			
		</transition>
	</div>
</template>

<script>
import star from '@/components/star/star'

export default {
	name:'header',
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
			detail:false,
			classMap:['decrease','discount','guarantee','invoice','special']
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

.fade-enter-active 
  transition all .4s ease
.fade-enter
  transform translateY(-100%)
  opacity 0;
.fade-leave-to
	transform translateY(0)
	opacity 1

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
				.name
					font-size 16px
					font-weight 700
					line-height 16px
				.support-wrapper
					display flex
					flex-basis 80%
					margin 28px auto 24px
					.line
						flex 1
						border-bottom 1px solid rgba(255,255,255,0.2)
					.text
						margin 0 12px
						position relative
						top 7px
				.supports
					font-size 0
					padding 0 12px
					li
						font-size 12px
						font-weight 200
						text-align left
						color white
						line-height 12px
						margin-bottom 12px
						&:last-child
							margin-bottom 0
						.icon
							display inline-block
							width 16px
							height 16px
							background-size 16px 16px
							background-repeat no-repeat
							vertical-align top
							margin-right 6px
							&.decrease
								bg-img('decrease_2')
							&.discount
								bg-img('discount_2')
							&.guarantee
								bg-img('guarantee_2')
							&.invoice
								bg-img('invoice_2')								
							&.special
								bg-img('special_2')
						.description
							line-height 16px
				.bulletin
					font-size 12px
					font-weight 200
					line-height 24px
					padding 0 12px
					text-align left
					vertical-align top
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