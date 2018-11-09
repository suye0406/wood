<template>
  <div class="sidebar">
    <div class="menu"v-for="item in title"style="margin-top: 3vh;margin-bottom: 3vh;">
      <router-link :to="item.path"style="color: white;">
        <div class="col-lg-3"style="">
          <i :class="item.icon"style="color: white;font-size: 3vh;"></i>
        </div>
        <div class="col-lg-9">
          <p style="font-size: 3vh;">{{item.title}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sidebar",
      data(){
          return{
            title:[
              {
                title:'综合管理',
                icon:'el-icon-setting',
                path:'/404'
              },
              {
                title:'商品管理',
                icon:'el-icon-loading',
                path:'/404'
              },
              {
                title:'订单管理',
                icon:'el-icon-share',
                path:'/404'
              },
              {
                title:'发货管理',
                icon:'el-icon-view',
                path:'/404'
              },
              {
                title:'人员管理',
                icon:'el-icon-star-off',
                path:'/404'
              },
              {
                title:'客服管理',
                icon:'el-icon-service',
                path:'/404'
              },
              {
                title:'商品上传',
                icon:'uploading',
                path:'/404'
              },
            ],
          }
      }
    }
</script>

<style scoped>

</style>
