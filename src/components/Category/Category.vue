<template>
	<div id="box1">
		<HeaderMenu></HeaderMenu>
		<List></List>		
		<FooterMenu></FooterMenu>
	</div>
</template>

<script>
	import "../../assets/css/rem";
    import "../../assets/css/reset.css";
	import HeaderMenu from './Hearder'
	import List from './List'
	import FooterMenu from '../FooterMenu'
	export default{
		components:{
      		HeaderMenu,List,FooterMenu
   	 	}
	}
	
</script>
<style scoped>
	html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,figure,figcaption{margin:0;padding:0;}
	ul,ol,li{list-style:none;}
	*{box-sizing:border-box;}
	html,body{
		overflow: auto;
		overflow: hidden;
	}
	
	#box1{
		display: flex; 
		height: 100%;
		 flex-direction: column;  
		/*overflow: auto;
		
	      display: -webkit-flex;  
	     
	      flex-direction: column;  
	     
	      text-align: center;*/
		
	}
</style>
