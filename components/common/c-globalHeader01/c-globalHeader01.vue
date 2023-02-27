<template lang="pug">
	section.c-globalHeader01
		.componentWrapper
			.group.is-logo
				h1.logo
					img(src="/header_logo01.png", alt="大阪維新の会")
			
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
								a(href="#") ホーム
							li
								a(href="#") 政策
							li
								a(href="#") プロフィール
</template>
<script>
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
		display block
		position absolute
		top 0
		left 0
		width 100%
		z-index 9999
		.componentWrapper
			padding 3%
			.group
				&.is-logo
					.logo
						width 21.5%
						img
							width 100%
				&.is-menu
					.block
						&.is-btn
							display inline-block
							position fixed
							top 3vw
							right 3vw
							width 5.5%
							padding-top 5.5%
							height 0
							background linear-gradient(to right, #1F6ECA, #145EB5)
							border-radius 6px
							box-shadow 0 4px 4px rgba(0,0,0,0.25)
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
							display none

</style>