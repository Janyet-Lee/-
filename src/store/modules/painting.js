export default{
  state:{
    num:0
  },
  mutations:{
    paintingNum:function(state,n){
      state.num = n;
    },
    paintingincrease:function(state){
      state.num++;
    },
    paintingdecrease:function(state){
      if(state.num!==0){
      state.num--;
    }
    return false;
    }
  },
  action:{

    paintingincrease ({ commit }) {
    commit(' paintingincrease');
  },
  paintingdecrease ({ commit }) {
    commit(' paintingdecrease');
  },
   paintingNum ({ commit }) {
    commit(' paintingNum');
  },
}
}
