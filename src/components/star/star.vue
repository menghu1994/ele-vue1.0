<template>
	<div class="star" :class="classType">
		<span v-for="item in starClasses" :class="item" class="item-style"></span>
	</div>
</template>

<script>
let ON = "on";
let HALF = "half";
let FULL = "full";

export default {
	name:'star',
	props:{
		score:{
			type:Number	//父组件传进来评星的分数
		},
		size:{
			type:Number //父组件传进来评星的尺寸，24/36/48
		},
	},
	computed:{
		// 通过传进来的
		classType(){
			return 'star-' + this.size
		},
		starClasses(){
			let LENGTH = 5; //数组长度,有几颗星
			let arr = [];  //存储每颗星星的样式
			let ON = 'on';	//全星样式
			let HALF = 'half';	//半星样式
			let OFF = 'off';  //灰星样式
			let score = Math.floor(this.score * 2)/2; //将分数化为0.5的倍数,4.2 = 4;3.6 = 3.5
			let hasDecimal = score % 1 !== 0; //是否存在半星
			let len = Math.floor(score);

			//如评分3.6中有三颗全星,push到数组
			for(let i = 0;i<len;i++){
				arr.push(ON)	
			};

			//如评分3.6中有一颗半星,push到数组
			if(hasDecimal) arr.push(HALF);

			//如果此时数组的长度仍小于5,剩余星星push灰星样式
			while(arr.length < LENGTH){
				arr.push(OFF)
			}

			return arr
		}
	}
}
</script>

<style lang="stylus">
@import "~common/stylus/base.styl"

.star
	font-size 0
	.item-style
		display inline-block
	&.star-24
		.item-style
			width 10px
			height 10px
			margin-right 3px 
			background-size 10px 10px
			&:last-child 
				margin-right 0
			&.on
				bg-img('star24_on')
			&.half
				bg-img('star24_half')
			&.off
				bg-img('star24_off')
	&.star-36
		.item-style
			width 15px
			height 15px
			margin-right 6px
			background-size 15px 15px
			&:last-child 
				margin-right 0
			&.on
				bg-img('star36_on')
			&.half
				bg-img('star36_half')
			&.off
				bg-img('star36_off')
	&.star-48
		.item-style
			width 20px
			height 20px
			margin-right 22px
			background-size 20px 20px
			&:last-child 
				margin-right 0
			&.on
				bg-img('star48_on')
			&.half
				bg-img('star48_half')
			&.off
				bg-img('star48_off')

	
</style>