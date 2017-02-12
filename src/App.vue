<template>
  <div id="app">
    <router-view></router-view>
    <ul class="nav">
      <li><router-link active-class="active" to='/sessions'>拍卖</router-link></li>
      <li><router-link active-class="active" to='/recommend'>推荐</router-link></li>
      <li><router-link active-class="active" to='/liveshow'>直播</router-link></li>
      <li><router-link active-class="active" to='/my'>我</router-link></li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import vueResource from 'vue-resource';
import Vuex from 'vuex';
Vue.use(vueResource);
Vue.use(Vuex);

import store from './store';

import Sessions from './components/Sessions/Sessions.vue';
import Recommend from './components/Recommend/Recommend.vue';
import LiveShow from './components/LiveShow/LiveShow.vue';
import My from './components/My/My.vue';

export default {
  name: 'app',
  store,
  components: {
    Sessions,
    Recommend,
    LiveShow,
    My
  }
}
</script>

<style scoped>
@import '../static/reset.css';

html {
  font-size: 36px
}

[data-dpr="2"] div {
    font-size: 24px;
}

[data-dpr="3"] div {
    font-size: 36px;
}

* {
  font-family: "Microsoft YaHei","Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
}

.nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #000;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}

.nav li {
    display: inline-block;
    line-height: 40px;
    width: 23%;
    text-align: center;
}
.nav li:not(:first-child) {
    border-left: 1px solid #514F4F;
}

.nav li a {
   color: #ffffff;
   text-align: center;
}

.nav li a.active {
  color: #ff3c00;
}
</style>

<!-- https://app.yajian518.com/wap/sessions/list.htm -->
