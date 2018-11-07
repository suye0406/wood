<template>
  <div id="startPage"class="col-lg-12">
    <transition>
      <div class="start col-lg-12"style="">
      <div class="logo1">
        <img src="../../static/img/二倍率icon切图/starpage@2x.png" height="154" width="112"/>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    created(){
      this.logo()
    },
    methods:{
      logo(){
        setTimeout(function () {
          console.log(1);
          location.href = '#/home'
        },2000)
      },
      route(){

      }
    },
  }
</script>

<style scoped lang="scss">
  #startPage{
    height: 100%;
    overflow: hidden;
    .start{
      height: 100%;
      overflow: hidden;
      background-color:#DCDCDC;
      .logo1{
        width: auto;
        height: auto;
        margin-top: 32.7%;
        /*margin-bottom: 4.6%;*/
      }
      .logo2{
        width: auto;
        height: auto;
      }
    }

  }
</style>
