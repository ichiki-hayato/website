<template lang="pug">
	section.c-snsWidgetSet01
		.componentWrapper
			.group.is-youtube
				.block.is-youtube
					.
						<iframe width="560" height="315" src="https://www.youtube.com/embed/A-yrhZGx3lg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

			.group.is-twitter
				.block.is-twitter
					.
						<a class="twitter-timeline" data-width="100%" data-height="359" href="https://twitter.com/hayatoichiki?ref_src=twsrc%5Etfw">Tweets by hayatoichiki</a>
						<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

</template>
<script>
	export default {
		name: 'c-snsWidgetSet01',
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

	.c-snsWidgetSet01
		container-type inline-size
		padding clamp(50px, 6%, 80px) clamp(20px, 3%, 40px)
		.componentWrapper
			display flex
			justify-content space-between
			max-width 1360px
			margin 0 auto

			+MQ_MAX(RES_WID_SMALL01)
				flex-direction column
				justify-content center
				align-items center
				
			.group
				width 48%
				+MQ_MAX(RES_WID_SMALL01)
					width 100%

					&:nth-of-type(n + 2)
						margin-top 6%

				&.is-youtube
					.block.is-youtube
						position relative
						width 100%
						padding-top 56.25%
						border-radius 10px
						overflow hidden
						iframe
							position absolute
							top 0
							right 0
							width 100%
							height 100%
				&.is-twitter
					.block.is-twitter
						position relative
						width 100%
						padding-top 56.25%
						border-radius 10px
						overflow hidden
						+MQ_MAX(RES_WID_SMALL01)
							padding-top 80%
							
						&:after
							content ''
							display inline-block
							position absolute
							top 0
							left 0
							width 100%
							height 100%
							border-radius 10px
							box-sizing border-box
							border 1px solid rgb(207, 217, 222)
							pointer-events none
						.twitter-timeline
							position absolute
							top 0
							right 0
							width 100%
							height 100%
							iframe
								height 100% !important
</style>
