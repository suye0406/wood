<template>
  <div id="BindingCell">
    <div class="header col-lg-12">
      <p>
        <img src="../../../static/img/二倍率icon切图/Back@2x.png" height="100%" width="100%"/></p>
    </div>
    <div class="logo col-lg-12">
      <p>
        <img src="../../../static/img/二倍率icon切图/logo2@2x.png" height="100%" width="100%"/></p>
    </div>
    <div class="steps">
      <el-steps :active="1" align-center>
        <el-step title="" description=""></el-step>
        <el-step title="" description=""></el-step>
        <el-step title="" description=""></el-step>
      </el-steps>
    </div>
    <div class="FromDate col-lg-12">
      <div class="xian"></div>
      <div class="Input">
        <input type="text"placeholder="请输入邮箱">
        <p class="el-icon-close"></p>
      </div>
      <div class="Code">
        <input type="text"placeholder="验证码">
        <p class="">发送</p>
      </div>
      <p style="
      color:#AAAA;font-size: 1.2rem;
      text-indent: 1.6rem;text-align:left;
      line-height: 1.7rem;margin-top: .9rem;
      ">绑定后可直接使用手机登录</p>
      <div class="confirm col-lg-12"@click="confirm">确认</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      confirm(){
        alert("暂不支持")
      }
    }
  }
</script>

<style scoped lang="scss">
  #BindingCell{
    position: relative;
    .header{
      height: .58rem;
      p{
        width: .1rem;
        height: .16rem;
        margin: .18rem 0 0 .2rem;
      }
    }
    .logo{
      height: 1.37rem;
      p{
        width: .56rem;
        height: .77rem;
        margin: 0 auto;
      }
    }
    .steps{
      width: 67.8%;
      height: .51rem;
      margin: 0 auto;
    }
    .FromDate{
      height: 1.35rem;
      .xian{
        background-color: #DCDCDC;
        height: .01rem;
        margin-top: .51rem;
      }
      .Input{
        border-bottom: .1rem solid #DCDCDC;
        input{
          width: 85.5%;
          height: .62rem;
          float: left;
          border: none;
          text-indent: .2rem;
          line-height: .62rem;
        }
        input::placeholder{
          color: #7B7B7B;
          text-indent: .2rem;
          line-height: .62rem;
        }
        p{
          font-size: .25rem;
          /*float: right;*/
          line-height: .62rem;
          color: #7B7B7B;
          margin-right: .23rem;
        }
      }
      .Code{
        border-bottom: .01rem solid #DCDCDC;
        input{
          width: 65.5%;
          height: .62rem;
          /*float: left;*/
          border: none;
          text-indent: .1rem;
          line-height: .62rem;
        }
        input::placeholder{
          color: #7B7B7B;
          text-indent: .1rem;
          line-height: .62rem;
        }
        p{
          width: .73rem;
          height: .32rem;
          margin : .15rem .23rem .15rem 0rem;
          background-color: #D8D8D8;
          color: white;
          float: right;
          line-height: .32rem;
          text-align: center;
        }
      }
      .confirm{
        width: 100%;
        height: .45rem;
        background-color: #333333;
        color: white;
        line-height: .45rem;
        text-align: center;
        margin-top: .91rem;
      }
    }
  }
</style>
