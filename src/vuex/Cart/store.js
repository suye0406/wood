


import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


const state = {
  cart:[
    {
      img:'../../../static/img/COFA精致沙发.d4fbc3f.png',
      it:'新品特惠',
      title:'飞鸟沙发',
      title2:'耸立木作，超大净坐宽，构建空间轮廓，来自日本KeijiAshizawa',
      title3:'2018-11-18',
      price:'6500',
      num:'1',
      style:[
        '单人座',
        '双人座',
        '三人座',
      ],
      color:[
        '白',
        '红',
        '蓝',
      ],

    },
  ],
  toggle:true,
  toggle3:false,
}

const mutations = {
  shop(state,params){
    state.cart.push({it:params});
    console.log( state.cart);
    // alert(2);
  },
  toggle1(state,params){
    state.toggle = false;
    console.log(state.toggle)
  }
}

const actions = {
  shop({commit},params){
    console.log(params);
    commit("shop",params);
  },
  toggle1({commit},params){
    commit("toggle1",params);
  },
}
const getters = {

}


export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,

};

/*
    getters:计算属性  数据放在缓存   只要state里面的数据发生改变那么getter里面的方法就会被执行

    辅助函数
        mapGetters()


    modules:模块   作用是将所以的数据进行模块的拆分 而不是放在一个store里面这样不方便管理

    注意在每个小模块导出的时候一定要去加命名空间 namespaced=true  这样就不会出现命名冲突
    如果想要调用小模块里面的方法  则需要加上小模块的名称
        例如
         handleAdd:"goodsStore/handleAdd"
*/
