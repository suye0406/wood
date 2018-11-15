<template>
    <div id="Edit">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark header">
            <router-link to="/home">
              <div class="el-icon-arrow-left"></div>
            </router-link>
            <div class="">购物车</div>
            <div class="">
              <router-link to="/edit2"style="color: black;">
                编辑
              </router-link>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark content">
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark ed">
                  <el-row>
                    <el-col :span="2">
                      <div class="grid-content bg-purple edx1"@click="xz">
                        <div style=""v-show="xzicon"></div>
                      </div>
                    </el-col>
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light edx2">
                        <!--<div>-->
                          <!--<div></div>-->
                          <!--<img src="../../../static/img/产品图/沙发/单人沙发/COFA精致沙发.png" height="50%" width="100%"/>-->
                        <!--</div>-->
                        <!--<div>-->
                          <!--<span>新品特惠</span>-->
                        <!--</div>-->
                        <el-row v-for="(item,index) in shoop">
                          <el-col :span="9">
                            <div class="grid-content bg-purple d1">
                              <div></div>
                              <div>
                                <img :src="item.img" height="50%" width="100%"/>
                              </div>
                              <div>
                                <span>{{item.title}}</span>
                              </div>
                            </div>
                          </el-col>
                          <el-col :span="15">
                            <div class="grid-content bg-purple-light d2">
                              <div>
                                <p>{{item.title}}</p>
                                <p>{{item.title2}}</p>
                                <p>{{item.title3}}</p>
                                <p>
                                  <span>￥{{item.price}}</span>
                                  <span>x{{item.num}}</span>
                                </p>
                              </div>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24"style="position: fixed;bottom: 0">
          <div class="grid-content bg-purple-dark boot">
            <el-row>
              <el-col :span="5">
                <div class="grid-content bg-purple"style="display: flex;justify-content: space-between;">
                  <div class="qedx"@click="qx">
                    <div style="width: .1rem; height: .1rem;background-color: #9ED468;border-radius: 50%;margin: 0 auto;"v-show="qxz"></div>
                  </div>
                  <p style="line-height: .45rem;font-family: '.PingFangSC-Regular';font-size: .12rem;color: #000000;letter-spacing: 0;">全选</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <span style="text-align: right;float: right;line-height: .48rem;margin-right: .1rem;">￥0</span>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="grid-content bg-purple">
                  <div style="height: .4rem;background-color: #9B9B9B;">
                    <span style="color: white;line-height: .4rem;text-align: center;">下单</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Edit",
      data(){
          return{
            shoop:[],
            xzicon:false,
            qxz:false,
            shoopData:[],
          }
      },
      methods:{
          xz(){
            this.xzicon =! this.xzicon
          },
          qx(){

          },
        // bj(){
        //
        // }
      },
      // watch:{
      //   shoop(newVal,oldVal){
      //     console.log(newVal,oldVal)
      //   }
      // },
      mounted(){
        //读取购物localStorage 存储对象
        var localStorageVal = JSON.parse(getStorage('shoop'));
        this.shoopData = localStorageVal;
        console.log(this.shoopData);
      },
      watch:{
          shoopData(newVal,oldVal){
            console.log("123"+newVal,+"112312"+oldVal)
            // this.shoop = newVal,"-------"
        }
      },
      created(){
          this.shoop = this.$store.state.cart.cart;
      },
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
  #Edit{
    position: relative;
    .header{
      height: .45rem;
      display: flex;
      justify-content: space-between;
      div{
        line-height: .45rem;
        height: auto;
        font-size: .12rem;
      }
      div:nth-child(1){
        margin-left: .1rem;
      }
      div:nth-child(3){
        margin-right: .1rem;
      }
    }
    .content{
      .ed{
        height: 1.3rem;
        .edx1{
          width: .16rem;
          height: .16rem;
          border-radius: 50%;
          border: .02rem solid #DCDCDC;
          margin-top: .5700000000000001rem;
          margin-left: .1rem;
          position: relative;
          /*display: flex;*/
          /*flex-direction: column;*/
          /*justify-content: center;*/
          div:nth-child(1){
            width: .08rem;
            height: .08rem;
            background-color: #9ED468;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .edx2{
          /*div:nth-child(1){*/
            /*width: .89rem;*/
            /*height: 1rem;*/
            /*div:nth-child(1){*/
              /*height: 30%;*/
              /*width: 100%;*/
            /*}*/
          /*}*/
          /*div:nth-child(2){*/
            /*background: #DB7C7E;*/
            /*width: 0.7rem;*/
            /*height: .2rem;*/
            /*span{*/
              /*font-family: '.PingFangSC-Regular';*/
              /*font-size: 14px;*/
              /*color: #FFFFFF;*/
              /*letter-spacing: 0;*/
            /*}*/
          /*}*/
          .d1{
            height: 1rem;
            div:nth-child(3){
              width: 100%;
              background-color:#DB7C7E;
              span{
                font-family: '.PingFangSC-Regular';
                font-size: .12rem;
                color: #FFFFFF;
                letter-spacing: 0;
              }
            }
          }
          .d2{
            height: 1rem;
            p:nth-child(1){
              margin-top: .24rem;
              line-height: .22rem;
              font-family: '.PingFang-SC-Medium';
              font-size: .14rem;
              font-weight: bold;
              text-align: left;
              color: #000000;
              letter-spacing: 0;
              text-indent: .1rem;
            }
            p:nth-child(2){
              line-height: .2rem;
              font-family: '.PingFangSC-Regular';
              font-size: .12rem;
              color: #000000;
              letter-spacing: 0;
              text-align: left;
              text-indent: .1rem;
            }
            p:nth-child(3){
              line-height: .2rem;
              font-family: '.PingFangSC-Regular';
              font-size: .12rem;
              color: #000000;
              letter-spacing: 0;
              text-align: left;
              text-indent: .1rem;
            }
            p:nth-child(4){
              margin-top: .2rem;
              font-family: '.PingFang-SC-Medium';
              font-size: 16px;
              color: #000000;
              letter-spacing: 0;
              font-weight: bold;
              display: flex;
              justify-content: space-between;
              text-indent: .1rem;
            }
          }
        }
        .edx3{
        }
      }
    }
    .boot{
      height: .45rem;
      /*position: fixed;*/
      bottom: 0;
      .qedx{
        width: .16rem;
        height: .16rem;
        line-height: .45rem;
        border-radius: 50%;
        border: .02rem solid #DCDCDC;
        margin-top: .13rem;
        margin-left: .1rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
    }
  }
</style>
