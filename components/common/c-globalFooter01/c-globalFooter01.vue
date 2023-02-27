<template lang="pug">
	.c-globalFooter01
		.componentWrapper
			.group.is-contents
				.block.is-contents
					p.text 市来ハヤト府政対策事務所
					p.text 住所：〒569-0804
						br
						| 大阪府高槻市紺屋町11-1 FKビル202号室
					p.btn
						a(href="") 
							span Google Map
					p.text 電話番号：080-4390-0066
				
				.block.is-copyright
					p.text ©Copyright 2023 Hayato Ichiki. All Rights Reserved

</template>
<script>
	export default {
		name: 'c-globalFooter01',
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

	.c-globalFooter01
		background-color #000000
		.componentWrapper
			max-width 1000px
			margin 0 auto
			color #FFF
	
</style>
