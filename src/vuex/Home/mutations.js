export default {
  jian(state,params){
    if(state.twosowingmap[params].num > 1){
      state.twosowingmap[params].num --;
    }
  },
  jia(state,params){
    if(state.twosowingmap[params].num < 9){
      state.twosowingmap[params].num ++;
    }
  }
}
