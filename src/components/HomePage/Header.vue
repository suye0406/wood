<template>
  <div id="header" class="col-lg-12">
  	<div class="left">
  		<img src="../../../static/img/二倍率icon切图/logo@2x.png" />
  	</div>    
   
    	<i class="el-icon-search"></i>
   
    
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>

<style scoped lang="scss">
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,figure,figcaption{margin:0;padding:0;}
	ul,ol,li{list-style:none;}
	*{box-sizing:border-box;}
	
  #header{
    height: 0.88rem;
    display: flex;
    flex-direction: row;
    align-items:center;  
   .left{
   	width:100%;
   	display: flex;
   	/*text-align: center;*/
   	position: fixed;
   	justify-content:center;
   	 img{    	
    	display: block;
    	height: 0.4rem;    	    	
    }    
   } 
   i{   
   	margin-left: 7rem;	  
    }    	   	           
  }
</style>
