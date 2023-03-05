<template lang="pug">
	section.c-profileSet01
		.componentWrapper
			.group.is-contents
				.inner
					.block.is-name
						h2.name
							m-basePicture(src="section03_name_img01.png", alt="市来 ハヤト")
					//- .block.is-title
					//- 	h3.title
					//- 		span 興味を持ったらすぐに飛び込んできた人生。
					//- 			br
					//- 			| 人との出会いで培ってきた経験を政治の世界でも活かしたい。
					//- .block.is-lead
					//- 	p.text 鹿児島に縁があり、薩摩隼人から「隼」と名をもらう。祖父の影響で、子どもの頃から政治に興味を持つ。小・中・高とサッカー部、大学ではラグビー部に所属。20歳で初めて選挙に関わり、政治のおもしろさに気づく。学生時代はジムインストラクターやバーテンダーとして働く。大学卒業後に渡米し、ハーレーでアメリカ大陸を横断。災害ボランティアをきっかけに予備自衛官の訓練に参加。趣味はラグビー、サーフィン、薪割り、畑仕事など。
					.block.is-frame
						.area.is-text
							p.text 1987年1月11日　大阪府高槻市生まれ。
								br
								| 津之江小学校、川西中学校、府立三島高校（33期生）、関西外国語大学卒業。衆議院議員 松浪ケンタ氏、大阪府議会議員 池下卓氏の議員秘書を務めた後、2019年4月の高槻市議会議員選挙にて8,405票（新人歴代1位）のご信託をいただき初当選。大阪維新の会 高槻市議会議員団では政策担当に就任し、市政改革に取り組む。2021年から大阪維新の会 広報局、北摂マニフェストPTメンバーなどの党務を担い、党勢拡大に取り組む。高槻市・島本町のさらなる発展と大阪の未来づくりのため、2023年2月 大阪維新の会 大阪府政対策委員に就任。
						.area.is-list
							ul.list
								li 一般社団法人 こどもコロナプラットフォーム 発起人
								li 津之江北町夏祭り振興会 会長
								li 津之江北町自主防災班
								li ︎高槻市消防団 磐手分団山手班
								li 大阪拉致議連
								li 予備自衛官補（※2019年退任）
					.block.is-sns
						.area.is-btn
							a(href="https://twitter.com/hayatoichiki" target="_blank").btn.is-twitter
								span Twitter
						.area.is-btn
							a(href="https://www.youtube.com/@oneosaka" target="_blank").btn.is-youtube
								span YouTube
						.area.is-btn
							a(href="https://www.facebook.com/ichikihayato.takatsuki/" target="_blank").btn.is-facebook
								span Facebook
						.area.is-btn
							a(href="https://www.instagram.com/ichikihayato.ishin/" target="_blank").btn.is-instagram
								span Instagram
						.area.is-btn
							a(href="https://line.me/R/ti/p/%40wiv7730u" target="_blank").btn.is-line
								span Line公式アカウント
							

</template>
<script>
	export default {
		name: 'c-profileSet01',
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
	.c-profileSet01
		container-type inline-size
		background linear-gradient(to right, #069CDC, #0074A6)
		.componentWrapper
			display flex
			justify-content center
			background-repeat no-repeat
			background-size contain
			background-position bottom left
			background-image url("~/assets/images/contents/section03_img01.png")

			+MQ_MAX(RES_WID_SMALL01)
				background-position bottom -50svw left
			
			.group.is-contents
				display flex
				justify-content flex-end
				padding clamp(60px, 10%, 130px) clamp(20px, 3%, 30px) clamp(80px, 16%, 170px)
				max-width 1000px
				width 100%

				+MQ_MAX(RES_WID_SMALL01)
					padding-bottom 100svw

				
				.inner
					max-width 730px
					+MQ_MAX(RES_WID_SMALL01)
						max-width 100%
					img
						max-width 100%
					.block
						&.is-name
							margin-bottom 45px
							+MQ_MAX(RES_WID_LARGE01)
								margin-bottom 30px
							
							.name
								max-width 500px
								+MQ_MAX(RES_WID_LARGE01)
									max-width 350px
						&.is-title
							margin-bottom 20px
							.title
								color #fff
								fontSize(25)
								font-weight bold

								+MQ_MAX(RES_WID_LARGE01)
									filter: drop-shadow(1px 1px 10px rgba(#000000, 0.4));
									fontSize(20)
								
								+MQ_MAX(RES_WID_SMALL01)
									fontSize(18)

						&.is-lead
							margin-bottom 25px
							.text
								color #fff
								fontSize(16)
								font-weight bold

								+MQ_MAX(RES_WID_LARGE01)
									filter: drop-shadow(1px 1px 10px rgba(#000000, 0.4));
									fontSize(14)
								
								+MQ_MAX(RES_WID_SMALL01)
									fontSize(13)

						&.is-frame
							margin-bottom 30px
							padding 20px 30px
							background-color #fff
							border-radius 20px
							.area
								&.is-text
									margin-bottom 10px
									.text
										fontSize(14)

										+MQ_MAX(RES_WID_LARGE01)
											fontSize(13)
										
										+MQ_MAX(RES_WID_SMALL01)
											fontSize(12)
								&.is-list
									ul.list
										li
											position relative
											padding-left 15px
											fontSize(14)
											font-weight bold

											+MQ_MAX(RES_WID_LARGE01)
												fontSize(13)
											
											+MQ_MAX(RES_WID_SMALL01)
												fontSize(12)

											&:not(:last-child)
												margin-bottom 5px
											&:before
												content ''
												display inline-block
												position absolute
												top 0.5em
												left 0
												width 6px
												height 6px
												background-color #2DA9DE
												border-radius 50%
						&.is-sns
							display flex
							flex-wrap wrap
							justify-content space-between

							.area.is-btn
								width calc(50% - 5px)

								+MQ_MAX(RES_WID_SMALL01)
									width 100%

								&:nth-child(n+2)
									+MQ_MAX(RES_WID_SMALL01)
										margin-top 10px
								
								&:nth-child(n+3)
									margin-top 10px

								a.btn
									display block
									position relative
									padding 23px 60px
									color #fff
									fontSize(14)
									font-weight bold
									text-decoration none
									background-color #666
									text-align center
									border-radius 100px
									transition all 0.3s

									+MQ_MAX(RES_WID_LARGE01)
										padding 20px 50px
										fontSize(13)
									
									+MQ_MAX(RES_WID_SMALL01)
										padding 18px 40px
										fontSize(12)

									&:hover
										opacity 0.7

									&:before,&:after
										content ''
										display inline-block
										position absolute
										top 0
										bottom 0
										margin auto 0

									&:before
										left 27px
										width 32px
										height 32px
										background-repeat no-repeat
										background-size contain
										background-position center

										+MQ_MAX(RES_WID_LARGE01)
											left 20px
											width 28px
											height 28px
										
										+MQ_MAX(RES_WID_SMALL01)
											left 18px
											width 25px
											height 25px

									&:after
										right 17px
										width 8px
										height 8px
										border solid #fff
										border-width 3px 3px 0 0
										transform-origin center
										transform rotate(45deg)
										box-sizing border-box

										+MQ_MAX(RES_WID_LARGE01)
											width 6px
											height 6px
											border-width 2px 2px 0 0
										
										+MQ_MAX(RES_WID_SMALL01)
											width 5px
											height 5px
											border-width 1px 1px 0 0

									&.is-twitter
										background-color #2698F0
										&:before
											background-image url("~/assets/images/contents/section03_sns_icon01.png")
									
									&.is-youtube
										background-color #FC0303
										&:before
											background-image url("~/assets/images/contents/section03_sns_icon02.png")
									
									&.is-facebook
										background-color #1877F2
										&:before
											background-image url("~/assets/images/contents/section03_sns_icon03.png")
									
									&.is-instagram
										background linear-gradient(45deg, #FFF500, #F90000, #3300FF)
										&:before
											background-image url("~/assets/images/contents/section03_sns_icon04.png")
									
									&.is-line
										background-color #06C755
										&:before
											background-image url("~/assets/images/contents/section03_sns_icon05.png")
										


</style>