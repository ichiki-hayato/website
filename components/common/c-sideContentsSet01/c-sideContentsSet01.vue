<template lang="pug">
	.c-sideContentsSet01
		.componentWrapper
			.block.is-type01
			.block.is-type02
			.block.is-type03
</template>
<script>
	export default {
		name: 'c-sideContentsSet01',
		data() {
			return {
				// data: [],
			};
		},
		props: {},
		created() {},
		mounted() {},
		computed:{},
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-sideContentsSet01
		position fixed
		top 0
		left 0
		width 20%
		max-width 300px
		min-width 220px
		height 100svh
		background-color #F00
		z-index 9000

		.componentWrapper
			.block
				position absolute
				top 0
				left 0
				width 100%
				height 100%

			.block.is-type01
				background-color #31C0F0

		+MQ_MAX(RES_WID_MEDIUM01)
			display none
</style>