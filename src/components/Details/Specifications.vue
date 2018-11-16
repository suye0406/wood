<template>
    <div id="Specifications"style="height: 79.5%;position: relative;">
      <el-row style="height: 100%;">
        <el-col :span="24"style="height: 100%;">
          <div class="grid-content bg-purple-dark"style="height: 100%;">
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark"style="height: 1rem;">
                  <el-row>
                    <el-col :span="4">
                      <div class="grid-content bg-purple"style="">
                        <div style="width: .7rem;height: .6rem;background-color: honeydew;margin: .5rem 0 0 .18rem;">

                        </div>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="grid-content bg-purple-light">
                        <p style="font-size: .12rem;margin-top: .4rem;">北岛沙发</p>
                        <p>
                          <span style="font-size: .12rem;color: #E26C6C ;">
                          ￥4566
                          </span>
                        </p>
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <div class="grid-content bg-purple">
                        <p class="el-icon-close"style="margin-top: .3rem;font-weight: bold;"@click="toggle2()"></p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row style="float: left;margin-left: .18rem;margin-top: .3rem;">
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <!--<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>-->
                  <div style="display: flex;">
                    <div style="width: .35rem;height: .3rem;border: .005rem solid #DDDDDD;line-height: .3rem;text-align: center;color: #DDDDDD;"class="el-icon-minus"></div>
                    <div style="width: .35rem;height: .3rem;border: .005rem solid #DDDDDD;line-height: .3rem;text-align: center;color: #000000;">{{num1}}</div>
                    <div style="width: .35rem;height: .3rem;border: .005rem solid #DDDDDD;line-height: .3rem;text-align: center;color: #DDDDDD"class="el-icon-plus"></div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark"style="margin-top: .16rem;text-align: left;text-indent: .18rem;font-size: .12rem;font-weight: bold;">
                  <p>颜色</p>
                  <div style="display: flex;margin-left: .18rem;justify-content: space-around;width: 50%;margin-top: .13rem;">
                    <div style="width: .42rem;height: .38rem;border: .01rem solid #DDDDDD;display: flex;flex-direction: column;justify-content: center;">
                      <div style="width: .31rem;height: .28rem;background-color: #232F47;margin: 0 auto;"></div>
                    </div>
                    <div style="width: .42rem;height: .38rem;border: .01rem solid #DDDDDD;display: flex;flex-direction: column;justify-content: center;">
                      <div style="width: .31rem;height: .28rem;background-color: #BD3E2A;margin: 0 auto;"></div>
                    </div>
                    <div style="width: .42rem;height: .38rem;border: .01rem solid #DDDDDD;display: flex;flex-direction: column;justify-content: center;">
                      <div style="width: .31rem;height: .28rem;background-color: #525252;margin: 0 auto;"></div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark"style="margin-top: .3rem;text-align: left;font-size: .12rem;font-weight: bold;text-indent: .18rem;">
                  <p>款式</p>
                  <div style="margin-top: .16rem;display: flex;justify-content: space-around;">
                    <div style="width: 1.3rem;height: .35rem;border: .01rem solid #DDDDDD;">
                      <span style="text-align: center;line-height: .35rem;color: #6C6C6C ;font-weight: normal;text-align: center;margin: 0 auto;">
                        单人沙发
                      </span>
                    </div>
                    <div style="width: 1.3rem;height: .35rem;border: .01rem solid #DDDDDD;">
                      <span style="text-align: center;line-height: .35rem;color: #6C6C6C ;font-weight: normal;text-align: center;margin: 0 auto;">
                        双人沙发
                      </span>
                    </div>
                  </div>
                  <div style="width: 1.3rem;height: .35rem;border: .01rem solid #DDDDDD;margin-left: .16rem;margin-top: .15rem;">
                      <span style="text-align: center;line-height: .35rem;color: #6C6C6C ;font-weight: normal;text-align: center;margin: 0 auto;">
                        三人沙发
                      </span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark"style="height: .49rem;background-color: #ffffff;position: fixed;bottom: 0;width: 100%;border: 0 solid;">
                  <el-row>
                    <el-col :span="12">
                      <div class="grid-content bg-purple">
                        <span style="text-align: center;line-height: .49rem;font-size: .1rem;">立即购买</span>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-purple-light"style="background-color: black;">
                        <span style="text-align: center;line-height: .49rem;color:white;font-size: .1rem;">加入购物车</span>
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
</template>

<script>
  import Vuex from 'vuex'
    export default {
        name: "Specifications",
      data() {
        return {
          num1: 1,
        };
      },
      methods:{
        ...Vuex.mapActions({
          toggle2:"cart/toggle2",
        })
      },
    }
</script>

<style scoped>

</style>
