<template>
	<div class="cart-list-wrap">
		<scroll class="content" ref="scroll">
			<cart-list-item :cartList="cartList"></cart-list-item>
		</scroll>
	</div>
</template>

<script>
	import CartListItem from './CartListItem.vue'
	import Scroll from 'components/common/scroll/Scroll'
	export default {
		name: "CartList",
		computed: {
			cartList() {
				return this.$store.state.cartList;
			}
		},
		components:{
			CartListItem,
			Scroll
		},
		activated() {
			this.$refs.scroll.refresh()
		}
	}
</script>

<style lang="less" scoped="scoped">
	.cart-list-wrap {
		position: relative;
		top: 44px;
		bottom: 89px;
		background-color: #fff;
	}

	.content {
		height: 100vh;
		overflow: hidden;
	}
</style>