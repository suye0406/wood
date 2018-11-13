<template>
	<div class="c_box_list">	
		<div class="c_list">
			<div id="banner">
				<img class="box_img" src="../../../static/img/banner/沙发.jpeg" />
				<p class="c_title" >桌几 TABLE</p>
			</div>
			<div class="c_box" v-for="(item,index) in list">	
				<img :src="item.imgurl"/>
				<span>{{item.title}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[
				{imgurl:"../../../static/img/产品图/沙发/三人沙发/大先生转角沙发.png",title:"23424234三人沙发"},
				{imgurl:"../../../static/img/产品图/沙发/三人沙发/大先生转角沙发.png",title:"三人沙发"},
				{imgurl:"../../../static/img/产品图/沙发/三人沙发/大先生转角沙发.png",title:"三人沙发"},
				{imgurl:"../../../static/img/产品图/沙发/三人沙发/大先生转角沙发.png",title:"三人沙发三人沙发三人沙发三人沙发"},
				{imgurl:"../../../static/img/产品图/沙发/三人沙发/大先生转角沙发.png",title:"三人沙发"},
				{imgurl:"../../../static/img/产品图/沙发/三人沙发/大先生转角沙发.png",title:"三人沙发"},
				{imgurl:"../../../static/img/产品图/沙发/三人沙发/大先生转角沙发.png",title:"三人沙发"},
				{imgurl:"../../../static/img/产品图/沙发/三人沙发/大先生转角沙发.png",title:"三人沙发"}
				]
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,figure,figcaption{margin:0;padding:0;}
	ul,ol,li{list-style:none;}
	*{box-sizing:border-box;}
	html,body{
		overflow: auto;
		
	}	
.c_box_list{
	flex: 1;
    display: flex;
    /*flex-direction: column;*/
  	overflow: hidden;
	.c_list{
		flex:1;	
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		overflow: auto;
		margin-bottom:0.2rem;
		.c_box{
			position: relative;
			width: 40%;
			margin: 0 5%;			
			/*height: 16.6rem;*/
			/*border: 1px solid orange;	*/
			/*overflow:hidden;*/ /*auto;	*/ /*此处错误不能加auto，加上之后图片会上下移动*/
			/*flex: 1;*/
			
			display: flex;			
			flex-direction: column;
			align-items: center;
			justify-content: space-between;		
			
				
			img{
				
				width: 100%;
				/*height:100% ; *//*此处高度不能加，加上后下面的文字不显示了*/
				border: 0;
				display: block;				
			}
			span{
				color: #333333;font-size: 0.14rem;
				height:0.3rem;display: block;
				
			}
		}
		#banner{						
			 width: 100%;
			 
			 position: relative;
           /* max-width: 76rem;*/
			.box_img{				
				 width: 100%;          	
			}
			.c_title{
				position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.2rem; color: rgb(255, 255, 255);
			}
		}	
	}
}
/*隐藏滚轮*/
/*.c_box_list::-webkit-scrollbar {
display: none;
}*/
.c_box_list .c_list::-webkit-scrollbar {/*隐藏滚轮*/
display: none;
/*-webkit-overflow-scrolling: touch*/
}
.c_box_list {-webkit-overflow-scrolling: touch;}

.c_box_list .c_list .c_box{
	-webkit-overflow-scrolling: touch;
}
 /*tag#id.class::-webkit-scrollbar{width:0;height:0}*/
</style>