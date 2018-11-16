<template>
    <div>
        <div class="pay">
            <header>
                <router-link to="/confirmOrder">
                    <div class="header_left"><img src="../../../static/img/二倍率icon切图/Back@2x.png" alt=""></div>
                </router-link>
                <div class="header_right">结算中心</div>
            </header>
          <account-com></account-com>
          <footer>
            <div class="footer">
                <p @click="handlePay()">立即支付</p>
            </div>
          </footer>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
import account from './account-detailes'
export default {
    components: {
        'account-com': account, 
    },
    date(){
        return {

        }
    },
    methods:{
        ...Vuex.mapActions({
           handlePay:"order_pay/handlePay" 
        })
    }
}
</script>

<style lang="scss" scope>
.pay {
    margin-top: 0.2rem;
    header {
      width: 100%;
      height: 0.44rem;
      display: flex;
      align-items: center;
      background: #ffffff;
      position: fixed;
      top: 0;
      left: 0;
      
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
    footer {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        .footer{
            width: 100%;
            height: .45rem;
            background: #000000;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                font-family: PingFangSC-Medium;
                font-size: .16rem;
                color: #FFFFFF;
            }
        }
    }
  }
</style>