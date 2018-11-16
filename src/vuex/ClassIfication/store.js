
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


const state = {
  list:[
    {
      banner:[
        {
          id:'1',
          img:'../../../static/img/banner/banner-1.png',
          title:'贝岛沙发升级版',
          title2:'如云柔软,给你不愿起身的柔软依靠',
          price:'4566',
          style:[
            '单人',
            '双人',
            '三人',
          ],
          color:[
            '白色',
            '蓝色',
            '红色',
          ],
          num:'1'
        },
      ],
      SoFaList: [
        {
          id:'2',
          img: '../../../static/img/产品图/沙发/单人沙发/COFA沙发.png',
          title:[
            'COFA沙发',

          ],
          title2:'如云柔软,给你不愿起身的柔软依靠',

          price:'4566',
          style:[
            '单人',
            '双人',
            '三人',
          ],
          color:[
            '白色',
            '蓝色',
            '红色',
          ],
          num:'1'
        },
      ]
    }
  ]
}
/*
     '../../../static/img/产品图/沙发/单人沙发/COFA精致沙发.png',
            '../../../static/img/产品图/沙发/三人沙发/COFA全幅沙发.png',
            '../../../static/img/产品图/沙发/三人沙发/大先生转角沙发.png',

               'COFA精致沙发',
            'COFA全幅沙发',
            '大先生转角沙发',

             '4516',
            '4526',
            '4596',
 */

const mutations = {

}

const actions = {

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
