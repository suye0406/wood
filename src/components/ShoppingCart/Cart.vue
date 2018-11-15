<template>
    <div id="Cart">
      <el-row style="margin-bottom:.1rem;">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <div class="header col-lg-10">
                  <span>
                    购物车
                  </span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <div class="content">
                    <span>购物车空空如也</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <!--32*2+19-->
                  <div class="cai">
                    <span>猜你喜欢</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <!--recommend-->
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark recommend">
                  <el-row>
                    <el-col :span="12" v-for="item in 6">
                      <div class="grid-content bg-purple rec">
                        <div class="pic">
                          <img src="../../../static/img/产品图/沙发/三人沙发/贝岛沙发.png" height="100%" width="100%"/>
                        </div>
                        <p>竖琴全幅沙发 | 优美舒...</p>
                        <p>舒软体验和简洁视觉，二者…</p>
                        <p>￥{{price}}起</p>
                        <span>5色可选</span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <BottomMenu></BottomMenu>
    </div>
</template>

<script>
    import BottomMenu from '../BottomMenu'
    export default {
        name: "Cart",
      data(){
          return{
            price:'3996',
          }
      },
      components:{
        BottomMenu,
      }
    }
</script>

<style scoped lang="scss">
  #Cart{
    .header{
      height: .45rem;
      span{
        line-height: .45rem;
        text-align: center;
      }
    }
    .content{
      height: 1.6rem;
      background: rgba(0,0,0,0.02);
      span{
        line-height: 2rem;
        text-align: center;
        ont-family: PingFangSC-Regular;
        font-size: .12rem;
        color: #999999;
        letter-spacing: 0;
      }
    }
    .cai{
      height: .83rem;
      span{
        line-height: .83rem;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: .14rem;
        color: #000000;
      }
    }
    .recommend{
      height: auto;
      .rec{
        height: 2.4rem;
        overflow: hidden;
        border: .01rem solid #EEEEEE;
        .pic{
          width: 1.32rem;
          height: 1.04rem;
          margin: .16rem 0 .16rem .1rem;
        }
        p:nth-child(2){
          font-family: '.PingFangSC-Regular';
          font-size: 14px;
          color: #000000;
          letter-spacing: 0;
          text-align: left;
          text-indent: .1rem;
        }
        p:nth-child(3){
          font-family: '.PingFangSC-Regular';
          font-size: .1rem;
          color: #999999;
          letter-spacing: 0;
          text-align: left;
          text-indent: .1rem;
        }
        p:nth-child(4){
          font-family: '.PingFangSC-Regular';
          font-size: 12px;
          color: #000000;
          letter-spacing: 0;
          text-align: left;
          text-indent: .1rem;
        }
        span:nth-child(5){
          font-family: '.PingFangSC-Regular';
          font-size: 10px;
          color: #999999;
          letter-spacing: 0;
          text-indent: .1rem;
          text-align: left;
          float: left;
          /*margin-left: .1rem;*/
        }
      }
    }
  }
</style>
