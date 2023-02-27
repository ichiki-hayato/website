<template lang="pug">
	section.c-mainvisualSet01
		.componentWrapper
			.block.is-text
				.area.is-text
					p.text
						img(src="/mainvisual_text_img01.png", alt="3.31 金 告示 大阪府議会議員選挙において「大阪維新の会 公認」が決定しました")
				.area.is-name
					p.name
						img(src="/mainvisual_name_img01.png", alt="市来 ハヤト")
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
		position relative
		padding-top 62.5%
		width 100%
		height 0
		background-image url("/mainvisual_bg01.png")
		background-size cover
		background-repeat repeat-y
		background-position top left
		.componentWrapper
			display flex
			flex-direction column
			justify-content flex-end
			position absolute
			top 0
			left 0
			padding 8% 3% 8%
			width 100%
			height 100%
			box-sizing border-box
			&:before,&:after
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
				background-image url("/mainvisual_img02.png")
				background-position center
				mix-blend-mode overlay
				opacity 0.7
			&:after
				right 0
				bottom 0
				width 100%
				height 100%
				background-image url("/mainvisual_img01.png")
				background-position right bottom

			.block
				&.is-text
					position relative
					z-index 1
					.area
						&.is-text
							.text
								width 38.67%
						&.is-name
							.name
								width 66%
						img
							width 100%
</style>