<template>
  <div id="sowingmap"class="col-lg-12">
    <div class="title col-lg-10">
      <p style="text-indent: .16rem;margin-bottom: .2rem">当下流行</p>
    </div>
    <div class="col-lg-10 twosowingmap">
      <!-- Swiper -->
      <div class="popular-swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"v-for="(item,index) in twosowingmap">
            <!--<router-link to="/details">-->
              <img :src="item.img[0]" alt=""width="100%"height="100%"@click="send(item.id)">
            <!--</router-link>-->
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
        twosowingmap:'',
        listdata:[],
      }
    },
    created(){
      this.twosowingmap = this.$store.state.category.twosowingmap;
      console.log(this.twosowingmap)
    },
    methods:{
      send(id){
        console.log(id)
        this.$router.push({name: 'Details', params: {id: id}})
        // location.href = "#/details"
      }
    },
    mounted(){
      var swiper = new Swiper('.popular-swiper-container', {
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
  function addStorage(key,value){
    localStorage.removeItem(key);
    localStorage.setItem(key,value);
  }

  function removeStorage(key){
    localStorage.removeItem(key);
  }

  function getStorage(key){
    var storage = window.localStorage;
    var val = storage.getItem(key);
    return val;
  }
</script>

<style scoped lang="scss">
  #sowingmap{
    margin-top: .066rem;
    .title{
      margin: 0 auto;
      p{
        line-height: .33rem;
        font-size: .24rem;
        text-align: left;
      }
    }
    .twosowingmap{
      overflow-x: hidden;
      .swiper-slide{
        img{
          margin-bottom: .22rem;
        }
        .p1{
          margin-bottom: .3rem;
          span:nth-child(1){
            margin-left: .16rem;
            float: left;
            font-size: .16rem;
            line-height: .22rem;
          }
          span:nth-child(2){
            float: right;
<<<<<<< HEAD
            margin-right: .16rem;
=======
<<<<<<< HEAD
            margin-right: .16rem;
=======
>>>>>>> 856c9218d243e301c9b590a66abb97da25035c3b
>>>>>>> 031ea67665af0078ae4b4a7f12785d3e1eb91e13
            font-size: .14rem;
            color: #E26C6C;
            line-height: .2rem;
          }
        }
        .p2{
          line-height: .17rem;
<<<<<<< HEAD
          /*margin-top: .3rem;*/
=======
<<<<<<< HEAD
          /*margin-top: .3rem;*/
=======
          margin-top: 0.03rem;
          text-align: left;
>>>>>>> 856c9218d243e301c9b590a66abb97da25035c3b
>>>>>>> 031ea67665af0078ae4b4a7f12785d3e1eb91e13
          color: #999999;
          text-align: left;
          margin: 0 auto;
          /*text-indent: .16rem;*/
          width: 90%;
          /*font-size: 1.2rem;*/
        }
      }
    }
  }
</style>
