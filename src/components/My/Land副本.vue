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
      <div class=""style="width: 67.8%;margin: 0 auto;">
        <!-- Swiper -->
        <div class="swiper-land">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <!--<form @submit.prevent="submit($event)">-->
              <form action="http://10.9.12.91:8080/user/login?"method="get">
                <p class="title">快捷登陆</p>
                <div>
                  <input type="text"placeholder="请输入手机号"class="username"v-model="username"name="username">
                </div>
                <div style="margin-bottom: 1.4rem;">&nbsp;</div>
                <div>
                  <input type="text"placeholder="请输入验证码"class="code"v-model="code">
                  <div class="btn-code"@click="vcode">发送验证码</div>
                </div>
                <input type="submit" value="登陆" class="submit"/>
              </form>
            </div>
            <div class="swiper-slide">
              <form action="http://10.9.12.91:8080/user/login?"method="get">
                <!--<input type="text" class="form-control" placeholder="请输入姓名" name="cuserName">-->
                <!--<input type="submit" value="立即注册" class="denglucon" />-->
                <p class="title">账号密码登陆</p>
                <div>
                  <input type="text"placeholder="请输入账号"class="username"v-model="username"name="username">
                </div>
                <div style="margin-bottom: 1.4rem;">&nbsp;</div>
                <div>
                  <input type="text"placeholder="请输入密码"class="code"v-model="code"style="width: 100%"name="password">
                </div>
                <input type="submit" value="登陆" class="submit"@click="land"/>
              </form>
            </div>
            <div class="swiper-slide">
              <form action="">
                <!--<input type="text" class="form-control" placeholder="请输入姓名" name="cuserName">-->
                <!--<input type="submit" value="立即注册" class="denglucon" />-->
                <p class="title">第三方登陆</p>
                <div>
                  <input type="text"placeholder="请输入QQ号"class="username"v-model="username">
                </div>
                <div style="margin-bottom: 1.4rem;">&nbsp;</div>
                <div>
                  <input type="text"placeholder="请输入密码"class="code"v-model="code"style="width: 100%;">
                </div>
                <input type="submit" value="登陆" class="submit"/>
              </form>
            </div>
            <div class="swiper-slide">
              <form action=""method="get">
                <!--<input type="text" class="form-control" placeholder="请输入姓名" name="cuserName">-->
                <!--<input type="submit" value="立即注册" class="denglucon" />-->
                <p class="title">快捷注册</p>
                <div>
                  <input type="text"placeholder="请输入手机号"class="username"v-model="username"name="username">
                </div>
                <div style="margin-bottom: 1.4rem;">&nbsp;</div>
                <div>
                  <input type="text"placeholder="请输入验证码"class="code"v-model="code">
                  <div class="btn-code"@click="vcode">发送验证码</div>
                </div>
                <input type="submit" value="注册" class="submit"/>
              </form>
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
      }
    },
    methods:{
        /*
      submit(event){
        var formData = new FormData(event.target);

        $.ajax({
          type: "post",
          action: 'https://jsonplaceholder.typicode.com/posts/',
          dataType: 'json',
          contentType: false,
          processData: false,
          data: formData,
          success: function (res) {
            if (res.status != 200) {
              alert(res.msg)
              return false;
            }
          }
        });
        */

        /*
        vcode(){
          axios.get('/a.php')
            .then((res) => {
              console.log(res.data, 'success')
            })
            .catch((err) => {
              console.log(err, 'error')
            })
        }
        */

        /*
        vcode(){
          axios({
            method:'get',
            url:''
          }).then(function(resp){
            console.log(resp.data);
          }).catch(resp => {
            console.log('请求失败：'+this.username+',');
          });
        },
      }
      */

        vcode(){
          //http://10.9.12.91:8080/user/login?username=18839700697&password=123456
          axios.get('http://10.9.12.91:8080/user/login',{
            params:{
              usernam:this.usernam,
            }
          })
            .then(resp => {
              console.log(resp.data);
            }).catch(err => {             //
            console.log('请求失败：'+this.username+',');
          });
        },
      land(){

      }
    },
    watch:{
      username(val){
        if (this.username == 11){
          console.log("改变username的class名");
        }
      },
      code(){
        if (this.code == 6){
          console.log("改变submit的class名");
        }
      }
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
        font-size: 1.8rem;
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
