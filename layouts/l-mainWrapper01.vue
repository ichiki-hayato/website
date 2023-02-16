<template lang="pug">
	#l-contentsTop
		.l-mainWrapper01
			c-sideContentsSet01
			.layoutWrapper
				c-globalHeader01
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
	#l-contentsTop
		overflow hidden

		.l-mainWrapper01
			display flex
</style>