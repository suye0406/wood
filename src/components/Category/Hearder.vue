<template>
	<div id="top_box">
			<header class="top">
				<ul>
					<li class="current">沙发</li>
					<li >椅凳</li>
					<li >桌几</li>
					<li >桌几2</li>
					<li >桌几3</li>
					<li >桌几4</li>
					<li >桌几4</li>
					<li >桌几4</li>
					<li >桌几4</li>
					<li >桌几5</li>
					<li >桌几6</li>
					<li >桌几7</li>
					<li >桌几8</li>
					<li >桌几9</li>
					<li >桌几10</li>
				</ul>
			</header>
		</div>
</template>

<script>
</script>

<style scoped lang="scss">
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,figure,figcaption{margin:0;padding:0;}
ul,ol,li{list-style:none;}
		#top_box{			
			height: 0.88rem; background: #ccc;overflow: hidden; 
			.top{
				background: #fff; 
				width: auto;
				height: 0.88rem;overflow: auto ;
				ul{					
					width: auto;
					height: 0.88rem;					
					display:flex;
					overflow: auto;					
					align-items: center;														
					white-space: nowrap;					
					li{					
						text-align: center;	font-size:0.30rem;font-weight:500;color:#999999; padding-left: 0.28rem;padding-right: 0.28rem; 
					}					
					.current{
						color: #000;																				
					}
				}			
			}
			
}

/*隐藏滚轮*/
#top_box .top ul::-webkit-scrollbar {
display: none;
}	
		/*2018-11-12此处遇到一个问题，li不能加宽度，需要加margin或者padding父元素width:auto*/	
</style>