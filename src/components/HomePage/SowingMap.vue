<template>
  <div id="sowingmap"class="col-lg-12">
    <div class="block">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"v-for="(item,index) in banner" :key="index">
            <img :src="item" alt=""width="100%"height="100%">
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
          '../../../static/img/banner/banner-7.png',
        ]
      }
    },
    mounted(){
      // var mySwiper = new Swiper('.swiper-container', {
      //   autoplay:true,
      //   loop:true
      // })
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 2000,//1秒切换一次
        },
      });
    },
  }
</script>

<style scoped lang="scss">
  #sowingmap{
    height: 2rem;
    /*background-color: #5cb85c;*/
  }
</style>
