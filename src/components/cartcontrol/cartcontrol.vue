<template>
	<div class="cart">
		<div class="cart-decrease icon-remove_circle_outline" v-show="food.number > 0" @click="decreaseNumber"></div>
		<div class="cart-num" v-show="food.number > 0">{{ food.number }}</div>
		<div class="cart-add icon-add_circle" @click="addNumber"></div>
	</div>
</template>

<script>
import Vue from 'vue'

export default {
	name:'carcontrol',
	props:{
		food:{
			type:Object
		}
	},
	methods:{
		addNumber(){
			if(!this.food.number){
				Vue.set(this.food,'number',1)
			}else{
				this.food.number ++
			}
		},
		decreaseNumber(){
			this.food.number --
		}
	}
}
</script>

<style lang="stylus" scope>
.cart
	font-size 0 
	.cart-decrease,.cart-add
		display inline-block
		vertical-align middle
		font-size 24px
		line-height 24px
		padding 6px
		color rgb(0,160,220)
	.cart-num
		display inline-block
		vertical-align middle
		font-size 10px
		color rgb(147,153,159)
		line-height 24px
		margin 0 6px
</style>