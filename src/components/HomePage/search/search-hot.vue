<template>
	<div id="shot">
		<div class="shot-t">
			<p>热门搜索</p>
		</div>
		<div class="shot-b">
			<p class="shot-content">
				家具
			</p>
		</div>	
		
	</div>
</template>

<script>
</script>

<style scoped>
	#shot{
		margin-top:.48rem;
		padding:0 .17rem;
	}
	#shot>.shot-t{
		
		margin-bottom:.1rem;
		width:100%;
		height:.2rem;
		display:flex;
		justify-content: space-between;
	}
	#shot>.shot-t>p:nth-child(1){
		font-weight: 900;
		font-size:.14rem;
		color:#333333;
		line-height:.2rem;
	}
	.shot-b{		
		display:flex;
		flex-wrap:wrap;	
	}
	.shot-b .shot-content{
		border-radius:.04rem;
		background:#F3F3F3;
		margin-right:.14rem;
		margin-top:.1rem;
		font-size:.12rem;
		color:#333;
		padding:.07rem .09rem;
	}
</style>