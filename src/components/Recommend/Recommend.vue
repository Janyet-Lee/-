<template>
<div class="main">
  <div class="rec-nav">
    <ul>
      <li class="nav-item"><router-link active-class="active" to="/recommend/hotrecommend">热门推荐</router-link></li>
      <li class="nav-item"><router-link active-class="active" to="/recommend/abouttosell">即将开拍</router-link></li>
      <li class="nav-item"><router-link active-class="active" to="/recommend/waittoshow">待展拍品</router-link></li>
    </ul>
  </div>
  <router-view></router-view>
</div>
</template>

<style scoped>
/*顶部导航*/
ul {
  padding: 0.2rem 0;
}

ul .nav-item {
  display: inline-block;
  width: 33.3%;
  line-height: 20px;
  text-align: center;
  font-size: 15px;
  padding-bottom: 3px;
  border-bottom: 1px solid #cdcdcd;
}

ul .nav-item:not(:first-child) {
  margin-left: -4px;
}

ul .nav-item a{
  font-weight: 700;
  text-align: center;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}

ul .nav-item a.active {
  color: #ff3c00;
}
</style>

<script>

// import aboutToSell from '../router-recommend/about-to-sell.vue';
// import recommendRouter from '../route-js/recommend.js'

export default{
  name: 'recommend',
  components:{
  },
  // recommendRouter
}
</script>


