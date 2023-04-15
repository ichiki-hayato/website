<template lang="pug">
	.l-container
		.js-sideTypeSet.is-type01
			section.c-backnumberSet01
				.componentWrapper
					.block.is-title
						h1.title
							span 活動報告チラシバックナンバー
					.block.is-backnumber
						dl
							.area.is-backnumber(v-for="(list, index) of backnumber")
								a(:href="list.pdf" target="_blank") 
									dt.date {{list.date}}
									dd.text
										p.image
											img(:src="list.thumbnail.url", :alt="list.title")
										p.title {{list.title}}
					
					.block.is-btn
						p.btn
							nuxt-link(:to="'/'")
								span トップページへ

					
						 

</template>
<script>
	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import timezone from 'dayjs/plugin/timezone';
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	export default {
		name: 'BacknumberPage',
		layout: "l-mainWrapper01",
		head: {
			title: '活動報告チラシバックナンバー | 市来ハヤト 公式サイト ー大阪維新の会ー',
			meta: [
				{ hid: 'description', name: 'description', content: '市来ハヤト公式サイトは、維新の会・大阪府議会議員として、大阪・高槻の課題解決に取り組む市来ハヤトの活動を報告します。教育無償化都市の実現を中心とした改革を維新の実行力で実現します。活動報告などを掲載し、進捗状況などをお伝えします。是非、ご覧ください。 ' }
			]
		},
		data() {
			return {
				backnumber: [],
			};
		},
		async asyncData({ $microcms, params }) {
			try {
				const data = await $microcms.get({
					endpoint: `backnumber`,
					// queries: { limit: 1},
				});
				return {
					backnumber: data.contents
					
				}
			}
			catch (err) {
			}
		},
		props: {},
		created() {},
		beforeMount() {
		},
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

	.c-backnumberSet01
		container-type inline-size
		padding clamp(40px, 8%, 80px) clamp(20px, 3%, 40px)
		min-height calc(100svh - 250px)

		.block.is-title
			margin-bottom clamp(20px, 6%, 60px)
			h1.title
				fontSize(30)
				font-weight bold	
			
		.block.is-backnumber
			margin-bottom clamp(20px, 6%, 60px)
			dl
				display flex
				flex-wrap wrap
				justify-content space-between
				gap 20px

			.area.is-backnumber
				width calc(50% - 10px)

				+MQ_MAX(RES_WID_SMALL01)
					width 100%

				&:last-child
					margin-bottom 0
					padding-bottom 0
					border-bottom none
		a
			color inherit
			text-decoration none
			transition all 0.3s ease

			&:hover
				opacity 0.7

		.date
			margin-bottom 15px
			color #169348
			font-weight bold

			fontSize(14)
			+MQ_MAX(RES_WID_MEDIUM01)
				fontSize(13)
			+MQ_MAX(RES_WID_SMALL01)
				fontSize(12)
		
		.text
			fontSize(16)
			+MQ_MAX(RES_WID_MEDIUM01)
				fontSize(15)
			+MQ_MAX(RES_WID_SMALL01)
				fontSize(14)
		
		.image
			width 100%
			img
				width 100%
				height auto
		
		.title
			margin-top 10px
			fontSize(16)
			+MQ_MAX(RES_WID_MEDIUM01)
				fontSize(14)
			+MQ_MAX(RES_WID_SMALL01)
				fontSize(13)
		
		.btn
			display table
			max-width 200px
			width 100%
			
			color #FFF
			background-color #000
			box-shadow 0 0 20px rgba(#000, 0.3)
			border-radius 100px
			box-sizing border-box
			font-weight bold
			text-align center
			fontSize(17)

			a
				display block
				padding 15px 40px
				border-radius 100px
				transition all 0.3s ease
				
				&:hover
					color #000
					background-color #FFF

			+MQ_MAX(RES_WID_MEDIUM01)
				max-width 160px
				a
					padding 15px 30px
					fontSize(15)

			+MQ_MAX(RES_WID_SMALL01)
				max-width 140px
				a
					padding 15px 20px
					fontSize(14)

</style>