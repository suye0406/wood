<template>
    <div>
        <div class="confirmOrder">
            <header>
                <div class="header_left"><img src="../../../static/img/二倍率icon切图/Back@2x.png" alt=""></div>
                <div class="header_right">订单确认</div>
            </header>
            <div class="content">
                <div class="bringWhere">
                    <p>您需要我们送到哪里？</p>
                    <div class="address"> 
                        <div class="address_left">
                            <p>郭超远 13295376397</p>
                            <p>北京 北京 昌平区北京科技职业技术学院</p>
                        </div>
                        <div class="address_right">
                            <img src="../../../static/img/二倍率icon切图/right@2x.png">
                        </div>
                    </div>
                    <div class="agreement">
                        <div class="big_circle">
                            <div class="small_circle"></div>
                        </div>
                        <span>我已阅读并同意</span>
                        <span>《造作物流及售后协议》</span>
                    </div>
                </div>
                <div class="order_price">
                    <p>您的订单价格明细</p>
                    <div class="order_priceDetail">
                        <p><span>商品合计</span><i>￥7098</i></p>
                        <p><span>运费</span><i>免邮</i></p>
                        <p><span>实付</span><i>￥6495</i></p>
                    </div>
                </div>
                <div class="order_invoice">
                    <p>您是否需要发票？</p>
                    <div class="order_priceDetail">
                        <div class="order_left">
                            <div class="order_circle"></div>
                            <span>我要开发票</span>
                        </div>
                    </div>
                </div>
                <div class="order_remark">
                    <p>如果还有别的需要，备注一句</p>
                    <div class="textbox">
                        <textarea cols="30" rows="10">在这儿给我们稍些话</textarea>
                    </div>
                </div>
                <div class="order_inventoryTitle">
                    <p>您的商品清单</p>
                    <div class="order_inventory">
                        <div class="left_inventory"><img src="../../../static/img/产品图/沙发/三人沙发/飞鸟沙发.png" alt=""></div>
                        <div class="right_inventory">
                            <p>飞鸟沙发</p>
                            <p>橙红/三人座</p>
                            <p>预计2018-11-03前发货</p>
                            <div><span>￥6650</span><span>x1</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div class="footer">
                    <div class="footer_left"><p>￥6495</p></div>
                    <router-link to="/account">
                      <div class="footer_right"><p>马上结算</p></div>
                    </router-link>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.confirmOrder {
  display: fixed;
  top: 0;
  margin-top: 0.2rem;
  background: rgb(248, 246, 246);
  header {
    width: 100%;
    height: 0.44rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #ffffff;
    .header_left {
      height: 100%;
      width: 1.28rem;
      display: flex;
      align-items: center;
      padding-left: 0.1rem;
      img {
        display: block;
        width: 0.1rem;
        height: 0.18rem;
      }
    }
    .header_right {
      width: 0.99rem;
      height: 0.25rem;
      font-family: PingFangSC-Medium;
      font-size: 0.18rem;
      color: #030303;
      letter-spacing: -0.43px;
      text-align: center;
      font-weight: bold;
    }
  }
  .content {
      margin: .45rem 0;
    .bringWhere {
      background: #ffffff;
      padding: 0.2rem;
      margin-bottom: 0.05rem;
      > p {
        font-family: PingFangSC-Medium;
        font-size: 0.2rem;
        color: #000000;
        font-weight: bold;
      }
      .address {
        display: flex;
        justify-content: space-between;
        margin-top: 0.2rem;
        padding-bottom: 0.08rem;
        border-bottom: 0.01rem solid rgb(248, 246, 246);
        .address_left {
          p:nth-child(1) {
            font-family: PingFangSC-Regular;
            font-size: 0.18rem;
            color: #000000;
          }
          p:nth-child(2) {
            font-family: PingFangSC-Thin;
            font-size: 0.14rem;
            color: #000000;
          }
        }
        .address_right {
          display: flex;
          align-items: center;
          img {
            display: block;
            width: 0.08rem;
            height: 0.12rem;
          }
        }
      }
      .agreement {
        margin: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .big_circle {
          width: 0.16rem;
          height: 0.16rem;
          border: 0.02rem solid #9ed468;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .small_circle {
            width: 0.08rem;
            height: 0.08rem;
            background: #9ed468;
            border-radius: 50%;
          }
        }
        span:nth-child(1) {
          font-family: PingFangSC-Regular;
          font-size: 0.14rem;
          color: #000000;
        }
      }
    }
    .order_price {
      background: #ffffff;
      padding: 0.2rem;
      margin-bottom: 0.05rem;
      p {
        margin-top: 0.1rem;
      }
      > p {
        font-family: PingFangSC-Medium;
        font-size: 0.2rem;
        color: #000000;
        font-weight: bold;
      }
      .order_priceDetail {
        p {
          display: flex;
          justify-content: space-between;
          align-content: center;
          span {
            font-family: PingFangSC-Regular;
            font-size: 0.14rem;
            color: #000000;
          }
          i {
            font-family: PingFangSC-Regular;
            font-size: 0.14rem;
            color: #9b9b9b;
            font-style: normal;
          }
        }
      }
    }
    .order_invoice {
      background: #ffffff;
      padding: 0.2rem;
      margin-bottom: 0.05rem;
      > p {
        font-family: PingFangSC-Medium;
        font-size: 0.2rem;
        color: #000000;
        font-weight: bold;
        border-bottom: 0.01rem solid rgb(248, 246, 246);
        padding-bottom: 0.1rem;
      }
      .order_priceDetail {
        display: flex;
        justify-content: space-between;
        padding-top: 0.1rem;

        .order_left {
          display: flex;
          align-items: center;

          .order_circle {
            width: 0.16rem;
            height: 0.16rem;
            border: 0.01rem solid #dcdcdc;
            border-radius: 50%;
            margin-right: 0.2rem;
          }
          p {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #000000;
          }
        }
      }
    }
    .order_remark {
      background: #ffffff;
      padding: 0.2rem;
      margin-bottom: 0.05rem;
      > p {
        font-family: PingFangSC-Medium;
        font-size: 0.2rem;
        color: #000000;
        font-weight: bold;
        border-bottom: 0.01rem solid rgb(248, 246, 246);
        padding-bottom: 0.1rem;
      }
      .textbox {
        textarea {
          width: 3.28rem;
          height: 1.39rem;
          border: 0.01rem solid #dcdcdc;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #d5d2d2;
        }
      }
    }
    .order_inventoryTitle {
      background: #ffffff;
      padding: 0.2rem;
      margin-bottom: 0.05rem;
      > p {
        font-family: PingFangSC-Medium;
        font-size: 0.24rem;
        color: #000000;
        font-weight: bold;
        border-bottom: 0.01rem solid rgb(248, 246, 246);
        padding-bottom: 0.1rem;
      }
      .order_inventory {
        display: flex;
        justify-content: space-between;
        .left_inventory {
          img {
            display: block;
            width: 1.09rem;
          }
        }
        .right_inventory {
          p:nth-child(1) {
            font-family: PingFangSC-Medium;
            font-size: 0.16rem;
            color: #000000;
            margin-bottom: 0.2rem;
          }
          p:nth-child(2) {
            font-family: PingFangSC-Regular;
            font-size: 0.12rem;
            color: #9b9b9b;
          }
          p:nth-child(3) {
            font-family: PingFangSC-Regular;
            font-size: 0.12rem;
            color: #9b9b9b;
            margin-bottom: 0.1rem;
          }
          div {
            display: flex;
            justify-content: space-between;
            span {
              font-family: PingFangSC-Regular;
              font-size: 0.16rem;
              color: #000000;
            }
          }
        }
      }
    }
  }
  .footer{
    width: 100%;
    height: .45rem;
    background: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .footer_left{
         p{
        font-family: PingFangSC-Medium;
        font-size: .2rem;
        color: #000000;
        line-height: .45rem;
        height: 100%;
        }
    }
   .footer_right{
       width: 1.19rem;
       height: 100%;
       background: #000000;
       p{
            font-family: PingFangSC-Medium;
            font-size: .16rem;
            color: #FEFDFD;
            text-align: center;
            line-height: .45rem;
            height: .45rem;
       }
   }
  }
}
</style>