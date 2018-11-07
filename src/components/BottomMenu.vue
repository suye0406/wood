<!--<script src="../router/index.js"></script>-->
<!--<template>-->
  <!--<div id="bottomMenu">-->
    <!--<div class="menu">-->
      <!--<div class="col-lg-3">-->
        <!--<router-link to="/home">-->
          <!--<p class=""style="background: url(../../static/img/二倍率icon切图/home-0@2x.png)no-repeat;-->
          <!--background-size: cover;width: 1.5rem;height: 1.4rem;-->
          <!--margin-left: 0.5rem;margin-bottom: .5rem;-->
          <!--margin-top: 1.1rem;"v-show="home"@click="hom"></p>-->
          <!--<p class=""style="background: url(../../static/img/二倍率icon切图/home@2x.png)no-repeat;-->
          <!--background-size: cover;width: 1.5rem;height: 1.4rem;-->
          <!--margin-left: 0.5rem;margin-bottom: .5rem;-->
          <!--margin-top: 1.1rem;"v-show="home2"@click="home2"></p>-->
          <!--<p @click="hom2">首页</p>-->
        <!--</router-link>-->
      <!--</div>-->
      <!--<div class="col-lg-3">-->
        <!--<router-link to="/404">-->
          <!--<p class=""style="background: url(../../static/img/二倍率icon切图/type-0@2x.png)no-repeat;-->
          <!--background-size: cover;width: 1.5rem;height: 1.4rem;-->
          <!--margin-left: 0.5rem;margin-bottom: .5rem;-->
          <!--margin-top: 1.1rem;"v-show="fication"@click="ficatio"></p>-->
          <!--<p class="" style="background: url(../../static/img/二倍率icon切图/type@2x.png)no-repeat;-->
          <!--background-size: cover;width: 1.5rem;height: 1.4rem;-->
          <!--margin-left: 0.5rem;margin-bottom: .5rem;-->
          <!--margin-top: 1.1rem;" v-show="fication2"></p>-->
          <!--<p>分类</p>-->
        <!--</router-link>-->
      <!--</div>-->
      <!--<div class="col-lg-3">-->
        <!--<router-link to="/404">-->
          <!--<p class=""style="background: url(../../static/img/二倍率icon切图/shop-0@2x.png)no-repeat;-->
          <!--background-size: cover;width: 1.5rem;height: 1.4rem;-->
          <!--margin-left: 0.5rem;margin-bottom: .5rem;-->
          <!--margin-top: 1.1rem;"v-show="cart"@click="car"></p>-->
          <!--<p class=""style="background: url(../../static/img/二倍率icon切图/shop@2x.png)no-repeat;-->
          <!--background-size: cover;width: 1.5rem;height: 1.4rem;-->
          <!--margin-left: 0.5rem;margin-bottom: .5rem;-->
          <!--margin-top: 1.1rem;"v-show="cart2"></p>-->
          <!--<p>购物车</p>-->
        <!--</router-link>-->
      <!--</div>-->
      <!--<div class="col-lg-3">-->
        <!--<router-link to="/my">-->
          <!--<p class=""style="background: url(../../static/img/二倍率icon切图/me-0@2x.png)no-repeat;-->
          <!--background-size: cover;width: 1.5rem;height: 1.4rem;-->
          <!--margin-left: 0.5rem;margin-bottom: .5rem;-->
          <!--margin-top: 1.1rem;"v-show="me"@click="m"></p>-->
          <!--<p class=""style="background: url(../../static/img/二倍率icon切图/me@2x.png)no-repeat;-->
          <!--background-size: cover;width: 1.5rem;height: 1.4rem;-->
          <!--margin-left: 0.5rem;margin-bottom: .5rem;-->
          <!--margin-top: 1.1rem;"v-show="me2"></p>-->
          <!--<p>我的</p>-->
        <!--</router-link>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->

  <!--export default {-->
    <!--data(){-->
      <!--return{-->
        <!--home:true,-->
        <!--home2:false,-->
        <!--fication:true,-->
        <!--fication2:false,-->
        <!--cart:true,-->
        <!--cart2:false,-->
        <!--me:true,-->
        <!--me2:false,-->
      <!--}-->
    <!--},-->
    <!--methods:{-->
      <!--hom(){-->
          <!--this.home = false;-->
          <!--this.home2 = true;-->

          <!--this.fication = true;-->
          <!--this.fication2 = false;-->

          <!--this.cart = true;-->
          <!--this.cart2 = false;-->

          <!--this.me = true;-->
          <!--this.me2 = false;-->
          <!--console.log(2)-->
      <!--},-->
      <!--hom2(){-->
        <!--location.href = '#/home'-->
        <!--this.home = false;-->
        <!--this.home2 = true;-->

        <!--this.fication = true;-->
        <!--this.fication2 = false;-->

        <!--this.cart = true;-->
        <!--this.cart2 = false;-->

        <!--this.me = true;-->
        <!--this.me2 = false;-->
      <!--},-->
      <!--ficatio(){-->
        <!--this.fication = false;-->
        <!--this.fication2 = true;-->

        <!--this.home = true;-->
        <!--this.home2 = false;-->

        <!--this.cart = true;-->
        <!--this.cart2 = false;-->

        <!--this.me = true;-->
        <!--this.me2 = false;-->
      <!--},-->
      <!--car(){-->
        <!--this.cart = false;-->
        <!--this.cart2 = true;-->

        <!--this.home = true;-->
        <!--this.home2 = false;-->

        <!--this.fication = true;-->
        <!--this.fication2 = false;-->

        <!--this.me = true;-->
        <!--this.me2 = false;-->
      <!--},-->
      <!--m(){-->
        <!--console.log(1)-->
        <!--this.me = false;-->
        <!--this.me2 = true;-->

        <!--this.home = true;-->
        <!--this.home2 = false;-->

        <!--this.fication = true;-->
        <!--this.fication2 = false;-->

        <!--this.cart = true;-->
        <!--this.cart2 = false;-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
  <!--#bottomMenu{-->
    <!--.menu{-->
      <!--position: fixed;-->
      <!--bottom: 0;-->
      <!--left: 0;-->
      <!--width: 100%;-->
      <!--z-index: 9999;-->
      <!--height: 5rem;-->
      <!--background-color: #F7F7F7;-->
      <!--display: flex;-->
      <!--justify-content: space-around;-->
      <!--a{-->
        <!--color: #999999;-->
        <!--line-height: 1.1rem;-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</style>-->

<script src="../router/index.js"></script>
<template>
  <div id="bottomMenu">
    <div class="menu">
      <div class="col-lg-3" @click="switchTo('/home')">
        <img :src="'/home'===$route.path?tabBarImg[0].selected:tabBarImg[0].normal"/>
        <p>首页</p>
      </div>
      <div class="col-lg-3" @click="switchTo('/category')">
        <img :src="'/category'===$route.path?tabBarImg[1].selected:tabBarImg[1].normal"/>
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
      height: 4.5rem;
      background-color: #F7F7F7;
      display: flex;
      justify-content: space-around;
      .col-lg-3{
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color:#999999;
        img{
          max-width: 1.5rem;
          margin-top: 1.2rem;
          margin-bottom: 0.4rem;
        }
      }
      /*a{
        color: #999999;
        line-height: 1.1rem;
      }*/
    }
  }
</style>
