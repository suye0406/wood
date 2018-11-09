<template>
  <div id="admin">
    <div class="header col-lg-12">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div style="width: 30vh;height: 5vh;margin-top: 2.5vh;margin-left: 10vh;">
              <img src="../../../static/img/二倍率icon切图/logo@2x.png" height="100%" width="100%"/>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">&nbsp;</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <el-row>
                    <el-col :span="5">
                      <div class="grid-content bg-purple">
                        <i class="el-icon-upload"></i>
                      </div>
                    </el-col>
                    <el-col :span="5">
                      <div class="grid-content bg-purple-light">
                        <i class="el-icon-message"></i>
                      </div>
                    </el-col>
                    <el-col :span="10">
                      <div class="grid-content bg-purple">
                        <el-row>
                          <el-col :span="8">
                            <div class="grid-content bg-purple">
                              <div class="pic"></div>
                            </div>
                          </el-col>
                          <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                              <i style="font-size: 3vh">{{name}}</i>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div style="margin: 3vh;"v-for="(item,index) in modify">
            <el-input :placeholder="item.id"class="Input"v-model="item.id"></el-input>
            <el-input :placeholder="item.commodityName"class="Input"v-model="item.commodityName"></el-input>
            <el-input :placeholder="item.notes"class="Input"v-model="item.notes"></el-input>
            <el-input :placeholder="item.colour.colour1"class="Input"v-model="item.colour.colour1"></el-input>
            <el-input :placeholder="item.type.type1"class="Input"v-model="item.type.type1"></el-input>
            <el-input :placeholder="item.price"class="Input"v-model="item.price"></el-input>
            <el-input :placeholder="item.number"class="Input"v-model="item.number"></el-input>
            <el-input :placeholder="item.classification"class="Input"v-model="item.classification"></el-input>
            <el-button type="success">点击修改</el-button>
            <el-button type="primary" data-dismiss="modal">关闭</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="col-lg-3"style="height: 100%;opacity: .7">
        <div class="sidebar">
          <div class="menu"v-for="item in title">
            <router-link :to="item.path">
              <div class="col-lg-3">
                <i :class="item.icon"style="color: white"></i>
              </div>
              <div class="col-lg-9">
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="col-lg-12">
          <table class="table table-condensed">
            <thead>
            <tr>
              <th v-for="(item,index) in classtitle">{{item}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in list">
              <th>{{item.id}}</th>
              <th>{{item.commodityName}}</th>
              <th>{{item.notes}}</th>
              <th>{{item.colour.colour1}}</th>
              <th>{{item.type.type1}}</th>
              <th>{{item.price}}</th>
              <th>{{item.number}}</th>
              <th>{{item.classification}}</th>
              <th>
                <el-button type="primary" style="padding: 0;"data-toggle="modal" data-target=".bs-example-modal-lg">修改</el-button>
                <el-button type="danger" style="padding: 0;">删除</el-button>
              </th>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        name:'苏雨辰',
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
            icon:'el-icon-upload2',
            path:'/404'
          },
        ],
        classtitle:[
          '#',
          '商品名称',
          '介绍',
          '颜色',
          '款型',
          '价格',
          '数量',
          '分类',
          '操作',
        ],
        list:[
          /*
          *   id  商品名称  注释    数量    价格    所属分类  款型  颜色
          */
          {
            id:'001',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
          },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'002',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'003',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'004',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'006',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'007',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'009',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'0010',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'0011',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'0012',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'0013',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'0014',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'0015',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'0016',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'0018',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'0019',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
          {
            id:'0020',
            commodityName:'画板咖啡几®－椭圆形',
            notes:'全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'白色',
              colour2:'胡桃木色',
              colour3:'木本色',
            },
            type:{
              type1:'椭圆形',
              type2:'胶囊型'
            },
            price:'1699',
            number:'100',
            classification:'书桌，餐桌',
          },
        ],
        modify:[
          {
            id:'商品编号 --- 001',
            commodityName:'商品名称 --- 画板咖啡几®－椭圆形',
            notes:'商品介绍 --- 全实木手感，朴素与端庄的客厅之选',
            colour:{
              colour1:'颜色 --- 白色',
              colour2:'颜色 --- 胡桃木色',
              colour3:'颜色 --- 木本色',
            },
            type:{
              type1:'款式 --- 椭圆形',
              type2:'款式 --- 胶囊型'
            },
            price:'价格 --- 1699',
            number:'数量 --- 100',
            classification:'分类 --- 书桌，餐桌',
          },
        ],
      }
    },
  }
</script>

<style scoped lang="scss">
  #admin{
    font-family: 楷体;
    height: 100vh;
    overflow: hidden;
    .header{
      height: 100vh - 90vh;
      /*background-color: #5bc0de;*/
      background: url("data:image/jpeg;base64,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")no-repeat;
      background-size: cover;
      .modal-content{
      }
      i{
        font-size: 5vh;
        line-height: 10vh;
        color: white;
      }
      .pic{
        width: 5vh;
        height: 5vh;
        background: white;
        line-height: 10vh;
        margin-top: 2.5vh;
        margin-left: 5vh;
        box-shadow: .1vh .1vh .5vh .5vh whitesmoke;
        border-radius: 10%;
        background: url("../../../static/img/banner/pic.jpg")no-repeat;
        background-size: cover;
      }
    }
    .content{
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: url("")no-repeat;
      background-size: cover;
      .sidebar{
        width: 100%;
        height: 100%;
        /*background-color: powderblue;*/
        background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541948739&di=174dacd0ddb521428202d44cb245cc1b&imgtype=jpg&er=1&src=http%3A%2F%2Fimg06.tooopen.com%2Fimages%2F20160718%2Ftooopen_sy_170729547931.jpg")no-repeat;
        background-size: cover;
        overflow: hidden;
        .menu{
          width: 100%;
          height: 8vh;
          /*background-color: #999999;*/
          border: .1vh solid white;
          border-right: 0vh solid;
          border-left: 0vh solid;
          margin: 3vh 0vh 3vh 0vh;
          i{
            font-size: 4vh;
            line-height: 8vh;
          }
          span{
            width: 3vh;
            height: 3vh;
            background-color: white;
            display: block;
            line-height: 8vh;
            margin-top: 2.5vh;
            margin-left: 6vh;
            /*background:url("../../../static/img/二倍率icon切图/home@2x.png")no-repeat;*/
            /*background-size: cover;*/
          }
          p{
            font-size: 3vh;
            line-height: 8vh;
            text-align: left;
            color: white;
          }
        }
      }
    }
    .Input{
      margin-bottom: 3vh;
    }
  }
</style>
