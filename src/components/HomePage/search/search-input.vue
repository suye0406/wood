<template>
	<div id="s-input">
		<div class="search-in">
			<span class="iconfont">
				&#xe628;
			</span>
			<input type="text" name="" id="" value="" />
			
		</div>
		<p>取消</p>
	</div>
</template>

<script>
</script>

<style scoped>
	#s-input{
		
		display:flex;
		justify-content:space-between;
		width:100%;
		height:.3rem;
		margin-top:.08rem;
		padding:0 .16rem;
	}
	#s-input>.search-in{
		text-align:center;
		border-radius:.04rem;
		border:1px solid #F3F3F3;
		background:#F3F3F3;	
		width:3rem;
		height:.3rem;
		
	}
	#s-input>.search-in>input{
		background:#F3F3F3;	
		width:2.6rem;
		height:.3rem;
		border:none;
	}
	#s-input>span{
		
		font-size:.15rem;
		display:block;
		width:.4rem;
		height:.3rem;
		font-size:.15rem;
	}
	#s-input>p{
		font-size:.14rem;
		color:#999999;
		
		line-height:.3rem;
	}
</style>