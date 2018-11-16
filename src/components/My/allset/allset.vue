<template>
	<div id="set">
		<seth-com></seth-com>
		<setc-com></setc-com>
		<setf-com></setf-com>
	</div>
</template>

<script>
	import seth from "./set-head"
	import setc from "./set-center"
	import setf from "./set-footer"
	export default{
		components:{
			"seth-com":seth,
			"setc-com":setc,
			"setf-com":setf,
		}
	}
</script>

<style scoped>
	#set{
		padding-top:.2rem;
	}
</style>