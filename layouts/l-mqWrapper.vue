<template lang="pug">
	.l-mqWrapper
		nuxt


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
	.l-mqWrapper
		+MQ_MIN_MAX(RES_WID_SMALL01,CONTENTS_WID_MEDIUM01)
			padding 0 10px
		+MQ_MAX(RES_WID_SMALL01)
			padding 0 vwsp(10)
</style>