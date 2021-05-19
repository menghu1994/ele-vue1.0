<template>
    <div class="comment">
			<div class="comment-title border-1px">
				<h2 class="comment-name">商品评价</h2>
				<div class="comment-catalog border-1px">
					<div class="block total-comment">
						<span>全部<span class="count">44</span></span>
					</div>
					<div class="block satisfied">
						<span>{{rating.goodComment}}<span class="count">24</span></span>
					</div>
					<div class="block dissatisfied">
						<span>{{rating.badComment}}<span class="count">20</span></span>
					</div>
				</div>
				<div class="comment-select">
					<i class="icon-check_circle"></i>
					<span class="has-content">只看有内容的评价</span>
				</div>
			</div>
		</div>
</template>


<script>

export default {
		name:'comment',
		props:['rating'],
		data(){
			return {
				ratings:[],
				ratingsList:[]
			}
		},
		created(){
			this.axios.get('/api/ratings').then( (resp) => {
				if(resp.data.errno === 0){
					this.ratings = resp.data.ratings
				}
			})
		}
}
</script>


<style lang="stylus" scoped>
@import '~common/stylus/base.styl'

.comment
	font-size 12px
	.comment-title
		padding 18px 18px 0 18px
		border-1px(rgba(7,17,27,0.1))
		.comment-name
			font-weight 700
			font-size 14px
			line-height 14px
			color #07111b
			margin-bottom 4px
		.comment-catalog
			padding-bottom 18px
			margin-top 12px
			border-1px(rgba(7,17,27,0.1))
			.block
				display inline-block
				padding 8px 12px
				border-radius 2px
				color rgb(77,85,93)
				margin-right 8px
				font-size 12px
				&.total-comment
					background-color rgb(0,160,220)
					color white
				&.satisfied
					background-color rgba(0,160,220,0.2)
					&:active
						background-color rgb(0,160,220)
				&.dissatisfied
					background-color rgba(77,85,93,0.2)
					&:active
						background-color rgb(77,85,93)
				.count
					font-size 8px
		.comment-select
			margin-top 12px
			padding-bottom 12px
			color rgb(147,153,159)
			line-height 24px
			.icon-check_circle
				font-size 24px
				line-height 24px
				display inline-block
				vertical-align top
			.has-content
				vertical-align top
</style>