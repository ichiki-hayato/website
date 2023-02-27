<template lang="pug">
	aside.c-profileSlider01(:class='`${className}`')
		.componentWrapper
			.group.is-contents
				.swiper-wrapper
					.swiper-slide
						p.image
							img(src="https://placehold.jp/280x280.png", alt="")
					.swiper-slide
						p.image
							img(src="https://placehold.jp/280x280.png", alt="")
					.swiper-slide
						p.image
							img(src="https://placehold.jp/280x280.png", alt="")
					.swiper-slide
						p.image
							img(src="https://placehold.jp/280x280.png", alt="")
					.swiper-slide
						p.image
							img(src="https://placehold.jp/280x280.png", alt="")
					.swiper-slide
						p.image
							img(src="https://placehold.jp/280x280.png", alt="")
					.swiper-slide
						p.image
							img(src="https://placehold.jp/280x280.png", alt="")
					.swiper-slide
						p.image
							img(src="https://placehold.jp/280x280.png", alt="")
							

</template>
<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'
	let thumbnailSlider;
	export default {
		name: 'c-profileSlider01',
		data() {
			return {
				// data: [],
			};
		},
		props: {
			reverse: {
				type: Boolean,
				default: false,
			},
			className: {
				type: String,
				default: 'is-top',
			}
		},
		created() {},
		mounted() {
			let target = document.querySelector('.c-profileSlider01.' + this.className + ' .group.is-contents');
			thumbnailSlider = new Swiper(target, {
				slidesPerView: 'auto',
				spaceBetween: 0,
				loop: true,
				speed: 20000,
				allowTouchMove: false,
				centeredSlides : true,
				autoplay: {
					delay: 0,
					reverseDirection: (this.reverse == true) ? true : false,
				},
			})
		},
		computed:{},
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"
	.c-profileSlider01
		overflow hidden
		.componentWrapper
			.group.is-contents
				.swiper-wrapper
					transition-timing-function linear
					.swiper-slide
						width 280px
										


</style>