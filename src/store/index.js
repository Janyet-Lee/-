import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import painting from './modules/painting.js';


export default new Vuex.Store({
  state:{

  },
  modules:{
    paint:painting
  }
})
