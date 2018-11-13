<template>
  <div id="allCatalogues">
    <div class="title col-lg-10">
      <p style="text-indent: .16rem;margin-bottom: .2rem;">全品目录</p>
    </div>
    <div>
      <div class="banner col-lg-12"v-for="(item,index) in all">
        <div class="pic col-lg-10">
          <router-link :to="item.path">
            <img :src="item.img" alt=""width="100%"height="100%">
          </router-link>
          <p style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: .12rem;color: #FFFFFF;">{{item.title}}</p>
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
        <!--<div class="s"v-for="(item,index) in allpic">-->
        <div class="s"v-for="(item,index) in allpic">
          <router-link :to="item.path">
            <img :src="item.img" alt=""width="100%"height="90%">
          </router-link>
          <p>{{item.title}}</p>
        </div>
      </div>

      <div class="col-lg-12"style="height: 1.2rem"></div>

      <div class="banner col-lg-12"v-for="(item,index) in allTable">
        <div class="pic col-lg-10">
          <router-link :to="item.path">
            <img :src="item.img" alt=""width="100%"height="100%">
          </router-link>
          <p style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: .12rem;color: #FFFFFF;">{{item.title}}</p>
        </div>
        <div class="title">
          <router-link :to="item.path"style="margin-left: .25rem;">
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
        <!--<div class="s"v-for="(item,index) in allpic">-->
        <div class="s"v-for="(item,index) in allTablepic">
          <router-link :to="item.path">
            <img :src="item.img" alt=""width="100%"height="90%">
          </router-link>
          <p>{{item.title}}</p>
        </div>
      </div>


      <div class="col-lg-12"style="height: 1.2rem"></div>

      <div class="banner col-lg-12"v-for="(item,index) in allBandeng">
        <div class="pic col-lg-10">
          <router-link :to="item.path">
            <img :src="item.img" alt=""width="100%"height="100%">
          </router-link>
          <p style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: .12rem;color: #FFFFFF;">{{item.title}}</p>
        </div>
        <div class="title">
          <router-link :to="item.path"style="margin-left: .3rem;">
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
        <!--<div class="s"v-for="(item,index) in allpic">-->
        <div class="s"v-for="(item,index) in allBandengpic">
          <router-link :to="item.path">
            <img :src="item.img" alt=""width="100%"height="90%">
          </router-link>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-12 xt">
      <div class="col-lg-10">
        <span></span>
        <span style="font-size: .12rem;width: .5rem;">浏览完毕</span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        all:'',
        allpic:'',
        allTable:'',
        allTablepic:'',
        allBandeng:'',
        allBandengpic:'',
      }
    },
    created(){
      console.log()
      this.all = this.$store.state.all
      this.allpic = this.$store.state.allpic
      this.allTable = this.$store.state.allTable
      this.allTablepic = this.$store.state.allTablepic
      this.allBandeng = this.$store.state.allBandeng
      this.allBandengpic = this.$store.state.allBandengpic
    }
  }
</script>

<style scoped lang="scss">
  #allCatalogues{
    margin-top: 6%;
    margin-bottom: 20%;
    width: 100%;
    .title{
      font-size: .24rem;
      line-height: .33rem;
      text-align: left;
    }
    .banner{
      .pic{
        height: 1.2rem;
        margin: 0 auto;
        position: relative;
      }
      .title{
        /*text-align: center;*/
        width: 60%;
        margin: 0 auto;
        a{
          color: #000000;
          margin-right:.21rem;
        }
        span{
          margin-left: 0.03rem;
          font-size: .12rem;
          line-height: .17rem;
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
        height: 1.56rem;
      }
    }
    .xt{
      margin-top: .54rem;
      margin-bottom: .48rem;
      .col-lg-10{
        margin: 0 auto;
        width: 90%;
        display: flex;
        span:nth-child(1){
          height: 0.02rem;
          background-color: rgba(221,221,221,0.50);
          display: block;
          width: 1.1rem;
        }
        span:nth-child(2){
          ont-family: PingFangSC-Regular;
          font-size: .1px;
          color: #DDDDDD;
          line-height: 0.03rem;
          margin-left: .09rem;
          margin-right: .09rem;
        }
        span:nth-child(3){
          height: .02rem;
          background-color: rgba(221,221,221,0.50);
          display: block;
          width: 1.1rem;
        }
      }
    }
  }
</style>
