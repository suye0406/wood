<template>
  <div id="land">
    <div class="header col-lg-12">
      <p>
        <img src="../../../static/img/二倍率icon切图/delete@2x.png" height="100%" width="100%"/></p>
    </div>
    <div class="logo col-lg-12">
      <p>
        <img src="../../../static/img/二倍率icon切图/logo2@2x.png" height="100%" width="100%"/></p>
    </div>
    <div class="formdata col-lg-12">
      <!-- Swiper -->
      <div class="swiper-land">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="">
            <div class=""style="width: 67.8%;margin: 0 auto;">
              <div>
                <p class="title"style="display: flex;justify-content: space-between"><span>快捷登陆</span><span style="font-size: 1.2rem;">⬅请左右滑动➡</span></p>
                <div>
                  <input type="text"placeholder="请输入手机号"class="username"v-model="username"@keyup="user">
                  <!--<span>{{use}}</span>-->
                </div>
                <div style="margin-bottom: 1.4rem;">&nbsp;</div>
                <div>
                  <input type="text"placeholder="请输入验证码"class="code"v-model="code">
                  <div class="btn-code"@click=""v-show="vco">发送验证码</div>
                  <div class="btn-code"@click="vcode"v-show="vc"style="border:.1rem solid black;color: black;">发送验证码</div>
                  <span style="position:absolute;right: 10rem;top: 14.5rem;display: none">{{num}}</span>
                </div>
                <input type="button" value="登陆" class="submit"@click=""style=""v-show="falg"/>
                <input type="button" value="登陆" class="submit"@click="kl"style="color: #fff;background-color: #409eff;border-color: #409eff;"v-show="fal"/>
              </div>
            </div>
          </div>
          <div class="swiper-slide" style="">
            <div class=""style="width: 67.8%;margin: 0 auto;">
              <div>
                <p class="title"style="display: flex;justify-content: space-between"><span>账号密码登陆</span><span style="font-size: 1.2rem;">⬅请左右滑动➡</span></p>
                <div>
                  <input type="text"placeholder="请输入手机号"class="username"v-model="username"@keyup="">
                </div>
                <div style="margin-bottom: 1.4rem;">&nbsp;</div>
                <div>
                  <input type="text"placeholder="请输入密码"class="code"v-model="password"style="width: 100%;">
                </div>
                <input type="button" value="登陆" class="submit"@click="land"/>
              </div>
            </div>
          </div>
          <div class="swiper-slide" style="">
            <div class=""style="width: 67.8%;margin: 0 auto;">
              <div>
                <p class="title"style="display: flex;justify-content: space-between"><span>快速注册</span><span style="font-size: 1.2rem;">⬅请左右滑动➡</span></p>
                <div>
                  <input type="text"placeholder="请输入手机号"class="username"v-model="username"@keyup="regis"style="margin-bottom: -1rem">
                </div>
                <div style="margin-bottom: 1.4rem;">&nbsp;</div>
                <div>
                  <input type="text"placeholder="请输入密码"class="code"v-model="password"style="width: 100%;margin-bottom: 1.5rem">
                </div>
                <div>
                  <input type="text"placeholder="请输入验证码"class="code"v-model="code"style="">
                  <div class="btn-code"@click="rcode"v-show="true">发送验证码</div>
                  <!--<div :class="btn-code"@click="vcode"style="border: .1rem solid black;">发送验证1码</div>-->
                  <span style="position:absolute;right: 10rem;top: 14.5rem;display: none">{{num}}</span>
                </div>
                <input type="button" value="注册" class="submit"@click="register"/>
              </div>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Swiper from 'swiper'
  import '../../../node_modules/swiper/dist/css/swiper.min.css'

  export default {
    data(){
      return{
        username:'',
        code:'',
        num:60,
        password:'',
        use:11,
        kl:'',
        falg:true,
        fal:false,
        vco:true,
        vc:false,
      }
    },
    methods:{
      user(){
        if (this.username == ""){
          this.falg = true;
          this.fal = false;
          this.vco = true;
          this.vc = false;
        } else {
          this.falg = false;
          this.fal = true;
          this.vco = false;
          this.vc = true;
        }
      },
      vcode(){
        console.log(this.username);
        axios({
          type : "get", //提交方式
          url : "http://10.9.12.91:8080/user/getcode?username="+this.username,
          success : function(result) {//返回数据根据结果进行相应的处理
            }
          });
      },
      land(){
        console.log(this.username,this.password);
        axios({
          type:"get",
          url: 'http://10.9.12.91:8080/user/login?username='+this.username+'?password='+this.password,
          success : function (result) {
            console.log(result);
          }
        })
      },

      rcode(){
        console.log(this.username)
        axios({
          type:"get",
          url : "http://10.9.12.91:8080/user/getcode?username="+this.username,
          success:function (result) {
            console.log(this.username)
          }
        })
      },
      register(){
        console.log(this.username,this.password,this.code)
        axios({
          type:"get",
          url : "http://10.9.12.91:8080/user/getcode?username="+this.username+'?password'+this.password+'?code='+this.code,
          success:function (result) {
            console.log(this.username)
            console.log(result)
          }
        })
      },
      regis(){
        //按下后判断
        if (this.username == /^1[34578]\d{9}$/){
          console.log(111)

        }
      }
    },
    watch:{
    },
    mounted(){
      var swiper = new Swiper('.swiper-land', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
  /*
   验证码登陆

   注册：  /user/register   参数 username password  code
   例 http://10.9.12.91:8080/user/register?username=18839700697&password=123456&code=680333

   获取验证码     /user/getcode  参数  username
   例  http://10.9.12.91:8080/user/getcode?username=18839700697

   账号密码登陆：/user/login  参数 username  password
   例 http://10.9.12.91:8080/user/login?username=18839700697&password=680333


   */
</script>

<style scoped lang="scss">
  #land{
    .header{
      height: 8.8rem;
      p{
        width: 1.32rem;
        height: 1.32rem;
        margin: 1.8rem 0 0 2rem;
      }
    }
    .logo{
      height: 13.7rem;
      p{
        width: 5.6rem;
        height: 7.7rem;
        margin: 0 auto;
      }
    }
    .formdata{
      height: 15.7rem;
      .title{
        margin-bottom: 3.8rem;
        font-size: 2rem;
        text-align: left;
      }
      .username{
        font-size: 1.2rem;
        line-height: 3.4rem;
        border-top: 0rem solid;
        border-left: 0rem solid;
        border-right: 0rem solid;
        border-bottom: .03rem solid #979797;
        width: 100%;
        text-align: left;
        float: left;
      }
      .username::placeholder{font-size: 1.2rem;
        line-height: 1.4rem;
        color: #999999;
      }
      .code{
        font-size: 1.2rem;
        line-height: 3.4rem;
        border-top: 0rem solid;
        border-left: 0rem solid;
        border-right: 0rem solid;
        border-bottom: .03rem solid #979797;
        width: 11.2rem;
        text-align: left;
        float: left;
      }
      .code::placeholder{font-size: 1.2rem;
        line-height: 1.4rem;
        color: #999999;
      }
      .btn-code{
        position: relative;
        width: 9.4rem;
        height: 4rem;
        border: #999999 solid .1rem;
        color: #999999;
        float: right;
        text-align: center;
        line-height: 4rem;
      }
      .btn-code2{
        width: 9.4rem;
        height: 4rem;
        border: #000000 solid .1rem;
        color: #000000;
        float: right;
        text-align: center;
        line-height: 4rem;
      }
      .submit{
        width: 100%;
        height: 3.5rem;
        background-color: #D8D8D8;
        margin-top: 2.1rem;
        color: white;
        border: 0rem solid;
      }
      .submit2{
        width: 100%;
        height: 3.5rem;
        background-color: #333333;
        margin-top: 2.1rem;
        color: white;
        border: 0rem solid;
      }
    }
  }
</style>
