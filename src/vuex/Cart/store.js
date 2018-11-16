


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
  shoop:[],
  toggle:true,
  toggle3:false,
}

const mutations = {
  shop(state,params){
    // state.cart.push({it:params});
    console.log( state.cart);
    // alert(2);
  },
  toggle1(state,params){
    state.toggle = false;
    state.toggle3 = true;
    // console.log(state.toggle,state.toggle3)
  },
  toggle2(state,params){
    state.toggle3 = false;
    state.toggle = true;
    console.log(state.toggle3,state.toggle)
  },
  Addcart(state,params){
    state.shoop.push(params);
    console.log(state.shoop)
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
  toggle2({commit},params){
    commit("toggle2",params)
  },
  Addcart({commit},params){
    commit("Addcart",params);
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
