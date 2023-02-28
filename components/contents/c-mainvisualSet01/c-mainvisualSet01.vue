<template lang="pug">
	section.c-mainvisualSet01
		.componentWrapper
			.block.is-logo
				h1.logo
					m-basePicture(src="header_logo01.png", alt="大阪維新の会")
			.block.is-text
				.area.is-text
					p.text
						m-basePicture(src="mainvisual_text_img01.png", alt="3.31 金 告示 大阪府議会議員選挙において「大阪維新の会 公認」が決定しました")
				.area.is-name
					p.name
						m-basePicture(src="mainvisual_name_img01.png", alt="市来 ハヤト")
</template>
<script>
	export default {
		name: 'c-mainvisualSet01',
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
	
	
	.c-mainvisualSet01
		container-type inline-size
		position relative
		// padding-top 62.5%
		width 100%
		height 62.5svw
		max-height 800px
		background-image url("~/assets/images/contents/mainvisual_bg01.png")
		background-size cover
		background-repeat repeat-y
		background-position top left

		+MQ_MAX(RES_WID_SMALL01)
			height 140svw
			max-height 100%

		.componentWrapper
			display flex
			flex-direction column
			justify-content flex-end
			position absolute
			top 0
			left 0
			padding clamp(20px, 3%, 60px) clamp(10px, 2%, 30px)
			width 100%
			height 100%
			box-sizing border-box

			// +MQ_MAX(RES_WID_SMALL01)
			// 	justify-content flex-start

			&:before, &:after
				content ''
				display inline-block
				position absolute
				background-size contain
				background-repeat no-repeat
			
			&:before
				top 3%
				right 32.6%
				width 21.6%
				height 73%
				background-image url("~/assets/images/contents/mainvisual_img02.png")
				background-position center
				mix-blend-mode overlay
				opacity 0.7

				+MQ_MAX(RES_WID_SMALL01)
					right 0
					left 10%
					width 40%
			
			&:after
				right 0
				bottom 0
				width 100%
				height 100%
				background-image url("~/assets/images/contents/mainvisual_img01.png")
				background-position right bottom

				+MQ_MAX(RES_WID_SMALL01)
					top 0
					bottom auto
					width 100%
					height 100%
					background-image url("~/assets/images/contents/mainvisual_img01_sp.png")

			.block
				&.is-logo
					position absolute
					top clamp(20px, 3%, 60px)
					left clamp(10px, 2%, 30px)
					width 21.5%
					min-width 184px
					.logo
						width 100%
						img
							width 100%
				&.is-text
					position relative
					z-index 1

					+MQ_MAX(RES_WID_SMALL01)
						filter: drop-shadow(3px 3px 12px rgba(#000000, 1.0));
					.area
						&.is-text
							.text
								width 38.67%
								max-width 426px

								+MQ_MAX(RES_WID_SMALL01)
									width 70%
						&.is-name
							.name
								width 66%
								max-width 728px
								+MQ_MAX(RES_WID_SMALL01)
									width 100%
						img
							width 100%
</style>