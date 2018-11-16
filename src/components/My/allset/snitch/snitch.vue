<template>
	<div id="snitch">
		<snih-com></snih-com>
		<snic-com></snic-com>
		<snif-com></snif-com>
	</div>
	
</template>

<script>
	import snitchh from "./snitch-head"
	import snitchc from "./snitch-center"
	import snitchf from "./snitch-footer"
	export default{
		components:{
			"snih-com":snitchh,
			"snic-com":snitchc,
			"snif-com":snitchf,
			
		}
		
	}
</script>

<style scoped>
	#snitch{
		padding-top:.2rem;
	}
</style>