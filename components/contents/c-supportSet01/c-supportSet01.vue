<template lang="pug">
	section.c-supportSet01
		.componentWrapper
			.group.is-contents
				.block.is-slider
					.swiper-wrapper
						.swiper-slide
							.image
								img(src="https://placehold.jp/400x400.png", alt="")
								h3.title
									img(src="https://placehold.jp/230x100.png", alt="")
							h4.subTitle 今自分に出来ることを考えて
								br
								| 速やかに行動へ
							p.text 2011.3.11東日本大震災の発生を受け、支援物資としてトイレットペーパー10,000個を集める「10000ロールプロジェクト」活動をスタート。地元の仲間たちと高槻市内のお宅を一軒一軒をご訪問しトイレットペーパーを集めてまわり、被災地や各自治体の避難所にお届けしました。
								br
								| また、福島県に行った際に、被災地での自衛隊の活躍に感銘を受け、予備自衛官になることを決意。現在も定期的に招集訓練に参加しています。
						.swiper-slide
							.image
								img(src="https://placehold.jp/400x400.png", alt="")
								h3.title
									img(src="https://placehold.jp/230x100.png", alt="")
							h4.subTitle 神輿と祭で
								br
								| 地域の繋がりを守る
							p.text 毎年8月に、高槻市の「津之江北町」で開催している小さな夏祭りです。四十数年前に祖父が立ち上げて以来、沢山の方に支えていただき、毎年開催しています。
								br
								| 現在は、私が夏祭り振興会の会長を拝命し、若手担ぎ手の育成や町内外問わずお祭りに関われる仕組みづくり等を行なっています。神輿を通じて世代を超えた繋がりが続くようみんなで頑張って担ぎ続けます。
						.swiper-slide
							.image
								img(src="https://placehold.jp/400x400.png", alt="")
								h3.title
									img(src="https://placehold.jp/230x100.png", alt="")
							h4.subTitle 議員秘書・市議会議員として
								br
								| 現場で培った力を活かす
							p.text 議員は「○○先生」と呼ばれてはいけない。
								br
								| 地元の方があってこその議員であり、「先生」という言葉は有権者の皆さまに当てはまると感じています。実際、池下卓事務所には様々なご相談や陳情事が寄せられており、そこから学びや政策につながることが圧倒的に多いです。現場で学ばせていただいたことを踏まえ、様々な世代が政治に関わるきっかけをもっと作りたいと考えています。
				
				.block.is-link
					.area.is-large
						a(href="#")
							.box.is-text
								p.text 市來ハヤトの活動を、みなさまのご支援でお支えいただけないでしょうか。
									br
									| いただいたご寄付は、印刷費や通信費を中心に有効に使わせていただきます。
								p.btn
									span 応援する
					.area.is-middle
						a(href="#")
							p.text テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
							p.btn
								span 詳しく見る
					.area.is-middle
						a(href="#")
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
			})
		},
		computed:{},
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	section.c-supportSet01
		padding 120px 0
		.componentWrapper
			max-width 1000px
			margin 0 auto
			.group.is-contents
				.block.is-slider
					margin-bottom 60px
					.swiper-wrapper
						.swiper-slide
							width 400px
				.block.is-link
					display flex
					flex-wrap wrap
					justify-content space-between
					row-gap 20px

					.area
						padding 20px
						border-radius 20px
						box-sizing border-box

					.area.is-large
						width 100%
						background-color #DFDFDF

					.area.is-middle
						width 49%
						background-color #EFEFEF

</style>