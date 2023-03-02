<template lang="pug">
	.l-container
		.js-sideTypeSet.is-type01
			section.c-newsDetailSet01.is-fadeInAnimation
				.componentWrapper
					.l-contentsWrapper
						.l-mqWrapper
							.l-contentsWrapper.is-middle
								.block.is-title
									p.date {{list.publishedAtJp}}
									h2.title(v-html="list.title")
								.block.is-contents(v-html="list.body")
								
								.block.is-btn
									p.btn
										nuxt-link(:to="'/news/'")
											span 戻る
					
						 

</template>
<script>
	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import timezone from 'dayjs/plugin/timezone';
	import inView from '~/assets/javascript/_j_inView/_j_inView.js'
	export default {
		name: 'NewsPage',
		layout: "l-mainWrapper01",
		head: {
			title: '新着情報 | 市来ハヤト公式サイト - 維新の会・大阪府・高槻市を前へ',
			meta: [
				{ hid: 'description', name: 'description', content: '市来ハヤト公式サイトは、維新の会・大阪府議会議員として、大阪・高槻の課題解決に取り組む市来ハヤトの活動を報告します。教育無償化都市の実現を中心とした改革を維新の実行力で実現します。活動報告などを掲載し、進捗状況などをお伝えします。是非、ご覧ください。 ' }
			]
		},
		data() {
			return {
				list: [],
			};
		},
		async asyncData({ $microcms, params }) {
			try {
				const data = await $microcms.get({
					endpoint: `news/${params.slug}`,
				});
				return {
					list: data
				}
			} catch (err) {
			}
		},
		props: {},
		created() {},
		beforeMount() {
			console.log(this.list)
			dayjs.extend(utc);
			dayjs.extend(timezone);

			var publishedAtJp = {
				'publishedAtJp': ''
			};

			publishedAtJp['publishedAtJp'] = dayjs.utc(this.list['publishedAt']).tz('Asia/Tokyo').format('YYYY-MM-DD');
			publishedAtJp['publishedAtJp'] = publishedAtJp['publishedAtJp'].replace(/-/g, '.');
			Object.assign(this.list, publishedAtJp);
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

	.c-newsDetailSet01
		&>.componentWrapper
			padding clamp(40px, 8%, 80px) clamp(20px, 3%, 40px)

			.block.is-title
				.date
					margin-bottom 2%
					font-size clamp(1.2rem, 2cqw, 2.0rem)
				.title
					font-size clamp(1.6rem, 3cqw, 2.8rem)
					font-weight bold
			
			.block.is-contents
				margin-top 3%
				overflow-wrap break-word

				h1, h2, h3, h4, h5
					font-weight bold
				h1
					margin-top 2.0%
					font-size clamp(1.6rem, 3cqw, 2.8rem)
				h2
					margin-top 1.8%
					font-size clamp(1.5rem, 2.5cqw, 2.4rem)
				h3
					margin-top 1.6%
					font-size clamp(1.4rem, 2.0cqw, 2.0rem)
				h4
					margin-top 1.4%
					font-size clamp(1.3rem, 1.8cqw, 1.8rem)
				h5
					margin-top 1%
					font-size clamp(1.2rem, 1.6cqw, 1.6rem)
				p
					margin-top 1%
					font-size clamp(1.2rem, 1.6cqw, 1.6rem)
				
				*:first-child
					margin-top 0
			
			.block.is-btn
				margin-top 6%
				a
					color inherit
					text-decoration none
					transition all 0.3s ease

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