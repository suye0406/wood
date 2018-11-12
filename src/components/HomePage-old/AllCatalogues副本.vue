<template>
  <div id="allCatalogues">
    <div class="title col-lg-10">
      <p>全品目录</p>
    </div>
    <div>
      <div class="banner col-lg-12"v-for="(item,index) in all">
        <div class="pic col-lg-10">
          <router-link :to="item.path">
            <img :src="item.img" alt=""width="100%"height="100%">
          </router-link>
          <p style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: 2rem;color: #FFFFFF;">{{item.title}}</p>
        </div>
        <div class="title">
          <router-link :to="item.path">
            <span>{{item.three}}</span>
          </router-link>
          <span>{{item.double}}</span>
          <router-link :to="item.path">
            <span>{{item.single}}</span>
          </router-link>
          <router-link :to="item.path">
            <span>{{item.more}}</span>
          </router-link>
        </div>
      </div>
      <div class="shafa col-lg-10">
        <div class="s"v-for="(item,index) in allpic">
          <router-link :to="item.path">
            <img :src="item.img" alt=""width="100%"height="90%">
          </router-link>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        all:'',
        allpic:''
      }
    },
    created(){
      this.all = this.$store.state.all
      this.allpic = this.$store.state.allpic
    }
  }
</script>

<style scoped lang="scss">
  #allCatalogues{
    margin-top: 6%;
    .title{
      font-size: 2.4rem;
      line-height: 3.3rem;
      text-align: left;
    }
    .banner{
      .pic{
        height: 12rem;
        margin: 0 auto;
        position: relative;
      }
      .title{
        margin:0 auto;
        width: 37%;
        a{
          color: #000000;
        }
        span{
          margin-left: .3rem;
          font-size: 1.2rem;
          line-height: 1.7rem;
          font-family: 'PingFangSC-Medium';
        }
      }
    }
    .shafa{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .s{
        width: 48%;
        height: 15.6rem;
      }
    }
  }
</style>
