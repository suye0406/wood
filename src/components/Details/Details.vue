<template>
  <div id="Details"style="margin-bottom: 1rem;">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-col :span="24">
            <div class="grid-content bg-purple-dark"style="height: .4rem;display:flex;justify-content: space-between;">
              <el-row>
                <el-col :span="12">
                  <div class="grid-content bg-purple-dark">
                    <!--<router-link to="/home"style="color: black;">-->
                      <div class="el-icon-arrow-left"style="font-size: .12rem;text-align: left;text-indent: .16rem;line-height: .4rem;"></div>
                    <!--</router-link>-->
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <div class="grid-content bg-purple-dark">
                    <div style="width: .12rem;height: .12rem;margin-right: .16rem;line-height: .4rem;">
                      <img src="../../../static/img/二倍率icon切图/shear@2x.png" height="100%" width="100%"/>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark"style="">
                <!-- Swiper -->
                <div class="swiper-container">
                  <div class="swiper-wrapper"style="height: 2rem;">
                    <div class="swiper-slide" v-for="item in data.img">
                      <div style="width: 100%;height: 100%;">
                        <img :src="item" height="100%" width="100%"/>
                      </div>
                    </div>
                  </div>
                  <!-- Add Pagination -->
                  <div class="swiper-pagination"style="text-align: right;margin-right: .19rem;"><span style="margin-right: .16rem;"></span></div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row style="margin-top: .3rem;">
            <el-col :span="20">
              <div class="grid-content bg-purple">
                <span style="font-size: .14rem;font-weight: bold;color: black;text-align: left;float: left;text-indent: .2rem;">{{data.title}}</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple-light">
                <div style="width: .16rem;height: .14rem;float: right;margin-right: .2rem;">
                  <img src="../../../static/img/二倍率icon切图/heart@2x.png" height="100%" width="100%"/>
                </div>
              </div>
            </el-col>
          </el-row>
          <p style="font-family: '.PingFangSC-Regular';margin-top: .08rem;text-align: left;text-indent: .2rem;margin-bottom: .2rem;font-size: 12px;color: #000000;letter-spacing: -0.11px;">{{data.content}}</p>
          <p style="text-align: left;text-indent: .2rem;font-size: .12rem;font-weight: bold;">￥{{data.price}}</p>
          <hr style="border: 1px solid rgba(221,221,221,0.50);width: 91.1%;text-align: center;margin: 0 auto;margin-top: .1rem;margin-bottom: .1rem;">
          <div style="width: 91.1%;margin: 0 auto">
            <el-row>
              <el-col :span="6"v-for="item in ts"style="display: flex;justify-content: space-around;">
                <div class="grid-content bg-purple"style="display: flex;width: auto;font-size: .12rem;">
                  <p style="width: .13rem;height: .13rem;border: .0rem solid #000000;display: block;border-radius: 50%;position: relative;">
                  <span class="el-icon-arrow-down"style="font-size: .1rem;display: block;margin: 0 auto;position:absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);line-height: .12rem;margin-top: .04rem;"></span>
                  </p>
                  <span>{{item.item}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark"style="display: flex;justify-content: space-between;">
                <div style="font-family: PingFangSC-Semibold;font-size: .12rem;color: #000000;letter-spacing: -0.11px;font-weight: bold;text-indent: .2rem;margin-top: .2rem;">已选：</div>
                <div>
                  <span style="font-family: PingFangSC-Semibold;font-size: .12rem;color: #000000;letter-spacing: -0.11px;text-indent: .2rem;margin-top: .2rem;text-align: left;float: left">白色，单人</span>
                </div>
                <div class="el-icon-edit-outline"style="font-size: .12rem;margin-top: .2rem;margin-right: .2rem;"></div>
              </div>
            </el-col>
          </el-row>
          <hr style="width: 91.1%;margin: 0 auto;color: rgba(221,221,221,0.50);margin-top: .1rem;">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <span style="font-size: .12rem;font-weight: bold;color: black;text-align: left;float: left;margin-left: .2rem;margin-top: .1rem;">优惠：</span>
                <span style="font-size: .12rem; color: black;text-align: left;float: left;margin-left: .2rem;margin-top: .1rem;">设计师首选组合，最高可省400元</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark"style="height: .49rem;position: fixed;bottom: 0;width: 100%;">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple"style="background-color: white;">
                  <router-link to="/edit"style="color: black;">
                    <span style="font-weight: bold;font-size: .12rem;line-height: .49rem">购物清单</span>
                  </router-link>
                  <span style="color:rgba(221,221,221,0.50);line-height: .49rem;text-align: right;float: right;">|</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"style="background-color: white;">
                  <span style="font-weight: bold;font-size: .12rem;line-height: .49rem;">立即购买</span>
                  <span style="color:rgba(221,221,221,0.50);line-height: .49rem;text-align: right;float: right;">|</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple"style="background-color: black;">
                  <span style="font-weight: bold;font-size: .12rem;line-height: .49rem;color: white;"@click="shop(data.title)">加入购物车</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <!--<Edit style="z-index: 10;display: none;"></Edit>-->
  </div>
</template>

<!--

  <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">

                  </div>
                </el-col>
              </el-row>
-->

<script>
  import Swiper from 'swiper';
  import '../../../node_modules/swiper/dist/js/swiper.min';
  import Edit from '../ShoppingCart/Edit'
  import Edit2 from '../ShoppingCart/Edit2'

  export default {
    data(){
      return{
        data:[],
        shoop:[],
        ts:[
          {
            item:'世界设计'
          },
          {
            item:'欧美设计'
          },
          {
            item:'顶尖设计'
          },
          {
            item:'UI设计'
          },
        ],
        twosowingmap:[],
        id: this.$route.params.id
      }
    },
    created(){
      this.twosowingmap = this.$store.state.category.twosowingmap;
      // console.log(this.twosowingmap[this.id])
      this.data = this.twosowingmap[this.id];
      console.log(this.id)
      console.log(this.data)
      // console.log(this.$route.params.id);
    },
    methods:{
      shop(){
        // for (i = 0; i<this.twosowingmap.length; i++){
        //   if (s == this.twosowingmap[i].title ){
        //     console.log(this.twosowingmap[i])
        //   }
        // }
        // this.shoop.push(this.data)
        // console.log(this.data)
        // 存入localStorage 存储对象
        // var shoop = JSON.stringify(this.shoop);
        // addStorage('shoop', shoop);
        // this.$router.push({name: 'Edit', params: {id: this.id}})

        //存入localStorage 存储对象
        var shoop = JSON.stringify(this.data);
        addStorage('shoop', shoop)
        console.log(this.$store.state.cart);
        this.$store.state.cart = this.data;
        console.log(this.$store.state.cart);
      }
    },
    mounted(){
      //读取购物localStorage 存储对象
      console.log(this.twosowingmap[this.id])
      var localStorageVal = JSON.parse(getStorage('key'));
      // this.data = localStorageVal;
      console.log(this.data)
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
    components:{
      Edit,Edit2
    }
  }
  function addStorage(shoop,value){
    localStorage.removeItem(shoop);
    localStorage.setItem(shoop,value);
  }

  function removeStorage(shoop){
    localStorage.removeItem(shoop);
  }

  function getStorage(shoop){
    var storage = window.localStorage;
    var val = storage.getItem(shoop);
    return val;
  }
</script>
