<template lang="pug">
	section.c-sideContentsSet01
		p c-sideContentsSet01
</template>
<script>
	export default {
		name: 'c-sideContentsSet01',
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

	.c-sideContentsSet01
		position fixed
		top 0
		left 0
		width 20%
		max-width 300px
		min-width 220px
		height 100svh
		background-color #F00
		z-index 9000
</style>