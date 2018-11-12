<template>
  <div id="personnel"style="background-color: black;">
    <div class="content">
      <div class="col-lg-12"style=";
      background-size: cover;;height: 100%;">
        <div class="col-lg-12">
          <table class="table table-condensed">
            <thead>
            <tr style="overflow: hidden;">
              <th v-for="(item,index) in classtitle">{{item}}</th>
              <th>
                <!--<select style="border: 0rem solid;">-->
                  <!--<option>桌几</option>-->
                  <!--<option>沙发</option>-->
                  <!--<option>椅凳</option>-->
                <!--</select>-->
                <el-select v-model="value" placeholder="请输入选项" style="width: 30vh;height: -1vh;border-radius: 30%;">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in list"style="overflow: hidden;">
              <th>{{item.id}}</th>
              <th>{{item.name}}</th>
              <th>{{item.intro}}</th>
              <th>{{item.color}}</th>
              <th>{{item.style}}</th>
              <th>{{item.price}}</th>
              <th>{{item.num}}</th>
              <th></th>
              <!--<th>{{item.number}}</th>-->
              <!--<th>{{item.classification}}</th>-->
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
  import axios from 'axios'

  export default {
    data(){
      return{
        value:"",
        classtitle:[
          '#',
          '商品名称',
          '介绍',
          '颜色',
          '款型',
          '价格',
          '数量',
        ],
        list:[

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
        options: [{
          value: '选项1',
          label: '沙发'
        }, {
          value: '选项2',
          label: '桌几'
        }, {
          value: '选项3',
          label: '椅凳'
        },],
      }
    },
    created() {
      // axios.get('http://10.9.12.46:8080/goods/getGoodsDetailByNewTime').then(res=>{
      //   console.log(res.data.data);
      // }).catch(error=>console.log(error));

      axios.get('http://localhost:8080/goods/getGoodsListByTypeId?typeid=1').then(res=>{
        this.list = res.data.data
        console.log(this.list)
      }).catch(error=>console.log(error));
    },
  }
</script>

<style lang="scss">
  #personnel{
  }
</style>
