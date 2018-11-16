<template>
  <div id="bottomMenu">
    <div class="menu">
      <div class="col-lg-3" @click="switchTo('/home')">
        <img :src="'/home'===$route.path?tabBarImg[0].selected:tabBarImg[0].normal"/>
        <p>首页</p>
      </div>
      <div class="col-lg-3" @click="switchTo('/ification')">
        <img :src="'/ification'===$route.path?tabBarImg[1].selected:tabBarImg[1].normal"/>
        <p>分类</p>
      </div>
      <div class="col-lg-3" @click="switchTo('/cart')">
        <img :src="'/cart'===$route.path?tabBarImg[2].selected:tabBarImg[2].normal"/>
        <p>购物车</p>
      </div>
      <div class="col-lg-3" @click="switchTo('/my')">
        <img :src="'/my'===$route.path?tabBarImg[3].selected:tabBarImg[3].normal"/>
        <p>我的</p>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../../static/css/global.css'
  export default {
    data(){
      return{
        tabBarImg:[
          {
            normal:require("../../static/img/二倍率icon切图/home-0@2x.png"),
            selected:require("../../static/img/二倍率icon切图/home@2x.png")
          },
          {
            normal:require("../../static/img/二倍率icon切图/type-0@2x.png"),
            selected:require("../../static/img/二倍率icon切图/type@2x.png")
          },
          {
            normal:require("../../static/img/二倍率icon切图/shop-0@2x.png"),
            selected:require("../../static/img/二倍率icon切图/shop@2x.png")
          },
          {
            normal:require("../../static/img/二倍率icon切图/me-0@2x.png"),
            selected:require("../../static/img/二倍率icon切图/me@2x.png")
          },
        ]
      }
    },
    methods:{
      switchTo(path){
        console.log(this.$router);
        this.$router.replace(path);
      }
    }

  }
</script>

<style scoped lang="scss">
  #bottomMenu{
    .menu{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
      height: .45rem;
      background-color: #F7F7F7;
      display: flex;
      justify-content: space-around;
      .col-lg-3{
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: .14px;
        color:#999999;
        img{
          max-width: .15rem;
          /*margin-top: .12rem;*/
          margin-bottom: .04rem;
        }
      }
      /*a{
        color: #999999;
        line-height: 1.1rem;
      }*/
    }
  }
</style>
