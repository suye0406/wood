<template>
	<div id="history">
		<div class="history-t">
			<p>历史搜索</p>
			<p>清除</p>
		</div>
		<div class="history-b">
			<p class="history-content">
				沙发
			</p>
			<p class="history-content">
				沙发
			</p>
			<p class="history-content">
				沙发
			</p>
			<p class="history-content">
				沙发
			</p>
			
			<p class="history-content">
				沙发
			</p>
			<p class="history-content">
				沙发
			</p>
			
		</div>	
		
	</div>
	
</template>

<script>
</script>

<style scoped>
	#history{	
		margin-top:.34rem;
		padding:0 .17rem;
	}
	#history>.history-t{
		
		margin-bottom:.1rem;
		width:100%;
		height:.2rem;
		display:flex;
		justify-content: space-between;
	}
	#history>.history-t>p:nth-child(1){
		font-weight: 900;
		font-size:.14rem;
		color:#333333;
		line-height:.2rem;
	}
	#history>.history-t>p:nth-child(2){
		font-size:.12rem;
		color:#999999;
		line-height:.2rem;
	}
	.history-b{		
		display:flex;
		flex-wrap:wrap;	
	}
	.history-b .history-content{
		border-radius:.04rem;
		background:#F3F3F3;
		margin-right:.14rem;
		margin-top:.1rem;
		font-size:.12rem;
		color:#333;
		padding:.07rem .09rem;
	}
	
</style>