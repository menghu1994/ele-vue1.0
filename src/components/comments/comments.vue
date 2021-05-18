<template>
    <div class="comment">
			<div class="comment-title border-1px">
				<h2 class="comment-name">商品评价</h2>
				<div class="comment-catalog border-1px">
					<div class="total-comment">
						<span>全部</span>
						<span>{{}}</span>
					</div>
					<div class="satisfied">
						<span>{{rating.goodComment}}</span>
						<span>{{}}</span>
					</div>
					<div class="dissatisfied">
						<span>{{rating.badComment}}</span>
						<span>{{}}</span>
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
			overflow auto
			// float left
			padding-bottom 18px
			margin-top 12px
			border-1px(rgba(7,17,27,0.1))
			.total-comment
				float left
				padding 8px 12px
				border-radius 2px
				background-color rgb(0,160,220)
				margin-right 8px
				color white
			.satisfied
				float left
				padding 8px 12px
				border-radius 2px
				background-color #ccecf8
				margin-right 8px
				color rgb(77,85,93)
			.dissatisfied
				float left
				padding 8px 12px
				border-radius 2px
				background-color rgba(77,85,93,0.2)
				color rgb(77,85,93)
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