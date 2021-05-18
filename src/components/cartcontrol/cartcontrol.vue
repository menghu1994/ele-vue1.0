<template>
	<div class="cart">
		<transition name="cart-decrease">
				<div class="cart-decrease icon-remove_circle_outline" v-show="food.number > 0" @click.stop="decreaseNumber"></div>
		</transition>
		<div class="cart-num" v-show="food.number > 0">{{ food.number }}</div>
		<div class="cart-add icon-add_circle" @click.stop="addNumber"></div>

	</div>
</template>

<script>
import Vue from 'vue'

export default {
	name:'carcontrol',
	props:{
		food:{
			type:[Object,Array]
		}
	},
	methods:{
		addNumber(e){
			if(!this.food.number){
				Vue.set(this.food,'number',1)
				// console.log(e.clientX)
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

.cart-decrease-enter-active, .cart-decrease-leave-active {
  transition all .2s linear
}
.cart-decrease-enter, .cart-decrease-leave-to {
  opacity 0
	transform translateX(24px) rotate(180deg)
}
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