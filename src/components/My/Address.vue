<<<<<<< HEAD
<!--<template>-->
<!--<div>-->
<!--<p id="shengshi"v-show="togl"><mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker></p>-->
	<!--<div id="conter">-->
		<!--<div id="header_h">-->
			<!--<div id="header"></div>-->
		<!--</div>-->
		<!--<div id="center">-->
			<!--<div id="add">-->
				<!--<router-link to="/my"><i class="iconfont">&#xe64b;</i></router-link>-->
				<!--<p class="add_address">添加新的收货地址</p>-->
			<!--</div>-->
			<!--<hr />-->
			<!--<div id="message">-->
				<!--<p class="person">个人信息</p>-->
				<!--<h4 class="person_good">收货人:<input class="in" type="text"/></h4>-->
			<!--</div>-->
			<!--<hr />-->
			<!--<div id="phone">-->
				<!--<div id="haoma">-->
					<!--<h4 class="phone_one">手机号码:<input class="phone_in" type="text"/></h4>-->
				<!--</div>-->
				<!--<div id="weizhi">-->
					<!--<p class="get_goods">收货地址</p>-->
					<!--<p class="get_address"><i class="iconfont">&#xe61b;</i>自动定位</p>-->
				<!--</div>-->
			<!--</div>-->
			<!--<div id="diqu">-->
				<!--<div id="diqu_one">-->
					<!--<p class="qu" @click="handleToggle">地区:</p>-->
					<!--<p class="sheng"><span>{{s}}</span> <span>{{shi}} </span> <span>{{qu}}</span></p>-->
				<!--</div>-->
			<!--</div>-->
			<!--<hr />-->
			<!--<div id="detailed">-->
				<!--<p class="detailed_di">详细地址:</p> <input class="inp" type="text" placeholder="街道编号/名称,楼宇地址" />-->
			<!--</div>-->
			<!--<hr>-->
			<!--<div id="moren">-->
				<!--<input class="anniu" type="checkbox" />-->
				<!--<p class="moren_di">设为默认地址</p>-->
			<!--</div>-->
		<!--</div>-->
		<!--<div id="footer">-->
			<!--<router-link to="/SaveAddress">-->
				<!--<p class="save">保存并使用</p>-->
			<!--</router-link>-->
		<!--</div>-->
		<!--&lt;!&ndash;<transition name="slide">-->
			<!--<tab-com v-show="show"></tab-com>-->
		<!--</transition>-->
		<!--<transition name="fade">-->
			<!--<mark-com v-show="show"></mark-com>-->
		<!--</transition>&ndash;&gt;-->
	<!--</div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
	<!--import { Picker } from 'mint-ui';-->
	<!--import axios from "axios";-->
	<!--import myaddress from "../../../static/js/data";-->
	<!--export default {-->
		<!--data() {-->
			<!--return {-->
				<!--s:"",-->
				<!--shi:"",-->
				<!--qu:"",-->
        <!--togl:false,-->
				<!--myAddressSlots: [{-->
						<!--flex: 1,-->
						<!--defaultIndex: 1,-->
						<!--values: Object.keys(myaddress), //省份数组-->
						<!--className: 'slot1',-->
						<!--textAlign: 'center'-->
					<!--}, {-->
						<!--divider: true,-->
						<!--content: '-',-->
						<!--className: 'slot2'-->
					<!--}, {-->
						<!--flex: 1,-->
						<!--values: [],-->
						<!--className: 'slot3',-->
						<!--textAlign: 'center'-->
					<!--},-->
					<!--{-->
						<!--divider: true,-->
						<!--content: '-',-->
						<!--className: 'slot4'-->
					<!--},-->
					<!--{-->
						<!--flex: 1,-->
						<!--values: [],-->
						<!--className: 'slot5',-->
						<!--textAlign: 'center'-->
					<!--}-->
				<!--]-->
			<!--}-->
		<!--},-->
		<!--components: {-->
			<!--"mt-Picker": Picker-->
		<!--},-->
		<!--methods: {-->
			<!--provice() {-->

				<!--var info = [-->

				<!--]-->

				<!--console.log(info)-->
			<!--},-->
			<!--handleToggle(){-->
				<!--this.togl =! this.togl;-->
			<!--},-->
			<!--onMyAddressChange(picker, values) {-->
				<!--if(myaddress[values[0]]) { //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）-->
					<!--picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组-->
					<!--picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组-->
					<!--this.s = values[0]-->
					<!--this.shi = values[1]-->
					<!--this.qu = values[2]-->
				<!--}-->
			<!--},-->
		<!--},-->
		<!--create() {-->
			<!--axios({-->
				<!--methods: "post",-->
				<!--url: "/address/getaddresslist",-->
			<!--}).then((data) => {-->
				<!--console.log(data)-->
			<!--})-->
		<!--}-->
	<!--}-->
<!--</script>-->

<!--<style>-->
	<!--* {-->
		<!--margin: 0 auto;-->
	<!--}-->

	<!--#conter {-->
		<!--width: 100%;-->
		<!--height: 100%;-->
		<!--background: white;-->
		<!--display: flex;-->
		<!--flex-direction: column;-->
	<!--}-->

	<!--#header_h {-->
		<!--width: 100%;-->
		<!--height: 20px;-->
		<!--background: white;-->
	<!--}-->

	<!--#center {-->
		<!--width: 100%;-->
		<!--background: white;-->
		<!--overflow: auto;-->
		<!--flex: 1;-->
	<!--}-->

	<!--#header {-->
		<!--width: 100%;-->
		<!--height: 20px;-->
		<!--background: #D8D8D8;-->
	<!--}-->

	<!--#add {-->
		<!--width: 100%;-->
		<!--height: 45px;-->
		<!--background: white;-->
		<!--text-align: center;-->
		<!--line-height: 45px;-->
		<!--font-size: 18px;-->
		<!--font-weight: bold;-->
		<!--font-family: PingFangSC-Medium;-->
	<!--}-->

	<!--.iconfont {-->
		<!--width: 10px;-->
		<!--height: 16px;-->
		<!--color: #000000;-->
		<!--float: left;-->
		<!--margin-left: 10px;-->
	<!--}-->

	<!--#message {-->
		<!--width: 100%;-->
		<!--height: 105px;-->
		<!--background: white;-->
	<!--}-->

	<!--.person {-->
		<!--font-size: 14px;-->
		<!--color: #9B9B9B;-->
		<!--margin: 28px 0px 57px 17px-->
	<!--}-->

	<!--.person_good {-->
		<!--font-size: 16px;-->
		<!--color: #000000;-->
		<!--margin: 18px 0px 18px 17px-->
	<!--}-->

	<!--.person_good>.in {-->
		<!--border: none;-->
	<!--}-->

	<!--#phone {-->
		<!--width: 100%;-->
		<!--height: 168px;-->
		<!--background: white;-->
	<!--}-->

	<!--.phone_in {-->
		<!--border: none;-->
	<!--}-->

	<!--.phone_one {-->
		<!--font-size: 16px;-->
		<!--color: #000000;-->
		<!--margin: 18.5px 0px 125px 17px-->
	<!--}-->

	<!--#haoma {-->
		<!--width: 100%;-->
		<!--height: 91.5px;-->
		<!--background: white;-->
	<!--}-->

	<!--#weizhi {-->
		<!--display: flex;-->
		<!--justify-content: space-between;-->
		<!--width: 100%;-->
		<!--height: 20px;-->
		<!--background: white;-->
	<!--}-->

	<!--#weizhi .iconfont {-->
		<!--color: #9B9B9B;-->
		<!--float: left;-->
		<!--margin-right: 5px;-->
	<!--}-->

	<!--#diqu {-->
		<!--width: 100%;-->
		<!--height: 54px;-->
		<!--background: white;-->
	<!--}-->

	<!--.get_goods {-->
		<!--margin-left: 17px;-->
		<!--color: #9B9B9B;-->
		<!--font-size: 14px;-->
	<!--}-->

	<!--.get_address {-->
		<!--margin-right: 16px;-->
		<!--color: #9B9B9B;-->
		<!--font-size: 14px;-->
	<!--}-->

	<!--#diqu_one {-->
		<!--display: flex;-->
	<!--}-->

	<!--#diqu_one>.qu {-->
		<!--margin: 16px 25px 16px 17px;-->
		<!--color: #000000;-->
		<!--font-size: 16px;-->
	<!--}-->

	<!--#diqu_one>.sheng {-->
		<!--margin-top: 16px;-->
		<!--color: #9B9B9B;-->
		<!--font-size: 14px;-->
	<!--}-->

	<!--#detailed {-->
		<!--display: flex;-->
		<!--width: 100%;-->
		<!--height: 54.5px;-->
		<!--background: white;-->
	<!--}-->

	<!--.detailed_di {-->
		<!--margin-left: 17px;-->
		<!--margin-top: 16.5px;-->
		<!--color: #000000;-->
		<!--font-size: 16px;-->
	<!--}-->

	<!--.inp {-->
		<!--border: none;-->
	<!--}-->

	<!--#moren {-->
		<!--display: flex;-->
		<!--width: 100%;-->
		<!--height: auto;-->
		<!--background: white;-->
	<!--}-->

	<!--.moren_di {-->
		<!--margin: 17.5px 0px 188px 16px;-->
		<!--color: #000000;-->
		<!--font-size: 14px;-->
	<!--}-->

	<!--#moren>.anniu {-->
		<!--margin-top: 17.5px;-->
		<!--margin-left: 17px;-->
	<!--}-->

	<!--#footer {-->
		<!--width: 100%;-->
		<!--height: 50px;-->
		<!--background: #000000;-->
		<!--display: flex;-->
		<!--text-align: center;-->
		<!--justify-content: center;-->
	<!--}-->

	<!--.save {-->
		<!--color: #FFFFFF;-->
		<!--font-size: 16px;-->
		<!--line-height: 50px;-->
	<!--}-->
  <!--#shengshi{-->

  <!--}-->

<!--</style>-->
<template>
  <div id="conter">
    <div id="header_h">
      <div id="header"></div>
    </div>
    <div id="center">
      <div id="add">
        <router-link to="/my"><i class="iconfont">&#xe64b;</i></router-link>
        <p class="add_address" >添加新的收货地址</p>
      </div>
      <hr />

      <!--收货人姓名-->
      <div id="message">
        <p class="person">个人信息</p>
        <h4 v-on:click="verifyName" class="person_good" >收货人:<input class="in" type="text"  placeholder="请输入您的姓名"  v-model="consignee_one" ></h4>
      </div>x2
      <hr />

      <!--收货人手机号-->
      <div id="phone_phone">
        <div id="haoma">
          <h4 v-on:click="verifyPhone" class="phone_one" >手机号码:<input class="phone_in" type="text"  placeholder="请输入您手机号" v-model="phone_one1"/></h4>
        </div>
        <div id="weizhi">
          <p class="get_goods">收货地址</p>
          <p class="get_address"><i class="iconfont">&#xe61b;</i>自动定位</p>
        </div>
      </div>

      <!--收货人省市地区-->
      <div id="diqu">
        <div id="diqu_one">
          <p class="qu">地区:</p>
          <p class="sheng"  @click="handleToggle">
            <span>{{s}}</span>
            <span>{{shi}} </span>
            <span>{{qu}}</span>
          </p>
        </div>
      </div>
      <hr />

      <!--收货人详细地址-->
      <div id="detailed">
        <p class="detailed_di">详细地址:</p>
        <input v-model="address_one" class="inp" type="text" placeholder="街道编号/名称,楼宇地址" />
      </div>
      <hr>
      <div id="moren">
        <input class="anniu" type="checkbox" />
        <p class="moren_di">设为默认地址</p>
      </div>
      <hr>
    </div>

    <!--省 市 区-->
    <p id="shengshi" v-show="toggle">
      <mt-picker :slots="myAddressSlots" @change="onMyAddressChange">
      </mt-picker>
    </p>

    <!--底部-->
    <div id="footer">
      <p class="save" @click="handleAdd">保存并使用</p>
    </div>
  </div>
=======
<template>
<div>
<p id="shengshi"v-show="togl"><mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker></p>
	<div id="conter">
		<div id="header_h">
			<div id="header"></div>
		</div>
		<div id="center">
			<div id="add">
				<router-link to="/my"><i class="iconfont">&#xe64b;</i></router-link>
				<p class="add_address">添加新的收货地址</p>
			</div>
			<hr />
			<div id="message">
				<p class="person">个人信息</p>
				<h4 class="person_good">收货人:<input class="in" type="text"/></h4>
			</div>
			<hr />
			<div id="phone">
				<div id="haoma">
					<h4 class="phone_one">手机号码:<input class="phone_in" type="text"/></h4>
				</div>
				<div id="weizhi">
					<p class="get_goods">收货地址</p>
					<p class="get_address"><i class="iconfont">&#xe61b;</i>自动定位</p>
				</div>
			</div>
			<div id="diqu">
				<div id="diqu_one">
					<p class="qu" @click="handleToggle">地区:</p>
					<p class="sheng"><span>{{s}}</span> <span>{{shi}} </span> <span>{{qu}}</span></p>
				</div>
			</div>
			<hr />
			<div id="detailed">
				<p class="detailed_di">详细地址:</p> <input class="inp" type="text" placeholder="街道编号/名称,楼宇地址" />
			</div>
			<hr>
			<div id="moren">
				<input class="anniu" type="checkbox" />
				<p class="moren_di">设为默认地址</p>
			</div>
		</div>
		<div id="footer">
			<router-link to="/SaveAddress">
				<p class="save">保存并使用</p>
			</router-link>
		</div>
		<!--<transition name="slide">
			<tab-com v-show="show"></tab-com>
		</transition>
		<transition name="fade">
			<mark-com v-show="show"></mark-com>
		</transition>-->
	</div>
</div>
>>>>>>> 031ea67665af0078ae4b4a7f12785d3e1eb91e13
</template>
<script>
<<<<<<< HEAD
  import Vuex from 'vuex';
  import { Toast } from 'mint-ui';
  import { Picker } from 'mint-ui';
  import axios from "axios";
  import myaddress from '../../../static/js/data';
  export default {
    data() {
      return {
        s:"北京市",
        shi:"通州区",
        qu:"九棵树",

        //收货人信息    号码  收货人  地区  详细地址
        consignee_one:"",
        phone_one1:"",
        area_one:"",
        address_one:"",

        toggle:false,
        myAddressSlots: [{
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        },
          {
            divider: true,
            content: '-',
            className: 'slot4'
          },
          {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'center'
          }
        ]
      }
    },
    components: {
      "mt-Picker": Picker
    },
    watch:{
      phone(newVal){
        this.phone_one1=newVal;
      },
      consignee(newVal){
        this.consignee_one=newVal;
      },
      area(newVal){
        this.area_one=newVal;
      },
      address(newVal){
        this.address_one=newVal;
      }
    },
//  created(){
//			this.phone_one1=this.phone;
//			this.consignee_one=this.consignee;
//			this.area_one=this.area;
//			this. address_one=this.address;
//		},
//  computed: {
//			...Vuex.mapState({
//				phone:state=>state.goodsStore.phone,
//				consignee:state=>state.goodsStore.consignee,
//				area:state=>state.goodsStore.area,
//				address:state=>state.goodsStore.address
//			})
//		},
    methods: {
      handleAdd(){
        // alert(this.consignee_one)
        // alert(this. phone_one1)
        // alert(this.area_one)
        // alert(this.address_one)
        alert(this.s)
      },
      ...Vuex.mapActions({
        handleChange:"goodsStore/handleChange"
      }),
      handleToggle(){
        this.toggle =! this.toggle;
      },
      verifyName(){
        var reg = /^[\u0391-\uFFE5A-Za-z]+$/;
        if (this.consignee_one == "") {
          alert("您的姓名不能为空")
        }else{
          alert("输入成功")
        }
      },
      verifyPhone(){
        this.verifyShow=!this.verifyShow;
        var reg=11&& /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        var phone_one1 = this.phone_one1;
        if(!phone_one1){//未输入手机号
          Toast("请输入手机号码");
          return;
        }
        if(!reg.test(phone_one1)){//手机号不合法
          Toast("您输入的手机号码不合法，请重新输入");
        }
      },
      onMyAddressChange(picker, values) {
        if(myaddress[values[0]]) { //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
          picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
          picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
          this.s = values[0]
          this.shi = values[1]
          this.qu = values[2]
        }
      },
    },
    create() {

    }
  }
</script>

<style scoped>
  * {
    margin: 0 auto;
  }

  #conter {
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
  }

  #header_h {
    width: 100%;
    height: 0.2rem;
    background: white;
  }

  #center {
    width: 100%;
    background: white;
    overflow: auto;
    flex: 1;
  }

  #header {
    width: 100%;
    height: 0.2rem;
    background: #D8D8D8;

  }

  #add {
    width: 100%;
    height: 0.45rem;
    background: white;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.18rem;
    font-weight: bold;
    font-family: PingFangSC-Medium;
  }

  .iconfont {
    width: .1rem;
    height: .16rem;
    color: #000000;
    float: left;
    margin-left: .10rem;
  }

  #message {
    width: 100%;
    height: 1.05rem;
    background: white;
  }

  .person {
    font-size: .14rem;
    color: #9B9B9B;
    margin: 0.28rem 0px 0.57rem 0.17rem
  }

  .person_good {
    font-size: .16rem;
    color: #000000;
    margin: .18rem 0rem .18rem .17rem
  }

  .person_good>.in {
    border: none;
  }

  #phone_phone {
    width: 100%;
    height: 1.68rem;
    background: white;
  }

  .phone_in {
    border: none;
  }

  .phone_one {
    font-size: .16rem;
    color: #000000;
    margin: .185rem 0rem 1.25rem .17rem
  }

  #haoma {
    width: 100%;
    height: 0.915rem;
    background: white;
  }

  #weizhi {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 0.20rem;
    background: white;
  }

  #weizhi .iconfont {
    color: #9B9B9B;
    float: left;
    margin-right: 0.05rem;
  }

  #diqu {
    width: 100%;
    height: 0.54rem;
    background: white;
  }

  .get_goods {
    margin-left: 0.17rem;
    color: #9B9B9B;
    font-size: .14rem;
  }

  .get_address {
    margin-right: .16rem;
    color: #9B9B9B;
    font-size: .14rem;
  }

  #diqu_one {
    display: flex;
  }

  #diqu_one>.qu {
    margin: .16rem .25rem .16rem .17rem;
    color: #000000;
    font-size: .16rem;
  }

  #diqu_one>.sheng {
    margin-top: .16rem;
    color: #9B9B9B;
    font-size: .14rem;
  }

  #detailed {
    display: flex;
    width: 100%;
    height: .545rem;
    background: white;
  }

  .detailed_di {
    margin-left: .17rem;
    margin-top: .165rem;
    color: #000000;
    font-size: .16rem;
  }

  .inp {
    border: none;
  }

  #moren {
    display: flex;
    width: 100%;
    height: auto;
    background: white;
  }

  .moren_di {
    margin: .175rem 0rem 1.88rem .16rem;
    color: #000000;
    font-size: .14rem;
  }

  #moren>.anniu {
    margin-top: .175rem;
    margin-left: .17rem;
  }

  #footer {
    width: 100%;
    height: .50rem;
    background: #000000;
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .save {
    color: #FFFFFF;
    font-size: .16rem;
    line-height: .50rem;
  }

  #shengshi{
    background: #D8D8D8;
    width:100%;
  }
</style>

=======
	import { Picker } from 'mint-ui';
	import axios from "axios";
	import myaddress from "../../../static/js/data";
	export default {
		data() {
			return {
				s:"",
				shi:"",
				qu:"",
        togl:false,
				myAddressSlots: [{
						flex: 1,
						defaultIndex: 1,
						values: Object.keys(myaddress), //省份数组
						className: 'slot1',
						textAlign: 'center'
					}, {
						divider: true,
						content: '-',
						className: 'slot2'
					}, {
						flex: 1,
						values: [],
						className: 'slot3',
						textAlign: 'center'
					},
					{
						divider: true,
						content: '-',
						className: 'slot4'
					},
					{
						flex: 1,
						values: [],
						className: 'slot5',
						textAlign: 'center'
					}
				]
			}
		},
		components: {
			"mt-Picker": Picker
		},
		methods: {
			provice() {

				var info = [

				]

				console.log(info)
			},
			handleToggle(){
				this.togl =! this.togl;
			},
			onMyAddressChange(picker, values) {
				if(myaddress[values[0]]) { //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
					picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
					picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
					this.s = values[0]
					this.shi = values[1]
					this.qu = values[2]
				}
			},
		},
		create() {
			axios({
				methods: "post",
				url: "/address/getaddresslist",
			}).then((data) => {
				console.log(data)
			})
		}
	}
</script>

<style>
	* {
		margin: 0 auto;
	}

	#conter {
		width: 100%;
		height: 100%;
		background: white;
		display: flex;
		flex-direction: column;
	}

	#header_h {
		width: 100%;
		height: 20px;
		background: white;
	}

	#center {
		width: 100%;
		background: white;
		overflow: auto;
		flex: 1;
	}

	#header {
		width: 100%;
		height: 20px;
		background: #D8D8D8;
	}

	#add {
		width: 100%;
		height: 45px;
		background: white;
		text-align: center;
		line-height: 45px;
		font-size: 18px;
		font-weight: bold;
		font-family: PingFangSC-Medium;
	}

	.iconfont {
		width: 10px;
		height: 16px;
		color: #000000;
		float: left;
		margin-left: 10px;
	}

	#message {
		width: 100%;
		height: 105px;
		background: white;
	}

	.person {
		font-size: 14px;
		color: #9B9B9B;
		margin: 28px 0px 57px 17px
	}

	.person_good {
		font-size: 16px;
		color: #000000;
		margin: 18px 0px 18px 17px
	}

	.person_good>.in {
		border: none;
	}

	#phone {
		width: 100%;
		height: 168px;
		background: white;
	}

	.phone_in {
		border: none;
	}

	.phone_one {
		font-size: 16px;
		color: #000000;
		margin: 18.5px 0px 125px 17px
	}

	#haoma {
		width: 100%;
		height: 91.5px;
		background: white;
	}

	#weizhi {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 20px;
		background: white;
	}

	#weizhi .iconfont {
		color: #9B9B9B;
		float: left;
		margin-right: 5px;
	}

	#diqu {
		width: 100%;
		height: 54px;
		background: white;
	}

	.get_goods {
		margin-left: 17px;
		color: #9B9B9B;
		font-size: 14px;
	}

	.get_address {
		margin-right: 16px;
		color: #9B9B9B;
		font-size: 14px;
	}

	#diqu_one {
		display: flex;
	}

	#diqu_one>.qu {
		margin: 16px 25px 16px 17px;
		color: #000000;
		font-size: 16px;
	}

	#diqu_one>.sheng {
		margin-top: 16px;
		color: #9B9B9B;
		font-size: 14px;
	}

	#detailed {
		display: flex;
		width: 100%;
		height: 54.5px;
		background: white;
	}

	.detailed_di {
		margin-left: 17px;
		margin-top: 16.5px;
		color: #000000;
		font-size: 16px;
	}

	.inp {
		border: none;
	}

	#moren {
		display: flex;
		width: 100%;
		height: auto;
		background: white;
	}

	.moren_di {
		margin: 17.5px 0px 188px 16px;
		color: #000000;
		font-size: 14px;
	}

	#moren>.anniu {
		margin-top: 17.5px;
		margin-left: 17px;
	}

	#footer {
		width: 100%;
		height: 50px;
		background: #000000;
		display: flex;
		text-align: center;
		justify-content: center;
	}

	.save {
		color: #FFFFFF;
		font-size: 16px;
		line-height: 50px;
	}
  #shengshi{

  }

</style>
>>>>>>> 031ea67665af0078ae4b4a7f12785d3e1eb91e13
