<template lang="pug">
	section.c-globalHeader01
		.componentWrapper
			.group.is-menu
				.block.is-btn
					.inner
						span
						span
						span
				.block.is-global
					nav.is-global
						ul
							li
								a(href="/") ホーム
							li
								a(href="/news") 新着情報
</template>
<script>
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	export default {
		name: 'c-globalHeader01',
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

	.c-globalHeader01
		container-type inline-size
		display block
		position fixed
		top 0
		left 0
		width 100%
		z-index 9999
		.componentWrapper
			padding 3%
			.group
				
				&.is-menu
					.block
						&.is-btn
							display inline-block
							position fixed
							top clamp(20px, 3svw, 40px)
							right clamp(20px, 3svw, 40px)
							width clamp(40px, 5.5svw, 60px)
							height clamp(40px, 5.5svw, 60px)
							background linear-gradient(to right, #1F6ECA, #145EB5)
							border-radius 6px
							box-shadow 0 4px 4px rgba(0,0,0,0.25)
							z-index 9999
							.inner
								display flex
								flex-direction column
								justify-content space-between
								position absolute
								top 0
								right 0
								bottom 0
								left 0
								margin auto
								width 37.5%
								height 30%
								span
									width 100%
									height 16.7%
									background-color #fff
						&.is-global
							display block
							position absolute
							top 0
							right 0
							width 300px
							height 100svh
							padding 20px
							background-color #FFF
							box-sizing border-box

							
							nav.is-global
								a
									text-decoration none
								&>ul
									&>li
										margin-bottom 20px
										&>a
											fontSize(16)
										&:last-child
											margin-bottom 0


</style>