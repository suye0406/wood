<template>
  <div id="home"class="col-lg-12">
    <Header></Header>
   <div class="middel"> 
   	<div class="middel_box">
	    <SowingMap></SowingMap>
	    <PopularSowingMap></PopularSowingMap>
	    <NewProductRelease></NewProductRelease>
	   
	    <AllCatalogues></AllCatalogues>
	   
	    
    </div>
    </div>
    <FooterMenu></FooterMenu>
  </div>
</template>

<script>
  import Header from './Header'
  import SowingMap from './SowingMap'
  import PopularSowingMap from './PopularSowingMap'
  import NewProductRelease from './NewProductRelease'
  import AllCatalogues from './AllCatalogues'
  import FooterMenu from '../FooterMenu'

  export default {
    data(){
      return{

      }
    },
    components:{
      Header,SowingMap,PopularSowingMap,NewProductRelease,AllCatalogues,FooterMenu
    }
  }
</script>

<style scoped lang="scss">
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,figure,figcaption{margin:0;padding:0;}
	ul,ol,li{list-style:none;}
	*{box-sizing:border-box;}
body{font-size: 62.5%;}
  #home{
    /*overflow: hidden;*/
   height: 100%;    
   display: flex;
   flex-direction: column;
	.middel{
		/*flex: 1;
		height: 100%;
		 display: flex;
   flex-direction: column;
   align-items: center;
   overflow: auto;*/
   
   flex: 1;
    display: flex;
    flex-direction: column;
  	overflow: hidden;
  	.middel_box{
			flex:1;	
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			overflow: auto;
			
			}
		}		
  }
  
  .middel .middel_box::-webkit-scrollbar {/*隐藏滚轮*/
display: none;
/*-webkit-overflow-scrolling: touch*/
}
</style>
