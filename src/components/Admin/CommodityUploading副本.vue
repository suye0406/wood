
<template>
  <div id="uploading"class="col-lg-12"style="">
    <div class="header col-lg-12">
      <h1>WOOD</h1>
    </div>
    <!--1,商品名称，介绍，颜色（三种），款型（三种），价格，数量，分类，-->
    <div class="col-lg-5">
      <div class="cl col-lg-12">
        <div class="col-lg-12">
          <div class="" style="width:40%;margin-left: 20vh;margin-bottom: 1vh;">
            <el-input placeholder="请输入商品名称"v-model="name" style="opacity: .7;"></el-input>
          </div>
        </div>
        <div style="float: left;margin-left: 20vh">
          <el-radio-group v-model="radio1">
            <el-radio v-for="(item,index) in title":label="item.id"@click="item.id">
              <span>{{item.name}}</span>
            </el-radio>
          </el-radio-group>
          <div class="block"style="">
            <el-date-picker
              v-model="pubdate"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="cl col-lg-12">
        <div style="float: left;margin-left: 20vh">
          <el-radio-group v-model="radio2">
            <el-radio :label="4">红</el-radio>
            <el-radio :label="5">蓝</el-radio>
            <el-radio :label="6">绿</el-radio>
          </el-radio-group>
        </div>
        <div class="el-textarea"style="width: 40%;
    display: block;
    margin-left: 20vh;">
          <textarea autocomplete="off" class="el-textarea__inner" v-model="intro" style="min-height: 33px;"placeholder="请输入商品介绍20个字符"></textarea>
        </div>
      </div>
      <div class="cl col-lg-12"v-show="sofa">
        <div style="float: left;margin-left: 20vh">
          <el-radio-group v-model="radio3">
            <el-radio :label="7">单人</el-radio>
            <el-radio :label="8">双人</el-radio>
            <el-radio :label="9">三人</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="cl col-lg-12"v-show="table">
        <div style="float: left;margin-left: 20vh">
          <el-radio-group v-model="radio4">
            <el-radio :label=10>椭圆</el-radio>
            <el-radio :label="11">圆形</el-radio>
            <el-radio :label="12">长方形</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="cl col-lg-12"v-show="chair">
        <div style="float: left;margin-left: 20vh">
          <el-radio-group v-model="radio5">
            <el-radio :label="13">凳子</el-radio>
            <el-radio :label="14">休闲椅</el-radio>
            <el-radio :label="15">佐敦</el-radio>
          </el-radio-group>
        </div>
      </div>
    </div>
    <div class="col-lg-7">
    </div>
    <div class="col-lg-12">
      <div class="col-lg-1" style="margin-left: 20vh;margin-top: 5vh">
        <el-input v-model="price" placeholder="请输入价格"style="opacity: .7;"></el-input>
      </div>
      <div class="col-lg-0">
      </div>
    </div>
    <div class="col-lg-12">
      <el-upload
        action=""
        list-type="picture-card"
        style="float: left;margin-left: 20vh;margin-top: 5vh;opacity: .7">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog>
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div style="float: left;margin-left: 20vh;margin-top: 3vh;">
      <!--<el-button type="primary">取消</el-button>-->
      <el-button type="success"@click="send">提交</el-button>
    </div>
  </div>
</template>
<!--
1:沙发  2：桌几  3：椅凳
4：红   5：蓝   6：绿
7：单人  8：双人  9：三人
10:椭圆   11：圆形   12：长方型
13：凳子   14：休闲椅  15佐敦
价格：price
图片：dialogImageUrl
-->
<script>
  import axios from 'axios'

  export default {
    data(){
      return{
        radio1: 0,
        radio2: 0,
        radio3: 0,
        radio4: 0,
        radio5: 0,
        sofa:true,
        table:false,
        chair:false,
        dialogImageUrl:'',
        name:'',
        intro:'',
        price:'99.99',
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        pubdate: '',
        value2: '',
        title:'',
      };
    },
    methods:{
      1(){
        this.sofa = true;
        this.table = false;
        this.chair = false;
      },
      2(){
        this.sofa = false;
        this.table = true;
        this.chair = false;
      },
      3(){
        this.sofa = false;
        this.table = false;
        this.chair = true;
      },
      send(){
        console.log(this.title.id)
        axios({
          type : "get", //提交方式
          url : "http://10.9.12.46:8080/goods/addGoods?name="+this.name+'?intro='+this.intro+'?color='+this.radio4+'?price='+this.price+'?typeid='+this.title.idw+'?pubdate='+this.pubdate+'?img='+this.dialogImageUrl+'?style='+this.radio5,
          success : function(result) {//返回数据根据结果进行相应的处理
            console.log(result)
          }
        });
      },
    },
    created() {
      axios.get('http://10.9.12.98:8080/goodstype/goodstypelist?level=1').then(res=>{
        this.title = res.data.data
        console.log(this.title)
      }).catch(error=>console.log(error));
    }
  }
</script>

<style lang="scss" scoped>
  #uploading{
    overflow: hidden;
    .header{
      h1{
        color: white;
        font-weight: bold;
        text-align: left;
        text-indent: 10vh;
      }
    }
    background:url("http://imgsrc.baidu.com/imgad/pic/item/10dfa9ec8a136327c895810e9a8fa0ec08fac797.jpg")no-repeat;
    background-size: cover;
    height: 100%;
    .cl{
      margin-top: 3vh;
    }

    input[type="file"] {
      display: none;
    }
    .el-textarea {
      display: inline-block;
      width: 100%;
      vertical-align: bottom;
      font-size: 14px;
    }
    .el-textarea__inner {
      display: block;
      resize: vertical;
      padding: 5px 15px;
      line-height: 1.5;
      box-sizing: border-box;
      width: 100%;
      font-size: inherit;
      color: #606266;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
</style>

