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
</template>

<script>
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
