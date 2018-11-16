<template>
    <div style="overflow:hidden;">
        <div class="order_content">
            <div class="order_details">
                <div class="order_top">
                    <img src="../../../static/img/产品图/沙发/双人沙发/鹅卵石沙发.png" alt="">
                    <div class="orderTop_right">
                        <p>鹅卵石沙发</p>
                        <p>从斯德哥尔摩到北京的温暖大拥抱</p>
                    </div>
                </div>
                <div class="order-bottom">
                    <p>订单编号：20181106174408105</p>
                    <p>订单金额：￥1000.34</p>
                    <p>收货人：郭超远/13295376397</p>
                    <p>收货地址：北京/昌平区/北京科技职业学院</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
.order_content {
  width: 100%;
  .order_details {
    margin-bottom: 0.2rem;
    .order_top {
      width: 2.96rem;
      height: 1.5rem;
      margin: 0 auto;
      border-bottom: 0.01rem solid #dcdcdc;
      display: flex;
      justify-content: space-between;
      img {
        display: block;
        width: 1.5rem;
      }
      .orderTop_right {
        padding-top: 0.8rem;
        padding-left: 0.1rem;
        text-align: left;
        p:nth-child(1) {
          font-family: PingFangSC-Regular;
          font-size: 0.14rem;
          color: #000000;
          letter-spacing: -0.0031rem;
          margin-bottom: 0.1rem;
        }
        p:nth-child(2) {
          font-family: PingFangSC-Regular;
          font-size: 0.1rem;
          color: #9b9b9b;
          letter-spacing: -0.22px;
          text-align-last: left;
        }
      }
    }
  }
  .order-bottom {
    text-align: left;
    width: 2.96rem;
    margin: 0 auto;
    p {
      font-family: PingFangSC-Regular;
      font-size: 0.12rem;
      color: #9b9b9b;
      letter-spacing: -0.03px;
      margin-top: 0.12rem;
    }
  }
}
</style>
