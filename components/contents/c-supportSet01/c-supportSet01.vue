<template lang="pug">
	section.c-supportSet01
		.componentWrapper
			.group.is-contents
				.block.is-slider
					.swiper-wrapper
						.swiper-slide
							.image
								m-basePicture(src="support_image01.png", alt="今自分に出来ることを考えて")
								h3.title
									m-basePicture(src="support_title01.png", alt="行動力")
							h4.subTitle 今自分に出来ることを考えて
								br
								| 速やかに行動へ
							p.text 2011.3.11東日本大震災の発生を受け、支援物資としてトイレットペーパー10,000個を集める「10000ロールプロジェクト」活動をスタート。地元の仲間たちと高槻市内のお宅を一軒一軒をご訪問しトイレットペーパーを集めてまわり、被災地や各自治体の避難所にお届けしました。
								br
								| また、福島県に行った際に、被災地での自衛隊の活躍に感銘を受け、予備自衛官になることを決意。現在も定期的に招集訓練に参加しています。
						.swiper-slide
							.image
								m-basePicture(src="support_image02.png", alt="今自分に出来ることを考えて")
								h3.title
									m-basePicture(src="support_title02.png", alt="地域愛")
							h4.subTitle 神輿と祭で
								br
								| 地域の繋がりを守る
							p.text 毎年8月に、高槻市の「津之江北町」で開催している小さな夏祭りです。四十数年前に祖父が立ち上げて以来、沢山の方に支えていただき、毎年開催しています。
								br
								| 現在は、私が夏祭り振興会の会長を拝命し、若手担ぎ手の育成や町内外問わずお祭りに関われる仕組みづくり等を行なっています。神輿を通じて世代を超えた繋がりが続くようみんなで頑張って担ぎ続けます。
						.swiper-slide
							.image
								m-basePicture(src="support_image03.png", alt="議員秘書・市議会議員として現場で培った力を活かす")
								h3.title
									m-basePicture(src="support_title03.png", alt="実践力")
							h4.subTitle 議員秘書・市議会議員として
								br
								| 現場で培った力を活かす
							p.text 議員は「○○先生」と呼ばれてはいけない。
								br
								| 地元の方があってこその議員であり、「先生」という言葉は有権者の皆さまに当てはまると感じています。実際、池下卓事務所には様々なご相談や陳情事が寄せられており、そこから学びや政策につながることが圧倒的に多いです。現場で学ばせていただいたことを踏まえ、様々な世代が政治に関わるきっかけをもっと作りたいと考えています。
					ul.arrows
						li.is-prev.swiper-button-prev
							img(src="~/assets/images/contents/support_arrow_left.png", alt="prev")
						li.is-next.swiper-button-next
							img(src="~/assets/images/contents/support_arrow_right.png", alt="next")
				.block.is-link
					.area.is-large
						a(href="https://docs.google.com/forms/d/e/1FAIpQLSe1_JA0N3MoKO-t-1ZWIvkdl5lqA4SaBRp-tv-ebnDRNzkm2g/viewform", target="_blank")
							.box.is-text
								h4.title
									m-basePicture(src="support_btn_title01.png", alt="市來ハヤトの応援をお願い致します！")
								p.text 市來ハヤトの活動を、みなさまのご支援でお支えいただけないでしょうか。
									br
									| いただいたご寄付は、印刷費や通信費を中心に有効に使わせていただきます。
								p.btn
									span 応援する
					.area.is-middle
						a(href="https://o-ishin.jp/about/joinus/" target="_blank")
							h4.title 党員登録
							p.text 日本維新の会では、党員として日本維新の会を支えてくださる方を募集いたします。ご賛同いただける方はご登録をお願い致します。
							p.btn
								span 詳しく見る
					.area.is-middle
						a(href="https://o-ishin.jp/about/joinus/" target="_blank")
							h4.title 同志会入会のお願い
							p.text 政治家としてさらに飛躍するため、
								br
								| 高槻市・島本町の皆様からの支えが必要です。
							p.btn
								span 詳しく見る


</template>
<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'
	let thumbnailSlider;
	export default {
		name: 'c-supportSet01',
		data() {
			return {
				// data: [],
			};
		},
		props: {},
		created() {},
		mounted() {
			let target = document.querySelector('.c-supportSet01 .block.is-slider');
			thumbnailSlider = new Swiper(target, {
				slidesPerView: 'auto',
				spaceBetween: 3 + '%',
				loop: false,
				// centeredSlides : true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			})
		},
		computed:{},
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	section.c-supportSet01
		padding clamp(60px, 10%, 120px) clamp(10px, 3%, 20px)
		.componentWrapper
			max-width 1000px
			margin 0 auto
			.group.is-contents
				.block.is-slider
					position relative
					margin-bottom 60px
					.arrows
						position absolute
						top 145px
						left 0
						width 100%
						+MQ_MAX(RES_WID_MEDIUM01)
							top 25%
						+MQ_MAX(RES_WID_SMALL01)
							top 30%
						li
							width 110px
							height 110px
							+MQ_MAX(RES_WID_MEDIUM01)
								width 60px
								height 60px
							+MQ_MAX(RES_WID_SMALL01)
								width 14svw
								height 14svw
							img
								width 100%
							&::after
								content none
							&:nth-of-type(1)
								transform translate3d(calc(-100% - 30px), 0, 0)
								+MQ_MAX(1590px)
									transform translate3d(0, 0, 0)

							&:nth-of-type(2)
								transform translate3d(calc(100% + 30px), 0, 0)
								+MQ_MAX(1590px)
									transform translate3d(0, 0, 0)

					.swiper-wrapper
						.swiper-slide
							width 400px
							+MQ_MAX(RES_WID_MEDIUM01)
								width 40%
							+MQ_MAX(RES_WID_SMALL01)
								width 90%
							.image
								position relative
								width 100%
								margin-bottom 20px
								
								+MQ_MAX(RES_WID_MEDIUM01)
									margin-bottom 15px
								
								+MQ_MAX(RES_WID_SMALL01)
									margin-bottom 10px
								
								img
									width 100%
							.title
								position absolute
								bottom 0
								left 0
								width 50%
								img
									width 100%
							.subTitle
								margin-bottom 15px
								fontSize(18)
								font-weight bold
								+MQ_MAX(RES_WID_MEDIUM01)
									margin-bottom 13px
									fontSize(16)
								+MQ_MAX(RES_WID_SMALL01)
									margin-bottom 10px
									fontSize(15)
									

							.text
								fontSize(16)
								+MQ_MAX(RES_WID_MEDIUM01)
									fontSize(14)
								+MQ_MAX(RES_WID_SMALL01)
									fontSize(13)
				.block.is-link
					display flex
					flex-wrap wrap
					justify-content space-between
					row-gap 40px

					+MQ_MAX(RES_WID_MEDIUM01)
						row-gap 20px

					.area
						border-radius 20px
						box-sizing border-box

						.box.is-text
							position relative
							width 55%
							z-index 100

						a
							display block
							padding 40px
							color #FFF
							text-decoration none

							+MQ_MAX(RES_WID_SMALL01)
								padding 25px

							.title
								margin-bottom 20px
								fontSize(24)
								font-weight bold
								+MQ_MAX(RES_WID_MEDIUM01)
									margin-bottom 15px
									fontSize(20)
								+MQ_MAX(RES_WID_SMALL01)
									margin-bottom 10px
									fontSize(18)
								img
									width 100%
							.text
								margin-bottom 15px
								fontSize(16)
								+MQ_MAX(RES_WID_MEDIUM01)
									margin-bottom 13px
									fontSize(14)
								+MQ_MAX(RES_WID_SMALL01)
									margin-bottom 10px
									fontSize(13)
							
							.btn
								display table
								max-width 200px
								width 100%
								padding 15px 40px
								color #FFF
								background-color #000
								border-radius 100px
								box-sizing border-box
								font-weight bold
								text-align center

								+MQ_MAX(RES_WID_MEDIUM01)
									max-width 160px
									padding 15px 30px

								+MQ_MAX(RES_WID_SMALL01)
									max-width 140px
									padding 15px 20px


					.area.is-large
						width 100%
						background linear-gradient(to right, #FFA800, #FF4D00)

						a
							display flex
							flex-direction column
							align-items flex-end
							position relative

							&::before
								content ""
								display block
								position absolute
								top 0
								left 0
								width 48%
								height 100%
								background-image url("~/assets/images/contents/support_btn_bg01.png")
								background-repeat no-repeat
								background-size cover
								background-position left top

								+MQ_MAX(RES_WID_SMALL01)
									width 55%

						.title
							width 60%
							+MQ_MAX(RES_WID_SMALL01)
								width 90%

						.btn
							fontSize(17)
							+MQ_MAX(RES_WID_MEDIUM01)
								fontSize(15)
							+MQ_MAX(RES_WID_SMALL01)
								fontSize(14)

					.area.is-middle
						width 48%
						background linear-gradient(to right, #1FA1CA, #044DA4)

						+MQ_MAX(RES_WID_MEDIUM01)
							width 100%
							
						+MQ_MAX(RES_WID_SMALL01)
							width 100%

						.title
							text-align center
							+MQ_MAX(RES_WID_SMALL01)
								text-align left
						.text
							text-align center
							+MQ_MAX(RES_WID_SMALL01)
								text-align left
						
						.btn
							margin 0 auto
							fontSize(13)
							+MQ_MAX(RES_WID_MEDIUM01)
								fontSize(12)
							+MQ_MAX(RES_WID_SMALL01)
								margin 0
								fontSize(11)

</style>