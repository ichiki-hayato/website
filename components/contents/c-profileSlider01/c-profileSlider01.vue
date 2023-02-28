<template lang="pug">
	aside.c-profileSlider01(:class='`${className}`')
		.componentWrapper
			.group.is-contents
				.swiper-wrapper
					.swiper-slide(v-for="image in images" :key="image.id")
						p.image
							img(:src="`/images/contents/${image}`")

</template>
<script>
	import Swiper from 'swiper/swiper-bundle.min'
	import 'swiper/swiper-bundle.css'
	
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
			},
			images: [],
		},
		created() {},
		mounted() {
			let thumbnailSlider;
			let target = document.querySelector('.c-profileSlider01.' + this.className + ' .group.is-contents');
			let _t = this;
			setTimeout(function(){
				thumbnailSlider = new Swiper(target, {
					slidesPerView: 'auto',
					spaceBetween: 0,
					loop: true,
					speed: 20000,
					allowTouchMove: false,
					centeredSlides : true,
					autoplay: {
						delay: 0,
						reverseDirection: (_t.reverse == true) ? true : false,
					},
				})
			}, 100)
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

						+MQ_MAX(RES_WID_MEDIUM01)
							width 200px
						
						+MQ_MAX(RES_WID_SMALL01)
							width 140px

						img
							width 100%
										


</style>