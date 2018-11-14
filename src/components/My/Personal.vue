<template>
    <div id="Personal" class="col-lg-12">
      <div style="height: .45rem;"class="col-lg-12">
        <span class="el-icon-arrow-left"style="font-size: .12rem;text-align: left;text-indent: .16rem;float: left;line-height: .45rem;"></span>
        <span style="font-size: .14rem;text-align: center;line-height: .45rem;margin-left: -.2rem;">个人资料</span>
      </div>
      <div style="height: .78rem;margin: 0 auto; width: 90%;display: flex;justify-content: space-between;border-bottom: .01rem solid #DCDCDC;"class=";">
        <div style="width: .6rem;height: .6rem;background-color: #c4e3f3;border-radius: 50%;line-height: .81rem;margin-top: .09rem;"></div>
        <div>
          <span style="color: #999999;line-height: .81rem;font-size: .12rem;">点击更换头像</span>
          <span class="el-icon-arrow-right"style="color: #999999;line-height: .81rem;font-size: .2rem;"></span>
        </div>
      </div>
      <div style="width: 90%;height: .78rem;border-bottom: #DCDCDC .01rem solid;margin: 0 auto;overflow:hidden;">
        <p style="line-height: .17rem;color: #DCDCDC;text-align: left;margin-top: .12rem;font-size: .12rem;">昵称</p>
        <p style="line-height: .17rem;text-align: left;margin-top: .12rem;font-size: .14rem;">{{name}}</p>
      </div>
      <div style="width: 90%;margin: 0 auto;height: .78rem;display: flex;justify-content: space-between;border-bottom: .01rem solid #DCDCDC;">
        <div style="">
          <p style="line-height: .17rem;color: #DCDCDC;text-align: left;margin-top: .12rem;font-size: .12rem;"@click="pars">生日</p>
          <p style="line-height: .17rem;color: #DCDCDC;text-align: left;margin-top: .12rem;font-size: .12rem;">点击设置</p>
        </div>
        <div>
          <span class="el-icon-arrow-right"style="color: #999999;line-height: .81rem;font-size: .2rem;"></span>
        </div>
      </div>
      <div style="width: 90%;margin: 0 auto;height: .78rem;display: flex;justify-content: space-between;border-bottom: .01rem solid #DCDCDC;">
        <div style="">
          <p style="line-height: .17rem;color: #DCDCDC;text-align: left;margin-top: .12rem;font-size: .12rem;"@click="sex">性别</p>
          <p style="line-height: .17rem;color: #DCDCDC;text-align: left;margin-top: .12rem;font-size: .12rem;">点击设置</p>
        </div>
        <div>
          <span class="el-icon-arrow-right"style="color: #999999;line-height: .81rem;font-size: .2rem;"></span>
        </div>
      </div>
      <span style="color: #DCDCDC;font-size: .1rem;text-align: left;float: left;width: 90%;margin: 0 auto;display: block;margin-left: .16rem;line-height: .3rem;">性别和生日设置后不可修改，请确认无误</span>
      <div style="width: 90%;background-color: black;color: white;line-height: .5rem;height: .5rem;margin:.39rem 0 0 .16rem;"@click="send">点击保存</div>
    </div>
</template>

<script>
    export default {
        name: "Personal",
      data(){
          return{
            name:'ᠬᠠᠢᠷ᠎ᠠ'
          }
      },
      methods:{
        pars(){
          console.log(1)
        },
        sex(){
          console.log(2)
        },
        send(){
          console.log(3)
        }
      }
    }
</script>

<style scoped lang="scss">

</style>
