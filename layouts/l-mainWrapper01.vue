<template lang="pug">
	#l-contentsTop
		.l-mainWrapper01
			c-sideContentsSet01
			.layoutWrapper
				//- c-globalHeader01
				nuxt
				c-globalFooter01


</template>
<script>
	export default {
		data() {
			return {
				// data: [],
			};
		},
		props: {},
		created() {},
		mounted() {},
		computed:{},
	};
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"

	#l-contentsTop
		overflow hidden

		.l-mainWrapper01
			display flex
			justify-content flex-end
			.layoutWrapper
				position relative
				width 80%
				min-width calc(100% - 300px)
				max-width calc(100% - 220px)

				+MQ_MAX(RES_WID_MEDIUM01)
					width 100%
					min-width 0
					max-width 100%
</style>