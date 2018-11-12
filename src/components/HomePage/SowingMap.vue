<template>
  <div id="sowingmap"class="col-lg-12">
    <div class="block">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <img :src="item" alt=""> 
                                                                <!--
                                                                	作者：offline
                                                                	时间：2018-11-07
                                                                	描述：此处为什么必须加100%图片高宽才会跟着父元素
                                                                -->
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../../../node_modules/swiper/dist/css/swiper.min.css'

  export default {
    data(){
      return{
        banner:[
          '../../../static/img/banner/banner-1.png',
          '../../../static/img/banner/banner-2.png',
          '../../../static/img/banner/banner-3.png',
          '../../../static/img/banner/banner-4.png',
          '../../../static/img/banner/banner-5.png',
          '../../../static/img/banner/banner-6.png',
          '../../../static/img/banner/banner-7.png'
        ]
      }
    },
    created(){
    	 	
    },
   
    mounted(){
      // var mySwiper = new Swiper('.swiper-container', {
      //   autoplay:true,
      //   loop:true
      // })
//    var swiper = new Swiper('.swiper-container', {
//      pagination: {
//        el: '.swiper-pagination',
//      },
//      autoplay: {
//        delay: 2000,//1秒切换一次
//      },
//    });


			this.$nextTick(()=>{
	    		var swiper = new Swiper('.swiper-container', {
		        pagination: {
		          el: '.swiper-pagination',
		        },
		        loop:true,
		        autoplay: {
		          delay: 2000,//1秒切换一次
		        },
	      	});
	    	}) 
    }
  }
</script>

<style scoped lang="scss">
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img,input,figure,figcaption{margin:0;padding:0;}
	ul,ol,li{list-style:none;}
	*{box-sizing:border-box;}

  #sowingmap{
    height: 2.8rem;
    width: 100%;
    overflow: hidden;
    /*background-color: #5cb85c;*/
   .block {
   		height: 2.8rem;
    	width: 100%;
    	.swiper-container{
    			height: 2.8rem;
    			width: 100%;
		    	.swiper-wrapper .swiper-slide{			    
				   	height: 2.3rem;	   	
				   	 img{		   	 	
				   	 	display: block; /*为什么没起作用,没有转块*/
					   	width: 100%;
					   	height: 100%; 
					   }			   
		   }		   
    	}    	 
   }   
  }
</style>
