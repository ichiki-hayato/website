<template lang="pug">
	.c-sideContentsSet01
		.componentWrapper
			.block.is-type01
				.area.is-top
					p.title
						m-basePicture(src="sidebar01_top_img01.png", alt="応援私たちも全力でします！")
				.area.is-bottom
					p.top
						m-basePicture(src="sidebar01_bottom_name01.png", alt="吉村洋文")
					p.bottom
						m-basePicture(src="sidebar01_bottom_img01.png", alt="松浪健太 池下卓 松井一郎")

			.block.is-type02
				.area.is-top
					p.title
						m-basePicture(src="sidebar02_top_img01.png", alt="維新は大阪を前へ 挑戦をやめない")
				.area.is-bottom
					.text
						m-basePicture(src="sidebar02_bottom_img01.png", alt="維新だからできる 教育無償都市の実現へ")
				.area.is-bg
			
			.block.is-type03
				.area.is-text
					p.title
						m-basePicture(src="sidebar03_text01.png", alt="府政対策委員 市来ハヤト")
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
		background-color #FFF
		z-index 9000

		&.is-type01
			.componentWrapper
				.block.is-type01
					opacity 1.0
		&.is-type02
			.componentWrapper
				.block.is-type02
					opacity 1.0
		&.is-type03
			.componentWrapper
				.block.is-type03
					opacity 1.0

		.componentWrapper
			height 100%
			.block
				position absolute
				top 0
				left 0
				width 100%
				height 100%
				opacity 0
				transition opacity 0.3s ease
				will-change opacity

				&.is-type01
					display flex
					flex-direction column
					justify-content space-between
					padding 10px
					box-sizing border-box
					@media screen and (max-height: 750px) {
						padding 5px
					}
					
					background-color #31C0F0
					&::before, &::after
						content ""
						position absolute
						bottom 0
						left 0
						width 100%
						height 100%
						background-repeat no-repeat

					&::before
						background-image url("~/assets/images/contents/sidebar01_bg01.png")
						background-position bottom right
						background-size contain
					&::after
						background-image url("~/assets/images/contents/sidebar01_back_img01.png")
						background-position bottom right
						background-size 100%
						@media screen and (max-height: 750px) {
							background-position bottom 50% right
						}
						@media screen and (min-height: 1000px) {
							background-size cover
							@media screen and (max-width: 1300px) {
								background-position bottom right 20%
							}
						}
					
					.area
						position relative
						z-index 1000

						&.is-top
							.title
								width 100%
								margin 0 auto
								@media screen and (max-height: 750px) {
									width 60%
								}
								img
									width 100%
									height auto
						
						&.is-bottom
							display flex
							flex-direction column
							align-items flex-end
							gap 10px
							.top
								width 30%
								@media screen and (max-height: 750px) {
									width 20%
								}
								img
									width 100%
									height auto

							.bottom
								width 100%
								margin 0 auto
								img
									width 100%
									height auto


				&.is-type02
					display flex
					flex-direction column
					justify-content space-between
					position relative
					background-color #169348
					height 100%
					padding 10px
					box-sizing border-box
					background-image url("~/assets/images/contents/sidebar02_bg01.png")
					background-repeat no-repeat
					background-size contain
					background-position top left
					@media screen and (max-height: 700px) {
						padding 5px
					}

					.area
						position relative
						z-index 1000
						&.is-top
							position relative
							z-index 1000
							.title
								width 100%
								margin 0 auto
								@media screen and (max-height: 800px) {
									width 80%
								}
								
								img
									width 100%
									height auto
						&.is-bottom
							position relative
							z-index 100
							
							.text
								width 100%
								@media screen and (max-height: 800px) {
									width 70%
								}

								
								img
									width 100%
									height auto
						&.is-bg
							position absolute
							top 0
							left 0
							width 100%
							height 100%
							z-index 0
							&::before, &::after
								content ""
								position absolute
								bottom 0
								left 0
								width 100%
								height 100%
								background-repeat no-repeat

							&::before
								background-image url("~/assets/images/contents/sidebar02_bg02.png")
								background-position bottom left
								background-size contain
								@media screen and (max-height: 800px) {
									background-size 70%
								}
								@media screen and (min-height: 1000px) {
									background-position bottom 100px left
									background-size cover
								}
							&::after
								background-image url("~/assets/images/contents/sidebar02_bg03.png")
								background-position bottom right
								background-size contain
								@media screen and (max-height: 800px) {
									background-size 70%
								}
								@media screen and (min-height: 1000px) {
									background-size cover
								}

						
				&.is-type03
					display flex
					flex-direction column
					justify-content flex-end
					padding 10px
					background-color #005BAC
					box-sizing border-box
					@media screen and (max-height: 700px) {
						padding 5px
					}

					&::before
						content ""
						position absolute
						bottom 0
						left 0
						z-index 0
						width 100%
						height 100%
						background-image url("~/assets/images/contents/sidebar03_img01.png")
						background-repeat no-repeat
						background-position bottom right
						background-size contain

						@media screen and (max-height: 800px) {
							background-size 100%
							background-position top right
						}

						@media screen and (min-height: 1000px) {
							background-size cover
						}

					.area.is-text
						position relative
						z-index 1000
						p.title
							width 50%
							@media screen and (max-height: 800px) {
								width 30%
							}
							
							img
								width 100%

		+MQ_MAX(RES_WID_MEDIUM01)
			display none
</style>