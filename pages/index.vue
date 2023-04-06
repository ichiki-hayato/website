<template lang="pug">
	.l-container
		.c-supportBanner
			.componentWrapper
				.block.is-btn
					a(href="https://docs.google.com/forms/d/e/1FAIpQLSe1_JA0N3MoKO-t-1ZWIvkdl5lqA4SaBRp-tv-ebnDRNzkm2g/viewform", target="_blank")
						m-basePicture(src="support_banner_btn01.png", alt="市来ハヤトを！応援する")
						 
		.js-sideTypeSet.is-type01
			c-mainvisualSet01(:news = 'news')
		.js-sideTypeSet.is-type02
			c-snsWidgetSet01
			c-ManifestSet01
		.js-sideTypeSet.is-type03
			c-profileSlider01(:images = ["profileSlider01_thumbnail01.png", "profileSlider01_thumbnail02.png", "profileSlider01_thumbnail03.png", "profileSlider01_thumbnail04.png", "profileSlider01_thumbnail05.png", "profileSlider01_thumbnail06.png", "profileSlider01_thumbnail07.png"])
			c-profileSet01
			c-supportSet01
			c-profileSlider01(:images = ["profileSlider02_thumbnail01.png", "profileSlider02_thumbnail02.png", "profileSlider02_thumbnail03.png", "profileSlider02_thumbnail04.png", "profileSlider02_thumbnail05.png", "profileSlider02_thumbnail06.png", "profileSlider02_thumbnail07.png"] :reverse = 'true' className = 'is-bottom')

</template>
<script>

	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	export default {
		name: 'IndexPage',
		layout: "l-mainWrapper01",
		head: {
			title: '市来ハヤト公式サイト - 維新の会・大阪府・高槻市を前へ',
			meta: [
				{ hid: 'description', name: 'description', content: 'ニュース | 大阪維新の会  市来ハヤトの公式サイトです。大阪府と高槻市・島本町の未来づくりに挑戦します。' }
			]
		},
		data() {
			return {
				news: [],
			};
		},
		async asyncData({ $microcms, params }) {
			try {
				const data = await $microcms.get({
					endpoint: `news`,
					queries: { limit: 1},

				});
				return {
					news: data.contents
				}
			}
			catch (err) {
			}
		},
		props: {},
		created() {},
		mounted() {

			inView({
				className: '.js-sideTypeSet',
				reverse: true,
				ajust: 0.001,
				afterChange: function(el){
					if(el.tg.classList.contains('is-inview')) {
						if(el.tg.classList.contains('is-type01')) {
							document.querySelector('.c-sideContentsSet01').classList.add('is-type01');
						} else {
							document.querySelector('.c-sideContentsSet01').classList.remove('is-type01');
						}

						if(el.tg.classList.contains('is-type02')) {
							document.querySelector('.c-sideContentsSet01').classList.add('is-type02');
						} else {
							document.querySelector('.c-sideContentsSet01').classList.remove('is-type02');
						}

						if(el.tg.classList.contains('is-type03')) {
							document.querySelector('.c-sideContentsSet01').classList.add('is-type03');
						} else {
							document.querySelector('.c-sideContentsSet01').classList.remove('is-type03');
						}
					}
				},
			});
		},
		computed:{},
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	.c-supportBanner
		position fixed
		right 10px
		bottom 10px
		z-index 9000

		+MQ_MAX(RES_WID_SMALL01)
			width 55%
			
		a
			display block
			transition opacity 0.3s ease
			will-change opacity
			+MQ_MAX(RES_WID_SMALL01)
				picture, img
					display block
					width 100%
			&:hover
				opacity 0.7
</style>