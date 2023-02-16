<template lang="pug">
	.l-container
		c-mainvisualSet01
		c-snsWidgetSet01
		c-ManifestSet01
		c-profileSet01
		c-supportSet01
		c-accessSet01

</template>
<script>
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
		mounted() {},
		computed:{},
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_config"
	@import "~/assets/stylus/_s_mixin"
</style>