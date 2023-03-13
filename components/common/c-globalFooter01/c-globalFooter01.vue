<template lang="pug">
	.c-globalFooter01
		.componentWrapper
			.group.is-contents
				.block.is-contents
					p.text 市来ハヤト府政対策事務所
					p.text 住所：〒569-0804
						br
						| 大阪府高槻市紺屋町11-1 FKビル2F
					p.btn
						a(href="https://www.google.com/maps?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E9%AB%98%E6%A7%BB%E5%B8%82%E7%B4%BA%E5%B1%8B%E7%94%BA11-1+FK%E3%83%93%E3%83%AB202%E5%8F%B7%E5%AE%A4&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjQ242Nw7z9AhXSSPUHHWk_BXkQ_AUoAXoECAEQAw", target="_blank")
							span Google Map
				
				.block.is-copyright
					p.text ©Copyright 2023 Hayato Ichiki. All Rights Reserved

</template>
<script>
	export default {
		name: 'c-globalFooter01',
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

	.c-globalFooter01
		// background-color #000000
		background-color #1A82AF
		.componentWrapper
			max-width 1000px
			margin 0 auto
			padding 30px 10px
			color #FFF

			.block.is-contents
				fontSize(14)

				.text
					margin-bottom 20px
					&:last-child
						margin-bottom 0
				.btn
					display table
					max-width 240px
					width 100%
					margin-bottom 20px
					color #FFF
					background-color #FFF
					border-radius 100px
					box-sizing border-box
					font-weight bold
					text-align center

					+MQ_MAX(RES_WID_MEDIUM01)
						// max-width 160px
						padding 5px 20px

					+MQ_MAX(RES_WID_SMALL01)
						// max-width 140px
						padding 5px 10px
				
					a
						display block
						padding 15px 40px
						color #000
						border-radius 100px
						text-decoration none
						transition all 0.3s ease
						
						&:hover
							background-color #DFDFDF
					

			.block.is-copyright
				margin-top 20px
				padding-top 20px
				border-top 1px solid #62A7C4
				fontSize(11)
				text-align center
	
</style>
