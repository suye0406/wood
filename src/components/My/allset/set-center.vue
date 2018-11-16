<template>
	<div id="set-center">
		<router-link to="/snitch">
			<div>
				<p>打小报告</p>
				<span class="iconfont">
					&#xe622;
				</span>
			</div>
		</router-link>
		<div>
			<p>消息推送提醒</p>
			<div class="out">
				<div class="in">	
				</div>
			</div>
		</div>
		<router-link to="/snitch">
			<div>
				<p>清除图片缓存</p>
				<span class="iconfont">
					&#xe622;
				</span>
			</div>
		</router-link>
		<router-link to="/snitch">
			<div>
				<p>用户协议</p>
				<span class="iconfont">
					&#xe622;
				</span>
			</div>
		</router-link>
		
	</div>
</template>

<script>
</script>

<style scoped>
	#set-center{
		padding:0 .16rem;
	}
	
	#set-center>a>div,#set-center>div{
		width:100%;
		font-size:.14rem;
		color:#292929;
		display:flex;
		justify-content: space-between;
		margin-bottom:.38rem;
	}
	#set-center>a>div{
		color:#292929;
	}
	#set-center>a>div>span{
		display:block;
		font-size:.12rem;
		color:#C7C7CC;
	}
	#set-center>div>.out{
		width:.38rem;
		height:.23rem;
		border-radius:.4rem;
		background:#C7C7CC;
	}
	#set-center>div>.out>.in{
		width:.22rem;
		height:.22rem;
		border-radius:.11rem;
		background:#EEEEEE;
	}
</style>