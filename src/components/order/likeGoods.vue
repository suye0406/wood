<template>
    <div>
        <div class="order_like">
            <p>你可能还喜欢</p>
            <div class="order_likeDetails">
                <ul>
                    <li>
                        <img src="../../../static/img/产品图/沙发/双人沙发/鹅卵石沙发.png" alt="">
                        <div class="order_likeGoods">
                            <p>鹅卵石沙发</p>
                            <p>从斯德哥尔摩到北京的温暖大拥抱</p>
                        </div>
                    </li>
                        <li>
                        <img src="../../../static/img/产品图/沙发/双人沙发/鹅卵石沙发.png" alt="">
                        <div  class="order_likeGoods">
                            <p>竖琴沙发</p>
                            <p>琴形木作雕刻，大宅演奏的乐章</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.order_like {
  p {
    font-family: PingFangSC-Regular;
    font-size: 0.17rem;
    color: #000000;
    letter-spacing: -0.31px;
    font-weight: bold;
    text-align: center;
  }
  .order_likeDetails {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      li {
        float: left;
        text-align: center;
        img {
          margin-left: 0.1rem;
          display: block;
          width: 1.5rem;
        }
        p:nth-child(1) {
          font-family: PingFangSC-Regular;
          font-size: 0.14rem;
          color: #000000;
          letter-spacing: -0.31px;
        }
        p:nth-child(2) {
          font-family: PingFangSC-Regular;
          font-size: 0.1rem;
          color: #000000;
          letter-spacing: -0.22px;
        }
      }
    }
  }
}
</style>