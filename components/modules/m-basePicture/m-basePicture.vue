<template>
	<picture>
		<!-- media属性による画像出し分け START -->
		<template v-if="sources.length">
			<template v-for="source in sources">
			<source
				:key="source.srcset"
				:srcset="require(`~/assets/images/contents/${source.srcset}?webp`)"
				type="image/webp"
				:media="`(max-width: ${source.media})`"
			/>
			<source
				:key="source.srcset"
				:srcset="require(`~/assets/images/contents/${source.srcset}`)"
				:type="source.type"
				:media="`(max-width: ${source.media})`"
			/>
			</template>
		</template>

		<!-- media属性による画像出し分け END -->
		<source
			:srcset="require(`~/assets/images/contents/${src}?webp`)"
			type="image/webp"
		/>
		<img
			:src="require(`~/assets/images/contents/${src}`)"
			:alt="alt"
			:width="width"
			:height="height"
			:decoding="decoding"
			:loading="loading"
		/>
	</picture>
	
</template>
  
<script lang="ts">
	import Vue from 'vue'
	
	type Source = {
		srcset: string
		type: string
		media: string
	}

	export default Vue.extend({
		name: 'm-basePicture',
		props: {
			sources: {
				type: Array as Vue.PropType<Source[]>,
				required: false,
				default() {
				return []
				},
			},
			src: {
				type: String,
				required: true,
			},
			alt: {
				type: String,
				required: false,
				default: '',
			},
			width: {
				type: Number,
				required: false,
			},
			height: {
				type: Number,
				required: false,
			},
			decoding: {
				type: String,
				required: false,
				default: 'auto',
			},
			loading: {
				type: String,
				required: false,
				default: 'auto',
			},
		}
	})
</script>