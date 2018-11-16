import Vue from "vue";
import Vuex from "vuex";
import category from "./Home/store";
import cart from "./Cart/store";
import ClassIfication from './ClassIfication/store'
console.log(cart)
Vue.use(Vuex);

const store = new Vuex.Store({

  modules:{
    category,
    cart,
    ClassIfication
  }
})
export default store;
