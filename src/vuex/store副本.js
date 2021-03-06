import Vue from 'vue'
import Vuex,{Store} from 'vuex'

Vue.use(Vuex);

var store = new Store({
  state: {
    twosowingmap:[
      {
        img:'../../../static/img/Popular/popular-1.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
      {
        img:'../../../static/img/Popular/popular-2.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
      {
        img:'../../../static/img/Popular/popular-3.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
      {
        img:'../../../static/img/Popular/popular-4.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
      {
        img:'../../../static/img/Popular/popular-5.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
      {
        img:'../../../static/img/Popular/popular-6.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
    ],
    newmap:[
      {
        img:'../../../static/img/newmap/new-1.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
      {
        img:'../../../static/img/newmap/new-2.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
      {
        img:'../../../static/img/newmap/new-3.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
      {
        img:'../../../static/img/newmap/new-4.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
      {
        img:'../../../static/img/newmap/new-5.jpeg',
        title:'飞鸟沙发',
        price:'2185',
        content:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
        path:'/404',
      },
    ],
    all:[
      {
        img:'../../../static/img/banner/沙发.jpeg',
        three:'三人',
        double:'双人',
        single:'单人',
        person:'大三人',
        more:'更多',
        title:'沙发 SOFA',
        path:'/404',
      },
    ],
    allpic:[
      {
        img:'../../../static/img/产品图/沙发/大三人沙发/竖琴全幅沙发.png',
        title:'竖琴全幅沙发',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/沙发/三人沙发/贝岛沙发.png',
        title:'贝岛沙发',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/沙发/双人沙发/云团沙发.png',
        title:'云团沙发',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/沙发/单人沙发/云团沙发.png',
        title:'云团沙发',
        path:'/404',
      }
    ],
    allTable:[
      {
        img:'../../../static/img/banner/桌几.jpeg',
        three:'书桌.餐桌',
        double:'茶几',
        single:'边几',
        // person:'大三人',
        // more:'更多',
        title:'桌几 TABLE',
        path:'/404',
      },
    ],
    allTablepic:[
      {
        img:'../../../static/img/产品图/桌几/书桌餐桌/瓦雀长桌.jpeg',
        title:'瓦雀长桌',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/桌几/书桌餐桌/瓦檐餐桌.jpeg',
        title:'瓦檐餐桌',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/桌几/书桌餐桌/瓦檐长餐桌.jpeg',
        title:'瓦檐长餐桌',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/桌几/书桌餐桌/画板长桌.jpeg',
        title:'画板长桌',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/桌几/茶几/画板咖啡几胶囊形.jpeg',
        title:'画板咖啡几胶囊形',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/桌几/边几/空几.jpeg',
        title:'空几',
        path:'/404',
      }
    ],

    allBandeng:[
      {
        img:'../../../static/img/banner/椅凳.jpeg',
        three:'座椅',
        double:'佐敦',
        single:'休闲椅',
        person:'凳子',
        // more:'更多',
        title:'椅凳SEATING',
        path:'/404',
      },
    ],
    allBandengpic:[
      {
        img:'../../../static/img/产品图/沙发/沙发墩/软糖短脚沙发.jpeg',
        title:'软糖短脚沙发',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/沙发/沙发墩/软糖沙发.jpeg',
        title:'软糖沙发',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/椅凳/凳子/瓦檐实木凳.jpeg',
        title:'瓦檐实木凳.jpeg',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/椅凳/休闲椅/西竹躺椅.jpeg',
        title:'西竹躺椅',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/椅凳/休闲椅/鸳鸯躺椅.jpeg',
        title:'鸳鸯躺椅',
        path:'/404',
      },
      {
        img:'../../../static/img/产品图/椅凳/座椅/弓椅.jpeg',
        title:'弓椅',
        path:'/404',
      }
    ]
  }
});

export default store;
