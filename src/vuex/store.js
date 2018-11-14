// import Vue from 'vue'
// import Vuex,{Store} from 'vuex'
//
// Vue.use(Vuex);
//
// var store = new Store({
//   state: {
//
//   }
// });
//
// export default store;

import Vue from "vue";
import Vuex from "vuex";
import category from "./Home/store";
Vue.use(Vuex);
const store = new Vuex.Store({

  modules:{
    category
  }
})
export default store;
