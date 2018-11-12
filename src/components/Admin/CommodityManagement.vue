<template>
  <div id="classList"class="col-lg-12">
    <div class="left col-lg-0"style="display: none;">
      <div class="col-lg-12 logo"></div>
      <div class="list col-lg-12">
        <ul v-for="(item,index) in ClassList">
          <router-link :to="item.path">
            <li>{{item.list}}</li>
          </router-link>
        </ul>
      </div>
    </div>
  <div class="right col-lg-12"style="height: 100%;">
    <!--<PersonnelPipeline></PersonnelPipeline>-->
    <!-- Swiper -->
    <div class="swiper-container"style="height: 100%;">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="height: 100%;">
          <PersonnelPipeline></PersonnelPipeline>
        </div>
        <div class="swiper-slide" style="height: 100%;">
          <CommodityUploading></CommodityUploading>
        </div>
        <!--<div class="swiper-slide" style="height: 100%;"></div>-->
      </div>

      <!-- Add Pagination -->
    </div>

  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Swiper from 'swiper'
  import '../../../node_modules/swiper/dist/css/swiper.min.css'
  import PersonnelPipeline from './PersonnelPipeline'
  import CommodityUploading from './CommodityUploading'

  export default {
    data(){
      return{
        ClassList:[
          {
            list:          '首页',
            path:'/404'
          },
          {
            list:          '商品管理',
            path:'/404'
          },
          {
            list:          '用户管理',
            path:'/404'
          },
          {
            list:          '商品上传',
            path:'/404'
          },
          {
            list:          '配置文件',
            path:'/404'
          },
          {
            list:           '权限管理',
            path:'/404'
          }
        ]
      }
    },
    components:{
      PersonnelPipeline,CommodityUploading,
    },
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        effect: 'flip',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
</script>

<style scoped lang="scss">
  #classList{
    height: 100vh;
    .left{
      background-color: #363636;
      height: 100%;
      .logo{
        height: 25vh;
        background: url("../../../static/img/二倍率icon切图/starpage@2x.png")no-repeat;
        background-size: cover;
        background-position: 50% -20%;
      }
      .list{
        background: url("../../../static/img/banner/fa033044ef4ca8e4e9cf89e8a3fef3c1.png")no-repeat;
        background-size: cover;
        margin-top: 10vh;
        ul{
          li{
            color: white;
          }
        }
      }
    }
  }
</style>
