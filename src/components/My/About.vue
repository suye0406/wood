<template>
  <div id="About">
    <div class="col-lg-12"style="height: .2rem;display: flex;margin-bottom:.68rem;">
      <p style="width: .1rem;height: .16rem;margin-left: 1rem;margin-top: .1rem">
        <img src="../../../static/img/二倍率icon切图/Back@2x.png" height="100%" width="100%"/>
      </p>
      <p style="margin-top: 0.1rem;font-weight: bold;text-align: center;">
        <span style="margin: 0 auto;text-align: center;display: block;margin-left: .12rem;">关于WOOD</span>
      </p>
    </div>
    <div style="width: .56rem;height: .77rem;margin: 0 auto;">
      <img src="../../../static/img/二倍率icon切图/logo2@2x.png" height="100%" width="100%"/>
    </div>
    <div style="height: .08rem;"class="col-lg-12"></div>
    <div class="classlist col-lg-12">
      <div style="margin-top: .46rem;"></div>
      <div class="collection col-lg-12"v-for="(item,index) in menu">
        <!--<router-link :to="item.path"style="display: flex;justify-content: space-between;">-->
        <router-link :to="item.path">
          <div style="display: flex;">
            <p>
              <img :src="item.icon" height="100%" width="100%"/>
            </p>
            <span>
          {{item.stitle}}
        </span>
          </div>
        </router-link>
        <div>
          <span style="width:.08rem;height: .12rem;margin-right: .2rem;margin-top: -.01rem;">
        <img :src="item.iconpic" height="100%" width="100%"/>
        </span>
        </div>
        <!--</router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        menu:[
          {
            // icon:'../../../static/img/二倍率icon切图/collection@2x.png',
            stitle:'了解造作：About Us',
            iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
            path:'/404'
          },
          {
            // icon:'../../../static/img/二倍率icon切图/location@2x.png',
            stitle:'金剑2.0 🐮：🐂',
            iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
            path:'/address'
          },
          {
            // icon:'../../../static/img/二倍率icon切图/data@2x.png',
            stitle:'官方微博：WOOD官网',
            iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
            path:'/404'
          },
          {
            // icon:'../../../static/img/二倍率icon切图/security@2x.png',
            stitle:'分享WOOD：给身边的好朋友',
            iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
            path:'/404'
          },
          // {
          //   icon:'../../../static/img/二倍率icon切图/collection@2x.png',
          //   stitle:'通用设置',
          //   iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
          //   path:'/404'
          // },
          // {
          //   icon:'../../../static/img/二倍率icon切图/about@2x.png',
          //   stitle:'关于WOOD',
          //   iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
          //   path:'/about'
          // },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  #About{
    .classlist{
      .collection{
        display: flex;
        justify-content: space-between;
        p{
          width: .2rem;
          height: .2rem;
          margin: 0 .16rem .34rem .16rem;
        }
        span{
          display: block;
          line-height: .2rem;
          margin-top: .01rem;
          color: black;
        }
      }
    }
  }
</style>
