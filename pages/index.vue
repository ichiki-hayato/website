<template lang="pug">
	.l-container
		.js-sideTypeSet.is-type01
			c-mainvisualSet01
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
		data() {
			return {
				// data: [],
			};
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
</style>