<template>
  <div id="newproductrelease">
    <div class="title col-lg-10">
      <p>新品发布</p>
    </div>
    <div class="newmap col-lg-10">
      <!-- Swiper -->
      <div class="new-swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"v-for="(item,index) in newmap">
            <router-link :to="item.path">
              <img :src="item.img" alt=""width="100%"height="100%">
            </router-link>
            <p class="col-lg-12 p1">
              <span>{{item.title}}</span>
              <span>￥{{item.price}}</span>
            </p>
            <p class="col-lg-12 p2">
              {{item.content}}
            </p>
          </div>
        </div>
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
        newmap:'',
      }
    },
    created(){
      this.newmap = this.$store.state.newmap
    },
    mounted(){
      var swiper = new Swiper('.new-swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper',
          clickable: true,
        },
      });
    }
  }
</script>

<style scoped lang="scss">
  #newproductrelease{
    margin-top: 6%;
    .title{
      text-align: left;
      font-size: .24rem;
    }
    .newmap{
      overflow-x: hidden;
      margin: 0 auto;
      .swiper-slide{
        img{
          margin-bottom: .22rem;
        }
        .p1{
          span:nth-child(1){
            float: left;
            font-size: .16rem;
            line-height: .22rem;
          }
          span:nth-child(2){
            float: right;
            font-size: .14rem;
            color: #E26C6C;
            line-height: .2rem;
          }
        }
        .p2{
          line-height: .17rem;
          margin-top: .3rem;
          text-align: left;
          color: #999999;
          /*font-size: 1.2rem;*/
        }
      }
    }
  }
</style>
