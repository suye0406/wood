import Vue from "vue";
import Vuex from "vuex";
import category from "./Home/store";
import cart from "./Cart/store";
Vue.use(Vuex);
const store = new Vuex.Store({

  modules:{
    category,
    cart
  }
})
export default store;
