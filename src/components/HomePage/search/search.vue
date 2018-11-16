<template>
	<!--动态组件点击搜索按钮动态更换组件-->
	<div id="search">
		<sinput-com></sinput-com>
		<shistory-com></shistory-com>
		<shot-com></shot-com>
	</div>
</template>

<script>
	import sinput from "./search-input"
	import shistory from "./search-history"
	import shot from "./search-hot"
	export default{
		components:{
			"sinput-com":sinput,
			"shistory-com":shistory,
			"shot-com":shot,
		}
	}
</script>

<style>
	#search{
		padding-top:.2rem;
	}
</style>