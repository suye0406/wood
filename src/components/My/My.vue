<template>
  <div id="My">
    <div class="header col-lg-12">
      <div class="head col-lg-12">
        <div class="pic">
          <img src="../../../static/img/banner/pic.jpg" height="100%" width="100%"/></div>
        <p class="title">
          苏雨辰
        </p>
      </div>
    </div>
    <div class="title2 col-lg-12">
      <div v-for="(item,index) in title">
        <p class="icon">
          <img :src="item.pic" height="100%" width="100%"/></p>
        <p class="tp">{{item.tp}}</p>
      </div>
    </div>
    <div class="classlist col-lg-12">
      <div style="margin-top: 4.6rem;"></div>
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
          <span style="width:.8rem;height: 1.2rem;margin-right: 2rem;margin-top: -.1rem;">
        <img :src="item.iconpic" height="100%" width="100%"/>
        </span>
          </div>
        <!--</router-link>-->
      </div>
    </div>
    <BottomMenu></BottomMenu>
  </div>
</template>

<script>
  import BottomMenu from '../BottomMenu'

  export default {
    data(){
      return{
        title:[
          {
            pic:'../../../static/img/二倍率icon切图/unpaid@2x.png',
            tp:'未付款'
          },
          {
            pic:'../../../static/img/二倍率icon切图/paid@2x.png',
            tp:'已付款'
          },
          {
            pic:'../../../static/img/二倍率icon切图/completed@2x.png',
            tp:'已完成'
          },
          {
            pic:'../../../static/img/二倍率icon切图/other@2x.png',
            tp:'其他渠道'
          }
        ],
        menu:[
          {
            icon:'../../../static/img/二倍率icon切图/collection@2x.png',
            stitle:'我的收藏',
            iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
            path:'/404'
          },
          {
            icon:'../../../static/img/二倍率icon切图/location@2x.png',
            stitle:'收货地址',
            iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
            path:'/address'
          },
          {
            icon:'../../../static/img/二倍率icon切图/data@2x.png',
            stitle:'我的资料',
            iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
                        path:'/404'
          },
          {
            icon:'../../../static/img/二倍率icon切图/security@2x.png',
            stitle:'账户安全',
            iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
                        path:'/404'
          },
          {
            icon:'../../../static/img/二倍率icon切图/collection@2x.png',
            stitle:'通用设置',
            iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
                        path:'/404'
          },
          {
            icon:'../../../static/img/二倍率icon切图/about@2x.png',
            stitle:'关于WOOD',
            iconpic:'../../../static/img/二倍率icon切图/right@2x.png',
            path:'/about'
          },
        ]
      }
    },
    components:{
      BottomMenu,
    }
  }
</script>

<style scoped lang="scss">
  #My{
    .header{
      height: 10.71rem;
      .head{
        margin-top: 4.5rem;
        height: 6rem;
        display: flex;
        .pic{
          width: 6rem;
          height: 6rem;
          background-color: #D8D8D8;
          border-radius: 50%;
          margin-left: 1.6rem;
          overflow: hidden;
        }
        .title{
          font-size: 2.2rem;
          line-height: 6rem;
          margin-left: 1.6rem;
        }
      }
    }
    .title2{
      width: 81.9%;
      display: flex;
      justify-content: space-around;
      height: 5.29rem;
      margin: 0 auto;
      .icon{
        width: 2.57rem;
        height: 2.78rem;
      }
      .tp{
        font-size: 1.2rem;
      }
    }
    .classlist{
      .collection{
        display: flex;
        justify-content: space-between;
        p{
          width: 2rem;
          height: 2rem;
          margin: 0 1.6rem 3.4rem 1.6rem;
        }
        span{
          display: block;
          line-height: 2rem;
          margin-top: .1rem;
          color: black;
        }
      }
    }
  }
</style>
