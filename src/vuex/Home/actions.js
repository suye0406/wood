export default {
  jian({commit,state},params){
    // console.log(1)

    var index = -1;
      state.twosowingmap.map((item,i)=>{
      if(params === item.id){
        index = i;
      }
    })
    commit("jian",index);
  },
  jia({commit,state},params){
    // console.log(1)

    var index = -1;
    state.twosowingmap.map((item,i)=>{
      if(params === item.id){
        index = i;
      }
    })
    commit("jia",index);
  },
}
